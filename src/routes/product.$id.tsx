import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  ShoppingCart,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Zap,
  Package,
  RotateCcw,
  Headphones,
  Truck,
  MapPin,
  Minus,
  Plus,
  Info,
} from "lucide-react";
import { useCart } from "@/hooks/use-cart";

import chairGaming1 from "@/assets/chair-gaming-1.jpg";
import chairGaming2 from "@/assets/chair-gaming-2.jpg";
import chairGaming3 from "@/assets/chair-gaming-3.jpg";
import chairOffice1 from "@/assets/chair-office-1.jpg";
import chairOffice2 from "@/assets/chair-office-2.jpg";
import chairOffice3 from "@/assets/chair-office-3.jpg";
import chairSihooM57Pro from "@/assets/chair-sihoo-m57-pro.png";
import deskMahogany from "@/assets/desk-mahogany.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskTeak from "@/assets/desk-teak.jpg";
import productMdfWhite from "@/assets/product-mdf-white.jpg";
import accessoryCableTray from "@/assets/accessory-cable-tray.jpg";
import accessoryLamp from "@/assets/accessory-lamp.jpg";
import accessoryFootrest from "@/assets/accessory-footrest.jpg";
import accessoryMonitorRiser from "@/assets/accessory-monitor-riser.jpg";

export const Route = createFileRoute("/product/$id")({
  component: ProductCustomizationPage,
});

/* ─────────────── Types ─────────────── */

interface Accessory {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category: "cable-management" | "lighting" | "comfort" | "power" | "other";
}

interface FrameOption {
  id: string;
  label: string;
  colorHex: string;
  priceDelta: number;
}

interface SizeOption {
  id: string;
  label: string;
  dimensions: string;
  priceDelta: number;
}

interface ChairUpgrade {
  id: string;
  label: string;
  description: string;
  priceDelta: number;
}

interface Product {
  id: string;
  name: string;
  tagline?: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  image: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  specs?: string[];
  color?: string;
  category: "chair" | "desk";
}

/* ─────────────── Data ─────────────── */

