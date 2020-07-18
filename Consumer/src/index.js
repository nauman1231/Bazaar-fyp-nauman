
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProductDetail from "views/ProductDetail.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Login from "views/examples/Login.js";
import Products   from "views/Products.js";
// others

// redux
import store from "../src/store/store";
import { Provider } from 'react-redux';
import Cart from "views/Cart";
import Checkout from "views/Checkout";




ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />

      <Route
      path="/productDetail"
      render={props => <ProductDetail {...props} />}
       />
       
       <Route
       path="/cart"
       render={props => <Cart {...props} />}
        />

        
       <Route
       path="/products"
       render={props => <Products {...props} />}
        />
        
        <Route
       path="/checkout"
       render={props => <Checkout {...props} />}
        />

      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/signup"
        render={props => <RegisterPage {...props} />}
      />

      <Route
      path="/signin"
      render={props => <Login {...props} />}
    />

      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
