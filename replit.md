# Overview

This is a modern full-stack artist portfolio web application built with React, TypeScript, and Express. The application showcases an artist's work through an elegant, gallery-style interface with features like portfolio browsing, contact forms, and responsive design. It uses a clean monorepo structure with shared TypeScript schemas and modern tooling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Shared TypeScript schemas using Drizzle-Zod for validation
- **Storage Strategy**: In-memory storage implementation with interface for easy database switching

## Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database for production data
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema**: Portfolio items, contact messages, and user management tables

## Authentication & Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User System**: Basic user schema prepared for future authentication features
- **Current State**: No active authentication implemented, foundation laid for future expansion

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database driver for Neon Database
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration toolkit
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **react-hook-form**: Performant form library with validation
- **zod**: Runtime type validation and schema definition

### UI & Styling
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx & tailwind-merge**: Conditional class name utilities

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Image Assets
- **Unsplash**: External image CDN for portfolio artwork placeholders
- **Google Fonts**: Web fonts (Playfair Display, Inter) for typography

The application follows a modern full-stack TypeScript architecture with clear separation of concerns, type safety throughout the stack, and a foundation for scaling from development to production.