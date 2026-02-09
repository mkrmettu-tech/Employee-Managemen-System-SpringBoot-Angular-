# Employee Management System - Frontend

Angular application for managing employee records.

## Technology Stack

- Angular 17
- TypeScript 5.3
- RxJS 7.8
- HTML5 & CSS3

## Prerequisites

- Node.js 18+ 
- npm 9+
- Angular CLI 17+

## Installation

1. **Install Angular CLI globally** (if not already installed):
```bash
npm install -g @angular/cli@17
```

2. **Install dependencies**:
```bash
npm install
```

## Running the Application

### Development Server

```bash
ng serve
```

or

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running on Different Port

```bash
ng serve --port 4201
```

## Building for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── employee-list/
│   │   │   ├── employee-list.component.ts
│   │   │   ├── employee-list.component.html
│   │   │   └── employee-list.component.css
│   │   ├── add-employee/
│   │   │   ├── add-employee.component.ts
│   │   │   ├── add-employee.component.html
│   │   │   └── add-employee.component.css
│   │   ├── edit-employee/
│   │   │   ├── edit-employee.component.ts
│   │   │   ├── edit-employee.component.html
│   │   │   └── edit-employee.component.css
│   │   └── view-employee/
│   │       ├── view-employee.component.ts
│   │       ├── view-employee.component.html
│   │       └── view-employee.component.css
│   ├── models/
│   │   └── employee.model.ts
│   ├── services/
│   │   └── employee.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
├── environments/
├── index.html
├── main.ts
└── styles.css
```

## Features

### 1. Employee List Component
- Display all employees in a table
- Search functionality (name, email, department)
- Filter by department
- Quick actions (View, Edit, Delete)
- Responsive design

### 2. Add Employee Component
- Form validation
- Department dropdown
- Status selection
- Success/Error notifications
- Cancel and save options

### 3. Edit Employee Component
- Pre-populated form
- Same validation as add form
- Update employee details
- Navigate back to list

### 4. View Employee Component
- Detailed employee information
- Personal and employment sections
- Edit and delete actions
- Back to list navigation

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | EmployeeListComponent | Redirect to /employees |
| `/employees` | EmployeeListComponent | List all employees |
| `/employees/add` | AddEmployeeComponent | Add new employee |
| `/employees/edit/:id` | EditEmployeeComponent | Edit employee |
| `/employees/view/:id` | ViewEmployeeComponent | View employee details |

## API Integration

The frontend communicates with the backend API at `http://localhost:8080/api`

### Configuration

Update the API URL in `src/app/services/employee.service.ts` if needed:

```typescript
private apiUrl = 'http://localhost:8080/api/employees';
```

## Components Documentation

### EmployeeService

Located at `src/app/services/employee.service.ts`

Methods:
- `getAllEmployees()`: Get all employees
- `getEmployeeById(id)`: Get employee by ID
- `createEmployee(employee)`: Create new employee
- `updateEmployee(id, employee)`: Update employee
- `deleteEmployee(id)`: Delete employee
- `getEmployeesByDepartment(dept)`: Filter by department
- `getEmployeesByStatus(status)`: Filter by status

### Employee Model

Located at `src/app/models/employee.model.ts`

```typescript
export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
  position: string;
  hireDate: string;
  salary: number;
  address?: string;
  status: string;
}
```

## Styling

The application uses custom CSS with:
- Gradient backgrounds
- Responsive design
- Hover effects
- Smooth transitions
- Modern card layouts
- Mobile-friendly interface

## Running Tests

```bash
ng test
```

## Code Scaffolding

Generate new component:
```bash
ng generate component component-name
```

Generate service:
```bash
ng generate service service-name
```

## Build and Deploy

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

### Deploy to Web Server
Copy contents of `dist/employee-management-frontend/` to your web server.

## Troubleshooting

### Port Already in Use
```bash
ng serve --port 4201
```

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Backend Connection Issues
- Ensure backend is running on port 8080
- Check CORS configuration
- Verify API endpoints

### Build Errors
```bash
npm cache clean --force
rm -rf node_modules
npm install
ng build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

### Core Dependencies
- @angular/animations
- @angular/common
- @angular/compiler
- @angular/core
- @angular/forms
- @angular/platform-browser
- @angular/platform-browser-dynamic
- @angular/router
- rxjs
- zone.js

### Dev Dependencies
- @angular/cli
- @angular/compiler-cli
- typescript
- jasmine
- karma

## Environment Configuration

Create environment files for different configurations:

`src/environments/environment.ts` (Development):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

`src/environments/environment.prod.ts` (Production):
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://your-api-domain.com/api'
};
```

## Code Quality

### Linting
```bash
ng lint
```

### Formatting
Use Prettier or similar formatter for consistent code style.

## Performance Optimization

- Lazy loading modules
- OnPush change detection strategy
- TrackBy functions in *ngFor
- Image optimization
- Minification in production build

## Future Enhancements

- Unit tests for components
- E2E tests
- State management (NgRx)
- Internationalization (i18n)
- Progressive Web App (PWA)
- Server-side rendering (SSR)
