import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowLeft, CreditCard, Banknote, Building2 } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Ergo Base" },
      { name: "description", content: "Complete your Ergo Base order. Secure checkout with multiple payment options." },
    ],
  }),
  component: CheckoutPage,
});

type PaymentMethod = "card" | "bank" | "cod";

function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [submitted, setSubmitted] = useState(false);

  const shipping = totalPrice >= 50000 ? 0 : 2500;
  const grandTotal = totalPrice + shipping;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-2">Thank you for your purchase. We'll contact you within 24 hours to confirm delivery details.</p>
          <p className="text-sm text-muted-foreground mb-8">Order total: <span className="text-gold font-bold">LKR {grandTotal.toLocaleString()}</span></p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/">BACK TO HOME</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <Button variant="gold" size="lg" asChild>
            <Link to="/products">BROWSE PRODUCTS</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold mb-10">CHECKOUT</h1>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact */}
            <div>
              <h2 className="text-xs tracking-[0.2em] text-gold font-semibold mb-4">CONTACT INFORMATION</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input placeholder="First Name *" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                <input placeholder="Last Name *" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                <input placeholder="Email *" type="email" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                <input placeholder="Phone *" type="tel" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
              </div>
            </div>

            {/* Shipping */}
            <div>
              <h2 className="text-xs tracking-[0.2em] text-gold font-semibold mb-4">SHIPPING ADDRESS</h2>
              <div className="space-y-4">
                <input placeholder="Address Line 1 *" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                <input placeholder="Address Line 2" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="City *" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                  <input placeholder="Postal Code" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-xs tracking-[0.2em] text-gold font-semibold mb-4">PAYMENT METHOD</h2>
              <div className="space-y-3">
                {[
                  { id: "card" as const, label: "Credit / Debit Card", desc: "Visa, Mastercard, Amex", icon: CreditCard },
                  { id: "bank" as const, label: "Bank Transfer", desc: "Direct bank deposit", icon: Building2 },
                  { id: "cod" as const, label: "Cash on Delivery", desc: "Pay when you receive", icon: Banknote },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                      paymentMethod === method.id
                        ? "border-gold bg-gold/5"
                        : "border-border bg-surface hover:border-gold/30"
                    }`}
                  >
                    <method.icon className={`w-5 h-5 ${paymentMethod === method.id ? "text-gold" : "text-muted-foreground"}`} />
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">{method.label}</p>
                      <p className="text-xs text-muted-foreground">{method.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              {paymentMethod === "card" && (
                <div className="mt-4 space-y-4">
                  <input placeholder="Card Number *" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                  <div className="grid grid-cols-2 gap-4">
                    <input placeholder="MM / YY *" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                    <input placeholder="CVV *" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                  </div>
                  <input placeholder="Name on Card *" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold" />
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="mt-4 bg-surface border border-border rounded-xl p-5">
                  <p className="text-sm text-foreground font-semibold mb-2">Bank Transfer Details</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Bank: <span className="text-foreground">Commercial Bank PLC</span></p>
                    <p>Account: <span className="text-foreground">Ergo Base (Pvt) Ltd</span></p>
                    <p>A/C No: <span className="text-foreground">1234567890</span></p>
                    <p>Branch: <span className="text-foreground">Ratmalana</span></p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Upload your payment receipt after placing the order.</p>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-surface border border-border rounded-xl p-6 sticky top-24">
              <h2 className="text-xs tracking-[0.2em] text-gold font-semibold mb-4">ORDER SUMMARY</h2>

              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-foreground whitespace-nowrap">LKR {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">LKR {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">{shipping === 0 ? "FREE" : `LKR ${shipping.toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold border-t border-border pt-3 mt-3">
                  <span className="text-foreground">Total</span>
                  <span className="text-gold">LKR {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <Button
                variant="gold"
                size="lg"
                className="w-full mt-6"
                onClick={() => {
                  clearCart();
                  setSubmitted(true);
                }}
              >
                PLACE ORDER — LKR {grandTotal.toLocaleString()}
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                Secure checkout • 5-year warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
