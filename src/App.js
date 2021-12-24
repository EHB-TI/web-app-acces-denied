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
import AdminWrapper from './logic/AdminWrapper';
import Form from './components/sell_parts/Form';
import CarParts from './pages/CarsParts';
import CarPart from './pages/CarPart';
import CarDetails from './components/CarDetails';
import ProfileLogs from './components/ProfileLogs';
import Layout from './components/Layout';
import LoginForm from './components/auth/LoginForm'
import ConfirmForm from './components/auth/ConfirmForm';

function App() {
    return (      
        <Router>
          <AuthProvider>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/profile-logs" component={ProfileLogs} />
              <Route path="/Layout" component={Layout} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/blog" component={Blog}  />
              <Route path="/contact-us" component={Contact}  />
              <Route path="/about-us" component={AboutUs}  />
              <Route path="/Loginnew"><LoginForm/></Route>
              <Route path="/confirm"><ConfirmForm/></Route>

              <Route path="/buy" component={SearchCar}  />
              <Route path="/evaluate" component={EvaluateCar}  />
              <PrivateRoute path="/sell" component={PublishCar} />
              <PrivateRoute path="/sell-parts" component={Form} />
              
              <Route path="/announcements" component={Announcements} />
              <Route path="/announcement/details/:id" component={CarDetails} />
              <Route path="/my-announcements" component={MyAnnouncements} />
              <Route path="/car-parts" component={CarParts} />
              <PrivateRoute path="/car-part" component={CarPart} />

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
