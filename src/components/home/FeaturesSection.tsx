import { Wrench, TreePine, Ruler, Shield } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Dual Motor System",
    description: "Ultra-quiet, ultra-smooth height adjustment with precision engineering.",
  },
  {
    icon: TreePine,
    title: "Premium Wood Tops",
    description: "MDF, Mahogany, or Teak — any size, same price. Real wood, real quality.",
  },
  {
    icon: Ruler,
    title: "Full Customization",
    description: "Any size, any color, no extra charge. Your desk, your specifications.",
  },
  {
    icon: Shield,
    title: "5-Year Full Warranty",
    description: "Sri Lanka's strongest ergonomic desk guarantee. Complete peace of mind.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.3em] text-gold font-semibold mb-4">WHAT SETS US APART</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">Engineered for Excellence</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group bg-surface border border-border rounded-xl p-8 hover:border-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
