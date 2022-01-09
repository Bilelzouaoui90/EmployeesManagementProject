import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Listemp from "./components/Listemp";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";


import Addemploy from "./components/Addemploy";
import Carocomp from "./components/Carocomp";
import Updateemploy from "./components/Updateemploy";







function App() {

    return (
        <div className="Container">
          <Router>
           
          <NavbarComp/>
          
          
          <Switch>
         
          <Route exact path="/welcome" component={Carocomp}/>
         <Route  path="/employees" component={Listemp}/>
          <Route  path="/add-employee" component={Addemploy}/>
          <Route  path="/update-employee/:id"  component={Updateemploy}/>
         
          
          </Switch>
          </Router>
      
      
        </div>
        
  );
}

export default App;
