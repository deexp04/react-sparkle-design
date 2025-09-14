import { Button } from "./button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-navy-deep/90 backdrop-blur-sm border-b border-orange-vibrant/20">
      <div className="flex items-center gap-2">
        {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">S</span>
        </div> */}
        <span className="text-foreground font-bold text-xl">Strydo</span>
      </div>
      
      {/* <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Product</a>
        <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
        <a href="#" className="text-foreground/80 hover:text-primary transition-colors">Resources</a>
      </div> */}
      
      <Button variant="hero" size="sm">
        Start for free
      </Button>
    </nav>
  );
};

export default Navigation;