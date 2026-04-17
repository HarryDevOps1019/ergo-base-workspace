import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Zap,
  ShoppingCart,
  RotateCcw,
  Info,
  Minus,
  Plus,
  Users,
  TrendingUp,
  Gift,
  Headphones,
} from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import deskMahogany from "@/assets/desk-mahogany.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskTeak from "@/assets/desk-teak.jpg";
import productListingHero from "@/assets/product-listing-hero.jpg";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Solutions — Ergo Base" },
      {
        name: "description",
        content:
          "Transform your office with bulk Pro Station standing desks. Bulk pricing, installation support, and custom configurations for businesses.",
      },
      { property: "og:title", content: "Corporate Solutions — Ergo Base" },
      {
        property: "og:description",
        content: "Standing desks for modern offices. Bulk pricing and support included.",
      },
    ],
  }),
  component: CorporatePage,
});

interface WoodType {
  id: string;
  label: string;
  description: string;
  colorHex: string;
  image: string;
}

interface TableSize {
  id: string;
  label: string;
  dimensions: string;
  description: string;
}

interface FrameColor {
  id: string;
  label: string;
  colorHex: string;
}

/* ─────── Customization Options ─────── */

const woodTypes: WoodType[] = [
  {
    id: "mahogany",
    label: "Mahogany",
    description: "Timeless elegance with rich warm tones",
    colorHex: "#8B4513",
    image: deskMahogany,
  },
  {
    id: "teak",
    label: "Teak",
    description: "Premium luxury with natural grain",
    colorHex: "#D2691E",
    image: deskTeak,
  },
  {
    id: "mdf-white",
    label: "MDF White",
    description: "Clean minimalism with modern appeal",
    colorHex: "#F5F5F5",
    image: deskWhite,
  },
];

const tableSizes: TableSize[] = [
  {
    id: "compact",
    label: "Compact",
    dimensions: "120 × 60 cm",
    description: "Individual workstations",
  },
  {
    id: "standard",
    label: "Standard",
    dimensions: "160 × 80 cm",
    description: "Most popular choice",
  },
  {
    id: "wide",
    label: "Wide",
    dimensions: "180 × 80 cm",
    description: "Dual monitor setups",
  },
  {
    id: "xl",
    label: "Extra Large",
    dimensions: "200 × 80 cm",
    description: "Executive workstations",
  },
];

const frameColors: FrameColor[] = [
  { id: "black", label: "Matte Black", colorHex: "#1a1a1a" },
  { id: "silver", label: "Silver", colorHex: "#b0b0b0" },
  { id: "white", label: "White", colorHex: "#e8e8e8" },
  { id: "gunmetal", label: "Gunmetal", colorHex: "#4a4a4a" },
];

