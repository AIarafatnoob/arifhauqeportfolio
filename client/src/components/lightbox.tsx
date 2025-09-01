import { useEffect } from "react";
import { X } from "lucide-react";
import { type PortfolioItem } from "@shared/schema";

interface LightboxProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ item, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!item || !isOpen) {
    return null;
  }

  return (
    <div 
      className={`lightbox ${isOpen ? "active" : ""}`}
      onClick={onClose}
      data-testid="lightbox"
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="max-w-[90%] max-h-[90%] object-contain"
          data-testid="lightbox-image"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
          data-testid="close-lightbox"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="absolute bottom-4 left-4 text-white bg-black/50 p-4 rounded">
          <h3 className="text-xl font-serif font-semibold mb-1">{item.title}</h3>
          <p className="text-sm opacity-90">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            {item.dimensions && ` • ${item.dimensions} • ${item.year}`}
          </p>
        </div>
      </div>
    </div>
  );
}
