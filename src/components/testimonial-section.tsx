import { Card } from "./ui/card";

const testimonials = [
  {
    quote: "Strydo has transformed my content strategy. I'm posting consistently, my postily engagement has skyrocketed.",
    author: "Sarah, Content Creator",
  },
  {
    quote: "I used to spend hours brainstorming. Now I get endless Strydo game-changer for my productivity.",
    author: "Mike, YouTuber",
  },
  {
    quote: "The quality of the content suggestions is amazing and perfectly captures my voice and sine-texture my brand. Highly recommend.",
    author: "Jessica, Blogger",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Stop chasing algorithms, start building your audience
          </h2>
          <p className="text-lg text-muted-foreground">
            See what other creators are saying about Strydo.
          </p>
        </div>
        
        {/* <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">
            Stop chasing algorithms, start building your audience
          </h3>
          <p className="text-center text-muted-foreground">
            See what other creators are saying about Strydo.
          </p>
        </div> */}
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card"
            >
              <blockquote className="text-card-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <footer className="text-primary font-semibold">
                — {testimonial.author}
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;