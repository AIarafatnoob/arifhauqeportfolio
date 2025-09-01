import { type PortfolioItem } from "@shared/schema";

interface GalleryItemProps {
  item: PortfolioItem;
  onClick: (item: PortfolioItem) => void;
  className?: string;
}

export default function GalleryItem({ item, onClick, className = "" }: GalleryItemProps) {
  return (
    <div 
      className={`gallery-item cursor-pointer group relative ${className}`}
      onClick={() => onClick(item)}
      data-testid={`gallery-item-${item.id}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden pill">
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Hover Overlay - expands upward to cover 60% of image */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
             style={{ height: '60%', borderRadius: '30px' }}
             data-testid={`overlay-${item.id}`}>
          <div className="h-full flex flex-col justify-end space-y-3">
            {item.client && (
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-300 mb-1">Client</p>
                <p className="text-sm font-medium" data-testid={`client-${item.id}`}>{item.client}</p>
              </div>
            )}
            
            {item.deliveredIn && (
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-300 mb-1">Delivered In</p>
                <p className="text-sm font-medium" data-testid={`delivered-${item.id}`}>{item.deliveredIn}</p>
              </div>
            )}
            
            {item.review && (
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-300 mb-1">Review</p>
                <p className="text-sm italic leading-relaxed" data-testid={`review-${item.id}`}>"{item.review}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Details Section - now shows year instead of dimensions */}
      <div className="p-6 bg-background" style={{ borderRadius: '30px' }}>
        <h3 className="text-xl font-serif font-semibold mb-2" data-testid={`title-${item.id}`}>
          {item.title}
        </h3>
        <p className="text-muted-foreground mb-1" data-testid={`category-${item.id}`}>
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </p>
        <p className="text-sm text-muted-foreground" data-testid={`year-${item.id}`}>
          {item.year}
        </p>
      </div>
    </div>
  );
}