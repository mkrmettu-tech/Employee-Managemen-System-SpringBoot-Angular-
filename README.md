# Employee Management System

A full-stack web application for managing employee records with CRUD operations.

## Technology Stack

### Backend
- **Spring Boot 3.2.2** - Java framework
- **Java 21** - Programming language
- **MySQL 8.0+** - Database
- **Spring Data JPA** - ORM framework
- **Maven** - Build tool
- **Lombok** - Code generation library

### Frontend
- **Angular 17** - Frontend framework
- **TypeScript 5.3** - Programming language
- **RxJS 7.8** - Reactive programming
- **HTML5 & CSS3** - Markup and styling

## Features

### Backend Features
- RESTful API endpoints for employee management
- Complete CRUD operations (Create, Read, Update, Delete)
- Input validation using Bean Validation
- Custom exception handling
- CORS configuration for frontend integration
- MySQL database integration
- Logging support

### Frontend Features
- Employee list with search and filter functionality
- Add new employee form with validation
- Edit existing employee details
- View individual employee information
- Delete employee with confirmation
- Responsive design for mobile and desktop
- Modern and intuitive UI

## Project Structure

```
employee-management-system/
├── backend/                          # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/employee/management/
│   │   │   │   ├── model/           # Entity classes
│   │   │   │   ├── repository/      # JPA repositories
│   │   │   │   ├── service/         # Business logic
│   │   │   │   ├── controller/      # REST controllers
│   │   │   │   ├── exception/       # Exception handling
│   │   │   │   └── config/          # Configuration classes
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
└── frontend/                         # Angular Frontend
    ├── src/
    │   ├── app/
    │   │   ├── components/          # Angular components
    │   │   │   ├── employee-list/
    │   │   │   ├── add-employee/
    │   │   │   ├── edit-employee/
    │   │   │   └── view-employee/
    │   │   ├── models/              # TypeScript interfaces
    │   │   ├── services/            # HTTP services
    │   │   ├── app.component.*      # Root component
    │   │   ├── app.module.ts        # App module
    │   │   └── app-routing.module.ts # Routing configuration
    │   ├── assets/
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.css
    ├── angular.json
    ├── package.json
    └── tsconfig.json
```

## Prerequisites

Before running this application, make sure you have the following installed:

- **Java Development Kit (JDK) 21+**
- **Maven 3.8+**
- **Node.js 18+ and npm**
- **MySQL 8.0+**
- **Angular CLI 17+** (`npm install -g @angular/cli`)

## Database Setup

1. Install MySQL Server (if not already installed)

2. Create a MySQL database:
```sql
CREATE DATABASE employee_management_db;
```

3. Update database credentials in `backend/src/main/resources/application.properties` if needed:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management_db
spring.datasource.username=root
spring.datasource.password=root
```

The application will automatically create the necessary tables on startup.

## Installation and Running

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project using Maven:
```bash
mvn clean install
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend server will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the Angular development server:
```bash
ng serve
```

or

```bash
npm start
```

The frontend application will start on `http://localhost:4200`

## API Endpoints

### Employee Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |
| GET | `/api/employees/department/{department}` | Get employees by department |
| GET | `/api/employees/status/{status}` | Get employees by status |

### Sample Request Body (POST/PUT)

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phoneNumber": "1234567890",
  "department": "IT",
  "position": "Software Engineer",
  "hireDate": "2024-01-15",
  "salary": 75000.00,
  "address": "123 Main St, City, State",
  "status": "Active"
}
```

## Application Features

### 1. Employee List
- View all employees in a table format
- Search employees by name, email, or department
- Filter employees by department
- Quick actions: View, Edit, Delete

### 2. Add Employee
- Form validation for all required fields
- Email and phone number format validation
- Department selection dropdown
- Status management

### 3. Edit Employee
- Pre-populated form with existing employee data
- Same validation as Add Employee
- Prevents duplicate email addresses

### 4. View Employee
- Detailed view of employee information
- Organized into Personal and Employment sections
- Quick access to Edit and Delete actions

## Validation Rules

- **First Name & Last Name**: 2-50 characters, required
- **Email**: Valid email format, unique, required
- **Phone Number**: Exactly 10 digits, required
- **Department**: Required, from predefined list
- **Position**: Required
- **Hire Date**: Required, date format
- **Salary**: Greater than 0, required
- **Status**: Active/Inactive/On Leave

## Error Handling

The application includes comprehensive error handling:
- 400 Bad Request - Validation errors
- 404 Not Found - Resource not found
- 409 Conflict - Duplicate email
- 500 Internal Server Error - Server errors

## Screenshots and Usage

1. **Home Page**: Displays list of all employees
2. **Add Employee**: Click "Add New Employee" button
3. **Edit Employee**: Click edit icon next to employee
4. **View Employee**: Click view icon for detailed information
5. **Delete Employee**: Click delete icon (with confirmation)

## Troubleshooting

### Backend Issues

1. **Port 8080 already in use**:
   - Change port in `application.properties`: `server.port=8081`

2. **Database connection error**:
   - Verify MySQL is running
   - Check database credentials
   - Ensure database exists

3. **Build failures**:
   - Ensure Java 21 is installed: `java -version`
   - Clear Maven cache: `mvn clean`

### Frontend Issues

1. **Port 4200 already in use**:
   - Use different port: `ng serve --port 4201`

2. **Module not found errors**:
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **API connection errors**:
   - Verify backend is running on port 8080
   - Check CORS configuration

## Development

### Running Tests

**Backend**:
```bash
cd backend
mvn test
```

**Frontend**:
```bash
cd frontend
ng test
```

### Building for Production

**Backend**:
```bash
cd backend
mvn clean package
java -jar target/employee-management-1.0.0.jar
```

**Frontend**:
```bash
cd frontend
ng build --configuration production
```

Build artifacts will be in `dist/employee-management-frontend/`

## Future Enhancements

- User authentication and authorization
- Role-based access control
- Employee photo upload
- Export employee data to Excel/PDF
- Advanced search and filtering
- Employee performance tracking
- Department management
- Leave management system
- Salary history tracking
- Email notifications

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please contact the development team.

---

**Version**: 1.0.0  
**Last Updated**: February 2024
#   E m p l o y e e - M a n a g e m e n t - S y s t e m  
 #   E m p l o y e e _ M a n a g e m e n t  
 #   E m p l o y e e _ M a n a g e m e n t  
 #   E m p l o y e e - M a n a g e m e n t - S y s t e m  
 