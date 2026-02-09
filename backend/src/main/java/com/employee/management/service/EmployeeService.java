package com.employee.management.service;

import com.employee.management.model.Employee;

import java.util.List;

public interface EmployeeService {
    
    Employee createEmployee(Employee employee);
    
    List<Employee> getAllEmployees();
    
    Employee getEmployeeById(Long id);
    
    Employee updateEmployee(Long id, Employee employee);
    
    void deleteEmployee(Long id);
    
    List<Employee> getEmployeesByDepartment(String department);
    
    List<Employee> getEmployeesByStatus(String status);
}
