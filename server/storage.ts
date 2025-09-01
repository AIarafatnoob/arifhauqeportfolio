import { type User, type InsertUser, type PortfolioItem, type InsertPortfolioItem, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getFeaturedPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]>;
  getPortfolioItemsByYear(year: string): Promise<PortfolioItem[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private portfolioItems: Map<string, PortfolioItem>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.portfolioItems = new Map();
    this.contactMessages = new Map();
    
    // Initialize with sample portfolio items
    this.initializePortfolioItems();
  }

  private initializePortfolioItems() {
    const sampleItems: InsertPortfolioItem[] = [
      {
        title: "Neon Genesis",
        description: "A vibrant exploration of digital consciousness and synthetic dreams",
        category: "digital",
        year: "2024",
        dimensions: "24\" x 36\"",
        imageUrl: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "true",
        client: "Digital Arts Museum",
        deliveredIn: "March 2024",
        review: "Absolutely stunning work that captures the essence of digital consciousness beautifully."
      },
      {
        title: "Spatial Dialogue",
        description: "An interactive installation exploring human connection in physical space",
        category: "installation", 
        year: "2024",
        dimensions: "15' x 20' x 10'",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "true",
        client: "Contemporary Art Center",
        deliveredIn: "June 2024",
        review: "An immersive experience that truly connects people through art. Exceptional execution."
      },
      {
        title: "Fragments of Memory",
        description: "Mixed media piece incorporating found objects and digital elements",
        category: "mixed",
        year: "2024",
        dimensions: "30\" x 40\"",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "true",
        client: "Private Collector",
        deliveredIn: "September 2024",
        review: "The perfect blend of traditional and digital. A masterpiece that speaks to the soul."
      },
      {
        title: "Digital Harmony",
        description: "Geometric composition exploring balance in digital aesthetics",
        category: "digital",
        year: "2023",
        dimensions: "20\" x 30\"",
        imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "false",
        client: "Tech Startup Office",
        deliveredIn: "December 2023",
        review: "Perfect addition to our workspace. The geometric balance creates a calming environment."
      },
      {
        title: "Process Studies",
        description: "Documentation of creative process and studio practice",
        category: "mixed",
        year: "2022",
        dimensions: "Various Sizes",
        imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "false",
        client: "Art Academy",
        deliveredIn: "August 2022",
        review: "Incredible insight into the artistic process. Educational and inspiring for our students."
      },
      {
        title: "Curated Spaces",
        description: "Site-specific installation for contemporary gallery environments",
        category: "installation",
        year: "2022",
        dimensions: "10' x 12'",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750",
        featured: "false",
        client: "Modern Gallery",
        deliveredIn: "April 2022",
        review: "Transformed our space completely. Visitors are constantly amazed by the installation."
      },
      {
        title: "Color Studies",
        description: "Abstract exploration of color relationships and emotional resonance",
        category: "mixed",
        year: "2021",
        dimensions: "18\" x 24\"",
        imageUrl: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=900",
        featured: "false",
        client: "Interior Design Firm",
        deliveredIn: "November 2021",
        review: "The color harmony is exactly what we needed for our client's home. Beautifully executed."
      },
      {
        title: "Organic Flow",
        description: "Digital art piece inspired by natural forms and movement",
        category: "digital",
        year: "2021", 
        dimensions: "16\" x 20\"",
        imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
        featured: "false",
        client: "Wellness Center",
        deliveredIn: "February 2021",
        review: "Creates such a peaceful atmosphere. Our clients love the natural flow and calming energy."
      }
    ];

    sampleItems.forEach(item => {
      const id = randomUUID();
      const portfolioItem: PortfolioItem = {
        ...item,
        id,
        createdAt: new Date()
      };
      this.portfolioItems.set(id, portfolioItem);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values())
      .filter(item => item.featured === "true")
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values())
      .filter(item => item.category === category)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getPortfolioItemsByYear(year: string): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values())
      .filter(item => item.year === year)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = randomUUID();
    const portfolioItem: PortfolioItem = {
      ...insertItem,
      id,
      createdAt: new Date()
    };
    this.portfolioItems.set(id, portfolioItem);
    return portfolioItem;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const contactMessage: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();
