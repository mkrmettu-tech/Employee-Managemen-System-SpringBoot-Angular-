import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee: Employee | null = null;
  id!: number;
  loading = false;
  errorMessage = '';

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
        this.errorMessage = 'Failed to load employee details.';
        this.loading = false;
      }
    });
  }

  editEmployee(): void {
    this.router.navigate(['/employees/edit', this.id]);
  }

  deleteEmployee(): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(this.id).subscribe({
        next: () => {
          alert('Employee deleted successfully!');
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          console.error('Error deleting employee:', error);
          alert('Failed to delete employee. Please try again.');
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
}
