import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
