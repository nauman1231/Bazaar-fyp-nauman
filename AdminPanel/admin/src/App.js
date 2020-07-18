import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/home_container';
import Retailer from './containers/retailer';
import Deliverer from './containers/deliverer';
import Inventory from './containers/inventory';
import Payment from './containers/payment';
import PaymentDetails from './containers/paymentDetails';
import Login from './components/profiling/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div id="app">
     <Router>
        <Switch>

          {/* <Route  exact path="/">
            
          </Route> */}
          <Route exact path="/" render={(routeProps) => <Home {...routeProps} />}>
            </Route>
            <Route exact path="/login" render={(routeProps) => <Login {...routeProps} />}>
            </Route>
            <Route exact path="/retailer" render={(routeProps) => <Retailer {...routeProps} />}>
            </Route>
            <Route exact path="/deliverer" render={(routeProps) => <Deliverer {...routeProps} />}>
            </Route>
            <Route exact path="/inventory" render={(routeProps) => <Inventory {...routeProps} />} />
            <Route exact path="/payment" render={(routeProps) => <Payment {...routeProps} />}>
            </Route>
            <Route exact path="/payment/stores/:id" render={(routeProps) => <PaymentDetails {...routeProps} />}>
            </Route>
        </Switch>
      
      </Router>
        
    </div>
  );
}

export default App;
