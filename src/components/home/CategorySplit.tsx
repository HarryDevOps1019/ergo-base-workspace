import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-desk.jpg";
import corporateImage from "@/assets/corporate-office.jpg";

export function CategorySplit() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Home & Office */}
          <Link
            to="/pro-station"
            className="group relative overflow-hidden rounded-xl aspect-[4/3] flex items-end"
          >
            <img
              src={heroImage}
              alt="Home and Office Standing Desk"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={960}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-xs tracking-[0.3em] text-gold font-semibold mb-2">HOME & OFFICE</p>
              <h3 className="text-2xl font-bold text-foreground mb-3">Pro Station Desk</h3>
              <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-gold transition-colors">
                Shop Now <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Corporate */}
          <Link
            to="/corporate"
            className="group relative overflow-hidden rounded-xl aspect-[4/3] flex items-end"
          >
            <img
              src={corporateImage}
              alt="Corporate Office Setup"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-xs tracking-[0.3em] text-gold font-semibold mb-2">CORPORATE & BULK</p>
              <h3 className="text-2xl font-bold text-foreground mb-3">Outfit Your Office</h3>
              <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-gold transition-colors">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
