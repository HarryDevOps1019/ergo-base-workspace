import { Check, X } from "lucide-react";

const specs = [
  { feature: "Load Capacity", proStation: "120 kg", generic: "50-70 kg", win: true },
  { feature: "Height Range", proStation: "60–127 cm", generic: "70–120 cm", win: true },
  { feature: "Motor System", proStation: "Dual Motor", generic: "Single Motor", win: true },
  { feature: "Warranty", proStation: "5 Years", generic: "1 Year", win: true },
  { feature: "Custom Sizes", proStation: true, generic: false, win: true },
  { feature: "Premium Wood", proStation: true, generic: false, win: true },
];

export function SpecsChart() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xs tracking-[0.3em] text-gold font-semibold mb-4">SPECIFICATIONS</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">Pro Station vs. The Rest</p>
        </div>

        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-background/50 border-b border-border">
            <div className="p-4 text-sm font-semibold text-muted-foreground">Feature</div>
            <div className="p-4 text-sm font-semibold text-gold text-center">Pro Station</div>
            <div className="p-4 text-sm font-semibold text-muted-foreground text-center">Generic Desks</div>
          </div>
          {specs.map((spec) => (
            <div key={spec.feature} className="grid grid-cols-3 border-b border-border last:border-0">
              <div className="p-4 text-sm text-foreground">{spec.feature}</div>
              <div className="p-4 text-sm text-center text-gold font-medium">
                {typeof spec.proStation === "boolean" ? (
                  spec.proStation ? <Check className="w-5 h-5 text-gold mx-auto" /> : <X className="w-5 h-5 text-destructive mx-auto" />
                ) : (
                  spec.proStation
                )}
              </div>
              <div className="p-4 text-sm text-center text-muted-foreground">
                {typeof spec.generic === "boolean" ? (
                  spec.generic ? <Check className="w-5 h-5 text-gold mx-auto" /> : <X className="w-5 h-5 text-destructive mx-auto" />
                ) : (
                  spec.generic
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">Based on independently verified specifications</p>
      </div>
    </section>
  );
}