const chairsData: Record<string, Product> = {
  "titan-pro": {
    id: "titan-pro",
    name: "Titan Pro Gaming Chair",
    tagline: "Engineered for your comfort, designed for your style.",
    subtitle: "Black & Red",
    category: "chair",
    price: 89500,
    originalPrice: 105000,
    images: [chairGaming1, chairGaming2, chairGaming3],
    image: chairGaming1,
    rating: 4.9,
    reviews: 124,
    color: "Black & Red",
    description:
      "Experience ultimate gaming comfort with the Titan Pro Gaming Chair. Featuring 4D armrests, 180° recline capability, and premium memory foam lumbar support. Engineered for extended gaming marathons with a robust steel frame.",
    features: [
      "4D Armrests",
      "180° Recline",
      "Memory Foam Lumbar",
      "Steel Frame",
      "Premium Materials",
      "Heavy-Duty Base",
    ],
    specs: [
      "Max Weight: 150kg",
      "Height Adjustable: 48-58cm",
      "Warranty: 2 Years",
    ],
  },
  "phantom-x": {
    id: "phantom-x",
    name: "Phantom X Gaming Chair",
    tagline: "The perfect balance of style and performance.",
    subtitle: "Black & Blue",
    category: "chair",
    price: 78500,
    originalPrice: 92000,
    images: [chairGaming2, chairGaming1],
    image: chairGaming2,
    rating: 4.8,
    reviews: 89,
    color: "Black & Blue",
    description:
      "The Phantom X combines style and comfort with its sleek black and blue design. Perfect for gamers who want professional-grade ergonomics without the premium price.",
    features: ["3D Armrests", "155° Recline", "Lumbar Pillow", "Nylon Base"],
    specs: [
      "Max Weight: 140kg",
      "Height Adjustable: 45-55cm",
      "Warranty: 2 Years",
    ],
  },
  "arctic-elite": {
    id: "arctic-elite",
    name: "Arctic Elite Gaming Chair",
    tagline: "Premium comfort in pristine white.",
    subtitle: "White & Black",
    category: "chair",
    price: 95000,
    images: [chairGaming3],
    image: chairGaming3,
    rating: 4.7,
    reviews: 56,
    color: "White & Black",
    description:
      "Stand out with the Arctic Elite Gaming Chair. Premium white finish with black accents, enhanced cooling via cold-cure foam, and an aluminium base for durability.",
    features: [
      "4D Armrests",
      "180° Recline",
      "Cold-Cure Foam",
      "Aluminium Base",
    ],
    specs: [
      "Max Weight: 160kg",
      "Height Adjustable: 50-60cm",
      "Warranty: 2 Years",
    ],
  },
  "ergo-mesh-pro": {
    id: "ergo-mesh-pro",
    name: "ErgoMesh Pro Office Chair",
    tagline: "Professional comfort for all-day productivity.",
    subtitle: "Black & Silver",
    category: "chair",
    price: 72500,
    originalPrice: 85000,
    images: [chairOffice1],
    image: chairOffice1,
    rating: 4.9,
    reviews: 203,
    color: "Black & Silver",
    description:
      "Professional office comfort redefined. The ErgoMesh Pro features a breathable mesh back, adjustable lumbar support, and synchro-tilt mechanism.",
    features: [
      "Mesh Back",
      "Adjustable Lumbar",
      "Synchro-Tilt",
      "Aluminium Base",
    ],
    specs: [
      "Max Weight: 120kg",
      "Height Adjustable: 44-54cm",
      "Warranty: 2 Years",
    ],
  },
  "executive-one": {
    id: "executive-one",
    name: "Executive One Chair",
    tagline: "Executive excellence meets ergonomics.",
    subtitle: "All Black",
    category: "chair",
    price: 85000,
    images: [chairOffice2],
    image: chairOffice2,
    rating: 4.8,
    reviews: 147,
    color: "All Black",
    description:
      "The Executive One exudes professionalism and comfort. With a premium headrest, adjustable armrests, and Class 4 gas lift.",
    features: ["Headrest", "Adjustable Arms", "Seat Slide", "Class 4 Gas Lift"],
    specs: [
      "Max Weight: 130kg",
      "Height Adjustable: 46-56cm",
      "Warranty: 2 Years",
    ],
  },
  "task-flex": {
    id: "task-flex",
    name: "TaskFlex Workstation Chair",
    tagline: "Affordable ergonomics for modern workstations.",
    subtitle: "Black",
    category: "chair",
    price: 58500,
    originalPrice: 68000,
    images: [chairOffice3],
    image: chairOffice3,
    rating: 4.6,
    reviews: 92,
    color: "Black",
    description:
      "An affordable yet ergonomic solution for modern workstations. The TaskFlex features a mid-back mesh design, flip-up arms, and breathable fabric.",
    features: [
      "Mid-Back Mesh",
      "Flip-Up Arms",
      "Tilt Lock",
      "Breathable Fabric",
    ],
    specs: [
      "Max Weight: 110kg",
      "Height Adjustable: 42-52cm",
      "Warranty: 2 Years",
    ],
  },
  "sihoo-m57-pro": {
    id: "sihoo-m57-pro",
    name: "Sihoo M57 Pro Office Chair",
    tagline: "The gold standard for ergonomic office seating.",
    subtitle: "Grey Mesh",
    category: "chair",
    price: 76500,
    originalPrice: 89000,
    images: [chairSihooM57Pro],
    image: chairSihooM57Pro,
    rating: 4.9,
    reviews: 312,
    color: "Grey Mesh",
    description:
      "The Sihoo M57 Pro is widely regarded as one of the best ergonomic office chairs in its class. Featuring a full breathable mesh design, 3D adjustable armrests, and an integrated headrest, it provides exceptional support for long working hours.",
    features: [
      "Full Mesh Design",
      "3D Adjustable Arms",
      "Integrated Headrest",
      "Adjustable Lumbar Support",
      "Double-back Support",
      "High-Density Mesh",
    ],
    specs: [
      "Max Weight: 150kg",
      "Height Adjustable: 45-55cm",
      "Warranty: 2 Years",
      "Recline: 110-126 degrees",
    ],
  },
};

