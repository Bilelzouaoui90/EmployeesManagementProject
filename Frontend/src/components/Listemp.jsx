
import React,  { Component } from "react";


import EmployeeService from "../Service/EmployeeService";
import {Button} from "react-bootstrap";
import Addemploy from "./Addemploy";
import Updateemploy from "./Updateemploy";


class Listemp extends Component{

    constructor(props){
        super(props);
        this.state={
            employees: []
        }
        this.addEmployee=this.addEmployee.bind(this) ;
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

        
    }
    
   

  deleteEmployee(id){
      EmployeeService.deleteEmployee(id).then(res=>{
          this.setState({employees: this.state.employees.filter(employee=> employee.id !== id)})
      })
  }
  editEmployee(id){
    this.props.history.push(`/update-employee/${id}`);
}

  componentDidMount(){
    EmployeeService.getEmployees().then((res) => {
        this.setState({ employees: res.data});
    });
}

    addEmployee(){
        
        this.props.history.push('/add-employee');
        //<a href="http://localhost:3002/add-employee">link text</a>
    }

   
    
 render(){

    return(
                <div>
                <div>
 <h1>List of works</h1>


 <form action="http://localhost:3002/add-employee">
    <input type="submit" value="Add employee" />
</form>

 <br/>



     </div>
               
          
    
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">email</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    
                </tr>
                </thead>
                <tbody>
                {
                    this.state.employees.map(
                        employee=>

                                <tr >
                                   <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    
                                    <td><button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button></td>
                                   <td><Button  variant="danger" onClick={() => this.deleteEmployee(employee.id)}>Delete</Button></td>
                                   <td>  </td>
                                   
                                  
                                </tr>
                            
                        
                    )              
               }
                
                </tbody>
            </table>
            </div>
            )
    
            }
       
   
}




export default  Listemp;