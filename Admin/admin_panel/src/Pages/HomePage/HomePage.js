import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer, getRetailer } from '../../actions/Retailer/retailerAction'
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import "./HomePage.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import InfoPage from "../InfoPage/InfoPage";
import Dashboard from '../../components/Dashboard/Dashboard';


class HomePage extends Component {




    render() {

        return (<>
            <Dashboard title="Dashboard" />
        </>)


    }
}



export default HomePage;