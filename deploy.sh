#!/bin/bash

# Magic Unicorn Deploy Script
# This script builds and runs the Magic Unicorn development environment in Docker

set -e  # Exit on any error

echo "🦄 Magic Unicorn Deploy Script"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_magic() {
    echo -e "${PURPLE}[MAGIC]${NC} $1"
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

print_status "Checking for existing Magic Unicorn container..."

# Stop and remove existing container if it exists
if docker ps -a --format 'table {{.Names}}' | grep -q "magic-unicorn-dev"; then
    print_warning "Found existing Magic Unicorn container. Stopping and removing..."
    docker stop magic-unicorn-dev > /dev/null 2>&1 || true
    docker rm magic-unicorn-dev > /dev/null 2>&1 || true
    print_success "Existing container removed."
fi

# Remove existing network if it exists
if docker network ls --format 'table {{.Name}}' | grep -q "magic-unicorn-net"; then
    print_status "Removing existing Magic Unicorn network..."
    docker network rm magic-unicorn-net > /dev/null 2>&1 || true
fi

print_status "Building Magic Unicorn Docker image..."
docker-compose build --no-cache

print_status "Starting Magic Unicorn development environment..."
docker-compose up -d

# Wait a moment for the container to start
sleep 3

# Check if container is running
if docker ps --format 'table {{.Names}}' | grep -q "magic-unicorn-dev"; then
    print_success "Magic Unicorn container is running!"
    print_magic "✨ Your Magic Unicorn website is now available at:"
    print_magic "   🌐 http://localhost:8112"
    print_magic "   🌐 http://0.0.0.0:8112"
    echo ""
    print_status "Container details:"
    echo "   📦 Container name: magic-unicorn-dev"
    echo "   🔌 External port: 8112"
    echo "   🏠 Internal port: 5173"
    echo "   🌐 Network: magic-unicorn-net"
    echo ""
    print_status "Useful commands:"
    echo "   📋 View logs: docker logs -f magic-unicorn-dev"
    echo "   🛑 Stop: docker stop magic-unicorn-dev"
    echo "   🗑️  Remove: docker rm magic-unicorn-dev"
    echo "   🔄 Restart: docker restart magic-unicorn-dev"
    echo ""
    print_magic "🎉 Deploy complete! The magic is happening at http://localhost:8112"
else
    print_error "Failed to start Magic Unicorn container."
    print_status "Checking logs..."
    docker-compose logs
    exit 1
fi
