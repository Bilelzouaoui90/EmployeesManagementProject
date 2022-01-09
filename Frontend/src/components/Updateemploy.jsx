
import React,{ Component } from "react";
import { Form ,Col,Row,Button,InputGroup,FormControl} from "react-bootstrap";
import EmployeeService from "../Service/EmployeeService";


class  Updateemploy extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName:'',
      lastName:'',
      email: ''
        
    }
    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
    this.changeEmailHandler=this.changeEmailHandler.bind(this);
    this.updateEmployee=this.updateEmployee.bind(this);
}

componentDidMount(){
  EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
      let employee = res.data;
      this.setState({firstName: employee.firstName,
          lastName: employee.lastName,
          email : employee.email
      });
  });
}
updateEmployee = (e) => {
  e.preventDefault();
  
  let employee ={firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email};
  console.log('employee=>'+JSON.stringify(employee));
  EmployeeService.updateEmployee(employee, this.state.id).then( res => {
    this.props.history.push('/employees');
});

}

changeFirstNameHandler=(event)=>{
  this.setState({firstName: event.target.value})
}
changeLastNameHandler=(event)=>{
  this.setState({lastName: event.target.value})
}
changeEmailHandler=(event)=>{
  this.setState({email: event.target.value})
}
cancel(){
  this.props.history.push('/employees');
}
  render() { 
    return(
       
       <div >

            <br/><br/><br/>
<Form>
  <Row className="align-items-center">
      
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
        FirstName
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="Firstname" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
    </Col>
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
        LastName
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="lastname" value={this.state.lastName} onChange={this.changeLastNameHandler} />
      
    </Col>
   </Row>
    <br/><br/><br/>
    <Row className="align-items-center">
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
        Email
      </Form.Label>
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
        <FormControl id="inlineFormInputGroupUsername" placeholder="enter your email" value={this.state.email} onChange={this.changeEmailHandler} />
      </InputGroup>
    </Col>
    
    <Col xs="auto" className="my-1">
      <Button type="submit" onClick={this.updateEmployee}>Submit</Button>
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit" onClick={this.cancel.bind(this)}>Cancel</Button>
    </Col>
  </Row>
</Form>
<br/><br/><br/>

        </div>
        
    )
}
}

export default Updateemploy;
   