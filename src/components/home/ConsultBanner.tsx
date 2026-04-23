import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "94777212199";

export function ConsultBanner() {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Book a Free Workspace Call</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Schedule a 1:1 call or WhatsApp chat with our ergonomics team. We'll help you choose the right desk size, configuration, and accessories for your space and body. 100% free — no purchase required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Button variant="whatsapp" size="xl" asChild>
             <a
               href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I'd%20like%20to%20book%20a%20free%20workspace%20consultation.`}
               target="_blank"
               rel="noopener noreferrer"
             >
               BOOK NOW
             </a>
           </Button>
         </div>
      </div>
    </section>
  );
}
