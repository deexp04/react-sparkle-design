import { Button } from "./ui/button";
import SunburstBackground from "./sunburst-background";
import robotMascot from "@/assets/robot-mascot.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <SunburstBackground />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 mt-16">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Unleash Your Content Momentum
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Strydo is the AI co-pilot that helps creators generate consistent, 
            high-quality content for every channel.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            Start Your Momentum Now
          </Button>
        </div>
        
        {/* Floating Robot with unique animations */}
        <div className="relative mt-20 flex justify-center">
          <div className="relative">
            {/* Floating animation container */}
            <div className="animate-bounce">
              <img 
                src={robotMascot} 
                alt="Strydo AI Robot Mascot" 
                className="w-72 h-72 object-contain animate-pulse-glow hover:scale-110 transition-transform duration-500 ease-out filter drop-shadow-2xl"
                style={{
                  animation: 'bounce 3s ease-in-out infinite, pulse-glow 2s ease-in-out infinite'
                }}
              />
            </div>
            
            {/* Orbiting elements for extra motion */}
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full animate-spin-slow opacity-80"></div>
            <div className="absolute -bottom-2 -left-6 w-4 h-4 bg-amber-glow rounded-full animate-ping delay-1000 opacity-60"></div>
            <div className="absolute top-1/2 -right-8 w-3 h-3 bg-secondary rounded-full animate-bounce delay-500 opacity-70"></div>
            
            {/* Glowing base effect */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;