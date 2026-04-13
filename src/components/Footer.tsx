const Footer = () => (
  <footer className="hero-section border-t border-hero-foreground/10">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-12 lg:py-16">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <a href="#" className="font-heading font-extrabold text-xl text-hero-foreground">
            Velmora<span className="accent-text">.</span>
          </a>
          <p className="text-hero-muted text-sm mt-3 leading-relaxed max-w-xs">
            We build high-converting websites for service businesses. More customers, more growth.
          </p>
        </div>

        <div>
          <p className="font-heading font-bold text-sm text-hero-foreground mb-4">Quick Links</p>
          <div className="flex flex-col gap-2">
            {["Services", "How It Works", "Portfolio", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/ /g, "")}`}
                className="text-sm text-hero-muted hover:text-hero-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-heading font-bold text-sm text-hero-foreground mb-4">Contact</p>
          <div className="flex flex-col gap-2 text-sm text-hero-muted">
            <span>hello@velmora.com</span>
            <span>+27 79 130 8076</span>
          </div>
        </div>
      </div>

      <div className="border-t border-hero-foreground/10 mt-10 pt-6 text-center text-xs text-hero-muted">
        © {new Date().getFullYear()} Velmora. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
