import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "94777212199";

const navItems = [
  {
    label: "THE DESK",
    children: [
      { label: "Pro Station (Home & Office)", href: "/pro-station" },
      { label: "Corporate Solutions", href: "/corporate" },
      { label: "Accessories & Add-Ons", href: "/accessories" },
      { label: "Customization Studio", href: "/customizer" },
    ],
  },
  {
    label: "THE SCIENCE",
    children: [
      { label: "Research & Evidence", href: "/the-science" },
      { label: "Sit-Stand Science", href: "/the-science" },
      { label: "Our Story", href: "/about" },
    ],
  },
  {
    label: "PAIN RELIEF",
    children: [
      { label: "Lower Back Pain", href: "/pain-relief/lower-back-pain" },
      { label: "Neck Pain", href: "/pain-relief/neck-pain" },
      { label: "Poor Posture", href: "/pain-relief/poor-posture" },
      { label: "Hip Pain", href: "/pain-relief/hip-pain" },
      { label: "Wrist Strain", href: "/pain-relief/wrist-strain" },
      { label: "Leg Fatigue", href: "/pain-relief/leg-fatigue" },
    ],
  },
  { label: "REVIEWS", href: "/reviews" },
  {
    label: "RESOURCES",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "User Manual", href: "/manual" },
      { label: "Warranty", href: "/warranty" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gold text-gold-foreground text-center py-2 px-4 text-xs font-semibold tracking-widest">
        <span className="hidden sm:inline">📞 FREE WORKSPACE CONSULT — TALK TO OUR ERGONOMICS EXPERT BEFORE YOU BUY</span>
        <span className="sm:hidden">📞 FREE WORKSPACE CONSULT</span>
        <Link to="/consult" className="ml-3 underline underline-offset-2 hover:no-underline">
          BOOK NOW
        </Link>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-wider text-foreground">ERGO BASE</span>
              <span className="text-[10px] tracking-[0.3em] text-gold">PRO STATION</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-xs font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-1 px-3 py-2 text-xs font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  )}

                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 w-56 bg-surface border border-border rounded-lg shadow-2xl py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <Search className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex p-2 text-whatsapp hover:text-whatsapp/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <ShoppingCart className="w-4 h-4" />
              </button>
              <Button variant="gold" size="sm" className="hidden sm:inline-flex" asChild>
                <Link to="/pro-station">SHOP NOW</Link>
              </Button>
              <button
                className="lg:hidden p-2 text-foreground cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-t border-border animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block px-3 py-3 text-sm font-medium tracking-wider text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium tracking-wider text-foreground cursor-pointer"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.label && item.children && (
                        <div className="pl-6 space-y-1">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <Link to="/pro-station" onClick={() => setMobileMenuOpen(false)}>SHOP NOW</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
