# Employee Management System - Backend

Spring Boot REST API for Employee Management System.

## Technology Stack

- Spring Boot 3.2.2
- Java 21
- MySQL 8.0+
- Spring Data JPA
- Spring Web
- Spring Validation
- Lombok
- Maven

## Prerequisites

- JDK 21 or higher
- Maven 3.8+
- MySQL 8.0+

## Setup Instructions

1. **Clone the repository**

2. **Configure MySQL Database**

Create a database:
```sql
CREATE DATABASE employee_management_db;
```

Update `src/main/resources/application.properties` with your database credentials:
```properties
spring.datasource.username=root
spring.datasource.password=your_password
```

3. **Build the project**
```bash
mvn clean install
```

4. **Run the application**
```bash
mvn spring-boot:run
```

The server will start at `http://localhost:8080`

## API Documentation

### Base URL
```
http://localhost:8080/api
```

### Endpoints

#### Get All Employees
```
GET /employees
```

#### Get Employee by ID
```
GET /employees/{id}
```

#### Create Employee
```
POST /employees
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phoneNumber": "1234567890",
  "department": "IT",
  "position": "Software Engineer",
  "hireDate": "2024-01-15",
  "salary": 75000.00,
  "address": "123 Main St",
  "status": "Active"
}
```

#### Update Employee
```
PUT /employees/{id}
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phoneNumber": "1234567890",
  "department": "IT",
  "position": "Senior Software Engineer",
  "hireDate": "2024-01-15",
  "salary": 85000.00,
  "address": "123 Main St",
  "status": "Active"
}
```

#### Delete Employee
```
DELETE /employees/{id}
```

#### Get Employees by Department
```
GET /employees/department/{department}
```

#### Get Employees by Status
```
GET /employees/status/{status}
```

## Project Structure

```
src/main/java/com/employee/management/
├── model/
│   └── Employee.java              # Entity class
├── repository/
│   └── EmployeeRepository.java    # JPA repository interface
├── service/
│   ├── EmployeeService.java       # Service interface
│   └── EmployeeServiceImpl.java   # Service implementation
├── controller/
│   └── EmployeeController.java    # REST controller
├── exception/
│   ├── ResourceNotFoundException.java
│   ├── DuplicateEmailException.java
│   ├── ErrorResponse.java
│   └── GlobalExceptionHandler.java
├── config/
│   └── CorsConfig.java            # CORS configuration
└── EmployeeManagementApplication.java  # Main application class
```

## Configuration

### Application Properties

```properties
# Server Configuration
server.port=8080
server.servlet.context-path=/api

# MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management_db
spring.datasource.username=root
spring.datasource.password=root

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

## Error Responses

### 400 Bad Request (Validation Error)
```json
{
  "timestamp": "2024-02-09T10:30:00",
  "status": 400,
  "error": "Validation Failed",
  "message": "Input validation failed",
  "path": "/api/employees",
  "validationErrors": {
    "email": "Email should be valid",
    "phoneNumber": "Phone number must be 10 digits"
  }
}
```

### 404 Not Found
```json
{
  "timestamp": "2024-02-09T10:30:00",
  "status": 404,
  "error": "Not Found",
  "message": "Employee not found with ID: 123",
  "path": "/api/employees/123"
}
```

### 409 Conflict
```json
{
  "timestamp": "2024-02-09T10:30:00",
  "status": 409,
  "error": "Conflict",
  "message": "Employee with email john.doe@example.com already exists",
  "path": "/api/employees"
}
```

## Testing

Run tests with:
```bash
mvn test
```

## Building for Production

```bash
mvn clean package
java -jar target/employee-management-1.0.0.jar
```

## Database Schema

The application automatically creates the following table:

```sql
CREATE TABLE employees (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(10),
    department VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    hire_date DATE NOT NULL,
    salary DOUBLE NOT NULL,
    address VARCHAR(500),
    status VARCHAR(50)
);
```

## Validation Rules

- **firstName**: 2-50 characters, not blank
- **lastName**: 2-50 characters, not blank
- **email**: Valid email format, unique
- **phoneNumber**: Exactly 10 digits
- **department**: Not blank
- **position**: Not blank
- **hireDate**: Not null
- **salary**: Greater than 0
- **status**: Default "Active"

## Troubleshooting

### Port Already in Use
Change the port in `application.properties`:
```properties
server.port=8081
```

### Database Connection Issues
- Ensure MySQL is running
- Verify credentials in application.properties
- Check if database exists

### Lombok Issues
Ensure Lombok plugin is installed in your IDE:
- IntelliJ IDEA: Install Lombok plugin and enable annotation processing
- Eclipse: Install Lombok via jar file
