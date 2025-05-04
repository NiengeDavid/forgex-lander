import Hero from "@/components/hero";
import CTASection from "@/components/ctaSection";
import NewsSection from "@/components/newsSection";
import AdmissionSection from "@/components/admission";
import Contact from "@/components/contact";
import WaitlistSection from "@/components/waitlist";
import Vision from "@/components/vision";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <CTASection />
      <Vision />
      <NewsSection />
      <AdmissionSection />
      <Contact />
      <WaitlistSection />
    </div>
  );
}
