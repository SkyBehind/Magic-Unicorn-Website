#!/bin/bash

# Magic Unicorn Stop Script
# This script stops and cleans up the Magic Unicorn development environment

set -e  # Exit on any error

echo "🦄 Magic Unicorn Stop Script"
echo "============================="

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

print_magic() {
    echo -e "${PURPLE}[MAGIC]${NC} $1"
}

print_status "Stopping Magic Unicorn development environment..."

# Stop and remove containers
docker-compose down

# Remove the custom network
if docker network ls --format 'table {{.Name}}' | grep -q "magic-unicorn-net"; then
    print_status "Removing Magic Unicorn network..."
    docker network rm magic-unicorn-net > /dev/null 2>&1 || true
fi

print_success "Magic Unicorn environment stopped and cleaned up."
print_magic "✨ The magic has been safely contained. Run ./deploy.sh to restart!"
