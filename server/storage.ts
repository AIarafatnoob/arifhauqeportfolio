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
        title: "TechFlow Brand Identity",
        description: "Complete brand identity package for innovative tech startup",
        category: "branding",
        year: "2024",
        dimensions: "Logo Suite & Guidelines",
        imageUrl: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "true",
        client: "TechFlow Solutions (Germany)",
        deliveredIn: "March 2024",
        review: "Outstanding brand identity that perfectly captures our innovative spirit and professionalism."
      },
      {
        title: "GreenLife Packaging Design",
        description: "Sustainable packaging design for organic food company",
        category: "packaging", 
        year: "2024",
        dimensions: "Multiple Product Lines",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "true",
        client: "GreenLife Organics (Canada)",
        deliveredIn: "June 2024",
        review: "The packaging design perfectly reflects our commitment to sustainability and quality."
      },
      {
        title: "FinanceFirst Web Design",
        description: "Modern responsive website design for financial consulting firm",
        category: "web",
        year: "2024",
        dimensions: "Responsive Web Design",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "true",
        client: "FinanceFirst Consulting (UK)",
        deliveredIn: "September 2024",
        review: "Professional design that builds trust and converts visitors into clients effectively."
      },
      {
        title: "StartupHub Logo Design",
        description: "Dynamic logo design for technology incubator platform",
        category: "logo",
        year: "2023",
        dimensions: "Logo & Brand Mark",
        imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "false",
        client: "StartupHub Platform (USA)",
        deliveredIn: "December 2023",
        review: "The logo perfectly represents our mission to support innovative startups."
      },
      {
        title: "EcoVenture Social Media Kit",
        description: "Comprehensive social media design kit for environmental NGO",
        category: "social",
        year: "2022",
        dimensions: "30+ Template Designs",
        imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
        featured: "false",
        client: "EcoVenture Foundation (Malaysia)",
        deliveredIn: "August 2022",
        review: "Amazing designs that helped us increase our social media engagement by 40%."
      },
      {
        title: "RetailMax Event Design",
        description: "Complete event branding and promotional materials for retail conference",
        category: "event",
        year: "2022",
        dimensions: "Event Branding Suite",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750",
        featured: "false",
        client: "RetailMax Conference (China)",
        deliveredIn: "April 2022",
        review: "Professional event design that created a memorable experience for all attendees."
      },
      {
        title: "HealthPlus Print Campaign",
        description: "Healthcare awareness campaign with print and digital materials",
        category: "print",
        year: "2021",
        dimensions: "Multi-format Campaign",
        imageUrl: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=900",
        featured: "false",
        client: "HealthPlus Clinics (Bangladesh)",
        deliveredIn: "November 2021",
        review: "Effective campaign design that significantly increased health awareness in our community."
      },
      {
        title: "WellnessFlow Brand Identity",
        description: "Calming brand identity design for wellness and meditation center",
        category: "branding",
        year: "2021", 
        dimensions: "Complete Brand Package",
        imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700",
        featured: "false",
        client: "WellnessFlow Center (Bangladesh)",
        deliveredIn: "February 2021",
        review: "Perfect brand identity that reflects our peaceful atmosphere and wellness mission."
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
