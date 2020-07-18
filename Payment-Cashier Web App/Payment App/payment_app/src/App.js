import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Navbar from "./components/Navbar/Navbar";
import HomePageContainer from "./containers/Homepage_container/Homepage_container";
import OrderPageContaienr from './containers/Orderpage_container/Orderpage_container';
import LoginPage from './Pages/LoginPage/LoginPage';



function App() {

  const [isAuth, setIsAuth] = useState(false)

  setTimeout(() => {
    setIsAuth(true)
  }, 1000);

  const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
      isAuth
        ? <Component {...props} />
        :
        <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
        }}
        />
    )}
    />
  )

  if (isAuth)

    return (
      <div className="homepage-container">
        <Router>
          <PrivateRoute component={Navbar} />
          <Route exact path="/" render={(routeProps) => <HomePageContainer {...routeProps} />}/> 
          <Route exact path="/OrderDetail" render={(routeProps) => <OrderPageContaienr {...routeProps} />}/> 

        </Router>

      </div>

    );


  else
    return <LoginPage />


}

export default App;
