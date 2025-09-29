#!/bin/bash

# Portfolio Development Setup Script
echo "🚀 Starting Faysal Mohammed Abir's Portfolio Development Environment"
echo "================================================="

# Check if MongoDB is running
echo "📦 Checking MongoDB status..."
if pgrep -x "mongod" > /dev/null; then
    echo "✅ MongoDB is already running"
else
    echo "🔄 Starting MongoDB..."
    # Uncomment the next line if you need to start MongoDB manually
    # sudo service mongod start
    echo "⚠️  Please ensure MongoDB is running on localhost:27017"
fi

echo ""
echo "🏗️  Building and starting the portfolio application..."
echo "================================================="

# Start the development servers
echo "🖥️  Starting development servers..."
echo "   - Backend server will run on http://localhost:5000"
echo "   - Frontend server will run on http://localhost:3000"
echo ""

# Run the development command
npm run dev