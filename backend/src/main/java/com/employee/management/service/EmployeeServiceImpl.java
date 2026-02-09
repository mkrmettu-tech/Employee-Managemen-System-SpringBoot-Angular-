package com.employee.management.service;

import com.employee.management.exception.DuplicateEmailException;
import com.employee.management.exception.ResourceNotFoundException;
import com.employee.management.model.Employee;
import com.employee.management.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmployeeServiceImpl implements EmployeeService {
    
    private final EmployeeRepository employeeRepository;
    
    @Override
    @Transactional
    public Employee createEmployee(Employee employee) {
        log.info("Creating new employee with email: {}", employee.getEmail());
        
        if (employeeRepository.existsByEmail(employee.getEmail())) {
            throw new DuplicateEmailException("Employee with email " + employee.getEmail() + " already exists");
        }
        
        Employee savedEmployee = employeeRepository.save(employee);
        log.info("Employee created successfully with ID: {}", savedEmployee.getId());
        return savedEmployee;
    }
    
    @Override
    public List<Employee> getAllEmployees() {
        log.info("Fetching all employees");
        return employeeRepository.findAll();
    }
    
    @Override
    public Employee getEmployeeById(Long id) {
        log.info("Fetching employee with ID: {}", id);
        return employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with ID: " + id));
    }
    
    @Override
    @Transactional
    public Employee updateEmployee(Long id, Employee employee) {
        log.info("Updating employee with ID: {}", id);
        
        Employee existingEmployee = getEmployeeById(id);
        
        // Check if email is being changed and if new email already exists
        if (!existingEmployee.getEmail().equals(employee.getEmail()) 
                && employeeRepository.existsByEmail(employee.getEmail())) {
            throw new DuplicateEmailException("Employee with email " + employee.getEmail() + " already exists");
        }
        
        existingEmployee.setFirstName(employee.getFirstName());
        existingEmployee.setLastName(employee.getLastName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setPhoneNumber(employee.getPhoneNumber());
        existingEmployee.setDepartment(employee.getDepartment());
        existingEmployee.setPosition(employee.getPosition());
        existingEmployee.setHireDate(employee.getHireDate());
        existingEmployee.setSalary(employee.getSalary());
        existingEmployee.setAddress(employee.getAddress());
        existingEmployee.setStatus(employee.getStatus());
        
        Employee updatedEmployee = employeeRepository.save(existingEmployee);
        log.info("Employee updated successfully with ID: {}", updatedEmployee.getId());
        return updatedEmployee;
    }
    
    @Override
    @Transactional
    public void deleteEmployee(Long id) {
        log.info("Deleting employee with ID: {}", id);
        
        Employee employee = getEmployeeById(id);
        employeeRepository.delete(employee);
        
        log.info("Employee deleted successfully with ID: {}", id);
    }
    
    @Override
    public List<Employee> getEmployeesByDepartment(String department) {
        log.info("Fetching employees by department: {}", department);
        return employeeRepository.findByDepartment(department);
    }
    
    @Override
    public List<Employee> getEmployeesByStatus(String status) {
        log.info("Fetching employees by status: {}", status);
        return employeeRepository.findByStatus(status);
    }
}
