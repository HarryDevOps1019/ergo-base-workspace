import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, SlidersHorizontal, Star, ShieldCheck, Truck, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import productListingHero from "@/assets/product-listing-hero.jpg";
import deskMahogany from "@/assets/desk-mahogany.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskTeak from "@/assets/desk-teak.jpg";
import productMdfWhite from "@/assets/product-mdf-white.jpg";
import accessoryCableTray from "@/assets/accessory-cable-tray.jpg";
import accessoryLamp from "@/assets/accessory-lamp.jpg";
import accessoryFootrest from "@/assets/accessory-footrest.jpg";
import accessoryMonitorRiser from "@/assets/accessory-monitor-riser.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop All — Ergo Base Pro Station Standing Desks" },
      { name: "description", content: "Browse the full Ergo Base collection: Pro Station standing desks in Mahogany, Teak & MDF, plus ergonomic accessories. All desks LKR 138,500 — any size, any wood." },
      { property: "og:title", content: "Shop All — Ergo Base Pro Station" },
      { property: "og:description", content: "Browse Pro Station standing desks and ergonomic accessories. Custom sizes, premium woods, same price." },
    ],
  }),
  component: ProductsPage,
});

const WHATSAPP_NUMBER = "94777212199";

type Category = "all" | "desks" | "accessories";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceValue: number;
  image: string;
  category: "desks" | "accessories";
  badge?: string;
  rating: number;
  reviews: number;
  specs?: string[];
  href: string;
}

