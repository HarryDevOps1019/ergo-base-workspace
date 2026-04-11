import { Star } from "lucide-react";

export function TrustBar() {
  return (
    <section className="bg-surface py-8 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">5.0 from 50+ reviews</span>
        </div>
        <div className="h-4 w-px bg-border hidden md:block" />
        <p className="text-sm text-muted-foreground italic">
          "The best standing desk in Sri Lanka" — <span className="text-foreground">Sunday Times</span>
        </p>
        <div className="h-4 w-px bg-border hidden md:block" />
        <p className="text-sm text-gold font-medium tracking-wider">120KG CAPACITY</p>
        <div className="h-4 w-px bg-border hidden md:block" />
        <p className="text-sm text-gold font-medium tracking-wider">5-YEAR WARRANTY</p>
      </div>
    </section>
  );
}
