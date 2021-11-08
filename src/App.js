import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import NavBar from './layout/NavBar.js'
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <NavBar  />

      <Switch>

        <Route path = "" component={Home}/>
        
      </Switch>
      <Footer />
     
    </Router>
  );
}

export default App;
