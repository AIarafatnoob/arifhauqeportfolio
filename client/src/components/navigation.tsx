import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "HI!" },
  { path: "/my-art", label: "My Art" },
  { path: "/about", label: "About Me" },
  { path: "/portfolio", label: "Full Portfolio" },
  { path: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActivePage = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-semibold text-primary" data-testid="logo">
            Alex Chen
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "nav-link text-foreground hover:text-primary font-medium transition-colors",
                  isActivePage(item.path) && "active"
                )}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "nav-link text-left text-foreground hover:text-primary font-medium transition-colors",
                    isActivePage(item.path) && "active"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
