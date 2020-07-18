import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer, getRetailer } from '../../actions/Retailer/retailerAction'
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import "./DetailCard.scss";
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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class OrderPage extends Component {




    render() {

        return (<>


            <div className="DetailCardContainer">

                <div className="DetailCardCols">
                    
                <div className="DetailCardCol">
                <p className="detailCard_txt">*</p>
                </div>

                <div className="DetailCardCol">
                <p className="detailCard_txt">Deliverer Detail</p>
                </div>

                <div className="DetailCardCol">
                <p className="detailCard_txt">Est Time</p>
                </div>

                <div className="DetailCardCol">
                <p className="detailCard_txt">Order ID</p>
                </div>

                <div className="DetailCardCol">
                <p className="detailCard_txt">Payment</p>
                </div>


                </div>

            </div>

        </>)


    }
}



export default OrderPage;