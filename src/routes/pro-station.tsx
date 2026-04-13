import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

import heroImg from "@/assets/pro-station-hero.jpg";
import detailMotor from "@/assets/detail-motor.jpg";
import detailWood from "@/assets/detail-wood.jpg";
import detailPanel from "@/assets/detail-panel.jpg";
import detailCables from "@/assets/detail-cables.jpg";
import detailFrame from "@/assets/detail-frame.jpg";
import deskMahogany from "@/assets/desk-mahogany.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskTeak from "@/assets/desk-teak.jpg";

const WHATSAPP_NUMBER = "94777212199";

const galleryImages = [
  { src: heroImg, alt: "Pro Station standing desk full view" },
  { src: detailMotor, alt: "Dual motor system close-up" },
  { src: detailWood, alt: "Premium mahogany wood grain" },
  { src: detailPanel, alt: "Height control panel" },
  { src: detailCables, alt: "Cable management tray" },
  { src: detailFrame, alt: "Steel frame base" },
  { src: deskMahogany, alt: "Mahogany top configuration" },
  { src: deskWhite, alt: "MDF white top configuration" },
  { src: deskTeak, alt: "Teak top configuration" },
];

const specs = [
  { label: "Motor System", value: "Dual motors — ultra-quiet operation" },
  { label: "Lifting Capacity", value: "Up to 120 kg" },
  { label: "Height Range", value: "60 cm – 127 cm (3-stage columns)" },
  { label: "Table Top Options", value: "MDF / Mahogany / Teak solid wood" },
  { label: "Customization", value: "Any size, any color — same price" },
  { label: "Warranty", value: "5-Year Full Warranty" },
  { label: "Base Price", value: "LKR 138,500" },
];

const features = [
  {
    title: "Dual Motor System",
    description: "Two ultra-quiet motors work in perfect synchronization to deliver smooth, powerful height adjustment. No wobble, no lag — just effortless transitions between sitting and standing positions at the touch of a button.",
    image: detailMotor,
  },
  {
    title: "Premium Wood Tops",
    description: "Choose from MDF, Mahogany, or Teak solid wood — all at the same price. Each top is hand-finished with a protective coating that resists scratches, heat, and moisture for years of daily use.",
    image: detailWood,
  },
  {
    title: "Precision Height Control",
    description: "The digital LED control panel lets you set your exact height with centimeter-level precision. Save up to 4 memory presets for instant transitions between your ideal sitting and standing positions.",
    image: detailPanel,
  },
  {
    title: "Integrated Cable Management",
    description: "A large under-desk cable tray keeps all your cords organized and hidden. Power strips, chargers, and adapters stay tucked away — your workspace looks clean from every angle.",
    image: detailCables,
  },
  {
    title: "Industrial-Grade Frame",
    description: "Heavy-duty steel T-frame construction with 3-stage lifting columns provides rock-solid stability at any height. Adjustable leveling feet ensure a perfectly stable surface, even on uneven floors.",
    image: detailFrame,
  },
];

const accessories = [
  { name: "Large Cable Tray Grove (4–6 ft)", price: "16,850" },
  { name: "PDU (8 Universal Sockets, 3m Cable)", price: "8,900" },
  { name: "Table Lamp — 15W", price: "13,900" },
  { name: "Table Lamp — 24W", price: "16,900" },
  { name: "High-Quality Caster Wheels", price: "3,900" },
  { name: "KPON Invisible Wireless Charger", price: "13,900" },
  { name: "Monitor Riser Stand — 90cm", price: "8,700" },
  { name: "Monitor Riser Stand — 120cm", price: "9,900" },
  { name: "Foot Rest", price: "11,800" },
  { name: "Cup Holder", price: "2,900" },
];

const comparisonData = [
  { feature: "Motor System", pro: "Dual Motor", generic: "Single Motor" },
  { feature: "Load Capacity", pro: "120 kg", generic: "50-70 kg" },
  { feature: "Height Range", pro: "60–127 cm", generic: "70–120 cm" },
  { feature: "Wood Options", pro: "MDF / Mahogany / Teak", generic: "MDF Only" },
  { feature: "Custom Sizes", pro: "Any size, same price", generic: "Fixed sizes only" },
  { feature: "Warranty", pro: "5 Years", generic: "1 Year" },
  { feature: "Cable Management", pro: "Included", generic: "Sold separately" },
  { feature: "Frame Stability", pro: "Industrial T-frame", generic: "Basic frame" },
];

export const Route = createFileRoute("/pro-station")({
  head: () => ({
    meta: [
      { title: "Pro Station Standing Desk — Ergo Base | LKR 138,500" },
      { name: "description", content: "Dual motor, 120kg capacity, premium wood tops. Sri Lanka's most scientifically engineered height-adjustable standing desk. Starting at LKR 138,500." },
      { property: "og:title", content: "Pro Station Standing Desk — Ergo Base" },
      { property: "og:description", content: "Dual motor, 120kg capacity, premium wood tops. Your workspace, your rules." },
    ],
  }),
  component: ProStationPage,
});

function ProStationPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const handleAddToCart = () => {
    addItem({ id: "pro-station-standard", name: "Pro Station — Standard", subtitle: "Dual Motor Standing Desk", price: 138500, image: heroImg });
  };

  const handleBuyNow = () => {
    addItem({ id: "pro-station-standard", name: "Pro Station — Standard", subtitle: "Dual Motor Standing Desk", price: 138500, image: heroImg }, false);
    navigate({ to: "/checkout" });
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Pro Station Standing Desk" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.2em] text-gold font-medium">FLAGSHIP STANDING DESK</span>
            <h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-tight leading-[0.9]">
              PRO<br />STATION
            </h1>
            <p className="mt-6 text-xl text-silver">Your workspace. Your rules.</p>
            <p className="mt-2 text-3xl font-bold text-gold">LKR 138,500</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" onClick={handleBuyNow}>
                BUY NOW
              </Button>
              <Button variant="outline" size="xl" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5 mr-2" /> ADD TO CART
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-gold" /> 5-Year Warranty</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-gold" /> 60-Day Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-background">
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/60 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background/80 transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/60 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background/80 transition cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition cursor-pointer ${i === currentImage ? "bg-gold" : "bg-foreground/30"}`}
                />
              ))}
            </div>
          </div>
          {/* Thumbnails */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition cursor-pointer ${i === currentImage ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={80} height={56} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.2em] text-gold font-medium">TECHNICAL SPECIFICATIONS</span>
            <h2 className="mt-3 text-4xl font-bold">Built to Perform</h2>
          </div>
          <div className="border border-border rounded-xl overflow-hidden">
            {specs.map((spec, i) => (
              <div key={spec.label} className={`flex items-center justify-between px-6 py-5 ${i !== specs.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-surface" : "bg-background"}`}>
                <span className="text-sm font-medium text-muted-foreground">{spec.label}</span>
                <span className={`text-sm font-semibold ${spec.label === "Base Price" ? "text-gold text-lg" : "text-foreground"}`}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dives */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] text-gold font-medium">ENGINEERED EXCELLENCE</span>
            <h2 className="mt-3 text-4xl font-bold">Every Detail, Perfected</h2>
          </div>
          <div className="space-y-24">
            {features.map((feature, i) => (
              <div key={feature.title} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-xl shadow-2xl"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.2em] text-gold font-medium">COMPARISON</span>
            <h2 className="mt-3 text-4xl font-bold">Pro Station vs. Generic Desks</h2>
          </div>
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-surface/80 border-b border-border">
              <div className="px-6 py-4 text-sm font-semibold text-muted-foreground">Feature</div>
              <div className="px-6 py-4 text-sm font-semibold text-gold text-center">Pro Station</div>
              <div className="px-6 py-4 text-sm font-semibold text-muted-foreground text-center">Generic Desks</div>
            </div>
            {comparisonData.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 ${i !== comparisonData.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-background" : "bg-surface"}`}>
                <div className="px-6 py-4 text-sm text-foreground font-medium">{row.feature}</div>
                <div className="px-6 py-4 text-sm text-gold font-semibold text-center">{row.pro}</div>
                <div className="px-6 py-4 text-sm text-muted-foreground text-center">{row.generic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.2em] text-gold font-medium">COMPLETE YOUR SETUP</span>
            <h2 className="mt-3 text-4xl font-bold">Accessories & Add-Ons</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {accessories.map((item) => (
              <div key={item.name} className="flex items-center justify-between bg-background border border-border rounded-xl px-5 py-4">
                <span className="text-sm text-foreground">{item.name}</span>
                <span className="text-sm font-semibold text-gold whitespace-nowrap ml-4">LKR {item.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/accessories">VIEW ALL ACCESSORIES →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Two Config Options */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-10 text-center bg-surface">
              <h3 className="text-xl font-bold">Standard Pro Station</h3>
              <p className="mt-2 text-sm text-muted-foreground">Same-day quote</p>
              <p className="mt-4 text-3xl font-bold text-gold">LKR 138,500</p>
              <div className="mt-8 space-y-3">
                <Button variant="gold" size="lg" className="w-full" onClick={handleBuyNow}>
                  BUY NOW
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={handleAddToCart}>
                  <ShoppingCart className="w-4 h-4 mr-2" /> ADD TO CART
                </Button>
              </div>
            </div>
            <div className="border-2 border-gold rounded-xl p-10 text-center bg-surface">
              <h3 className="text-xl font-bold">Custom Pro Station</h3>
              <p className="mt-2 text-sm text-muted-foreground">Built to your specs</p>
              <p className="mt-4 text-3xl font-bold text-gold">Starting at 138,500</p>
              <Button variant="gold" size="lg" className="w-full mt-8" asChild>
                <Link to="/customizer">CUSTOMIZE YOURS →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-10 h-10 text-gold mx-auto" />
              <h4 className="mt-3 font-semibold">5-Year Full Warranty</h4>
              <p className="mt-1 text-sm text-muted-foreground">Sri Lanka's strongest ergonomic desk guarantee</p>
            </div>
            <div>
              <Check className="w-10 h-10 text-gold mx-auto" />
              <h4 className="mt-3 font-semibold">60-Day Satisfaction</h4>
              <p className="mt-1 text-sm text-muted-foreground">Love it or we'll make it right</p>
            </div>
            <div>
              <svg className="w-10 h-10 text-gold mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <h4 className="mt-3 font-semibold">WhatsApp Support</h4>
              <p className="mt-1 text-sm text-muted-foreground">Chat with our team anytime — 0777 21 21 99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
