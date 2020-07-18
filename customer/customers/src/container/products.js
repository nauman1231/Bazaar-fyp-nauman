import React, { Component } from 'react';

import Footer from "../components/Footer/Footer"
// import Navbar from '../Navbar/navbar'
import Filters from '../components/filters/filters'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import {reactLocalStorage} from 'reactjs-localstorage';
class products extends Component {

    constructor(props) {
        super(props);
        this.state={
            login:false,
            timeout:false,
        }
    }

    componentDidMount() {
        this.setState({
            login: reactLocalStorage.get('login')
        })

        let hours = 1
        let saved = localStorage.getItem('UserTime')
        if (saved && (new Date().getTime() - saved > hours * 60*60 * 1000)) {
            this.setState({
                timeout:true
            })
        localStorage.clear()
        }
    }


 

    render() {

        // const login  = this.state.login

        // if (!reactLocalStorage.get('login')) {
        //   return <Redirect to='/login'/>;
        // }
        return (<>
        <Filters />
            
           
        </>)
    }
    }
    export default products;