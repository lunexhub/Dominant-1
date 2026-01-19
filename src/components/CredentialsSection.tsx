import { Building2, Factory, Landmark, Truck } from "lucide-react";

const clients = [
  { icon: Factory, name: "Major Mining Corp", sector: "Mining" },
  { icon: Building2, name: "Industrial Holdings", sector: "Manufacturing" },
  { icon: Landmark, name: "Government Contracts", sector: "Public Sector" },
  { icon: Truck, name: "Logistics SA", sector: "Transport" },
  { icon: Factory, name: "Gold Fields Ltd", sector: "Mining" },
  { icon: Building2, name: "Property Group", sector: "Real Estate" },
];

const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">
            Trusted Partners
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            SECURING SOUTH AFRICA'S GIANTS
          </h2>
          <p className="text-muted-foreground">
            From mining giants to government institutions, we protect the organizations that power our nation.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <client.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <p className="text-xs text-accent uppercase tracking-wider">
                {client.sector}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-full px-8 py-4">
            <span className="text-accent font-display text-2xl">R500M+</span>
            <span className="text-muted-foreground text-sm">
              in assets protected annually
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
