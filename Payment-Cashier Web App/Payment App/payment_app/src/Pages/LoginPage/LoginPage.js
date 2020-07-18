
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer, getRetailer } from '../../actions/Retailer/retailerAction'
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import "./LoginPage.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

import Dashboard from '../../components/Dashboard/Dashboard';
import Button from '@material-ui/core/Button';
import ProductTable from "../../components/ProductTable/ProductTable";

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class LoginPage extends Component {




    render() {

        return (<>
            <div className="LoginPageContainer">


                <div className="LoginPage">

                    <h1 className="Login-txt">Login</h1>
                    <input placeholder="Username" className="Login_inp" />
                    <input placeholder="Password" className="Login_inp" />
                    <Button className="LoginBtn" id="LoginBtn" color="#343847">Login</Button>
                    <a className="signLink">Signup</a>
                </div>

            </div>
        </>)


    }
}



export default LoginPage;