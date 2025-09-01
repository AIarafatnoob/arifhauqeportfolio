import { type PortfolioItem } from "@shared/schema";

interface GalleryItemProps {
  item: PortfolioItem;
  onClick: (item: PortfolioItem) => void;
  className?: string;
}

export default function GalleryItem({ item, onClick, className = "" }: GalleryItemProps) {
  return (
    <div 
      className={`gallery-item cursor-pointer ${className}`}
      onClick={() => onClick(item)}
      data-testid={`gallery-item-${item.id}`}
    >
      <img 
        src={item.imageUrl} 
        alt={item.title}
        className="w-full h-auto object-cover pill"
        loading="lazy"
      />
      <div className="p-6 bg-background" style={{ borderRadius: '30px' }}>
        <h3 className="text-xl font-serif font-semibold mb-2" data-testid={`title-${item.id}`}>
          {item.title}
        </h3>
        <p className="text-muted-foreground mb-1" data-testid={`category-${item.id}`}>
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </p>
        {item.dimensions && (
          <p className="text-sm text-muted-foreground" data-testid={`dimensions-${item.id}`}>
            {item.dimensions}, {item.year}
          </p>
        )}
      </div>
    </div>
  );
}
