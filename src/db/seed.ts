import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

// Data imports
import { courses as coursesData } from "../lib/data/courses";
import { instructors as instructorsData } from "../lib/data/instructors";
import { locations as locationsData } from "../lib/data/locations";
import { cityData } from "../lib/data/cities";
import { testimonials as testimonialsData } from "../lib/data/testimonials";
import { faqItems as faqData, courseFaqItems } from "../lib/data/faq";
import { comparisonRows as comparisonData } from "../lib/data/comparison";

async function seed() {
  const client = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
  const db = drizzle(client, { schema });

  console.log("Seeding database...");

  // ── Courses ──
  const courseIdMap: Record<string, number> = {};
  for (let i = 0; i < coursesData.length; i++) {
    const c = coursesData[i];
    const [inserted] = await db
      .insert(schema.courses)
      .values({
        slug: c.slug || String(c.id),
        title: c.title,
        level: c.level,
        duration: c.duration,
        hours: c.hours,
        price: c.price,
        priceNum: c.priceNum,
        image: c.image,
        description: c.description,
        longDescription: c.longDescription || null,
        highlights: c.highlights,
        forWho: c.forWho || null,
        includes: c.includes || null,
        metaTitle: c.meta?.title || null,
        metaDescription: c.meta?.description || null,
        sortOrder: i,
      })
      .returning({ id: schema.courses.id });
    courseIdMap[String(c.id)] = inserted.id;
    console.log(`  Course: ${c.title} (id=${inserted.id})`);

    // Program weeks
    if (c.program) {
      for (const pw of c.program) {
        await db.insert(schema.programWeeks).values({
          courseId: inserted.id,
          week: pw.week,
          title: pw.title,
          topics: pw.topics,
        });
      }
      console.log(`    ${c.program.length} program weeks`);
    }
  }

  // ── Instructors ──
  for (let i = 0; i < instructorsData.length; i++) {
    const inst = instructorsData[i];
    await db.insert(schema.instructors).values({
      name: inst.name,
      role: inst.role,
      experience: inst.experience,
      focus: inst.focus,
      bio: inst.bio,
      longBio: inst.longBio || null,
      image: inst.image,
      instagram: inst.instagram || null,
      sortOrder: i,
    });
    console.log(`  Instructor: ${inst.name}`);
  }

  // ── Locations ──
  for (let i = 0; i < locationsData.length; i++) {
    const loc = locationsData[i];
    await db.insert(schema.locations).values({
      id: loc.id,
      city: loc.city,
      address: loc.address,
      zip: loc.zip,
      transport: loc.transport || null,
      isMain: loc.isMain || false,
      sortOrder: i,
    });
    console.log(`  Location: ${loc.city} – ${loc.address}`);
  }

  // ── Cities ──
  for (let i = 0; i < cityData.length; i++) {
    const city = cityData[i];
    await db.insert(schema.cities).values({
      slug: city.slug,
      name: city.name,
      nameLocativ: city.nameLocativ,
      locationIds: city.locations,
      seoTitle: city.seoTitle,
      seoDescription: city.seoDescription,
      heroTitle: city.heroTitle,
      heroSubtitle: city.heroSubtitle,
      whyText: city.whyText,
      sortOrder: i,
    });
    console.log(`  City: ${city.name}`);
  }

  // ── Testimonials ──
  for (let i = 0; i < testimonialsData.length; i++) {
    const t = testimonialsData[i];
    await db.insert(schema.testimonials).values({
      name: t.name,
      course: t.course,
      rating: t.rating,
      text: t.text,
      city: t.city || null,
      isVisible: true,
      sortOrder: i,
    });
    console.log(`  Testimonial: ${t.name}`);
  }

  // ── FAQ Items (general) ──
  for (let i = 0; i < faqData.length; i++) {
    const f = faqData[i];
    await db.insert(schema.faqItems).values({
      question: f.question,
      answer: f.answer,
      category: f.category || null,
      courseId: null,
      sortOrder: i,
    });
  }
  console.log(`  ${faqData.length} general FAQ items`);

  // ── FAQ Items (course-specific) ──
  for (const [courseKey, items] of Object.entries(courseFaqItems)) {
    const courseId = courseIdMap[courseKey];
    if (!courseId) {
      console.warn(`  Warning: no course found for FAQ key "${courseKey}"`);
      continue;
    }
    for (let i = 0; i < items.length; i++) {
      const f = items[i];
      await db.insert(schema.faqItems).values({
        question: f.question,
        answer: f.answer,
        category: f.category || null,
        courseId,
        sortOrder: i,
      });
    }
    console.log(`  ${items.length} FAQ items for course "${courseKey}"`);
  }

  // ── Comparison Rows ──
  for (let i = 0; i < comparisonData.length; i++) {
    const r = comparisonData[i];
    await db.insert(schema.comparisonRows).values({
      feature: r.feature,
      us: String(r.us),
      others: String(r.others),
      sortOrder: i,
    });
  }
  console.log(`  ${comparisonData.length} comparison rows`);

  // ── Admin User (seed a default admin) ──
  await db.insert(schema.adminUsers).values({
    email: "ak.barbers.cz@gmail.com",
    name: "Admin",
    role: "admin",
  });
  console.log("  Default admin user created");

  console.log("\nSeed completed successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
