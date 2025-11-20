import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist/public");

  if (!fs.existsSync(distPath)) {
    log(`Could not find build directory: ${distPath}. Make sure to build the client first.`, "error");
    // In a production serverless environment, we might not want to throw,
    // but rather let the API routes handle requests.
    // If no API route matches, a 404 will be served, which is appropriate.
    return;
  }

  app.use(express.static(distPath));

  // Fall through to index.html for single-page applications
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Not Found");
    }
  });
}
