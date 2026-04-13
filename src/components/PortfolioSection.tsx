import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import demoElectrician from "@/assets/demo-electrician.jpg";
import demoCarwash from "@/assets/demo-carwash.jpg";
import demoLandscaping from "@/assets/demo-landscaping.jpg";

const projects = [
  {
    image: demoElectrician,
    title: "SparkElectric Pro",
    desc: "A conversion-focused website for a local electrician. Increased online bookings by 3x in the first month.",
    tag: "Electrician",
  },
  {
    image: demoCarwash,
    title: "CleanRide Auto Wash",
    desc: "Modern booking website for a car wash chain. Customers can book, pay, and review — all in one place.",
    tag: "Car Wash",
  },
  {
    image: demoLandscaping,
    title: "GreenScape Co.",
    desc: "Lead generation website for a landscaping company. 40+ new leads in the first two weeks after launch.",
    tag: "Landscaping",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding section-alt">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest accent-text mb-3">
            Our Work
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight">
            Real demos. Real results.
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="bg-card rounded-xl overflow-hidden border border-border group hover:border-accent/40 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <span className="absolute top-3 left-3 text-xs font-semibold accent-gradient text-accent-foreground px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {p.desc}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold accent-text hover:underline">
                  View Demo <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
