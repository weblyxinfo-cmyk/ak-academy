export interface ProgramWeek {
  week: number;
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug?: string;
  title: string;
  level: "beginner" | "advanced" | "masterclass";
  duration: string;
  hours: number;
  price: string;
  priceNum: number;
  image: string;
  highlights: string[];
  description: string;
  longDescription?: string;
  forWho?: string[];
  includes?: string[];
  program?: ProgramWeek[];
  meta?: {
    title: string;
    description: string;
  };
}

export interface Instructor {
  name: string;
  role: string;
  experience: string;
  focus: string;
  bio: string;
  longBio?: string;
  image: string;
  instagram?: string;
}

export interface Testimonial {
  id?: string;
  name: string;
  course: string;
  rating: number;
  text: string;
  city?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  course?: string;
  message: string;
  consent: boolean;
}

export interface SignupFormData {
  name: string;
  email: string;
  phone: string;
  course?: string;
  city?: string;
  consent: boolean;
}

export interface Location {
  id: string;
  city: string;
  address: string;
  zip: string;
  transport?: string;
  isMain?: boolean;
}

export interface CityData {
  slug: string;
  name: string;
  nameLocativ: string;
  locations: string[];
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  whyText: string;
}

export interface ComparisonRow {
  feature: string;
  us: string | boolean;
  others: string | boolean;
}
