import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import deskMahogany from "@/assets/desk-mahogany.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskTeak from "@/assets/desk-teak.jpg";

const products = [
  {
    name: "Pro Station — Mahogany Top",
    frame: "Standard Black Frame",
    price: "LKR 138,500",
    image: deskMahogany,
  },
  {
    name: "Pro Station — MDF White Top",
    frame: "Silver Frame",
    price: "LKR 138,500",
    image: deskWhite,
  },
  {
    name: "Pro Station — Teak Top",
    frame: "Custom Size Available",
    price: "LKR 138,500",
    image: deskTeak,
  },
];

export function ProductCards() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.3em] text-gold font-semibold mb-4">POPULAR CONFIGURATIONS</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">Choose Your Pro Station</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{product.frame}</p>
                <p className="text-xl font-bold text-gold mt-3">{product.price}</p>
                <Button variant="gold" className="w-full mt-4" asChild>
                  <Link to="/pro-station">INQUIRE NOW</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/customizer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-semibold tracking-wider text-sm transition-colors"
          >
            NOT SEEING WHAT YOU WANT? CUSTOMIZE YOURS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Two Config Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Standard Pro Station</h3>
            <p className="text-sm text-muted-foreground mb-4">Same-day Quote</p>
            <p className="text-2xl font-bold text-gold mb-6">LKR 138,500</p>
            <Button variant="whatsapp" size="lg" className="w-full" asChild>
              <a href="https://wa.me/94777212199?text=Hi%2C%20I'm%20interested%20in%20the%20Standard%20Pro%20Station." target="_blank" rel="noopener noreferrer">
                INQUIRE ON WHATSAPP
              </a>
            </Button>
          </div>
          <div className="bg-background border border-gold/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Custom Pro Station</h3>
            <p className="text-sm text-muted-foreground mb-4">Built to Your Specs</p>
            <p className="text-2xl font-bold text-gold mb-6">Starting at 138,500</p>
            <Button variant="goldOutline" size="lg" className="w-full" asChild>
              <Link to="/customizer">CUSTOMIZE YOURS →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
