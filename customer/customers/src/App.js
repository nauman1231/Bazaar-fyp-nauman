import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
import Details from "./container/details";
import Products from "./container/products";
import Landing from "./container/landing";
import Home_container from "./container_cart/home_container";
import Quick from "./container_cart/quickBuy";
import Inside from "./container_cart/insideQuick";

import AllProducts from "./components/allStores/alldata";
import Category from "./components/category/category";
import Login from "./components/profiling/login";
import Signup from "./components/profiling/signup";
import Search from "./components/searchedResult/output";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

        <Route exact path="/" strict render={(routeProps) => <AllProducts {...routeProps} />}/> 

          <Route exact path="/5km" render={(routeProps) => <Products {...routeProps} />}>
            </Route>
            <Route exact path="/landing" render={(routeProps) => <Landing {...routeProps} />}>
            </Route>
            <Route exact path="/customer/:id" render={(routeProps) => <Details {...routeProps} />}>
            </Route>
            <Route exact path="/cart" strict render={(routeProps) => <Home_container {...routeProps} />}/> 

            <Route exact path="/quickbuy" strict render={(routeProps) => <Quick {...routeProps} />}/> 

            <Route exact path="/login" strict render={(routeProps) => <Login {...routeProps} />}/> 

            <Route exact path="/signup" strict render={(routeProps) => <Signup {...routeProps} />}/> 

            <Route exact path="/category" strict render={(routeProps) => <Category {...routeProps} />}/> 
          
            <Route exact path="/search" strict render={(routeProps) => <Search {...routeProps} />}/> 

            <Route exact path="/inside/:id" strict render={(routeProps) => <Inside {...routeProps} />}/> 
        </Switch>
      
      </Router>
      
      {/* <Filter /> */}
      {/* <Details /> */}
    
    </div>
  );
}

export default App;
