import { Palette, MessageSquareText, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Palette,
    step: "01",
    title: "We build a free demo",
    desc: "Tell us about your business and we'll create a custom demo website — completely free, no strings attached.",
  },
  {
    icon: MessageSquareText,
    step: "02",
    title: "You review & refine",
    desc: "Review the demo, request any changes. We work with you until it's exactly what you want.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "We launch & grow",
    desc: "We launch your website and set up everything to help you start getting more customers immediately.",
  },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest accent-text mb-3">
            How It Works
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight">
            Simple. Fast. Effective.
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((s, i) => (
          <AnimatedSection key={s.step} delay={i * 0.15}>
            <div className="relative text-center lg:text-left">
              <span className="font-heading text-6xl lg:text-7xl font-extrabold text-muted/60 absolute -top-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 select-none">
                {s.step}
              </span>
              <div className="relative pt-12">
                <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mx-auto lg:mx-0 mb-5">
                  <s.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
