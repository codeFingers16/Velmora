import { useState, FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "27791308076";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", phone: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.business.trim() || !form.phone.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const phoneNumber = "27791308076"; // <-- YOUR WhatsApp number (SA format)

    const message = `
Hi! I just submitted a request on your website.

Name: ${form.name}
Business: ${form.business}
Phone: ${form.phone}

I’m interested in getting a professional website for my business.
  `.trim();

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    setLoading(false);

    toast({
      title: "Redirecting to WhatsApp...",
      description: "Please send us your message there.",
    });

    setForm({ name: "", business: "", phone: "" });

    window.open(whatsappURL, "_blank");
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Velmora! I'm ${form.name || "interested"} and I run a ${form.business || "service"} business. I'd like a free demo website.`,
  )}`;

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest accent-text mb-3">
              Get Started
            </p>
            <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Get your free demo website in 48 hours
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Tell us about your business and we'll build a custom demo — no
              payment, no commitment.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 lg:p-10 border border-border space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1.5"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                maxLength={100}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label
                htmlFor="business"
                className="block text-sm font-medium mb-1.5"
              >
                Business Type
              </label>
              <input
                id="business"
                type="text"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                placeholder="e.g. Electrician, Car Wash, Plumber"
                maxLength={100}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1.5"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+27 82 123 4567 or 0821234567"
                maxLength={20}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 accent-gradient text-accent-foreground font-semibold px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send size={16} />
                {loading ? "Sending..." : "Get My Free Demo"}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-green-500 text-green-600 font-semibold px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-green-50 transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
