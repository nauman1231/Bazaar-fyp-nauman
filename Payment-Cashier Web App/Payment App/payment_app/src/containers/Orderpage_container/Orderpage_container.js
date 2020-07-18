import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer, getRetailer } from '../../actions/Retailer/retailerAction'
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import OrderPage from '../../Pages/OrderPage/OrderPage'


class OrderPageContainer extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        return (<>
                <OrderPage/> 
        </>);

    }
}




export default OrderPageContainer;



