package com.employee.management.controller;

import com.employee.management.model.Employee;
import com.employee.management.service.EmployeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
    
    private final EmployeeService employeeService;
    
    /**
     * Create a new employee
     */
    @PostMapping
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee employee) {
        Employee createdEmployee = employeeService.createEmployee(employee);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }
    
    /**
     * Get all employees
     */
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }
    
    /**
     * Get employee by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employee);
    }
    
    /**
     * Update employee
     */
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable Long id, 
            @Valid @RequestBody Employee employee) {
        Employee updatedEmployee = employeeService.updateEmployee(id, employee);
        return ResponseEntity.ok(updatedEmployee);
    }
    
    /**
     * Delete employee
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Employee deleted successfully");
        response.put("id", String.valueOf(id));
        return ResponseEntity.ok(response);
    }
    
    /**
     * Get employees by department
     */
    @GetMapping("/department/{department}")
    public ResponseEntity<List<Employee>> getEmployeesByDepartment(@PathVariable String department) {
        List<Employee> employees = employeeService.getEmployeesByDepartment(department);
        return ResponseEntity.ok(employees);
    }
    
    /**
     * Get employees by status
     */
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Employee>> getEmployeesByStatus(@PathVariable String status) {
        List<Employee> employees = employeeService.getEmployeesByStatus(status);
        return ResponseEntity.ok(employees);
    }
}
