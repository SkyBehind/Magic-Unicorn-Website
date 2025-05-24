FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Expose port 5173 (Vite's default)
EXPOSE 5173

# Start the development server with host binding
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
