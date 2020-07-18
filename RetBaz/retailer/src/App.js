import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home_container from "./containers/home_container";
import Expand from "./components/ExpandedCard/ExpandedCard";
import ProductDetail from "./components/ProductDetail/details";
import Dashboard from "./containers/dashboard_container";
import AddProduct from "./components/addProducts/addProducts";
import Login from './components/profiling/login';
import Register from './components/profiling/retailer'
import Store from './components/profiling/store'
import Order from './components/orderManagement/orders.'
import OrderDetails from './components/orderManagement/ordersDetail'
import Sales from './components/orderManagement/sales'
import Walk from './components/walkIn/walkin'
import {Helmet} from "react-helmet";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div id='app'>
       <Helmet>
       <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_UY8Mg65jm8F_BHOarN0wQAf1pFlqqtM"></script>
            </Helmet>
       <Router>
        <Switch>

          {/* <Route  exact path="/">
            
          </Route> */}
          <Route exact path="/" render={(routeProps) => <Dashboard {...routeProps} />}>
            </Route>
            <Route exact path="/addProducts" render={(routeProps) => <AddProduct {...routeProps} />}>
            </Route>
            <Route exact path="/products" strict render={(routeProps) => <Home_container {...routeProps} />}/> 

            <Route exact path="/product/detail/:id" strict render={(routeProps) => <ProductDetail {...routeProps} />}/> 

            <Route exact path="/login" strict render={(routeProps) => <Login {...routeProps} />}/> 

            <Route exact path="/register" strict render={(routeProps) => <Register {...routeProps} />}/> 

            <Route exact path="/store" strict render={(routeProps) => <Store {...routeProps} />}/> 
            <Route exact path="/order" strict render={(routeProps) => <Order {...routeProps} />}/> 
            <Route exact path="/walkin" strict render={(routeProps) => <Walk {...routeProps} />}/> 
            <Route exact path="/orderDetails" strict render={(routeProps) => <OrderDetails {...routeProps} />}/> 
            <Route exact path="/order/sales" strict render={(routeProps) => <Sales {...routeProps} />}/>
        </Switch>
      
      </Router>
    
           {/* <ProductDetail />
           <Dashboard /> */}
{/* <Expand /> */} 

    </div>
  );
}

export default App;
