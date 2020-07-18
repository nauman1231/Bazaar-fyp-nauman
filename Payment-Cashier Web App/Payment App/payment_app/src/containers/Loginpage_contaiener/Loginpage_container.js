import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer, getRetailer } from '../../actions/Retailer/retailerAction'
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";


class LoginPageContainer extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        return (<>
            
                <LoginPage/> 
        </>);

    }
}




export default LoginPageContainer;



