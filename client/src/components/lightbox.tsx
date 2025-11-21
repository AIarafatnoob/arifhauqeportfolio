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
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
      data-testid="lightbox"
    >
      <div
        className="bg-background rounded-lg shadow-2xl w-full max-w-4xl max-h-full overflow-y-auto flex flex-col animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-background z-10">
          <h3 className="text-xl font-serif font-semibold">{item.title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            data-testid="close-lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image */}
        <div className="p-4 sm:p-8 flex-grow flex items-center justify-center">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-w-full max-h-[65vh] object-contain"
            data-testid="lightbox-image"
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-muted/50 text-sm">
          <p className="text-muted-foreground font-medium">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            {item.dimensions && ` • ${item.dimensions} • ${item.year}`}
          </p>
          {item.description && <p className="mt-2 text-foreground/80">{item.description}</p>}
        </div>
      </div>
    </div>
  );
}
