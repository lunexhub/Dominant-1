import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const StickyPhone = () => {
  const phoneNumber = "+27 (11) 000-0000";
  const phoneLink = "tel:+27110000000";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the phone button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={phoneLink}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 bg-accent text-accent-foreground px-2 py-2 sm:px-6 sm:py-4 rounded-full sm:rounded-lg shadow-2xl shadow-accent/50 hover:shadow-accent/70 transition-all duration-300 hover:scale-105 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      aria-label={`Call ${phoneNumber}`}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-foreground/20 rounded-full flex items-center justify-center group-hover:bg-accent-foreground/30 transition-colors flex-shrink-0 animate-pulse">
        <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-accent-foreground" />
      </div>
      <div className="flex flex-col hidden sm:flex">
        <span className="text-xs uppercase tracking-wider opacity-80">24/7 Emergency</span>
        <span className="text-base sm:text-lg font-bold tracking-wide">{phoneNumber}</span>
      </div>
    </a>
  );
};

export default StickyPhone;

