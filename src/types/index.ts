export interface Course {
  id: string;
  title: string;
  level: "beginner" | "advanced" | "masterclass";
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  description: string;
}

export interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
}

export interface Testimonial {
  name: string;
  course: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  course?: string;
  message: string;
  consent: boolean;
}
