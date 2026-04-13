import { Globe, CalendarCheck, TrendingUp, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "Conversion-focused websites that turn visitors into paying customers. Clean, fast, and built to perform.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    desc: "Let customers book appointments 24/7. Automated scheduling means fewer missed calls and more revenue.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    desc: "Strategic forms, CTAs, and funnels designed to capture leads and grow your customer base on autopilot.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Contact",
    desc: "One-tap WhatsApp chat, click-to-call, and contact forms. Make it effortless for customers to reach you.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-alt">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest accent-text mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight">
            Everything you need to grow online
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 h-full group">
              <div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center mb-5">
                <s.icon size={22} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
