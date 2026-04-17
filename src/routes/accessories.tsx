import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  SlidersHorizontal,
  Star,
  ShieldCheck,
  Truck,
  X,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import productListingHero from "@/assets/product-listing-hero.jpg";
import accessoryCableTray from "@/assets/accessory-cable-tray.jpg";
import accessoryLamp from "@/assets/accessory-lamp.jpg";
import accessoryFootrest from "@/assets/accessory-footrest.jpg";
import accessoryMonitorRiser from "@/assets/accessory-monitor-riser.jpg";

export const Route = createFileRoute("/accessories")({
  head: () => ({
    meta: [
      { title: "Ergonomic Accessories — Ergo Base Pro Station" },
      {
        name: "description",
        content:
          "Shop ergonomic accessories for your standing desk: cable trays, desk lamps, monitor risers, foot rests, caster wheels, wireless chargers, and more. Enhance your workspace.",
      },
      { property: "og:title", content: "Accessories — Ergo Base" },
      {
        property: "og:description",
        content:
          "Complete your Pro Station with premium ergonomic accessories.",
      },
    ],
  }),
  component: AccessoriesPage,
});

type Category = "all" | "lighting" | "mobility" | "comfort" | "cable-management";

interface Accessory {
  id: string;
  name: string;
  subtitle: string;
  price?: string; // "LKR X,XXX" or null for "Contact for Price"
  priceValue?: number;
  priceAlt?: string; // For dual pricing (e.g., "13,900 / 16,900")
  priceLabel?: string; // Label for dual pricing (e.g., "15W / 20W" wattage options)
  image: string;
  category: Category;
  rating: number;
  reviews: number;
  specs?: string[];
}

const accessories: Accessory[] = [
  {
    id: "cable-tray-large",
    name: "Large Cable Tray Grove",
    subtitle: "Organized Cable Management",
    price: undefined,
    priceAlt: "Contact for Price",
    image: accessoryCableTray,
    category: "cable-management",
    rating: 4.8,
    reviews: 23,
    specs: ["Multiple Sizes", "Under-Desk Mount", "Durable"],
  },
  {
    id: "pdu-universal",
    name: "PDU — Universal Sockets",
    subtitle: "Multiple Cable Ports",
    price: undefined,
    priceAlt: "Contact for Price",
    image: accessoryCableTray,
    category: "cable-management",
    rating: 4.7,
    reviews: 12,
    specs: ["Multiple Outlets", "Surge Protected", "Compact"],
  },
  {
    id: "desk-lamp-dual",
    name: "Table Lamp",
    subtitle: "Adjustable Arm • Multiple Options",
    price: "LKR 13,900 / LKR 16,900",
    priceValue: 13900,
    priceLabel: "15W / 20W",
    image: accessoryLamp,
    category: "lighting",
    rating: 4.6,
    reviews: 19,
    specs: ["Adjustable", "Warm Light", "Two Wattage Options"],
  },
  {
    id: "caster-wheels",
    name: "High-Quality Caster Wheels",
    subtitle: "Smooth & Durable Movement",
    price: undefined,
    priceAlt: "Contact for Price",
    image: accessoryFootrest,
    category: "mobility",
    rating: 4.9,
    reviews: 8,
    specs: ["360° Rotation", "Whisper Quiet", "Premium Grade"],
  },
  {
    id: "wireless-charger",
    name: "KPON Invisible Wireless Charger",
    subtitle: "Modern & Sleek Design",
    price: undefined,
    priceAlt: "Contact for Price",
    image: accessoryLamp,
    category: "comfort",
    rating: 4.8,
    reviews: 16,
    specs: ["Fast Charging", "Invisible Design", "Universal Compatible"],
  },
  {
    id: "monitor-riser-dual",
    name: "Monitor Riser Stand",
    subtitle: "Premium Elevated Platform",
    price: "LKR 8,700 / LKR 9,900",
    priceValue: 8700,
    priceLabel: "90cm / 110cm",
    image: accessoryMonitorRiser,
    category: "comfort",
    rating: 4.7,
    reviews: 15,
    specs: ["Solid Wood", "Two Sizes", "Cable Management"],
  },
  {
    id: "foot-rest",
    name: "Ergonomic Foot Rest",
    subtitle: "Tilting Platform • Anti-Fatigue",
    price: undefined,
    priceAlt: "Contact for Price",
    image: accessoryFootrest,
    category: "comfort",
    rating: 4.9,
    reviews: 28,
    specs: ["Tilting Design", "Anti-Fatigue", "Textured Surface"],
  },
  {
    id: "cup-holder",
    name: "Cup Holder",
    subtitle: "Desk Edge Mount",
    price: undefined,
    priceAlt: "Contact for Price",
    image: accessoryLamp,
    category: "comfort",
    rating: 4.5,
    reviews: 9,
    specs: ["Spill-Resistant", "Universal Fit", "Compact"],
  },
];

function AccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const filtered =
    activeCategory === "all"
      ? accessories
      : accessories.filter((a) => a.category === activeCategory);

  const categoryMap: Record<Category, string> = {
    all: `ALL (${accessories.length})`,
    lighting: `LIGHTING (${accessories.filter((a) => a.category === "lighting").length})`,
    mobility: `MOBILITY (${accessories.filter((a) => a.category === "mobility").length})`,
    comfort: `COMFORT (${accessories.filter((a) => a.category === "comfort").length})`,
    "cable-management": `CABLE MANAGEMENT (${accessories.filter((a) => a.category === "cable-management").length})`,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={productListingHero}
          alt="Ergo Base Accessories collection"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            ACCESSORIES
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Complete your Pro Station with premium ergonomic accessories designed to enhance comfort, productivity, and workspace organization.
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
            <ShieldCheck className="w-4 h-4 text-gold" /> WARRANTY AVAILABLE
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gold fill-gold" /> 4.8/5 AVERAGE
            RATING
          </span>
        </div>
      </div>

      {/* Filters + Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            {(["all", "lighting", "mobility", "comfort", "cable-management"] as Category[]).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium tracking-wider rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-gold text-gold-foreground"
                      : "bg-surface text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {categoryMap[cat]}
                </button>
              ),
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {filtered.length} items
            </span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors cursor-pointer"
            >
              {showFilters ? (
                <X className="w-4 h-4" />
              ) : (
                <SlidersHorizontal className="w-4 h-4" />
              )}
              {showFilters ? "CLOSE" : "FILTERS"}
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-surface border border-border rounded-xl p-6 mb-8 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs tracking-wider text-gold font-semibold mb-3">
                  CATEGORY
                </p>
                <div className="space-y-2">
                  {(
                    [
                      { id: "lighting", label: "Lighting" },
                      { id: "mobility", label: "Mobility" },
                      { id: "comfort", label: "Comfort" },
                      { id: "cable-management", label: "Cable Management" },
                    ] as { id: Category; label: string }[]
                  ).map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={activeCategory === cat.id}
                        onChange={() => setActiveCategory(cat.id)}
                        className="accent-[hsl(var(--gold))]"
                      />
                      {cat.label}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-wider text-gold font-semibold mb-3">
                  PRICE
                </p>
                <div className="space-y-2">
                  {[
                    "Under LKR 10,000",
                    "LKR 10,000 – 20,000",
                    "Contact for Quote",
                  ].map((range) => (
                    <label
                      key={range}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="accent-[hsl(var(--gold))]"
                      />
                      {range}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((accessory) => (
            <div
              key={accessory.id}
              className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-background">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={`${accessory.id}-star-${i}`}
                      className={`w-3 h-3 ${
                        i < Math.floor(accessory.rating)
                          ? "text-gold fill-gold"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({accessory.reviews})
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-sm font-semibold text-foreground">
                  {accessory.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {accessory.subtitle}
                </p>

                {/* Specs */}
                {accessory.specs && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {accessory.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] tracking-wider text-muted-foreground bg-background px-2 py-0.5 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                )}

                {/* Price */}
                <div className="mt-3">
                  {accessory.priceAlt ? (
                    <div>
                      <p className="text-lg font-bold text-gold">
                        {accessory.priceAlt}
                      </p>
                      {accessory.priceLabel && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {accessory.priceLabel}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-lg font-bold text-gold">
                      {accessory.price}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-3">
                  <Button
                    variant="gold"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      if (!accessory.priceAlt || accessory.priceValue) {
                        addItem(
                          {
                            id: accessory.id,
                            name: accessory.name,
                            subtitle: accessory.subtitle,
                            price: accessory.priceValue || 0,
                            image: accessory.image,
                          },
                          false,
                        );
                        navigate({ to: "/checkout" });
                      } else {
                        navigate({ to: "/contact" });
                      }
                    }}
                  >
                    {accessory.priceAlt ? "INQUIRE" : "BUY NOW"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() =>
                      addItem({
                        id: accessory.id,
                        name: accessory.name,
                        subtitle: accessory.subtitle,
                        price: accessory.priceValue || 0,
                        image: accessory.image,
                      })
                    }
                  >
                    <ShoppingCart className="w-3.5 h-3.5 mr-1" /> ADD
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">
              No accessories found in this category.
            </p>
            <Button
              variant="outline"
              onClick={() => setActiveCategory("all")}
            >
              VIEW ALL ACCESSORIES
            </Button>
          </div>
        )}

        {/* Need Help CTA */}
        <div className="mt-16 bg-surface border border-gold/20 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-xs tracking-[0.3em] text-gold font-semibold mb-3">
            ACCESSORY PRICE (LKR)
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Need Custom Pricing or Bulk Orders?
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Contact our team for custom pricing, volume discounts, and exclusive accessory bundles tailored to your workspace needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                CONTACT OUR TEAM <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">SHOP ALL PRODUCTS</Link>
            </Button>
          </div>
        </div>

        {/* Desk Integration CTA */}
        <div className="mt-8 bg-background border border-border rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Complete Your Workspace
            </h3>
            <p className="text-muted-foreground">
              Combine accessories with Pro Station standing desks for the ultimate ergonomic setup.
            </p>
          </div>
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/pro-station">EXPLORE DESKS</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

