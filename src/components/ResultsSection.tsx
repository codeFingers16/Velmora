import { Phone, Calendar, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const results = [
  { icon: Phone, stat: "3x", label: "More Calls", desc: "Our clients see an average 3x increase in phone inquiries within the first month." },
  { icon: Calendar, stat: "2x", label: "More Bookings", desc: "Automated booking systems mean customers can schedule anytime — even while you sleep." },
  { icon: Globe, stat: "24/7", label: "Online Presence", desc: "Your business shows up, looks professional, and converts — around the clock." },
];

const ResultsSection = () => (
  <section className="section-padding hero-section">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest accent-text mb-3">
            Results
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight text-hero-foreground">
            Websites that actually work
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {results.map((r, i) => (
          <AnimatedSection key={r.label} delay={i * 0.1}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-5">
                <r.icon size={28} className="text-accent-foreground" />
              </div>
              <p className="font-heading text-4xl lg:text-5xl font-extrabold accent-text mb-2">
                {r.stat}
              </p>
              <p className="font-heading font-bold text-lg text-hero-foreground mb-2">
                {r.label}
              </p>
              <p className="text-hero-muted text-sm leading-relaxed max-w-xs mx-auto">
                {r.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
