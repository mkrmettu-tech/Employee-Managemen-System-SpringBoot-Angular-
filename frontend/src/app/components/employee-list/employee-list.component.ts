import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';
  selectedDepartment: string = 'all';
  loading: boolean = false;
  errorMessage: string = '';

  departments: string[] = ['All', 'IT', 'HR', 'Finance', 'Sales', 'Marketing', 'Operations'];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading = true;
    this.errorMessage = '';
    
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.filteredEmployees = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading employees:', error);
        this.errorMessage = 'Failed to load employees. Please try again.';
        this.loading = false;
      }
    });
  }

  searchEmployees(): void {
    this.filteredEmployees = this.employees.filter(employee =>
      employee.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.selectedDepartment !== 'all') {
      this.filteredEmployees = this.filteredEmployees.filter(
        employee => employee.department === this.selectedDepartment
      );
    }
  }

  filterByDepartment(): void {
    if (this.selectedDepartment === 'all') {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(
        employee => employee.department === this.selectedDepartment
      );
    }
    this.searchEmployees();
  }

  viewEmployee(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/employees/view', id]);
    }
  }

  editEmployee(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/employees/edit', id]);
    }
  }

  deleteEmployee(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.loadEmployees();
          alert('Employee deleted successfully!');
        },
        error: (error) => {
          console.error('Error deleting employee:', error);
          alert('Failed to delete employee. Please try again.');
        }
      });
    }
  }

  addEmployee(): void {
    this.router.navigate(['/employees/add']);
  }
}