function CorporatePage() {
  const navigate = useNavigate();
  const { addItem } = useCart();

  /* ── Customization State ── */
  const [selectedWood, setSelectedWood] = useState<string>("mahogany");
  const [selectedSize, setSelectedSize] = useState<string>("standard");
  const [selectedFrame, setSelectedFrame] = useState<string>("black");
  const [quantity, setQuantity] = useState(10);
  const [showAddedNotification, setShowAddedNotification] = useState(false);

  const basePrice = 138500;
  const wood = woodTypes.find((w) => w.id === selectedWood)!;
  const size = tableSizes.find((s) => s.id === selectedSize)!;
  const frame = frameColors.find((f) => f.id === selectedFrame)!;

  const unitPrice = basePrice;
  const totalPrice = unitPrice * quantity;
  const configSummary = `${wood.label} • ${size.label} (${size.dimensions}) • ${frame.label}`;

  /* ── Handlers ── */
  const handleAddToCart = () => {
    const itemId = `pro-station-corporate-${Date.now()}`;
    for (let i = 0; i < quantity; i++) {
      addItem(
        {
          id: i === 0 ? itemId : `${itemId}-${i}`,
          name: "Pro Station — Corporate",
          subtitle: configSummary,
          price: unitPrice,
          image: wood.image,
        },
        false,
      );
    }
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 2500);
  };

  const handleBuyNow = () => {
    const itemId = `pro-station-corporate-${Date.now()}`;
    for (let i = 0; i < quantity; i++) {
      addItem(
        {
          id: i === 0 ? itemId : `${itemId}-${i}`,
          name: "Pro Station — Corporate",
          subtitle: configSummary,
          price: unitPrice,
          image: wood.image,
        },
        false,
      );
    }
    navigate({ to: "/checkout" });
  };

  const resetCustomization = () => {
    setSelectedWood("mahogany");
    setSelectedSize("standard");
    setSelectedFrame("black");
    setQuantity(10);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={productListingHero}
          alt="Ergo Base Corporate Solutions"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            CORPORATE SOLUTIONS
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Equip your team with premium standing desks. Bulk pricing, custom configurations, and white-glove support for offices of any size.
          </p>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: "Bulk Pricing",
              description: "Volume discounts for orders of 5+ desks",
            },
            {
              icon: TrendingUp,
              title: "Employee Wellness",
              description: "Proven ergonomic benefits and productivity gains",
            },
            {
              icon: Zap,
              title: "Fast Delivery",
              description: "Coordinated installation for your entire office",
            },
            {
              icon: Headphones,
              title: "Dedicated Support",
              description: "Account manager for seamless procurement",
            },
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={`benefit-${idx}`}
                className="p-6 rounded-lg border border-border bg-surface text-center"
              >
                <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== CUSTOMIZATION STUDIO SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-border">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <Zap className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-semibold text-gold tracking-wider">
              CUSTOMIZATION STUDIO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Design Your Office Workspace
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Customize every desk to match your office aesthetic and workflow requirements.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gold mt-4">
            <Check className="w-5 h-5" />
            <span>Same Price for All Customizations</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* ===== LEFT: CUSTOMIZATION CONTROLS ===== */}
          <div className="lg:col-span-2 space-y-8">
            {/* ─── WOOD TYPE ─── */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center text-xs font-bold text-gold">
                  1
                </div>
                <h3 className="text-lg font-bold">Wood Type</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {woodTypes.map((wood_opt) => (
                  <button
                    key={wood_opt.id}
                    onClick={() => setSelectedWood(wood_opt.id)}
                    className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedWood === wood_opt.id
                        ? "border-gold ring-2 ring-gold/30 scale-105"
                        : "border-border hover:border-gold/40"
                    }`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-surface">
                      <img
                        src={wood_opt.image}
                        alt={wood_opt.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <div className="p-4 bg-surface border-t border-border">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">
                          {wood_opt.label}
                        </h4>
                        {selectedWood === wood_opt.id && (
                          <Check className="w-4 h-4 text-gold" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {wood_opt.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* ─── TABLE SIZE ─── */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center text-xs font-bold text-gold">
                  2
                </div>
                <h3 className="text-lg font-bold">Table Size</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tableSizes.map((size_opt) => (
                  <button
                    key={size_opt.id}
                    onClick={() => setSelectedSize(size_opt.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedSize === size_opt.id
                        ? "border-gold bg-gold/5 ring-1 ring-gold/20 scale-105"
                        : "border-border hover:border-gold/40 bg-surface"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-foreground">
                        {size_opt.label}
                      </h4>
                      {selectedSize === size_opt.id && (
                        <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {size_opt.dimensions}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {size_opt.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* ─── FRAME COLOR ─── */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center text-xs font-bold text-gold">
                  3
                </div>
                <h3 className="text-lg font-bold">Frame Color</h3>
              </div>
              <div className="flex gap-4 flex-wrap">
                {frameColors.map((frame_opt) => (
                  <button
                    key={frame_opt.id}
                    onClick={() => setSelectedFrame(frame_opt.id)}
                    className={`flex flex-col items-center gap-2 group transition-all`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full border-3 flex items-center justify-center transition-all ${
                        selectedFrame === frame_opt.id
                          ? "border-gold ring-2 ring-gold/30 scale-110"
                          : "border-border hover:border-gold/40"
                      }`}
                      role="option"
                      aria-selected={selectedFrame === frame_opt.id}
                      style={{ backgroundColor: frame_opt.colorHex }}
                    >
                      {selectedFrame === frame_opt.id && (
                        <Check className="w-5 h-5 text-gold" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium transition-colors text-center ${
                        selectedFrame === frame_opt.id
                          ? "text-gold"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {frame_opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT: CONFIGURATION SUMMARY ===== */}
          <div className="sticky top-6">
            <div className="bg-surface border border-gold/20 rounded-xl p-6 space-y-6">
              {/* Preview */}
              <div className="aspect-video rounded-lg overflow-hidden bg-background border border-border">
                <img
                  src={wood.image}
                  alt="Configuration preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Configuration Details */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm mb-3">Your Configuration</h4>

                <div className="flex items-start justify-between text-sm">
                  <span className="text-muted-foreground">Wood Type</span>
                  <span className="font-medium text-right">{wood.label}</span>
                </div>

                <div className="flex items-start justify-between text-sm">
                  <span className="text-muted-foreground">Table Size</span>
                  <span className="font-medium text-right">
                    {size.label}
                    <br />
                    <span className="text-xs text-muted-foreground">
                      {size.dimensions}
                    </span>
                  </span>
                </div>

                <div className="flex items-start justify-between text-sm">
                  <span className="text-muted-foreground">Frame Color</span>
                  <span className="font-medium text-right">{frame.label}</span>
                </div>

                <div className="pt-3 border-t border-border" />

                {/* Same Price Indicator */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-emerald-500">
                      All customizations available at the same price
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-3 pt-3 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Unit Price
                  </span>
                  <span className="text-xl font-bold text-gold">
                    LKR {unitPrice.toLocaleString()}
                  </span>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Quantity
                  </span>
                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() =>
                        setQuantity(Math.max(1, quantity - 1))
                      }
                      className="p-1 hover:bg-surface rounded transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">
                      {quantity}
                    </span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() =>
                        setQuantity(Math.min(100, quantity + 1))
                      }
                      className="p-1 hover:bg-surface rounded transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Bulk Pricing Note */}
                {quantity >= 5 && (
                  <div className="bg-gold/10 border border-gold/20 rounded-lg p-2">
                    <p className="text-xs font-medium text-gold">
                      ✓ Bulk pricing applied
                    </p>
                  </div>
                )}

                {/* Total */}
                <div className="pt-2 border-t border-border flex items-center justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-2xl font-bold text-gold">
                    LKR {totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2 pt-3 border-t border-border">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={handleBuyNow}
                >
                  BUY NOW
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" /> ADD TO CART
                </Button>
              </div>

              {/* Notification */}
              {showAddedNotification && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 animate-fade-in">
                  <p className="text-xs font-medium text-emerald-500 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5" /> Added to cart!
                  </p>
                </div>
              )}

              {/* Reset */}
              <button
                onClick={resetCustomization}
                className="w-full px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Configuration
              </button>
            </div>

            {/* Info Box */}
            <div className="mt-6 p-4 bg-gold/10 border border-gold/20 rounded-lg">
              <div className="flex gap-2">
                <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gold">
                  Contact us for custom quotes and installation support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PACKAGES SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Choose Your Plan</h2>
          <p className="text-muted-foreground">
            All plans include white-glove support and coordinated delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: "startup",
              name: "Startup",
              desks: "5–10 desks",
              discount: "10% discount",
              features: [
                "Standard configurations",
                "Installation support",
                "1-year warranty",
                "Email support",
              ],
            },
            {
              id: "growth",
              name: "Growth",
              desks: "11–50 desks",
              discount: "15% discount",
              features: [
                "Custom configurations",
                "Full installation",
                "2-year warranty",
                "Dedicated account manager",
                "Priority support",
              ],
              featured: true,
            },
            {
              id: "enterprise",
              name: "Enterprise",
              desks: "50+ desks",
              discount: "Custom pricing",
              features: [
                "Bespoke designs",
                "Full project management",
                "Extended warranty options",
                "24/7 support",
                "Phased rollout available",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-xl border transition-all ${
                plan.featured
                  ? "border-gold bg-gold/5 ring-1 ring-gold/20 scale-105"
                  : "border-border bg-surface"
              }`}
            >
              {plan.featured && (
                <div className="inline-block px-2 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full mb-3">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.desks}</p>
              <p className="text-lg font-bold text-gold mb-6">{plan.discount}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={`${plan.id}-feature-${idx}`}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "gold" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to="/contact">GET QUOTE</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-surface border border-gold/20 rounded-xl p-8 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <Gift className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-semibold text-gold tracking-wider">
              READY TO TRANSFORM YOUR OFFICE?
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Let's Build Your Perfect Workspace
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Our team is ready to discuss bulk pricing, custom configurations, and installation logistics tailored to your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                CONTACT US <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">VIEW ALL PRODUCTS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
