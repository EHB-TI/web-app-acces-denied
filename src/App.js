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
        <NavBar/>
        <Switch>          
            <Route exact path="/reset" component={Reset} />
            <Route exact path="/dashboard" component={Dashboard} />      

            <Route path="/" component={Dashboard} />
        </Switch>
 
        <Footer/>     
      </Router>
    );

  else 
  return (
    <Router>
      <NavBar/>
      <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} /> 

          <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
