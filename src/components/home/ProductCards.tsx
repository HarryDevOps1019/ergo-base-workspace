import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import deskMahogany from "@/assets/desk-mahogany.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskTeak from "@/assets/desk-teak.jpg";

const products = [
  {
    id: "mahogany-black",
    name: "Pro Station — Mahogany Top",
    frame: "Standard Black Frame",
    price: "LKR 138,500",
    priceValue: 138500,
    image: deskMahogany,
  },
  {
    id: "mdf-white-silver",
    name: "Pro Station — MDF White Top",
    frame: "Silver Frame",
    price: "LKR 138,500",
    priceValue: 138500,
    image: deskWhite,
  },
  {
    id: "teak-custom",
    name: "Pro Station — Teak Top",
    frame: "Custom Size Available",
    price: "LKR 138,500",
    priceValue: 138500,
    image: deskTeak,
  },
];

export function ProductCards() {
  const { addItem } = useCart();
  const navigate = useNavigate();

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
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="gold"
                    className="flex-1"
                    onClick={() => {
                      navigate({ to: `/product/${product.id}` });
                    }}
                  >
                    BUY NOW
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => addItem({ id: product.id, name: product.name, subtitle: product.frame, price: product.priceValue, image: product.image })}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" /> ADD
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Two Config Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Standard Pro Station</h3>
            <p className="text-sm text-muted-foreground mb-4">Same-day Quote</p>
            <p className="text-2xl font-bold text-gold mb-6">LKR 138,500</p>
            <div className="space-y-3">
              <Button
                variant="gold"
                size="lg"
                className="w-full"
                onClick={() => {
                  navigate({ to: "/product/mahogany-black" });
                }}
              >
                BUY NOW
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => addItem({ id: "pro-station-standard", name: "Pro Station — Standard", subtitle: "Dual Motor Standing Desk", price: 138500, image: deskMahogany })}
              >
                <ShoppingCart className="w-4 h-4 mr-2" /> ADD TO CART
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
