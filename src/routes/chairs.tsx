import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Truck, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

import chairsHero from "@/assets/chairs-hero.jpg";
import chairGaming1 from "@/assets/chair-gaming-1.jpg";
import chairGaming2 from "@/assets/chair-gaming-2.jpg";
import chairGaming3 from "@/assets/chair-gaming-3.jpg";
import chairOffice1 from "@/assets/chair-office-1.jpg";
import chairOffice2 from "@/assets/chair-office-2.jpg";
import chairOffice3 from "@/assets/chair-office-3.jpg";

const WHATSAPP_NUMBER = "94777212199";

type Category = "all" | "gaming" | "office";

const chairs = [
  {
    id: "titan-pro",
    name: "Titan Pro Gaming Chair",
    category: "gaming" as const,
    price: 89500,
    originalPrice: 105000,
    image: chairGaming1,
    rating: 4.9,
    reviews: 124,
    badge: "Best Seller",
    color: "Black & Red",
    features: ["4D Armrests", "180° Recline", "Memory Foam Lumbar", "Steel Frame"],
  },
  {
    id: "phantom-x",
    name: "Phantom X Gaming Chair",
    category: "gaming" as const,
    price: 78500,
    originalPrice: 92000,
    image: chairGaming2,
    rating: 4.8,
    reviews: 89,
    badge: "New",
    color: "Black & Blue",
    features: ["3D Armrests", "155° Recline", "Lumbar Pillow", "Nylon Base"],
  },
  {
    id: "arctic-elite",
    name: "Arctic Elite Gaming Chair",
    category: "gaming" as const,
    price: 95000,
    image: chairGaming3,
    rating: 4.7,
    reviews: 56,
    badge: "Premium",
    color: "White & Black",
    features: ["4D Armrests", "180° Recline", "Cold-Cure Foam", "Aluminium Base"],
  },
  {
    id: "ergo-mesh-pro",
    name: "ErgoMesh Pro Office Chair",
    category: "office" as const,
    price: 72500,
    originalPrice: 85000,
    image: chairOffice1,
    rating: 4.9,
    reviews: 203,
    badge: "Best Seller",
    color: "Black & Silver",
    features: ["Mesh Back", "Adjustable Lumbar", "Synchro-Tilt", "Aluminium Base"],
  },
  {
    id: "executive-one",
    name: "Executive One Chair",
    category: "office" as const,
    price: 85000,
    image: chairOffice2,
    rating: 4.8,
    reviews: 147,
    badge: "Popular",
    color: "All Black",
    features: ["Headrest", "Adjustable Arms", "Seat Slide", "Class 4 Gas Lift"],
  },
  {
    id: "task-flex",
    name: "TaskFlex Workstation Chair",
    category: "office" as const,
    price: 58500,
    originalPrice: 68000,
    image: chairOffice3,
    rating: 4.6,
    reviews: 92,
    color: "Black",
    features: ["Mid-Back Mesh", "Flip-Up Arms", "Tilt Lock", "Breathable Fabric"],
  },
];

export const Route = createFileRoute("/chairs")({
  head: () => ({
    meta: [
      { title: "Ergonomic Chairs — Gaming & Office | Ergo Base" },
      { name: "description", content: "Premium ergonomic gaming chairs and office workstation chairs in Sri Lanka. 4D armrests, lumbar support, breathable mesh — built for long hours." },
      { property: "og:title", content: "Ergonomic Chairs — Gaming & Office | Ergo Base" },
      { property: "og:description", content: "Premium ergonomic gaming chairs and office workstation chairs in Sri Lanka." },
    ],
  }),
  component: ChairsPage,
});

function ChairsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const { addItem } = useCart();
  const navigate = useNavigate();

  const filtered = activeCategory === "all" ? chairs : chairs.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={chairsHero} alt="Ergo Base chair collection" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <p className="text-gold text-sm font-semibold tracking-[0.3em] mb-4">ERGO BASE SEATING</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Sit Better. Play Better. Work Better.</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Premium ergonomic chairs engineered for marathon gaming sessions and all-day office productivity.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold" /> 2 Year Warranty</span>
          <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-gold" /> Free Delivery in Colombo</span>
          <span className="flex items-center gap-2"><Star className="w-4 h-4 text-gold" /> 4.8★ Average Rating</span>
        </div>
      </div>

      {/* Category Tabs + Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          {(["all", "gaming", "office"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-gold text-gold-foreground"
                  : "bg-surface text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat === "all" ? "ALL CHAIRS" : cat === "gaming" ? "GAMING CHAIRS" : "OFFICE / WORKSTATION"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((chair) => (
            <div key={chair.id} className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-background">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                {chair.badge && (
                  <span className="absolute top-4 left-4 bg-gold text-gold-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {chair.badge}
                  </span>
                )}
                {chair.originalPrice && (
                  <span className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
                    SAVE {Math.round(((chair.originalPrice - chair.price) / chair.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              <div className="p-6">
                <p className="text-xs text-gold tracking-widest mb-1 uppercase">{chair.category === "gaming" ? "Gaming" : "Office / Workstation"}</p>
                <h3 className="text-lg font-bold mb-2">{chair.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{chair.color}</p>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(chair.rating) ? "text-gold fill-gold" : "text-muted-foreground"}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({chair.reviews})</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {chair.features.map((f) => (
                    <span key={f} className="text-[10px] bg-accent text-accent-foreground px-2 py-1 rounded-full">{f}</span>
                  ))}
                </div>

                <div className="flex items-end gap-2 mb-4">
                  <span className="text-2xl font-bold text-gold">LKR {chair.price.toLocaleString()}</span>
                  {chair.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">LKR {chair.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="gold"
                    className="flex-1"
                    onClick={() => {
                      addItem({ id: chair.id, name: chair.name, subtitle: chair.color, price: chair.price, image: chair.image }, false);
                      navigate({ to: "/checkout" });
                    }}
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => addItem({ id: chair.id, name: chair.name, subtitle: chair.color, price: chair.price, image: chair.image })}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" /> Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Ergo Base Chairs */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Ergo Base Chairs?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Every chair is hand-selected and tested by our ergonomics team to meet Sri Lanka's demanding climate and workstyle.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Engineered Lumbar", desc: "Adjustable lumbar systems that adapt to your spine's natural curve." },
              { title: "Premium Materials", desc: "Cold-cure foam, breathable mesh, and PU leather built for tropical heat." },
              { title: "Heavy-Duty Bases", desc: "Class 4 gas lifts and steel/aluminium bases rated for 150kg+." },
              { title: "2-Year Warranty", desc: "Full coverage on frame, mechanism, and upholstery — no questions." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Not Sure Which Chair Is Right for You?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Book a free ergonomic consultation and our experts will help you pick the perfect chair for your body and setup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" asChild>
            <Link to="/consult">FREE CONSULT</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help choosing a chair")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              CHAT ON WHATSAPP
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
