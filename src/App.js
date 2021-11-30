import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NavBar from './components/NavBar.js'
import Footer from './components/Footer';
import { AuthProvider } from './firebase/context';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import SearchCar from './pages/SearchCar';

import PublishCar from './pages/PublishCar';
import Contact from './pages/Contact';
import PageNotFound from './components/PageNotFound';
import Profile from './pages/Profile';
import EvaluateCar from './components/EvaluateCar';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import MyAnnouncements from './pages/MyAnnouncements';
import Announcements from './pages/Announcements';
import AdminRoute from './components/AdminRoute';
import AdminHome from './components/AdminHome';
import AdminWrapper from './logic/AdminWrapper';

function App() {
    return (      
        <Router>
          <AuthProvider>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/blog" component={Blog}  />
              <Route path="/contact-us" component={Contact}  />
              <Route path="/about-us" component={AboutUs}  />

              <Route path="/buy" component={SearchCar}  />
              <Route path="/evaluate" component={EvaluateCar}  />
              <PrivateRoute path="/sell" component={PublishCar} />
              <Route path="/my-announcements" component={MyAnnouncements} />
              <Route path="/announcements" component={Announcements} />

              <Route path="/admin" component={AdminWrapper} />

              { /* Default route -> 404  */ }
              <Route path="/" component={PageNotFound}  />
              
            </Switch>
            <Footer/>
          </AuthProvider>
        </Router>
      
    
    );

}


export default App;
