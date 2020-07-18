import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import InfoPage from './Pages/InfoPage/InfoPage';
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import HomePageContainer from "./containers/Homepage_container/Homepage_container";
import InfoPageContainer from "./containers/Infopage_container/Infopage_container";
import DetailPageContainer from "./containers/Detailpage_container/Detailpage_container";


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
          <Route exact render={(routeProps) => <Sidebar  {...routeProps} />}></Route>
          <Switch>
            <Route exact path="/" render={(routeProps) => <HomePageContainer {...routeProps} />}>
            </Route>
            <Route exact path="/request" render={(routeProps) => <InfoPageContainer {...routeProps} />}></Route>
            <Route exact path="/detail" render={(routeProps) => <DetailPageContainer {...routeProps} />}></Route>
          </Switch>
        </Router>

      </div>
    );


  else
    return <SplashScreen />


}

export default App;
