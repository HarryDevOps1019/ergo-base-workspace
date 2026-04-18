import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import heroDeskImage from "@/assets/hero-desk.jpg";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src={heroDeskImage}
          alt="Our Story"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Story</h1>
          <p className="text-lg text-muted-foreground">
            Transforming workspaces through ergonomic excellence and innovation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Foundation */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Ergo Base is a Sri Lankan ergonomic workspace solutions provider founded by an experienced IT professional with over 12 years in the industry. What began as a personal mission to create better working environments has evolved into a commitment to transforming workspaces across Sri Lanka.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Ratmalana, we specialize in designing and delivering high-quality ergonomic furniture, including standing desks, office chairs, and customized workstation setups that prioritize comfort, productivity, and modern design.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that a well-designed workspace is fundamental to productivity and wellbeing. Our mission is to provide ergonomic solutions that empower professionals, remote workers, and businesses to work smarter, more comfortably, and more efficiently.
            </p>
          </div>

          {/* What We Offer */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Standing Desks</h3>
                  <p className="text-muted-foreground">Premium electric standing desks like our Pro Station, crafted with solid materials and dual-motor technology for smooth adjustments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ergonomic Chairs</h3>
                  <p className="text-muted-foreground">Carefully selected office chairs including the Sihoo series, designed to provide optimal support and comfort during long work hours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Custom Solutions</h3>
                  <p className="text-muted-foreground">Tailored workstation setups that match your unique needs, workspace, and preferences for the perfect ergonomic environment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Accessories & Add-ons</h3>
                  <p className="text-muted-foreground">Quality peripherals and accessories to complete your workspace setup and enhance overall ergonomic efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Why Choose Ergo Base?</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold font-bold">✓</span>
                <span><strong className="text-foreground">Industry Experience:</strong> Founded by an IT professional who understands the demands of modern work</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">✓</span>
                <span><strong className="text-foreground">Premium Quality:</strong> We collaborate with global ergonomic brands and use premium materials like solid teak</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">✓</span>
                <span><strong className="text-foreground">Tailored Solutions:</strong> Whether you're an IT professional, remote worker, or corporation, we have solutions for your needs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">✓</span>
                <span><strong className="text-foreground">Local Expertise:</strong> Sri Lanka-based business with deep understanding of local market needs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">✓</span>
                <span><strong className="text-foreground">Commitment to Excellence:</strong> Every product and solution is designed with your comfort and productivity in mind</span>
              </li>
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Who We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">👨‍💻 IT Professionals</h3>
                <p className="text-muted-foreground text-sm">High-performance workstations designed for long hours of focused work</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">🏠 Remote Workers</h3>
                <p className="text-muted-foreground text-sm">Comfortable home office setups that boost productivity and reduce fatigue</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">🏢 Corporations</h3>
                <p className="text-muted-foreground text-sm">Comprehensive workplace solutions for modern offices and startups</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">🎯 Health-Conscious Teams</h3>
                <p className="text-muted-foreground text-sm">Ergonomic solutions that prioritize employee wellness and productivity</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your workspace?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="inline-block px-8 py-3 bg-gold text-background font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                Explore Our Products
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
