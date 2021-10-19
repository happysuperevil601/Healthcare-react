import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appointment';
import Shop from './Components/Shop/Shop';
import Notfound from './Components/Notfound/Notfound';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { AuthContext } from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthContext.Provider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route path="/home" >
              <Home></Home>
            </Route>
            <Route path="/appointment" >
              <Appointment></Appointment>
            </Route>
            <Route path="/shop" >
              <Shop></Shop>
            </Route>
            <Route path="/purchaseService/:id" >
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route path="/register" >
              <Register></Register>
            </Route>

            <Route path="*" >
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthContext.Provider>

    </div>
  );
}

export default App;
