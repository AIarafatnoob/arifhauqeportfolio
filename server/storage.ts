import { type User, type InsertUser, type PortfolioItem, type InsertPortfolioItem, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";

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

// This new storage class reads portfolio items from a JSON file
export class JsonStorage implements IStorage {
  private users: Map<string, User>;
  private portfolioItems: PortfolioItem[];
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    
    // Load portfolio items from the JSON file
    this.loadPortfolioItems();
  }

  private loadPortfolioItems() {
    try {
      const jsonPath = path.resolve(process.cwd(), 'client/src/data/projects.json');
      const jsonText = fs.readFileSync(jsonPath, 'utf-8');
      const itemsFromFile = (JSON.parse(jsonText) as { projects: InsertPortfolioItem[] }).projects;

      // Add id and createdAt to mimic the old in-memory structure,
      // as the frontend components may rely on these properties.
      this.portfolioItems = itemsFromFile.map(item => ({
          ...item,
          id: item.id || randomUUID(),
          createdAt: item.createdAt || new Date() 
      }));
    } catch (error) {
      console.error("Error reading or parsing portfolio data, using empty array.", error);
      this.portfolioItems = [];
    }
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
    return Promise.resolve(this.portfolioItems.sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    ));
  }

  async getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
    return Promise.resolve(this.portfolioItems
      .filter(item => String(item.featured) === "true")
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()));
  }

  async getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]> {
    return Promise.resolve(this.portfolioItems
      .filter(item => item.category === category)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()));
  }

  async getPortfolioItemsByYear(year: string): Promise<PortfolioItem[]> {
    return Promise.resolve(this.portfolioItems
      .filter(item => item.year === year)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()));
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    // This is now handled by Netlify CMS writing to the JSON file.
    console.warn("createPortfolioItem is a no-op when using JsonStorage.");
    return Promise.reject(new Error("Cannot create items via API when using JsonStorage."));
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

export const storage = new JsonStorage();