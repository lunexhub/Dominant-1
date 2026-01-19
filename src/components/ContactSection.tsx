import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Johannesburg, Gauteng, South Africa",
  },
  {
    icon: Phone,
    label: "24/7 Command Center",
    value: "+27 (11) 000-0000",
  },
  {
    icon: Mail,
    label: "Contracts & Inquiries",
    value: "contracts@dominantmp.co.za",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "< 15 Minutes",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 camo-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="text-accent uppercase tracking-widest text-sm font-medium">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              READY TO SECURE YOUR OPERATIONS?
            </h2>
            <p className="text-muted-foreground mb-10">
              Contact our command center for immediate assistance or to discuss your security requirements. Our team is standing by 24/7.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-background border border-border rounded-lg p-8">
            <h3 className="font-display text-2xl text-foreground mb-6">
              REQUEST A QUOTE
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-muted border border-border rounded px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                  placeholder="email@company.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Service Required
                </label>
                <select className="w-full bg-muted border border-border rounded px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors">
                  <option value="">Select a service</option>
                  <option value="mining">Mining Security</option>
                  <option value="riot">Riot Control</option>
                  <option value="strike">Strike Management</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-muted border border-border rounded px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Describe your security requirements..."
                />
              </div>
              <Button variant="hero" size="xl" className="w-full">
                Submit Request
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
