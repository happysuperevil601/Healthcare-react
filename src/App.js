import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appointment';
import Shop from './Components/Shop/Shop';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
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
          <Route path="*" >
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
