import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Reset from './pages/authentication/Reset';
import Dashboard from './pages/Dashboard';
import {auth} from './firebase/firebase';
import SearchCar from './pages/SearchCar';
import Contact from './pages/Contact';
import PublishCar from './pages/PublishCar';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  if(user != null)
 
    return (
      <Router>
        <NavBar bool={true}/>
        <Switch>          
            <Route exact path="/reset" component={Reset} />
            <Route exact path="/dashboard" component={Dashboard} />      

            
            <Route path="/buy" component={SearchCar} />
            <Route path="/sell" component={PublishCar} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/" component={Dashboard} />
            
        </Switch>
 
        <Footer/>     
      </Router>
    );

  
  return (
    <Router>
      <NavBar bool={false}/>
      <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} /> 

          <Route path="/buy" component={SearchCar} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/" component={Login} />
          
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
