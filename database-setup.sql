-- Employee Management System Database Setup Script

-- Create database
CREATE DATABASE IF NOT EXISTS employee_management_db;

-- Use the database
USE employee_management_db;

-- The tables will be auto-created by Spring Boot JPA
-- But here's the schema for reference

-- Employees table (auto-created by Hibernate)
-- CREATE TABLE IF NOT EXISTS employees (
--     id BIGINT AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     phone_number VARCHAR(10),
--     department VARCHAR(255) NOT NULL,
--     position VARCHAR(255) NOT NULL,
--     hire_date DATE NOT NULL,
--     salary DOUBLE NOT NULL,
--     address VARCHAR(500),
--     status VARCHAR(50) DEFAULT 'Active'
-- );

-- Sample data (optional - uncomment to insert)
/*
INSERT INTO employees (first_name, last_name, email, phone_number, department, position, hire_date, salary, address, status) VALUES
('John', 'Doe', 'john.doe@company.com', '1234567890', 'IT', 'Software Engineer', '2023-01-15', 75000.00, '123 Main St, City, State', 'Active'),
('Jane', 'Smith', 'jane.smith@company.com', '2345678901', 'HR', 'HR Manager', '2022-06-20', 65000.00, '456 Oak Ave, City, State', 'Active'),
('Mike', 'Johnson', 'mike.johnson@company.com', '3456789012', 'Finance', 'Financial Analyst', '2023-03-10', 70000.00, '789 Pine Rd, City, State', 'Active'),
('Sarah', 'Williams', 'sarah.williams@company.com', '4567890123', 'Sales', 'Sales Representative', '2023-05-25', 60000.00, '321 Elm St, City, State', 'Active'),
('Robert', 'Brown', 'robert.brown@company.com', '5678901234', 'Marketing', 'Marketing Manager', '2022-11-30', 72000.00, '654 Maple Dr, City, State', 'Active'),
('Emily', 'Davis', 'emily.davis@company.com', '6789012345', 'IT', 'Senior Developer', '2021-08-12', 90000.00, '987 Cedar Ln, City, State', 'Active'),
('David', 'Miller', 'david.miller@company.com', '7890123456', 'Operations', 'Operations Manager', '2022-04-18', 80000.00, '147 Birch Ct, City, State', 'Active'),
('Lisa', 'Wilson', 'lisa.wilson@company.com', '8901234567', 'HR', 'Recruiter', '2023-07-22', 55000.00, '258 Spruce Way, City, State', 'Active'),
('James', 'Moore', 'james.moore@company.com', '9012345678', 'Finance', 'Accountant', '2023-02-14', 62000.00, '369 Walnut Blvd, City, State', 'Active'),
('Maria', 'Taylor', 'maria.taylor@company.com', '0123456789', 'Sales', 'Sales Manager', '2021-12-05', 85000.00, '741 Ash Pl, City, State', 'Active');
*/

-- Display success message
SELECT 'Database setup complete!' AS message;
