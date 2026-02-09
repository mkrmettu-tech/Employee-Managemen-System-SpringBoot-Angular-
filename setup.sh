#!/bin/bash

echo "====================================="
echo "Employee Management System Setup"
echo "====================================="
echo ""

# Check Java
echo "Checking Java installation..."
if command -v java &> /dev/null
then
    JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}')
    echo "✓ Java is installed: $JAVA_VERSION"
else
    echo "✗ Java is not installed. Please install JDK 21 or higher."
    exit 1
fi

# Check Maven
echo "Checking Maven installation..."
if command -v mvn &> /dev/null
then
    MVN_VERSION=$(mvn -version | head -n 1)
    echo "✓ Maven is installed: $MVN_VERSION"
else
    echo "✗ Maven is not installed. Please install Maven 3.8 or higher."
    exit 1
fi

# Check Node.js
echo "Checking Node.js installation..."
if command -v node &> /dev/null
then
    NODE_VERSION=$(node -v)
    echo "✓ Node.js is installed: $NODE_VERSION"
else
    echo "✗ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check npm
echo "Checking npm installation..."
if command -v npm &> /dev/null
then
    NPM_VERSION=$(npm -v)
    echo "✓ npm is installed: $NPM_VERSION"
else
    echo "✗ npm is not installed."
    exit 1
fi

# Check MySQL
echo "Checking MySQL installation..."
if command -v mysql &> /dev/null
then
    echo "✓ MySQL is installed"
else
    echo "⚠ MySQL not detected. Please ensure MySQL 8.0+ is installed and running."
fi

echo ""
echo "====================================="
echo "Setting up Backend (Spring Boot)"
echo "====================================="
cd backend

echo "Building backend with Maven..."
mvn clean install -DskipTests

if [ $? -eq 0 ]; then
    echo "✓ Backend build successful!"
else
    echo "✗ Backend build failed!"
    exit 1
fi

cd ..

echo ""
echo "====================================="
echo "Setting up Frontend (Angular)"
echo "====================================="
cd frontend

echo "Installing frontend dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Frontend dependencies installed successfully!"
else
    echo "✗ Frontend dependencies installation failed!"
    exit 1
fi

cd ..

echo ""
echo "====================================="
echo "Setup Complete!"
echo "====================================="
echo ""
echo "To run the application:"
echo ""
echo "1. Start MySQL server"
echo "2. Create database: CREATE DATABASE employee_management_db;"
echo "3. Start backend:"
echo "   cd backend && mvn spring-boot:run"
echo ""
echo "4. Start frontend (in new terminal):"
echo "   cd frontend && ng serve"
echo ""
echo "5. Access the application at http://localhost:4200"
echo ""
echo "====================================="
