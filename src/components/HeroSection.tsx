import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Phone, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Dominant Multi Projects Security Team"
          className="w-full h-full object-cover scale-105 transition-transform ease-out hover:scale-100"
          style={{ transitionDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 camo-pattern opacity-30" />
        {/* Animated gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge with enhanced styling */}
          <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-md border border-accent/30 rounded-full px-5 py-2.5 mb-8 animate-fade-up shadow-lg shadow-accent/10">
            <Shield className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Premier Security Force
            </span>
          </div>

          {/* Main Headline with enhanced impact */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-up delay-100">
            <span className="block tracking-tight">DOMINANCE IN</span>
            <span className="block text-gradient-gold mt-2 drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
              EVERY SECTOR
            </span>
          </h1>

          {/* Subheadline with better typography */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-2xl mb-10 leading-relaxed font-medium animate-fade-up delay-200">
            South Africa's most trusted tactical security provider. Specializing in mining operations, riot control, and industrial strike management with <span className="text-accent font-semibold">military-grade precision</span>.
          </p>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-12 animate-fade-up delay-300">
            {[
              { text: "PSIRA Certified", icon: Shield },
              { text: "24/7 Rapid Response", icon: Clock },
              { text: "Armed Response Units", icon: Zap }
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2.5 hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold text-foreground whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="space-y-6 animate-fade-up delay-400">
            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                className="group relative overflow-hidden text-lg px-8 py-7 shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300"
                asChild
              >
                <a href="#contact" className="relative z-10 flex items-center gap-2">
                  Get Protected Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
              
              <Button 
                variant="heroOutline" 
                size="xl"
                className="group text-lg px-8 py-7 border-2 hover:bg-accent/10 transition-all duration-300"
                asChild
              >
                <a href="#contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Response
                </a>
              </Button>
            </div>

            {/* Secondary CTA */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Button 
                variant="ghost" 
                size="lg"
                className="text-foreground hover:text-foreground underline-offset-4 hover:underline"
              >
                View Our Capabilities
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-accent font-semibold">Free Consultation Available</span>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up delay-500">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Secured Sites" },
              { value: "24/7", label: "Response Time" },
              { value: "100%", label: "PSIRA Certified" }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-card/40 backdrop-blur-sm border border-border/30 rounded-lg hover:border-accent/50 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-display text-accent font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-1 shadow-lg shadow-accent/30">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
