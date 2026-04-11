import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Wijesinghe",
    title: "Physiotherapist, Colombo",
    quote: "The Pro Station is the only desk I recommend to my patients. The height range and smooth adjustment are exactly what proper ergonomics demands.",
  },
  {
    name: "Kavindu Perera",
    title: "Software Engineer",
    quote: "As someone who codes 10+ hours a day, this desk transformed my work life. No more back pain, and the build quality is incredible.",
  },
  {
    name: "Rashmi Fernando",
    title: "Content Creator & YouTuber",
    quote: "The mahogany top looks stunning on camera. The 120kg capacity means my entire setup sits rock-solid. Best investment I've made.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.3em] text-gold font-semibold mb-4">ENDORSED BY PROFESSIONALS</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">Trusted by Experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-surface border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
