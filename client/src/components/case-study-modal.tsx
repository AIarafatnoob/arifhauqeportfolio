import { useEffect } from "react";
import { X } from "lucide-react";
import { type PortfolioItem } from "@shared/schema";

interface CaseStudyModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ item, isOpen, onClose }: CaseStudyModalProps) {
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

  const caseStudyData = [
    {
      title: "Concept & Inspiration",
      content: "This piece explores the relationship between digital consciousness and human emotion, drawing inspiration from the neon-soaked landscapes of cyberpunk aesthetics while maintaining a deeply personal narrative.",
      image: item.imageUrl
    },
    {
      title: "Process & Technique",
      content: "Created using a combination of digital painting techniques and AI-assisted generation, this work represents a new frontier in contemporary digital art. The layering process took over 40 hours to complete.",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Material & Medium",
      content: "Digital artwork printed on high-quality archival paper with metallic accents. The physical piece incorporates subtle holographic elements that shift with viewing angle, bridging digital and physical realms.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Impact & Reception",
      content: "Featured in Contemporary Digital Arts Review and acquired by three major collectors. The piece has been exhibited in galleries across Los Angeles and San Francisco, sparking conversations about AI's role in creative expression.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
      onClick={onClose}
      data-testid="case-study-modal"
    >
      <div className="min-h-screen py-8 px-4" onClick={(e) => e.stopPropagation()}>
        <div className="max-w-6xl mx-auto bg-background pill p-8 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            data-testid="close-case-study"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">{item.title}</h2>
            <p className="text-lg text-muted-foreground">{item.description}</p>
            <div className="flex justify-center gap-4 mt-4 text-sm text-muted-foreground">
              <span>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
              <span>•</span>
              <span>{item.year}</span>
              {item.dimensions && (
                <>
                  <span>•</span>
                  <span>{item.dimensions}</span>
                </>
              )}
            </div>
          </div>

          {/* Zigzag Case Study Content */}
          <div className="space-y-16">
            {caseStudyData.map((section, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-muted pill p-8">
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">
                      {section.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-foreground">
                      {section.content}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img 
                    src={section.image}
                    alt={`${item.title} - ${section.title}`}
                    className="w-full h-80 object-cover pill"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="bg-primary text-primary-foreground pill p-6">
              <h3 className="text-xl font-serif font-semibold mb-2">Interested in this piece?</h3>
              <p className="mb-4">Contact me to discuss availability and pricing.</p>
              <button 
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-black pill-md font-medium hover:bg-white/90 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}