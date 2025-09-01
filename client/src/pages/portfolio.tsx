import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { type PortfolioItem } from "@shared/schema";
import GalleryItem from "@/components/gallery-item";
import Lightbox from "@/components/lightbox";
import { cn } from "@/lib/utils";

const years = [
  { value: "all", label: "All Years" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
];

export default function Portfolio() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const { data: allItems, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const filteredItems = allItems?.filter(item => 
    selectedYear === "all" || item.year === selectedYear
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
            Full Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive view of my design journey, featuring branding projects spanning the last five years.
          </p>
        </div>

        {/* Years Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {years.map((year) => (
              <button
                key={year.value}
                onClick={() => setSelectedYear(year.value)}
                className={cn(
                  "pill-md font-medium transition-colors",
                  selectedYear === year.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                )}
                data-testid={`year-filter-${year.value}`}
              >
                {year.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        {isLoading ? (
          <div className="masonry-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="masonry-item animate-pulse">
                <div className="bg-gray-300 w-full rounded-lg mb-4" style={{ height: `${200 + Math.random() * 200}px` }}></div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="h-5 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="masonry-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="masonry-item">
                <GalleryItem
                  item={item}
                  onClick={handleItemClick}
                  className="break-inside-avoid"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found for {selectedYear === "all" ? "any year" : selectedYear}.
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
