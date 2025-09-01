import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "wouter";
import { type PortfolioItem } from "@shared/schema";
import GalleryItem from "@/components/gallery-item";
import Lightbox from "@/components/lightbox";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const { data: featuredItems, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio/featured"],
  });

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-8 leading-tight">
            HI!<br />
            <span className="text-4xl md:text-6xl font-light">I'm Alex</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            A visual artist creating contemporary pieces that explore the intersection of digital and traditional media.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('my-art')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground pill-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="view-work-button"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary hover:text-primary/80 font-medium pill-md border border-primary transition-colors"
              data-testid="learn-about-button"
            >
              Learn About Me
            </button>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-16">
            Featured Works
          </h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-300 h-80 w-full rounded-lg mb-4"></div>
                  <div className="p-6 bg-background rounded-lg">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : featuredItems && featuredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item) => (
                <GalleryItem
                  key={item.id}
                  item={item}
                  onClick={handleItemClick}
                  className="break-inside-avoid"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No featured works available at the moment.</p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('my-art')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground pill-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="view-all-works-button"
            >
              View All Works
            </button>
          </div>
        </div>
      </section>

      <Lightbox 
        item={selectedItem}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  );
}