const desksData: Record<string, Product> = {
  "mahogany-black": {
    id: "mahogany-black",
    name: "Pro Station — Mahogany",
    tagline: "Timeless elegance meets modern functionality.",
    subtitle: "Standard Black Frame",
    category: "desk",
    price: 138500,
    images: [deskMahogany],
    image: deskMahogany,
    rating: 4.9,
    reviews: 47,
    description:
      "The Pro Station with Mahogany top combines traditional elegance with modern functionality. Featuring dual motors, 120kg capacity, and smooth height adjustment from sitting to standing.",
    features: [
      "Dual Motor System",
      "120kg Weight Capacity",
      "5-Year Warranty",
      "Smooth Adjustment",
      "Durable Mahogany Top",
      "Integrated Cable Management",
    ],
    specs: ["Height Range: 72-120cm", "Top Size: 160×80cm", "Weight: 45kg"],
  },
  "mdf-white-silver": {
    id: "mdf-white-silver",
    name: "Pro Station — MDF White",
    tagline: "Clean minimalism with premium performance.",
    subtitle: "Silver Frame",
    category: "desk",
    price: 138500,
    images: [deskWhite],
    image: deskWhite,
    rating: 4.8,
    reviews: 32,
    description:
      "Clean and minimalist design with MDF white top and silver frame. The Pro Station offers the same premium features for all desk configurations.",
    features: [
      "Dual Motor System",
      "120kg Weight Capacity",
      "5-Year Warranty",
      "Smooth Adjustment",
      "Scratch-Resistant Surface",
      "Integrated Cable Management",
    ],
    specs: ["Height Range: 72-120cm", "Top Size: 160×80cm", "Weight: 45kg"],
  },
  "teak-custom": {
    id: "teak-custom",
    name: "Pro Station — Teak",
    tagline: "Premium luxury, truly customized.",
    subtitle: "Custom Size Available",
    category: "desk",
    price: 138500,
    images: [deskTeak],
    image: deskTeak,
    rating: 5.0,
    reviews: 18,
    description:
      "Premium Teak wood top with customizable dimensions. Perfect for those who want luxury and personalization with all standard Pro Station premium features.",
    features: [
      "Dual Motor System",
      "120kg Weight Capacity",
      "5-Year Warranty",
      "Custom Sizing",
      "Premium Teak Wood",
      "Full Customization Available",
    ],
    specs: ["Height Range: 72-120cm", "Custom Size Available", "Weight: 50kg"],
  },
  "mdf-white-black": {
    id: "mdf-white-black",
    name: "Pro Station — Compact",
    tagline: "Full power in a compact design.",
    subtitle: "Black Frame • Compact 120×60cm",
    category: "desk",
    price: 138500,
    images: [productMdfWhite],
    image: productMdfWhite,
    rating: 4.7,
    reviews: 14,
    description:
      "Compact version of the Pro Station perfect for smaller spaces. Same premium dual motor technology in a space-saving 120×60cm configuration.",
    features: [
      "Dual Motor System",
      "120kg Weight Capacity",
      "5-Year Warranty",
      "Compact Space-Saving Size",
      "Scratch-Resistant Surface",
      "Cable Management",
    ],
    specs: ["Height Range: 72-120cm", "Top Size: 120×60cm", "Weight: 35kg"],
  },
};

/* ─── Customization Options ─── */

const deskFrameOptions: FrameOption[] = [
  { id: "black", label: "Matte Black", colorHex: "#1a1a1a", priceDelta: 0 },
  { id: "silver", label: "Silver", colorHex: "#b0b0b0", priceDelta: 0 },
  { id: "white", label: "White", colorHex: "#e8e8e8", priceDelta: 2500 },
  { id: "gunmetal", label: "Gunmetal", colorHex: "#4a4a4a", priceDelta: 3500 },
];

