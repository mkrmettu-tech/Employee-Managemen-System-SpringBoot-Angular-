import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    department: '',
    position: '',
    hireDate: '',
    salary: 0,
    address: '',
    status: 'Active'
  };

  departments: string[] = ['IT', 'HR', 'Finance', 'Sales', 'Marketing', 'Operations'];
  statuses: string[] = ['Active', 'Inactive', 'On Leave'];
  
  submitted = false;
  errorMessage = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Set default hire date to today
    const today = new Date().toISOString().split('T')[0];
    this.employee.hireDate = today;
  }

  saveEmployee(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.validateForm()) {
      this.employeeService.createEmployee(this.employee).subscribe({
        next: (data) => {
          console.log('Employee created:', data);
          alert('Employee added successfully!');
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          console.error('Error creating employee:', error);
          if (error.error && error.error.message) {
            this.errorMessage = error.error.message;
          } else if (error.error && error.error.validationErrors) {
            this.errorMessage = Object.values(error.error.validationErrors).join(', ');
          } else {
            this.errorMessage = 'Failed to add employee. Please try again.';
          }
        }
      });
    }
  }

  validateForm(): boolean {
    if (!this.employee.firstName || !this.employee.lastName || !this.employee.email ||
        !this.employee.phoneNumber || !this.employee.department || !this.employee.position ||
        !this.employee.hireDate || !this.employee.salary) {
      this.errorMessage = 'Please fill in all required fields.';
      return false;
    }

    if (this.employee.salary <= 0) {
      this.errorMessage = 'Salary must be greater than 0.';
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.employee.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(this.employee.phoneNumber)) {
      this.errorMessage = 'Phone number must be 10 digits.';
      return false;
    }

    return true;
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}
