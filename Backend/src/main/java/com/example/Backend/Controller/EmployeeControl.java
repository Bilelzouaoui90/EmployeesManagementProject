package com.example.Backend.Controller;
import com.example.Backend.Exception.ResourceNotFound;
import com.example.Backend.Model.Employee;
import com.example.Backend.Repository.EmployeeRepository;
import com.example.Backend.Service.EmployeeService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Table;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
@Table(name = "employees")
public class EmployeeControl {

    @Autowired
    EmployeeService agent;
    @Autowired
    EmployeeRepository agentrepo;
//visualiser la liste des employess
@GetMapping("/employees")
    public List<Employee> dispplay_employee(){
        return agent.findAll();
    }
/*
    @PostMapping("/employees")
    //@RequestBody : le contenue de body de la requte va etre convertie en objet employee
    public Employee add_Employee(@RequestBody Employee employee){
        return agent.add_Employee(employee);
    }

 */
//ajouter un employee
@PostMapping("/employees")
    //@RequestBody : le contenue de body de la requte va etre convertie en objet employee
    public Employee createEmployee(@RequestBody Employee employee){
        return agentrepo.save(employee);
    }

//get element by ID

@GetMapping("/employees/{id}")
public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) throws ResourceNotFound {
    Employee employee = agentrepo.findById(id)
            .orElseThrow(()-> new ResourceNotFound("Employee nOT EXIST"+id));
    return ResponseEntity.ok(employee);
}
/*
@PutMapping("/employees/{id}")
    public Employee update_employee(@PathVariable("id") long id,@RequestBody Employee employeedetails){
        Employee d = agent.find_employee(id).get();
        d.setFirstName(employeedetails.getFirstName());
        d.setLastName(employeedetails.getLastName());
        d.setEmail(employeedetails.getEmail());

        return agent.update_employee(d);
}
*/

    //Update employee version 2
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) throws ResourceNotFound {Employee employee = agentrepo.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Employee not exist with id :" + id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmail(employeeDetails.getEmail());

        Employee updatedEmployee = agentrepo.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }


@DeleteMapping("employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id ) throws ResourceNotFound {
        Employee employee= agentrepo.findById(id)
                .orElseThrow(()-> new ResourceNotFound("Employee nOT EXIST"+id));

        agentrepo.delete(employee);
        Map<String,Boolean>  response =new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
