import React from 'react';
import logo from './logo.svg';
import './App.css';
import NAVBAR from "./components/NAVBAR/NAVBAR.js";
import DRAWER from "./components/DRAWER/DRAWER.js";
import CARDS from "./components/CARDS/CARDS.js";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SignupPage from "./container/Signup/SignupPage";
import StoreSignupPage from "./container/Signup/StoreSignupPage";
import Home from "./container/Home/Home";
import StoreDetail from "./container/StoreDetail/StoreDetail";
import addProduct from "./container/Product/AddProduct";


import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import AddProduct from './container/Product/AddProduct';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));



function App() {

  const [Drawer, setDrawer] = React.useState(false);
  const classes = useStyles();


  return (

    <div>
      <Router>
        <Switch>
          <Route path="/retailerSignup" render={routerProps => <SignupPage {...routerProps} />} />

          <Route path={"/storeSignup"} render={routerProps => <StoreSignupPage {...routerProps} />} />

          <Route path={"/Home"}>
            <Home />
          </Route>
          
          <Route path="/Stores/:name" strict render={(props) => <StoreDetail {...props} />} />
          
          
          <Route path="/addProduct" render={(props) => <AddProduct {...props} />} />



          
        </Switch>
      </Router>
    </div>
  );


}




export default App;
