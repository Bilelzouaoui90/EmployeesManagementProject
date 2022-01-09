import { Component } from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
export default class NavbarComp extends Component{

    render(){
           
        return(
            <div>
          <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">BestWork</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/welcome">Home</Nav.Link>
      <Nav.Link href="/add-employee">Add employee</Nav.Link>
      <Nav.Link href="/employees">List employee</Nav.Link>
      <Nav.Link href="#pricing">Sign up</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
        </div>
        )

        }
   

}

