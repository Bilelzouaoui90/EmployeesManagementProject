package com.example.Backend.Service;

import com.example.Backend.Model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {

    public Employee add_Employee(Employee employee);
    public List<Employee> findAll();
public Optional<Employee> find_employee(Long id);
    public Employee update_employee(Employee e);
}
