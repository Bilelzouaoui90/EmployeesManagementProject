package com.example.Backend.Service;


import com.example.Backend.Model.Employee;
import com.example.Backend.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeSeviceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository agent;


    @Override
    public Employee add_Employee(Employee employee) {
        return agent.save(employee) ;
    }

    @Override
    public List<Employee> findAll() {
        return (List<Employee>) agent.findAll();
    }

    @Override
    public Optional<Employee> find_employee(Long id) {
        return agent.findById(id);
    }

    @Override
    public Employee update_employee(Employee e) {
        return agent.save(e);

    }


}