const products: Product[] = [
  {
    id: "mahogany-black",
    name: "Pro Station — Mahogany",
    subtitle: "Standard Black Frame",
    price: "LKR 138,500",
    priceValue: 138500,
    image: deskMahogany,
    category: "desks",
    badge: "BEST SELLER",
    rating: 4.9,
    reviews: 47,
    specs: ["Dual Motor", "120kg Capacity", "5-Year Warranty"],
    href: "/pro-station",
  },
  {
    id: "mdf-white-silver",
    name: "Pro Station — MDF White",
    subtitle: "Silver Frame",
    price: "LKR 138,500",
    priceValue: 138500,
    image: deskWhite,
    category: "desks",
    rating: 4.8,
    reviews: 32,
    specs: ["Dual Motor", "120kg Capacity", "5-Year Warranty"],
    href: "/pro-station",
  },
  {
    id: "teak-custom",
    name: "Pro Station — Teak",
    subtitle: "Custom Size Available",
    price: "LKR 138,500",
    priceValue: 138500,
    image: deskTeak,
    category: "desks",
    badge: "PREMIUM",
    rating: 5.0,
    reviews: 18,
    specs: ["Dual Motor", "120kg Capacity", "5-Year Warranty"],
    href: "/pro-station",
  },
  {
    id: "mdf-white-black",
    name: "Pro Station — MDF White",
    subtitle: "Black Frame • Compact 120×60cm",
    price: "LKR 138,500",
    priceValue: 138500,
    image: productMdfWhite,
    category: "desks",
    badge: "COMPACT",
    rating: 4.7,
    reviews: 14,
    specs: ["Dual Motor", "120kg Capacity", "5-Year Warranty"],
    href: "/pro-station",
  },
  {
    id: "cable-tray",
    name: "Cable Tray Grove",
    subtitle: "Large — 4 to 6 ft",
    price: "LKR 16,850",
    priceValue: 16850,
    image: accessoryCableTray,
    category: "accessories",
    rating: 4.8,
    reviews: 23,
    href: "/accessories",
  },
  {
    id: "desk-lamp-15w",
    name: "LED Desk Lamp — 15W",
    subtitle: "Adjustable Arm • Warm Light",
    price: "LKR 13,900",
    priceValue: 13900,
    image: accessoryLamp,
    category: "accessories",
    rating: 4.6,
    reviews: 19,
    href: "/accessories",
  },
  {
    id: "footrest",
    name: "Ergonomic Foot Rest",
    subtitle: "Tilting Platform • Anti-Fatigue",
    price: "LKR 11,800",
    priceValue: 11800,
    image: accessoryFootrest,
    category: "accessories",
    rating: 4.9,
    reviews: 28,
    href: "/accessories",
  },
  {
    id: "monitor-riser-90",
    name: "Monitor Riser Stand — 90cm",
    subtitle: "Solid Wood • Elevated Platform",
    price: "LKR 8,700",
    priceValue: 8700,
    image: accessoryMonitorRiser,
    category: "accessories",
    rating: 4.7,
    reviews: 15,
    href: "/accessories",
  },
];

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const deskCount = products.filter((p) => p.category === "desks").length;
  const accessoryCount = products.filter((p) => p.category === "accessories").length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={productListingHero}
          alt="Ergo Base Pro Station collection"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            SHOP ALL
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Pro Station standing desks and ergonomic accessories — everything you need for the perfect workspace.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <div className="border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-8 text-xs tracking-wider text-muted-foreground">
          <span className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-gold" /> FREE DELIVERY IN COLOMBO
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold" /> 5-YEAR WARRANTY
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gold fill-gold" /> 4.9/5 CUSTOMER RATING
          </span>
        </div>
      </div>

      {/* Filters + Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-sm font-medium tracking-wider rounded-full transition-colors cursor-pointer ${
                activeCategory === "all"
                  ? "bg-gold text-gold-foreground"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              ALL ({products.length})
            </button>
            <button
              onClick={() => setActiveCategory("desks")}
              className={`px-4 py-2 text-sm font-medium tracking-wider rounded-full transition-colors cursor-pointer ${
                activeCategory === "desks"
                  ? "bg-gold text-gold-foreground"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              DESKS ({deskCount})
            </button>
            <button
              onClick={() => setActiveCategory("accessories")}
              className={`px-4 py-2 text-sm font-medium tracking-wider rounded-full transition-colors cursor-pointer ${
                activeCategory === "accessories"
                  ? "bg-gold text-gold-foreground"
                  : "bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              ACCESSORIES ({accessoryCount})
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{filtered.length} products</span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors cursor-pointer"
            >
              {showFilters ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
              {showFilters ? "CLOSE" : "FILTERS"}
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-surface border border-border rounded-xl p-6 mb-8 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs tracking-wider text-gold font-semibold mb-3">WOOD TYPE</p>
                <div className="space-y-2">
                  {["MDF White", "Mahogany", "Teak"].map((wood) => (
                    <label key={wood} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                      <input type="checkbox" className="accent-[hsl(var(--gold))]" />
                      {wood}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-wider text-gold font-semibold mb-3">FRAME COLOR</p>
                <div className="space-y-2">
                  {["Black", "Silver", "White"].map((color) => (
                    <label key={color} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                      <input type="checkbox" className="accent-[hsl(var(--gold))]" />
                      {color}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-wider text-gold font-semibold mb-3">PRICE RANGE</p>
                <div className="space-y-2">
                  {["Under LKR 15,000", "LKR 15,000 – 50,000", "LKR 100,000+"].map((range) => (
                    <label key={range} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                      <input type="checkbox" className="accent-[hsl(var(--gold))]" />
                      {range}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              <Link to={product.href} className="block">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-gold text-gold-foreground text-[10px] tracking-wider border-none">
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? "text-gold fill-gold"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">{product.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{product.subtitle}</p>
                {product.specs && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {product.specs.map((spec) => (
                      <span key={spec} className="text-[10px] tracking-wider text-muted-foreground bg-background px-2 py-0.5 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-lg font-bold text-gold mt-3">{product.price}</p>
                <div className="flex gap-2 mt-3">
                  <Button
                    variant="gold"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      addItem({ id: product.id, name: product.name, subtitle: product.subtitle, price: product.priceValue, image: product.image });
                      navigate({ to: "/checkout" });
                    }}
                  >
                    BUY NOW
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => addItem({ id: product.id, name: product.name, subtitle: product.subtitle, price: product.priceValue, image: product.image })}
                  >
                    <ShoppingCart className="w-3.5 h-3.5 mr-1" /> ADD
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom CTA */}
        <div className="mt-16 bg-surface border border-gold/20 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-xs tracking-[0.3em] text-gold font-semibold mb-3">CAN'T FIND WHAT YOU NEED?</h2>
          <p className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Design Your Own Pro Station</p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Any size. Any wood. Any color. Same price — LKR 138,500. Use our Customization Studio to build exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/customizer">
                CUSTOMIZE YOURS <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>

        {/* Corporate */}
        <div className="mt-8 bg-background border border-border rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Need Multiple Desks?</h3>
            <p className="text-muted-foreground">Bulk pricing and installation support for offices of any size.</p>
          </div>
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/corporate">GET CORPORATE QUOTE</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
