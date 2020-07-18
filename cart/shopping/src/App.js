import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import './App.css';
import Home_container from './container/home_container'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Shipping from './components/shipping/shipping'
import Footer from './components/Footer/Footer'
import HomePage from './pages/homePage'
import Navbar from './components/Navbar/navbar'
library.add(fas)

function App() {
  return (<div style={{height:"100%"}}>
        <Router>
        
          <Route exact path="/" strict render={(routeProps) => <Home_container {...routeProps} />}/> 
       
        </Router>
        
        <Footer/>
   
   
    </div>
  );
}

export default App;
