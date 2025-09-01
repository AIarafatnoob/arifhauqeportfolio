import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all portfolio items
  app.get("/api/portfolio", async (req, res) => {
    try {
      const items = await storage.getPortfolioItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch portfolio items" });
    }
  });

  // Get featured portfolio items
  app.get("/api/portfolio/featured", async (req, res) => {
    try {
      const items = await storage.getFeaturedPortfolioItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured portfolio items" });
    }
  });

  // Get portfolio items by category
  app.get("/api/portfolio/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const items = await storage.getPortfolioItemsByCategory(category);
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch portfolio items by category" });
    }
  });

  // Get portfolio items by year
  app.get("/api/portfolio/year/:year", async (req, res) => {
    try {
      const { year } = req.params;
      const items = await storage.getPortfolioItemsByYear(year);
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch portfolio items by year" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ message: "Message sent successfully", id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
