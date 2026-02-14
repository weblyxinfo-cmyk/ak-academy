import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Courses } from "@/components/sections/Courses";
import { Instructors } from "@/components/sections/Instructors";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Instructors />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
