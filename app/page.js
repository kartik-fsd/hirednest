import HeroSection3 from "@/components/section/hero3";
import ClientSection from "@/components/clientCloud/page";
import ContactSection from "@/components/connect";
import CleanServiceCards from "@/components/section/services";
import Stats from "@/components/stats/page";
import TestimonialSlider from "@/components/testimonials";
import HowItWorks from "@/components/timeline";
import WhyChooseUs from "@/components/whyUS/page";


export default function Home() {
  return (
    <>

      <HeroSection3 />
      <ClientSection />
      <CleanServiceCards />
      <Stats />
      <WhyChooseUs />
      <HowItWorks />
      <TestimonialSlider />
      <ContactSection />
    </>
  )
}
