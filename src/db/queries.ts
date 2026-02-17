import { db } from "./index";
import {
  courses,
  programWeeks,
  instructors,
  locations,
  cities,
  testimonials,
  faqItems,
  comparisonRows,
} from "./schema";
import { eq, asc, isNull } from "drizzle-orm";

// Static data fallbacks (used when DB is not configured)
import { courses as staticCourses, getCourseBySlug as staticGetCourseBySlug } from "@/lib/data/courses";
import { instructors as staticInstructors } from "@/lib/data/instructors";
import { locations as staticLocations } from "@/lib/data/locations";
import { cityData as staticCities, getCityBySlug as staticGetCityBySlug } from "@/lib/data/cities";
import { testimonials as staticTestimonials } from "@/lib/data/testimonials";
import { faqItems as staticFaqItems, courseFaqItems as staticCourseFaqItems } from "@/lib/data/faq";
import { comparisonRows as staticComparisonRows } from "@/lib/data/comparison";

function hasDb() {
  return !!process.env.TURSO_DATABASE_URL;
}

// ── Courses ──────────────────────────────────────────────

export async function getAllCourses() {
  if (!hasDb()) return staticCourses as any[];
  return db.select().from(courses).orderBy(asc(courses.sortOrder));
}

export async function getCourseBySlug(slug: string) {
  if (!hasDb()) return (staticGetCourseBySlug(slug) as any) || null;
  const [course] = await db
    .select()
    .from(courses)
    .where(eq(courses.slug, slug))
    .limit(1);
  return course || null;
}

export async function getCourseWithProgram(slug: string) {
  if (!hasDb()) {
    const course = staticGetCourseBySlug(slug);
    if (!course) return null;
    return course as any;
  }
  const course = await getCourseBySlug(slug);
  if (!course) return null;

  const weeks = await db
    .select()
    .from(programWeeks)
    .where(eq(programWeeks.courseId, course.id))
    .orderBy(asc(programWeeks.week));

  return {
    ...course,
    program: weeks.map((w) => ({
      week: w.week,
      title: w.title,
      topics: w.topics,
    })),
  };
}

// ── Instructors ──────────────────────────────────────────

export async function getAllInstructors() {
  if (!hasDb()) return staticInstructors as any[];
  return db.select().from(instructors).orderBy(asc(instructors.sortOrder));
}

// ── Locations ────────────────────────────────────────────

export async function getAllLocations() {
  if (!hasDb()) return staticLocations as any[];
  return db.select().from(locations).orderBy(asc(locations.sortOrder));
}

export async function getLocationsByIds(ids: string[]) {
  const all = await getAllLocations();
  return all.filter((l: any) => ids.includes(l.id));
}

// ── Cities ───────────────────────────────────────────────

export async function getAllCities() {
  if (!hasDb()) {
    return staticCities.map((c) => ({
      ...c,
      locationIds: c.locations,
      sortOrder: 0,
    })) as any[];
  }
  return db.select().from(cities).orderBy(asc(cities.sortOrder));
}

export async function getCityBySlug(slug: string) {
  if (!hasDb()) {
    const city = staticGetCityBySlug(slug);
    if (!city) return null;
    return { ...city, locationIds: city.locations, sortOrder: 0 } as any;
  }
  const [city] = await db
    .select()
    .from(cities)
    .where(eq(cities.slug, slug))
    .limit(1);
  return city || null;
}

// ── Testimonials ─────────────────────────────────────────

export async function getAllTestimonials() {
  if (!hasDb()) return staticTestimonials as any[];
  return db
    .select()
    .from(testimonials)
    .where(eq(testimonials.isVisible, true))
    .orderBy(asc(testimonials.sortOrder));
}

// ── FAQ ──────────────────────────────────────────────────

export async function getGeneralFaq() {
  if (!hasDb()) return staticFaqItems as any[];
  return db
    .select()
    .from(faqItems)
    .where(isNull(faqItems.courseId))
    .orderBy(asc(faqItems.sortOrder));
}

export async function getCourseFaq(courseId: number) {
  if (!hasDb()) return [] as any[];
  return db
    .select()
    .from(faqItems)
    .where(eq(faqItems.courseId, courseId))
    .orderBy(asc(faqItems.sortOrder));
}

// ── Comparison ───────────────────────────────────────────

export async function getComparisonRows() {
  if (!hasDb()) return staticComparisonRows as any[];
  return db
    .select()
    .from(comparisonRows)
    .orderBy(asc(comparisonRows.sortOrder));
}

// ── FAQ (aggregated) ────────────────────────────────────

export async function getAllFaqItems() {
  if (!hasDb()) {
    const all = [...staticFaqItems];
    for (const items of Object.values(staticCourseFaqItems)) {
      all.push(...items);
    }
    return all as any[];
  }
  return db.select().from(faqItems).orderBy(asc(faqItems.sortOrder));
}

export async function getCourseFaqGrouped() {
  if (!hasDb()) {
    const byCourse: Record<string, any[]> = {};
    for (const [key, items] of Object.entries(staticCourseFaqItems)) {
      byCourse[key as any] = items;
    }
    return { general: staticFaqItems as any[], byCourse };
  }
  const allItems = await db.select().from(faqItems).orderBy(asc(faqItems.sortOrder));
  const general = allItems.filter(f => !f.courseId);
  const byCourse: Record<string, any[]> = {};
  for (const item of allItems) {
    if (item.courseId) {
      const key = String(item.courseId);
      if (!byCourse[key]) byCourse[key] = [];
      byCourse[key].push(item);
    }
  }
  return { general, byCourse };
}
