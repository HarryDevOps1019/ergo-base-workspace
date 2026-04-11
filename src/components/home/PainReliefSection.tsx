import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const conditions = [
  "Lower Back Pain",
  "Neck Strain",
  "Poor Posture",
  "Hip Tightness",
  "Leg Fatigue",
  "Wrist Strain",
];

export function PainReliefSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-xs tracking-[0.3em] text-gold font-semibold mb-4">HEALTH & WELLNESS</h2>
        <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Engineered to Relieve Pain</p>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          The Pro Station is designed to reduce the physical toll of long work sessions. Stand, sit, and move — your way.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {conditions.map((condition) => (
            <span
              key={condition}
              className="px-5 py-2.5 bg-background border border-border rounded-full text-sm text-foreground hover:border-gold/30 transition-colors"
            >
              {condition}
            </span>
          ))}
        </div>

        <Button variant="goldOutline" size="lg" asChild>
          <Link to="/the-science">LEARN THE SCIENCE →</Link>
        </Button>
      </div>
    </section>
  );
}
