export interface ProgramWeek {
  week: number;
  title: string;
  topics: string[];
}

export interface Course {
  id: string | number;
  slug?: string;
  title: string;
  level: string;
  duration: string;
  hours: number;
  price: string;
  priceNum: number;
  image: string;
  highlights: string[];
  description: string;
  longDescription?: string | null;
  forWho?: string[] | null;
  includes?: string[] | null;
  program?: ProgramWeek[];
  metaTitle?: string | null;
  metaDescription?: string | null;
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
  longBio?: string | null;
  image: string;
  instagram?: string | null;
}

export interface Testimonial {
  id?: string | number;
  name: string;
  course: string;
  rating: number;
  text: string;
  city?: string | null;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string | null;
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
  transport?: string | null;
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
