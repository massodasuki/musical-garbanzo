# # -------- Stage 1: Build --------
# FROM node:20-alpine AS builder

# # Set working directory
# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy source code
# COPY . .

# # Build the NestJS app
# RUN npm run build

# # -------- Stage 2: Production --------
# FROM node:20-alpine AS runner

# # Set working directory
# WORKDIR /app

# # Copy only necessary files from builder
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/dist ./dist

# # Expose the NestJS port
# EXPOSE 3000

# # Set production environment variable
# ENV NODE_ENV=production

# # Start the application
# CMD ["node", "dist/main"]


# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the full project
COPY . .

# Build the NestJS project
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files from build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/main"]