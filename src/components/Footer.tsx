import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-lg tracking-wider text-foreground">
                DOMINANT
              </span>
              <span className="font-display text-sm tracking-wider text-accent">
                MULTI PROJECTS
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Careers</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Dominant Multi Projects. All rights reserved.
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <div className="font-display text-xl text-muted-foreground tracking-widest">
            DOMINANCE • <span className="relative inline-block">PROTECTION • EXCELLENCE</span>
          </div>
          <div className="mt-3 text-sm text-muted-foreground font-sans tracking-normal">
            BUILT BY{" "}
            <a 
              href="https://www.lunexweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors underline"
            >
              LUNEXWEB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
