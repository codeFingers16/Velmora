import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="hero-section relative min-h-screen flex items-center pt-20">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-hero/60 via-hero/80 to-hero" />

    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 accent-gradient text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse" />
          Now accepting new clients
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-hero-foreground mb-6">
          We build websites that bring you{" "}
          <span className="accent-text">customers.</span>
        </h1>

        <p className="text-lg lg:text-xl text-hero-muted max-w-xl mb-10 leading-relaxed">
          Helping service businesses grow with high-converting websites and
          systems. More calls, more bookings, more revenue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="accent-gradient text-accent-foreground font-semibold px-7 py-3.5 rounded-lg text-center hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
          >
            Get a Free Demo <ArrowRight size={18} />
          </a>
          <a
            href="#portfolio"
            className="border border-hero-foreground/20 text-hero-foreground font-semibold px-7 py-3.5 rounded-lg text-center hover:bg-hero-foreground/5 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Play size={16} /> View Our Work
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
