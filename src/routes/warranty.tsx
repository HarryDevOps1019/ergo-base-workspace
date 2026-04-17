import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Clock, Wrench, CheckCircle, XCircle, ArrowRight } from "lucide-react";

import heroDeskImage from "@/assets/hero-desk.jpg";

export const Route = createFileRoute("/warranty")({
  head: () => ({
    meta: [
      { title: "Warranty — Ergo Base Sri Lanka" },
      { name: "description", content: "Ergo Base warranty coverage: 5 years frame, 3 years motor, 1 year finish. Full details and claim process." },
      { property: "og:title", content: "Warranty Policy — Ergo Base" },
      { property: "og:description", content: "Comprehensive warranty on all Ergo Base standing desks." },
    ],
  }),
  component: WarrantyPage,
});

const coverageTiers = [
  {
    icon: <Shield size={28} />,
    title: "Frame & Structure",
    years: "5 Years",
    description: "Steel frame, legs, crossbar, and all structural components are covered against manufacturing defects and structural failure under normal use.",
  },
  {
    icon: <Clock size={28} />,
    title: "Motor & Electronics",
    years: "3 Years",
    description: "Dual motors, control unit, digital display panel, and all internal wiring are covered against electronic failure and motor defects.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Tabletop Finish",
    years: "1 Year",
    description: "Surface coating, laminate adhesion, and edge banding are covered against peeling, bubbling, or delamination under normal use conditions.",
  },
];

const covered = [
  "Manufacturing defects in materials and workmanship",
  "Motor failure during normal operation",
  "Electronic control panel malfunction",
  "Structural welds and joint failures",
  "Surface coating defects (within 1 year)",
  "Anti-collision sensor malfunction",
  "Height memory preset failures",
  "Cable management tray attachment issues",
];

const notCovered = [
  "Damage from misuse, abuse, or accidents",
  "Normal wear and tear (scratches, minor dents)",
  "Damage from exceeding 120kg weight capacity",
  "Water damage from liquid spills",
  "Unauthorized modifications or repairs",
  "Damage from power surges (use a surge protector)",
  "Cosmetic imperfections that don't affect function",
  "Damage during self-relocation (contact us for moving help)",
];

function WarrantyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src={heroDeskImage}
          alt="Warranty"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Shield size={40} className="mx-auto text-gold" />
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground tracking-tight">Warranty Policy</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Every Ergo Base product is built to last. We stand behind our craftsmanship with comprehensive warranty coverage.</p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Coverage Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {coverageTiers.map((tier) => (
            <div key={tier.title} className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-4">{tier.icon}</div>
              <h3 className="text-lg font-bold text-foreground">{tier.title}</h3>
              <div className="mt-2 text-3xl font-bold text-gold">{tier.years}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
            </div>
          ))}
        </div>

        {/* What's Covered / Not Covered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle size={20} className="text-green-500" /> What's Covered
            </h2>
            <ul className="space-y-3">
              {covered.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <XCircle size={20} className="text-destructive" /> Not Covered
            </h2>
            <ul className="space-y-3">
              {notCovered.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle size={14} className="text-destructive mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Claim Process */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">How to Make a Claim</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Contact Us", desc: "Reach out via WhatsApp or email with your order number" },
              { step: "2", title: "Describe Issue", desc: "Provide photos/videos and a description of the problem" },
              { step: "3", title: "Assessment", desc: "Our team reviews within 24 hours and provides a resolution" },
              { step: "4", title: "Resolution", desc: "We repair, replace, or provide parts — free of charge" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold text-gold-foreground font-bold text-sm mb-3">{s.step}</div>
                <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground">Need to make a warranty claim?</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/94777212199?text=Hi%2C%20I%20need%20to%20make%20a%20warranty%20claim.%20My%20order%20number%20is%20" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-gold text-gold-foreground px-8 py-3 text-sm font-semibold tracking-wider hover:brightness-110 transition-all">
              Start Warranty Claim
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 justify-center rounded-full border border-border text-foreground px-8 py-3 text-sm font-semibold tracking-wider hover:bg-accent transition-all">
              Contact Support <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
