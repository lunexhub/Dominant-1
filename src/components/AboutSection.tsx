import { Award, Target, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every operation executed with military-grade accuracy",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Unwavering commitment to the highest standards",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Trusted by South Africa's largest corporations",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "24/7 readiness for any security challenge",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 camo-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent uppercase tracking-widest text-sm font-medium">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
              15 YEARS OF UNWAVERING PROTECTION
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in Johannesburg, Dominant Multi Projects has grown to become South Africa's most trusted tactical security provider. Our camouflage-clad operatives are a symbol of strength and reliability across the mining sector and industrial landscape.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We don't just provide security—we deliver peace of mind. Our PSIRA-certified teams undergo rigorous training to handle the most challenging situations with professionalism and decisive action.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              {["PSIRA Level A", "ISO 9001", "SASA Member", "Armed Response"].map((cert) => (
                <div
                  key={cert}
                  className="bg-muted px-4 py-2 rounded text-sm text-foreground border border-border"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background p-6 rounded-lg border border-border hover:border-accent transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