const deskSizeOptions: SizeOption[] = [
  { id: "standard", label: "Standard", dimensions: "160 × 80 cm", priceDelta: 0 },
  { id: "compact", label: "Compact", dimensions: "120 × 60 cm", priceDelta: -8000 },
  { id: "wide", label: "Wide", dimensions: "180 × 80 cm", priceDelta: 12000 },
  { id: "xl", label: "Extra Large", dimensions: "200 × 80 cm", priceDelta: 22000 },
];

const chairUpgradeOptions: ChairUpgrade[] = [
  { id: "headrest", label: "Premium Headrest", description: "Adjustable magnetic headrest with memory foam", priceDelta: 5500 },
  { id: "lumbar", label: "Adaptive Lumbar", description: "Auto-adjusting lumbar system with heat function", priceDelta: 8500 },
  { id: "armrest-4d", label: "4D Armrest Upgrade", description: "Full 4D adjustability with soft-touch pads", priceDelta: 4500 },
  { id: "wheels", label: "Rollerblade Wheels", description: "Smooth, floor-safe polyurethane wheels", priceDelta: 3900 },
  { id: "fabric-premium", label: "Premium Fabric", description: "Breathable micro-weave with stain resistance", priceDelta: 6500 },
];

const chairColorOptions = [
  { id: "stealth-black", label: "Stealth Black", colorHex: "#1a1a1a", priceDelta: 0 },
  { id: "slate-grey", label: "Slate Grey", colorHex: "#4a4a4a", priceDelta: 0 },
  { id: "arctic-white", label: "Arctic White", colorHex: "#e8e8e8", priceDelta: 3500 },
  { id: "navy-blue", label: "Navy Blue", colorHex: "#1e3a8a", priceDelta: 2500 },
];

const chairBaseOptions = [
  { id: "nylon", label: "Reinforced Nylon", description: "Durable & Lightweight", priceDelta: 0 },
  { id: "aluminium", label: "Polished Aluminium", description: "Premium Strength", priceDelta: 8500 },
  { id: "chrome", label: "Chrome Steel", description: "Classic Mirror Finish", priceDelta: 6500 },
];

const deskAccessories: Accessory[] = [
  {
    id: "cable-tray",
    name: "Large Cable Tray Grove (4–6 ft)",
    price: 16850,
    image: accessoryCableTray,
    description: "Organize cables and keep your workspace clean",
    category: "cable-management",
  },
  {
    id: "pdu",
    name: "PDU (8 Universal Sockets, 3m Cable)",
    price: 8900,
    image: accessoryMonitorRiser,
    description: "Power management with 8 outlets",
    category: "power",
  },
  {
    id: "table-lamp-15w",
    name: "Table Lamp (15W)",
    price: 13900,
    image: accessoryLamp,
    description: "Warm ambient lighting for your desk",
    category: "lighting",
  },
  {
    id: "table-lamp-24w",
    name: "Table Lamp (24W)",
    price: 16900,
    image: accessoryLamp,
    description: "Bright focused lighting for tasks",
    category: "lighting",
  },
  {
    id: "wireless-charger",
    name: "KPON Invisible Wireless Charger",
    price: 13900,
    image: accessoryMonitorRiser,
    description: "Charge your devices seamlessly through desk surface",
    category: "power",
  },
  {
    id: "monitor-riser-90",
    name: "Monitor Riser Stand (90cm)",
    price: 8700,
    image: accessoryMonitorRiser,
    description: "Elevated monitor viewing angle",
    category: "comfort",
  },
  {
    id: "monitor-riser-120",
    name: "Monitor Riser Stand (120cm)",
    price: 9900,
    image: accessoryMonitorRiser,
    description: "Extra space with monitor elevation",
    category: "comfort",
  },
  {
    id: "foot-rest",
    name: "Foot Rest",
    price: 11800,
    image: accessoryFootrest,
    description: "Ergonomic foot support and comfort",
    category: "comfort",
  },
  {
    id: "cup-holder",
    name: "Cup Holder",
    price: 2900,
    image: accessoryMonitorRiser,
    description: "Keep your beverage within reach",
    category: "other",
  },
  {
    id: "caster-wheels",
    name: "High-Quality Caster Wheels",
    price: 3900,
    image: accessoryMonitorRiser,
    description: "Smooth mobility for your desk setup",
    category: "other",
  },
];

