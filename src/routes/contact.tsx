import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

import proStationHero from "@/assets/pro-station-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ergo Base Sri Lanka" },
      { name: "description", content: "Get in touch with Ergo Base. Visit our Ratmalana showroom, call, WhatsApp, or send us a message." },
      { property: "og:title", content: "Contact Us — Ergo Base" },
      { property: "og:description", content: "Reach out to Ergo Base for orders, support, or showroom visits." },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  { icon: <MapPin size={20} />, label: "Showroom & Workshop", value: "Ratmalana, Sri Lanka", note: "Visit by appointment" },
  { icon: <Phone size={20} />, label: "Phone / WhatsApp", value: "+94 77 721 2199", href: "tel:+94777212199" },
  { icon: <Mail size={20} />, label: "Email", value: "hello@ergobase.lk", href: "mailto:hello@ergobase.lk" },
  { icon: <Clock size={20} />, label: "Business Hours", value: "Mon – Sat, 9 AM – 6 PM", note: "Closed on Sundays & Poya days" },
];

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = `Hi Ergo Base!%0A%0A*${formData.subject}*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0A${formData.message}`;
    window.open(`https://wa.me/94777212199?text=${text}`, "_blank");
    setSubmitted(true);
  };

  const updateField = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src={proStationHero}
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">We'd love to hear from you. Reach out anytime.</p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/10 text-gold shrink-0">{info.icon}</div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-foreground hover:text-gold transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{info.value}</p>
                    )}
                    {info.note && <p className="text-xs text-muted-foreground mt-0.5">{info.note}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp */}
            <a
              href="https://wa.me/94777212199"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-gold/30 transition-colors"
            >
              <MessageCircle size={20} className="text-whatsapp" />
              <div>
                <p className="text-sm font-medium text-foreground">Fastest Response</p>
                <p className="text-xs text-muted-foreground">Chat with us on WhatsApp — usually reply within minutes</p>
              </div>
            </a>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin size={24} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Ratmalana, Sri Lanka</p>
                <a
                  href="https://maps.google.com/?q=Ratmalana+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold hover:underline mt-1 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Message Sent!</h2>
                <p className="mt-2 text-muted-foreground">We've opened WhatsApp with your message. Our team typically responds within 1 hour during business hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-gold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
                <h2 className="text-xl font-bold text-foreground">Send a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name *</label>
                    <input required value={formData.name} onChange={(e) => updateField("name", e.target.value)} className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email *</label>
                    <input required type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30" placeholder="you@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Phone</label>
                    <input value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30" placeholder="+94 7X XXX XXXX" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject</label>
                    <select value={formData.subject} onChange={(e) => updateField("subject", e.target.value)} className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/30">
                      <option>General Inquiry</option>
                      <option>Product Question</option>
                      <option>Order Status</option>
                      <option>Warranty Claim</option>
                      <option>Corporate Order</option>
                      <option>Showroom Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message *</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => updateField("message", e.target.value)} className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none" placeholder="How can we help?" />
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold text-gold-foreground px-8 py-3 text-sm font-semibold tracking-wider hover:brightness-110 transition-all">
                  <Send size={16} /> Send via WhatsApp
                </button>
                <p className="text-xs text-center text-muted-foreground">This opens WhatsApp with your pre-filled message</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
