import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer, getRetailer } from '../../actions/Retailer/retailerAction'
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import "./OrderPage.scss";
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
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class OrderPage extends Component {




    render() {

        return (<>

            <div className="HomePage">

                <div className="HomePageContianer">
                    <h1 className="HomePageTitle">Walk in Orders</h1>


                    <div>
                        <div className="itemListSection">

                            <div className="itemList">
                                <h1 className="itemListTxt">Order List</h1>

                                <FormControl id="searchInp">
                                    <Input
                                        placeholder="Search here"
                                        id="standard-adornment-weight"
                                        endAdornment={<InputAdornment position="end"><AccountCircle /></InputAdornment>}
                                        aria-describedby="standard-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                    />
                                </FormControl>

                            </div>

                            <Button id="#ReturnBtn"
                                startIcon={<AccountCircle />}

                            >Return</Button>



                        </div>

              

                    </div>
                </div>



                <div className="HomePageDetails">

                    <h1 className="details_title">Details</h1>

                    <div className="detials_description">
                        <AccountCircle />

                        <div className="detail_cols">

                            <div className="detail_col">
                                <p className=" row_txt col_txt dot">.</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt  col_txt">ProductID</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt col_txt">Name</p>
                            </div>

                        </div>


                        <div className="detail_cols">

                            <div className="detail_col">
                                <p className=" row_txt">#</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt">ProductID</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt">Name</p>
                            </div>

                        </div>


                        <div className="detail_cols">

                            <div className="detail_col">
                                <p className=" row_txt">#</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt">ProductID</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt">Name</p>
                            </div>

                        </div>


                        <div className="detail_cols">

                            <div className="detail_col">
                                <p className=" row_txt">#</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt">ProductID</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt">Name</p>
                            </div>

                        </div>


                        <div className="detail_cols">

                            <div className="detail_col">
                                <p className=" row_txt">#</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt">ProductID</p>
                            </div>


                            <div className="detail_col">
                                <p className=" row_txt">Name</p>
                            </div>

                        </div>






                    </div>

                    <div className="CheckoutBtnContainer">
                        <Button id="Checkout">Check Out</Button>
                    </div>





                </div>





            </div>

        </>)


    }
}



export default OrderPage;