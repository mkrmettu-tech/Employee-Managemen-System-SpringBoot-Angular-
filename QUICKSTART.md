# Quick Start Guide

## Prerequisites Checklist

Before starting, ensure you have:

- [ ] JDK 21 or higher installed
- [ ] Maven 3.8+ installed
- [ ] Node.js 18+ installed
- [ ] npm 9+ installed
- [ ] MySQL 8.0+ installed and running
- [ ] Angular CLI 17+ installed globally

## Installation Steps

### 1. Database Setup (5 minutes)

**Option A: Using MySQL Command Line**
```bash
mysql -u root -p < database-setup.sql
```

**Option B: Using MySQL Workbench**
1. Open MySQL Workbench
2. Connect to your MySQL server
3. Create new database: `employee_management_db`
4. Run the SQL script: `database-setup.sql`

**Option C: Manual Setup**
```sql
mysql -u root -p
CREATE DATABASE employee_management_db;
EXIT;
```

### 2. Backend Setup (5 minutes)

```bash
# Navigate to backend directory
cd backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

**Verify Backend:**
- Open browser: `http://localhost:8080/api/employees`
- You should see an empty array `[]` or list of employees

### 3. Frontend Setup (5 minutes)

**Open a new terminal window**

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (first time only)
npm install

# Start the development server
ng serve
```

**Verify Frontend:**
- Open browser: `http://localhost:4200`
- You should see the Employee Management System interface

## Quick Verification

1. ✓ Backend running on `http://localhost:8080`
2. ✓ Frontend running on `http://localhost:4200`
3. ✓ Can view employee list
4. ✓ Can add new employee
5. ✓ Can edit employee
6. ✓ Can view employee details
7. ✓ Can delete employee

## Automated Setup (Recommended)

Use the provided setup script:

```bash
# Make script executable (Linux/Mac)
chmod +x setup.sh

# Run setup script
./setup.sh
```

## Troubleshooting

### Backend Issues

**Problem: Port 8080 already in use**
```bash
# Find process using port 8080
# Linux/Mac:
lsof -i :8080

# Windows:
netstat -ano | findstr :8080

# Kill the process or change port in application.properties
```

**Problem: Database connection failed**
```properties
# Update backend/src/main/resources/application.properties
spring.datasource.username=your_username
spring.datasource.password=your_password
```

**Problem: Maven build fails**
```bash
# Clear Maven cache
mvn clean

# Delete .m2 repository and rebuild
rm -rf ~/.m2/repository
mvn clean install
```

### Frontend Issues

**Problem: Port 4200 already in use**
```bash
# Use different port
ng serve --port 4201
```

**Problem: npm install fails**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**Problem: Angular CLI not found**
```bash
# Install Angular CLI globally
npm install -g @angular/cli@17
```

## Testing the Application

### 1. Add Employee
1. Click "Add New Employee" button
2. Fill in all required fields:
   - First Name: John
   - Last Name: Doe
   - Email: john.doe@example.com
   - Phone: 1234567890
   - Department: IT
   - Position: Software Engineer
   - Hire Date: Select today's date
   - Salary: 75000
   - Status: Active
3. Click "Save Employee"

### 2. View Employee List
- All employees should appear in the table
- Try searching by name or email
- Try filtering by department

### 3. Edit Employee
- Click the edit icon (✏️) next to an employee
- Modify any field
- Click "Update Employee"

### 4. View Employee Details
- Click the view icon (👁️) next to an employee
- See detailed information
- Access edit or delete from this page

### 5. Delete Employee
- Click the delete icon (🗑️) next to an employee
- Confirm deletion in the popup

## Default Credentials

**Database:**
- Host: localhost
- Port: 3306
- Database: employee_management_db
- Username: root
- Password: root

**API Endpoints:**
- Base URL: http://localhost:8080/api
- Employees: http://localhost:8080/api/employees

**Frontend:**
- URL: http://localhost:4200

## Next Steps

1. **Customize Configuration**
   - Update database credentials
   - Change ports if needed
   - Configure CORS settings

2. **Add Sample Data**
   - Uncomment sample data in `database-setup.sql`
   - Re-run the SQL script

3. **Explore Features**
   - Search and filter functionality
   - Form validations
   - Error handling
   - Responsive design

4. **Development**
   - Modify components
   - Add new features
   - Customize styling

## Support

If you encounter any issues:

1. Check the README.md for detailed documentation
2. Verify all prerequisites are installed
3. Check console logs for errors
4. Ensure MySQL is running
5. Verify database credentials

## Production Deployment

### Backend
```bash
cd backend
mvn clean package
java -jar target/employee-management-1.0.0.jar
```

### Frontend
```bash
cd frontend
ng build --configuration production
# Deploy dist/ folder to web server
```

---

**Happy Coding! 🚀**

For detailed documentation, see [README.md](README.md)
