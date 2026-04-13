import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "James R.",
    role: "Owner, SparkElectric",
    text: "Velmora built us a website that actually brings in customers. We went from 2-3 calls a week to 15+. Best investment we've made.",
  },
  {
    name: "Maria L.",
    role: "Manager, CleanRide",
    text: "Our bookings doubled within the first month. The website looks amazing and our customers love how easy it is to book online.",
  },
  {
    name: "David K.",
    role: "Owner, GreenScape",
    text: "Professional, fast, and they actually care about results. The demo they built for us was so good we launched it the same week.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest accent-text mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight">
            What our clients say
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 lg:p-8 border border-border h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-heading font-bold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
