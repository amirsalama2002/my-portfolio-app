import Hero from "./Home/Hero";
import { ServicesSection, WhyChooseUsSection, TestimonialsSection } from "./Home/ServicesSection"; // لو عايز كل السيكشنات

export default function HomePage() {
  return (
    <div className="font-sans">
      <Hero />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
}
