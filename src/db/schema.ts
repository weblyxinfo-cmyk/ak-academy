import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// ── Courses ──────────────────────────────────────────────
export const courses = sqliteTable("courses", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  level: text("level").notNull(), // beginner | advanced | masterclass
  duration: text("duration").notNull(),
  hours: integer("hours").notNull(),
  price: text("price").notNull(),
  priceNum: real("price_num").notNull(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  highlights: text("highlights", { mode: "json" }).$type<string[]>().notNull(),
  forWho: text("for_who", { mode: "json" }).$type<string[]>(),
  includes: text("includes", { mode: "json" }).$type<string[]>(),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Program Weeks ────────────────────────────────────────
export const programWeeks = sqliteTable("program_weeks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  courseId: integer("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  week: integer("week").notNull(),
  title: text("title").notNull(),
  topics: text("topics", { mode: "json" }).$type<string[]>().notNull(),
});

// ── Instructors ──────────────────────────────────────────
export const instructors = sqliteTable("instructors", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role").notNull(),
  experience: text("experience").notNull(),
  focus: text("focus").notNull(),
  bio: text("bio").notNull(),
  longBio: text("long_bio"),
  image: text("image").notNull(),
  instagram: text("instagram"),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Locations ────────────────────────────────────────────
export const locations = sqliteTable("locations", {
  id: text("id").primaryKey(),
  city: text("city").notNull(),
  address: text("address").notNull(),
  zip: text("zip").notNull(),
  transport: text("transport"),
  isMain: integer("is_main", { mode: "boolean" }).notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Cities ───────────────────────────────────────────────
export const cities = sqliteTable("cities", {
  slug: text("slug").primaryKey(),
  name: text("name").notNull(),
  nameLocativ: text("name_locativ").notNull(),
  locationIds: text("location_ids", { mode: "json" }).$type<string[]>().notNull(),
  seoTitle: text("seo_title").notNull(),
  seoDescription: text("seo_description").notNull(),
  heroTitle: text("hero_title").notNull(),
  heroSubtitle: text("hero_subtitle").notNull(),
  whyText: text("why_text").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Testimonials ─────────────────────────────────────────
export const testimonials = sqliteTable("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  course: text("course").notNull(),
  rating: integer("rating").notNull(),
  text: text("text").notNull(),
  city: text("city"),
  isVisible: integer("is_visible", { mode: "boolean" }).notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── FAQ Items ────────────────────────────────────────────
export const faqItems = sqliteTable("faq_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: text("category"),
  courseId: integer("course_id").references(() => courses.id, {
    onDelete: "set null",
  }),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Comparison Rows ──────────────────────────────────────
export const comparisonRows = sqliteTable("comparison_rows", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  feature: text("feature").notNull(),
  us: text("us").notNull(),
  others: text("others").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
});

// ── Contacts ─────────────────────────────────────────────
export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  course: text("course"),
  message: text("message").notNull(),
  consent: integer("consent", { mode: "boolean" }).notNull(),
  isRead: integer("is_read", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

// ── Signups ──────────────────────────────────────────────
export const signups = sqliteTable("signups", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  course: text("course"),
  city: text("city"),
  consent: integer("consent", { mode: "boolean" }).notNull(),
  isRead: integer("is_read", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

// ── Admin Users ──────────────────────────────────────────
export const adminUsers = sqliteTable("admin_users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  role: text("role").notNull().default("editor"), // admin | editor
});
