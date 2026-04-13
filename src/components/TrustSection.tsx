import AnimatedSection from "./AnimatedSection";

const logos = ["SparkElectric", "CleanRide", "GreenScape", "ProPlumb", "SwiftFix"];

const TrustSection = () => (
  <section className="section-padding border-b border-border">
    <div className="max-w-7xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by local businesses
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {logos.map((name) => (
            <div
              key={name}
              className="font-heading font-bold text-lg text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TrustSection;
