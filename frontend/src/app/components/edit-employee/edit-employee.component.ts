import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
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
  
  id!: number;
  submitted = false;
  errorMessage = '';
  loading = false;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadEmployee();
  }

  loadEmployee(): void {
    this.loading = true;
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading employee:', error);
        this.errorMessage = 'Failed to load employee data.';
        this.loading = false;
      }
    });
  }

  updateEmployee(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.validateForm()) {
      this.employeeService.updateEmployee(this.id, this.employee).subscribe({
        next: (data) => {
          console.log('Employee updated:', data);
          alert('Employee updated successfully!');
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          console.error('Error updating employee:', error);
          if (error.error && error.error.message) {
            this.errorMessage = error.error.message;
          } else if (error.error && error.error.validationErrors) {
            this.errorMessage = Object.values(error.error.validationErrors).join(', ');
          } else {
            this.errorMessage = 'Failed to update employee. Please try again.';
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
