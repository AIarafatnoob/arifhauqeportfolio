import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { type PortfolioItem } from "@shared/schema";
import GalleryItem from "@/components/gallery-item";
import Lightbox from "@/components/lightbox";
import { cn } from "@/lib/utils";

const categories = [
  { value: "all", label: "All" },
  { value: "digital", label: "Digital" },
  { value: "installation", label: "Installation" },
  { value: "mixed", label: "Mixed Media" },
];

export default function MyArt() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const { data: allItems, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const filteredItems = allItems?.filter(item => 
    selectedCategory === "all" || item.category === selectedCategory
  ) || [];

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            My Art
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of my most recent works, spanning digital art, installations, and mixed media pieces.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={cn(
                  "pill-md font-medium transition-colors",
                  selectedCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                )}
                data-testid={`filter-${category.value}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 h-96 w-full rounded-lg mb-4"></div>
                <div className="p-6 bg-background rounded-lg">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={handleItemClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No works found in the {selectedCategory === "all" ? "gallery" : selectedCategory} category.
            </p>
          </div>
        )}
      </div>

      <Lightbox 
        item={selectedItem}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  );
}
