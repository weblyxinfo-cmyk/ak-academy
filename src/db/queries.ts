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
import { eq, asc, isNull, and } from "drizzle-orm";

// ── Courses ──────────────────────────────────────────────

export async function getAllCourses() {
  return db.select().from(courses).orderBy(asc(courses.sortOrder));
}

export async function getCourseBySlug(slug: string) {
  const [course] = await db
    .select()
    .from(courses)
    .where(eq(courses.slug, slug))
    .limit(1);
  return course || null;
}

export async function getCourseWithProgram(slug: string) {
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
  return db.select().from(instructors).orderBy(asc(instructors.sortOrder));
}

// ── Locations ────────────────────────────────────────────

export async function getAllLocations() {
  return db.select().from(locations).orderBy(asc(locations.sortOrder));
}

export async function getLocationsByIds(ids: string[]) {
  const all = await getAllLocations();
  return all.filter((l) => ids.includes(l.id));
}

// ── Cities ───────────────────────────────────────────────

export async function getAllCities() {
  return db.select().from(cities).orderBy(asc(cities.sortOrder));
}

export async function getCityBySlug(slug: string) {
  const [city] = await db
    .select()
    .from(cities)
    .where(eq(cities.slug, slug))
    .limit(1);
  return city || null;
}

// ── Testimonials ─────────────────────────────────────────

export async function getAllTestimonials() {
  return db
    .select()
    .from(testimonials)
    .where(eq(testimonials.isVisible, true))
    .orderBy(asc(testimonials.sortOrder));
}

// ── FAQ ──────────────────────────────────────────────────

export async function getGeneralFaq() {
  return db
    .select()
    .from(faqItems)
    .where(isNull(faqItems.courseId))
    .orderBy(asc(faqItems.sortOrder));
}

export async function getCourseFaq(courseId: number) {
  return db
    .select()
    .from(faqItems)
    .where(eq(faqItems.courseId, courseId))
    .orderBy(asc(faqItems.sortOrder));
}

// ── Comparison ───────────────────────────────────────────

export async function getComparisonRows() {
  return db
    .select()
    .from(comparisonRows)
    .orderBy(asc(comparisonRows.sortOrder));
}

// ── FAQ (aggregated) ────────────────────────────────────

export async function getAllFaqItems() {
  return db.select().from(faqItems).orderBy(asc(faqItems.sortOrder));
}

export async function getCourseFaqGrouped() {
  const allItems = await db.select().from(faqItems).orderBy(asc(faqItems.sortOrder));
  const general = allItems.filter(f => !f.courseId);
  const byCourse: Record<number, typeof allItems> = {};
  for (const item of allItems) {
    if (item.courseId) {
      if (!byCourse[item.courseId]) byCourse[item.courseId] = [];
      byCourse[item.courseId].push(item);
    }
  }
  return { general, byCourse };
}
