import { ArrowRight, Pickaxe, ShieldAlert, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import miningImage from "@/assets/mining-security.jpg";
import riotImage from "@/assets/riot-control.jpg";
import strikeImage from "@/assets/strike-management.jpg";

const services = [
  {
    icon: Pickaxe,
    title: "Mining Security",
    description: "Comprehensive protection for mining operations across South Africa. From shaft security to convoy protection, we safeguard your valuable assets and personnel 24/7.",
    features: ["Perimeter Protection", "Asset Tracking", "Personnel Safety", "Emergency Response"],
    image: miningImage,
  },
  {
    icon: ShieldAlert,
    title: "Riot Control",
    description: "Professionally trained tactical units for crowd management and civil unrest situations. Our teams are equipped with non-lethal measures and de-escalation expertise.",
    features: ["Crowd Management", "Tactical Response", "De-escalation", "Shield Formations"],
    image: riotImage,
  },
  {
    icon: Users,
    title: "Strike Management",
    description: "Strategic security solutions for industrial disputes and labor actions. We ensure business continuity while maintaining safety for all parties involved.",
    features: ["Access Control", "Facility Protection", "Transport Security", "Negotiation Support"],
    image: strikeImage,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            SPECIALIZED SECURITY SOLUTIONS
          </h2>
          <p className="text-muted-foreground">
            Military-grade protection tailored for South Africa's most demanding industries.
            Every operation is executed with precision and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-500 shadow-tactical flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-accent rounded flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button variant="tactical" className="w-full group/btn" asChild>
                    <a href="#contact">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
