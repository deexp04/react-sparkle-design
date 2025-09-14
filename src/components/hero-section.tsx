import { Button } from "./ui/button";
import SunburstBackground from "./sunburst-background";
import robotMascot from "@/assets/robot-mascot.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <SunburstBackground />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Never miss a post again
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Strydo is the AI co-pilot that helps creators generate consistent, 
            high-quality content for every channel.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            Start Your Momentum Now
          </Button>
        </div>
        
        <div className="relative mt-16">
          <img 
            src={robotMascot} 
            alt="Strydo AI Robot Mascot" 
            className="w-64 h-64 mx-auto object-contain animate-pulse-glow"
          />
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;