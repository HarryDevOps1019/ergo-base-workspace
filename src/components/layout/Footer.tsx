

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Showroom", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Corporate Sales", href: "/corporate" },
  ],
  info: [
    { label: "FAQ", href: "/faq" },
    { label: "Warranty", href: "/warranty" },
    { label: "User Manual", href: "/manual" },
    { label: "Blog", href: "/blog" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-wider text-foreground">ERGO BASE</span>
              <span className="block text-xs tracking-[0.3em] text-gold mt-1">PRO STATION</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Sri Lanka's most scientifically engineered standing desk. Crafted in Ratmalana with premium materials and dual-motor precision.
            </p>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground mb-3 tracking-wider uppercase">Sign up for exclusive offers</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-background border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <button className="bg-gold text-gold-foreground px-4 py-2 rounded text-xs font-semibold tracking-wider hover:brightness-110 transition cursor-pointer">
                  JOIN
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-foreground mb-4">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-foreground mb-4">INFORMATION</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((social) => (
              <a key={social} href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors tracking-wider">
                {social}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center">
            🇱🇰 CRAFTED IN RATMALANA, SRI LANKA — © 2025 ERGO BASE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
