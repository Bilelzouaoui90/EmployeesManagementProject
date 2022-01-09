
import React,{ Component } from "react";
import { Form ,Col,Row,Button,InputGroup,FormControl} from "react-bootstrap";
import EmployeeService from "../Service/EmployeeService";


class  Addemploy extends Component {
  constructor(props){
    super(props);
    this.state={
      id:null,
      firstName:'',
      lastName:'',
      email: ''
        
    }
    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
    this.changeEmailHandler=this.changeEmailHandler.bind(this);
    this.saveemployee=this.saveemployee.bind(this);
}
saveemployee() {

var employee={firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email};
console.log('employee=>'+JSON.stringify(employee));

EmployeeService.createEmployee(employee).then(res=>{
  this.setState({
    id:res.employee.id,
    firstName:res.employee.firstName,
    lastName:res.employee.lastName,
    email:res.employee.email,

  })
  //this.props.history.Push('/employees')
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
  this.props.history.push('/employees')
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
      <Button type="submit" onClick={this.saveemployee}>Submit</Button>
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

export default Addemploy;
   