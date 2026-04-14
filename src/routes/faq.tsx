import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Search, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Ergo Base Sri Lanka" },
      { name: "description", content: "Find answers to common questions about Ergo Base standing desks, shipping, warranty, and customization." },
      { property: "og:title", content: "Frequently Asked Questions — Ergo Base" },
      { property: "og:description", content: "Everything you need to know about Ergo Base standing desks." },
    ],
  }),
  component: FaqPage,
});

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  { category: "Product", question: "What is the weight capacity of the Pro Station?", answer: "The Pro Station standing desk supports up to 120kg evenly distributed. This comfortably handles multiple monitors, a desktop PC, speakers, and all your peripherals without any wobble or strain on the motors." },
  { category: "Product", question: "How fast does the desk go up and down?", answer: "The dual motor system raises or lowers the desk at 38mm per second — one of the fastest in its class. Going from sitting to standing height takes approximately 8 seconds." },
  { category: "Product", question: "What sizes are available?", answer: "We offer tabletop sizes of 120×60cm, 140×70cm, and 160×80cm. Custom sizes can be requested through our Customization Studio for an additional lead time of 5-7 business days." },
  { category: "Product", question: "What wood/material options are available?", answer: "We offer premium Teak, Mahogany, and MDF (White) tabletops. All wood tops are finished with a scratch-resistant, water-repellent coating. The MDF option features a smooth matte white laminate." },
  { category: "Product", question: "Does the desk have memory presets?", answer: "Yes! The digital control panel includes 4 programmable height presets. Set your preferred sitting and standing heights once, then switch with a single touch." },
  { category: "Product", question: "Does the desk have anti-collision protection?", answer: "Yes, all Pro Station desks include built-in anti-collision sensors. If the desk detects an obstruction while moving, it automatically stops and reverses slightly to prevent damage." },
  { category: "Ordering", question: "How do I place an order?", answer: "You can order directly through our website by clicking 'Buy Now' on any product, or contact us via WhatsApp at +94 77 721 2199 for personalized assistance. We also accept orders through our Facebook page." },
  { category: "Ordering", question: "What payment methods do you accept?", answer: "We accept credit/debit cards (Visa, Mastercard), bank transfers, and cash on delivery within Colombo and suburbs. For bank transfers, order confirmation is sent after payment verification." },
  { category: "Ordering", question: "Can I customize my desk?", answer: "Absolutely! Visit our Customization Studio to choose your tabletop material, size, frame color, and add accessories. Custom orders take 7-10 business days to manufacture." },
  { category: "Shipping", question: "Do you deliver island-wide?", answer: "Yes, we deliver across all of Sri Lanka. Colombo and suburbs enjoy free delivery. Outstation delivery fees vary by location — contact us for a quote. All desks are delivered fully assembled." },
  { category: "Shipping", question: "How long does delivery take?", answer: "Standard orders ship within 3-5 business days within Colombo. Outstation deliveries take 5-7 business days. Custom orders require an additional 5-7 days for manufacturing." },
  { category: "Shipping", question: "Is assembly included?", answer: "Yes! All desk deliveries include free professional assembly. Our team will set up your desk, test all functions, and walk you through the controls. Assembly typically takes 20-30 minutes." },
  { category: "Warranty", question: "What warranty do you offer?", answer: "All Ergo Base desks come with a comprehensive warranty: 5 years on the frame and structure, 3 years on the motor and electronics, and 1 year on the tabletop finish. See our Warranty page for full details." },
  { category: "Warranty", question: "What does the warranty cover?", answer: "The warranty covers manufacturing defects, motor failures, electronic malfunctions, and structural issues under normal use. It does not cover damage from misuse, accidents, or unauthorized modifications." },
  { category: "Warranty", question: "How do I make a warranty claim?", answer: "Contact us via WhatsApp or email with your order number, a description of the issue, and photos. Our support team will respond within 24 hours and arrange repair or replacement if applicable." },
  { category: "Support", question: "Do you offer a free consultation?", answer: "Yes! Book a free ergonomic consultation with our workspace experts. We'll help you choose the right desk size, tabletop material, and accessories based on your specific needs and workspace." },
  { category: "Support", question: "How do I contact customer support?", answer: "Reach us via WhatsApp at +94 77 721 2199 (fastest), email at hello@ergobase.lk, or through our Facebook page. Our support hours are Monday to Saturday, 9 AM to 6 PM." },
  { category: "Support", question: "Can I visit a showroom?", answer: "Yes! Visit our workshop and showroom in Ratmalana to see and test our desks in person. Please book an appointment via WhatsApp so we can give you our full attention." },
];

const faqCategories = ["All", "Product", "Ordering", "Shipping", "Warranty", "Support"];

function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = faqs.filter((faq) => {
    const matchesCat = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-card border-b border-border py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground">Everything you need to know about Ergo Base</p>
          <div className="relative max-w-md mx-auto mt-8">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setOpenIndex(null); }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${selectedCategory === cat ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((faq, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown size={16} className={`text-muted-foreground shrink-0 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16"><p className="text-muted-foreground">No matching questions found.</p></div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center bg-card border border-border rounded-2xl p-10">
          <MessageCircle size={32} className="mx-auto text-gold" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">Still Have Questions?</h2>
          <p className="mt-2 text-muted-foreground">Our team is here to help</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/94777212199" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-gold text-gold-foreground px-8 py-3 text-sm font-semibold tracking-wider hover:brightness-110 transition-all">
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-border text-foreground px-8 py-3 text-sm font-semibold tracking-wider hover:bg-accent transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
