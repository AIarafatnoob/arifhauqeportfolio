import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "HI!" },
  { id: "featured-projects", label: "Featured Projects" },
  { id: "about", label: "About Me" },
  { id: "portfolio", label: "Full Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("home")}
            className={cn(
              "pill-md transition-colors duration-500",
              activeSection === "home" ? "bg-muted" : "bg-primary"
            )} 
            data-testid="logo"
          >
            <span className={cn(
              "text-2xl font-serif font-bold transition-colors duration-500",
              activeSection === "home" ? "text-primary" : "text-white"
            )}>
              Arif Haque
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-muted pill-lg">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "pill-md font-medium transition-all duration-300 relative",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-foreground hover:text-primary hover:bg-accent",
                  index !== navItems.length - 1 && "mr-2"
                )}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden pill p-3 bg-muted hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4" data-testid="mobile-menu">
            <div className="bg-muted pill p-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "pill-md font-medium transition-all duration-300 text-left",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    )}
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