/* ─────────────── Component ─────────────── */

function ProductCustomizationPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const allProducts = { ...chairsData, ...desksData };
  const product = allProducts[id];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedAccessories, setSelectedAccessories] = useState<
    Record<string, boolean>
  >({});
  const [selectedUpgrades, setSelectedUpgrades] = useState<
    Record<string, boolean>
  >({});
  const [selectedFrame, setSelectedFrame] = useState<string>(
    product?.category === "desk" ? deskFrameOptions[0].id : chairColorOptions[0].id
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.category === "desk" ? deskSizeOptions[0].id : chairBaseOptions[0].id
  );
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [expandedAccessoryCategory, setExpandedAccessoryCategory] = useState<string | null>("cable-management");

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button variant="gold" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const isDesk = product.category === "desk";

  /* ── Price Calculation ── */
  const frameOption = isDesk 
    ? deskFrameOptions.find((f) => f.id === selectedFrame)
    : chairColorOptions.find((f) => f.id === selectedFrame);
  const sizeOption = isDesk 
    ? deskSizeOptions.find((s) => s.id === selectedSize)
    : chairBaseOptions.find((s) => s.id === selectedSize);
  const frameDelta = frameOption ? frameOption.priceDelta : 0;
  const sizeDelta = sizeOption ? sizeOption.priceDelta : 0;

  const upgradesTotal = Object.entries(selectedUpgrades)
    .filter(([, v]) => v)
    .reduce((sum, [key]) => {
      const opt = chairUpgradeOptions.find((u) => u.id === key);
      return sum + (opt ? opt.priceDelta : 0);
    }, 0);

  const accessoriesTotal = deskAccessories
    .filter((a) => selectedAccessories[a.id])
    .reduce((sum, a) => sum + a.price, 0);

  const unitPrice = product.price + frameDelta + sizeDelta + upgradesTotal + accessoriesTotal;
  const totalPrice = unitPrice * quantity;

  /* ── Summary lines for cart ── */
  const customizationSummary: string[] = [];
  if (isDesk) {
    if (frameOption) customizationSummary.push(`Frame: ${frameOption.label}`);
    if (sizeOption) customizationSummary.push(`Size: ${sizeOption.dimensions}`);
  } else {
    if (frameOption) customizationSummary.push(`Color: ${frameOption.label}`);
    if (sizeOption) customizationSummary.push(`Base: ${sizeOption.label}`);
  }
  const activeUpgrades = chairUpgradeOptions.filter((u) => selectedUpgrades[u.id]);
  if (activeUpgrades.length > 0) customizationSummary.push(`${activeUpgrades.length} upgrade(s)`);
  const activeAccessories = deskAccessories.filter((a) => selectedAccessories[a.id]);
  if (activeAccessories.length > 0) customizationSummary.push(`${activeAccessories.length} add-on(s)`);

  const subtitle = customizationSummary.length > 0
    ? `${product.subtitle || product.color} • ${customizationSummary.join(" · ")}`
    : product.subtitle || product.color;

  /* ── Handlers ── */
  const handleAddToCart = () => {
    const itemId = `${product.id}-custom-${Date.now()}`;
    for (let i = 0; i < quantity; i++) {
      addItem(
        { id: i === 0 ? itemId : `${itemId}-${i}`, name: product.name, subtitle, price: unitPrice, image: product.image },
        false,
      );
    }
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 2500);
  };

  const handleBuyNow = () => {
    const itemId = `${product.id}-custom-${Date.now()}`;
    for (let i = 0; i < quantity; i++) {
      addItem(
        { id: i === 0 ? itemId : `${itemId}-${i}`, name: product.name, subtitle, price: unitPrice, image: product.image },
        false,
      );
    }
    navigate({ to: "/checkout" });
  };

  const nextImage = () => setSelectedImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
  const prevImage = () => setSelectedImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1));

  /* ── Grouped accessories ── */
  const accessoryCategories = [
    { key: "cable-management", label: "Cable Management" },
    { key: "lighting", label: "Lighting" },
    { key: "comfort", label: "Comfort & Ergonomics" },
    { key: "power", label: "Power & Charging" },
    { key: "other", label: "Other Accessories" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-28">
      {/* ===== HEADER BREADCRUMB ===== */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-gold transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>
      </div>

      {/* ===== MAIN PRODUCT & CUSTOMIZATION ===== */}
      <section className="max-w-7xl mx-auto px-4 pt-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ===== LEFT: IMAGE GALLERY ===== */}
          <div className="flex gap-4 lg:sticky lg:top-24">
            {/* Vertical Thumbnail Strip */}
            <div className="flex flex-col gap-2 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-14 h-14 rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-gold ring-1 ring-gold/50"
                      : "border-transparent hover:border-white/30 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* View Gallery */}
              <button
                onClick={() => setShowGallery(!showGallery)}
                className="mt-3 text-gold text-sm font-medium hover:underline transition-colors flex items-center justify-center w-full gap-1"
              >
                View Gallery
              </button>

              {/* Key Features */}
              <div className="mt-4 space-y-1">
                {product.features.slice(0, 3).map((feature) => (
                  <p key={feature} className="text-sm text-muted-foreground text-center">
                    {feature}
                  </p>
                ))}
              </div>

              {/* Specifications Toggle */}
              <button
                onClick={() => setShowSpecs(!showSpecs)}
                className="mt-4 text-gold text-sm font-medium hover:underline transition-colors flex items-center justify-center w-full gap-1"
              >
                View All Specifications
                <ChevronDown className={`w-4 h-4 transition-transform ${showSpecs ? "rotate-180" : ""}`} />
              </button>

              {showSpecs && (
                <div className="mt-3 p-4 bg-surface rounded-lg border border-border animate-fade-in">
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  {product.specs && (
                    <div className="mt-4 pt-3 border-t border-border">
                      {product.specs.map((spec) => (
                        <p key={spec} className="text-sm text-muted-foreground py-1">
                          • {spec}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ===== RIGHT: PRODUCT INFO + CUSTOMIZATION ===== */}
          <div className="space-y-6">
            {/* Product Title & Info */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-1 leading-tight">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-sm mb-4">
                {product.tagline}{" "}
                <Link to="/reviews" className="text-gold hover:underline">
                  Learn More ›
                </Link>
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* ─── CUSTOMIZATION SECTION HEADER ─── */}
            <div className="border-t border-border pt-6">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-gold" />
                </span>
                Customize Your {isDesk ? "Desk" : "Chair"}
              </h2>
              <p className="text-xs text-muted-foreground mb-5">
                Personalize every detail to match your setup and style.
              </p>
            </div>

            {/* ─── DESK & CHAIR: COLOR ─── */}
            <div className="space-y-3">
              <label className="text-sm font-semibold block">
                {isDesk ? "Frame Color" : "Mesh / Fabric Color"}
                {frameOption && frameOption.priceDelta > 0 && (
                  <span className="text-gold text-xs ml-2">+LKR{frameOption.priceDelta.toLocaleString()}</span>
                )}
              </label>
              <div className="flex gap-3">
                {(isDesk ? deskFrameOptions : chairColorOptions).map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedFrame(opt.id)}
                    className={`flex flex-col items-center gap-1.5 group transition-all`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedFrame === opt.id
                          ? "border-gold ring-2 ring-gold/30 scale-110"
                          : "border-border hover:border-white/40"
                      }`}
                      style={{ backgroundColor: opt.colorHex }}
                    >
                      {selectedFrame === opt.id && (
                        <Check className="w-4 h-4 text-gold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]" />
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-medium transition-colors ${
                        selectedFrame === opt.id ? "text-gold" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ─── DESK & CHAIR: SIZE / BASE ─── */}
            <div className="space-y-3">
              <label className="text-sm font-semibold block">
                {isDesk ? "Desk Size" : "Base Material"}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(isDesk ? deskSizeOptions : chairBaseOptions).map((opt: any) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedSize(opt.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedSize === opt.id
                        ? "border-gold bg-gold/5 ring-1 ring-gold/20"
                        : "border-border hover:border-white/30 bg-surface"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{opt.label}</span>
                      {selectedSize === opt.id && <Check className="w-4 h-4 text-gold" />}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {isDesk ? opt.dimensions : opt.description}
                    </p>
                    {opt.priceDelta !== 0 && (
                      <p className={`text-[10px] mt-1 font-medium ${opt.priceDelta > 0 ? "text-gold" : "text-emerald-400"}`}>
                        {opt.priceDelta > 0 ? "+" : ""}LKR{opt.priceDelta.toLocaleString()}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ─── CHAIR: UPGRADES ─── */}
            {!isDesk && (
              <div className="space-y-3">
                <label className="text-sm font-semibold block">Upgrades & Enhancements</label>
                <div className="space-y-2">
                  {chairUpgradeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() =>
                        setSelectedUpgrades((prev) => ({ ...prev, [opt.id]: !prev[opt.id] }))
                      }
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                        selectedUpgrades[opt.id]
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-white/30 bg-surface"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          selectedUpgrades[opt.id]
                            ? "border-gold bg-gold"
                            : "border-muted-foreground"
                        }`}
                      >
                        {selectedUpgrades[opt.id] && (
                          <Check className="w-3 h-3 text-gold-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold">{opt.label}</h4>
                        <p className="text-xs text-muted-foreground">{opt.description}</p>
                      </div>
                      <span className="text-xs font-bold text-gold flex-shrink-0">
                        +LKR{opt.priceDelta.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ─── ADD-ONS & ACCESSORIES ─── */}
            <div className="space-y-3 border-t border-border pt-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold">Add-Ons & Accessories</label>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Info className="w-3 h-3" /> Select items to bundle
                  </span>
                </div>

                <div className="space-y-2">
                  {accessoryCategories.map((cat) => {
                    const items = deskAccessories.filter((a) => a.category === cat.key);
                    if (items.length === 0) return null;
                    const isExpanded = expandedAccessoryCategory === cat.key;
                    const selectedCount = items.filter((a) => selectedAccessories[a.id]).length;

                    return (
                      <div key={cat.key} className="rounded-lg border border-border overflow-hidden">
                        <button
                          onClick={() =>
                            setExpandedAccessoryCategory(isExpanded ? null : cat.key)
                          }
                          className="w-full flex items-center justify-between p-3 hover:bg-surface/50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{cat.label}</span>
                            {selectedCount > 0 && (
                              <span className="text-[10px] bg-gold/15 text-gold px-2 py-0.5 rounded-full font-semibold">
                                {selectedCount} selected
                              </span>
                            )}
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-3 pb-3 space-y-2 animate-fade-in">
                            {items.map((accessory) => (
                              <button
                                key={accessory.id}
                                onClick={() =>
                                  setSelectedAccessories((prev) => ({
                                    ...prev,
                                    [accessory.id]: !prev[accessory.id],
                                  }))
                                }
                                className={`w-full flex items-center gap-3 p-2.5 rounded-lg border text-left transition-all ${
                                  selectedAccessories[accessory.id]
                                    ? "border-gold bg-gold/5"
                                    : "border-border/50 hover:border-white/20 bg-surface/30"
                                }`}
                              >
                                <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-foreground/5">
                                  <img
                                    src={accessory.image}
                                    alt={accessory.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-xs font-semibold leading-tight line-clamp-1">
                                    {accessory.name}
                                  </h4>
                                  <p className="text-[10px] text-muted-foreground line-clamp-1">
                                    {accessory.description}
                                  </p>
                                </div>
                                <div className="text-right flex-shrink-0 flex items-center gap-2">
                                  <p className="text-xs font-bold">
                                    LKR{accessory.price.toLocaleString()}
                                  </p>
                                  {selectedAccessories[accessory.id] && (
                                    <Check className="w-4 h-4 text-gold" />
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            {/* ─── QUANTITY ─── */}
            <div className="space-y-3 border-t border-border pt-6">
              <label className="text-sm font-semibold block">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:border-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:border-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ─── YOUR CONFIGURATION SUMMARY ─── */}
            <div className="rounded-xl border border-border bg-surface/50 p-5 space-y-3">
              <h3 className="text-sm font-bold text-gold">Your Configuration</h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base — {product.name}</span>
                  <span className="font-medium">LKR{product.price.toLocaleString()}</span>
                </div>
                {frameOption && frameOption.priceDelta > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isDesk ? "Frame" : "Color"}: {frameOption.label}</span>
                    <span className="text-gold font-medium">+LKR{frameOption.priceDelta.toLocaleString()}</span>
                  </div>
                )}
                {sizeOption && sizeOption.priceDelta !== 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{isDesk ? "Size" : "Base"}: {sizeOption.label} {isDesk ? `(${sizeOption.dimensions})` : ""}</span>
                    <span className={`font-medium ${sizeOption.priceDelta > 0 ? "text-gold" : "text-emerald-400"}`}>
                      {sizeOption.priceDelta > 0 ? "+" : ""}LKR{sizeOption.priceDelta.toLocaleString()}
                    </span>
                  </div>
                )}
                {activeUpgrades.map((u) => (
                  <div key={u.id} className="flex justify-between">
                    <span className="text-muted-foreground">{u.label}</span>
                    <span className="text-gold font-medium">+LKR{u.priceDelta.toLocaleString()}</span>
                  </div>
                ))}
                {activeAccessories.map((a) => (
                  <div key={a.id} className="flex justify-between">
                    <span className="text-muted-foreground">{a.name}</span>
                    <span className="font-medium">+LKR{a.price.toLocaleString()}</span>
                  </div>
                ))}
                {quantity > 1 && (
                  <div className="flex justify-between pt-1 text-muted-foreground">
                    <span>× {quantity}</span>
                    <span></span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-border text-sm font-bold">
                  <span>Total</span>
                  <span>LKR{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* ─── TRUST BADGES ─── */}
            <div className="flex items-center justify-start gap-8 py-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Package className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-[10px] text-muted-foreground leading-tight">
                  Next Business<br />Day Shipping
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-[10px] text-muted-foreground leading-tight">
                  Risk Free<br />Return
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-[10px] text-muted-foreground leading-tight">
                  Comprehensive<br />Customer Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY OVERLAY ===== */}
      {showGallery && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setShowGallery(false)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Product Gallery</h3>
              <button
                onClick={() => setShowGallery(false)}
                className="text-muted-foreground hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-gold transition-all"
                  onClick={() => {
                    setSelectedImage(idx);
                    setShowGallery(false);
                  }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== STICKY BOTTOM BAR ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            {/* Left: Delivery */}
            <div className="hidden md:flex items-center gap-6 text-xs">
              <div className="border-l border-border pl-4">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Order now,</span> delivered by:
                    </p>
                    <p className="text-foreground font-medium">2-3 Business Days</p>
                    <button className="text-gold hover:underline text-[10px] mt-0.5">
                      View Delivery Options
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-l border-border pl-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Pickup</span> available
                    </p>
                    <p className="text-foreground font-medium">Colombo Showroom</p>
                    <button className="text-gold hover:underline text-[10px] mt-0.5">
                      View Location
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Price + Buttons */}
            <div className="flex items-center gap-4 ml-auto">
              <div className="text-right">
                <p className="text-2xl lg:text-3xl font-bold">LKR{totalPrice.toLocaleString()}</p>
                {(activeAccessories.length > 0 || activeUpgrades.length > 0) && (
                  <p className="text-[10px] text-gold">
                    Customized configuration
                  </p>
                )}
                {product.originalPrice && (
                  <p className="text-xs text-muted-foreground line-through">
                    LKR{product.originalPrice.toLocaleString()}
                  </p>
                )}
              </div>

              <Button
                variant="gold"
                size="lg"
                className="px-8 h-12 text-sm font-bold tracking-wide"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {showAddedNotification && (
        <div className="fixed bottom-24 right-4 z-50 bg-gold text-gold-foreground px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4" />
          <span>Added to cart!</span>
        </div>
      )}
    </div>
  );
}
