import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 hero-section border-b border-hero-foreground/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-16 h-16 lg:h-20">
        <a href="#" className="font-heading font-extrabold text-xl lg:text-2xl tracking-tight text-hero-foreground">
          Velmora<span className="accent-text">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-hero-muted hover:text-hero-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="accent-gradient text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get a Free Demo
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-hero-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden hero-section overflow-hidden border-t border-hero-foreground/10"
          >
            <div className="flex flex-col gap-4 px-5 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-hero-muted hover:text-hero-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="accent-gradient text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-lg text-center mt-2"
              >
                Get a Free Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
