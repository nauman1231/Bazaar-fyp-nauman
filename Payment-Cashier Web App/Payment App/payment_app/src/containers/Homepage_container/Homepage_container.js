import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer, getRetailer } from '../../actions/Retailer/retailerAction'
import HomePage from "../../Pages/HomePage/HomePage";


class HomePageContainer extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        return (<>
            
            <HomePage />
        </>);

    }
}




export default HomePageContainer;



