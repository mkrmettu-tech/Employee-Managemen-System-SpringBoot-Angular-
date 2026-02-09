import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/employees';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Get all employees
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  // Get employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  // Create new employee
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, this.httpOptions);
  }

  // Update employee
  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee, this.httpOptions);
  }

  // Delete employee
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Get employees by department
  getEmployeesByDepartment(department: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/department/${department}`);
  }

  // Get employees by status
  getEmployeesByStatus(status: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/status/${status}`);
  }
}
