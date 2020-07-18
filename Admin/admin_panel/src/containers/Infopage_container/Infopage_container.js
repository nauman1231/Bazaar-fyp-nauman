import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRetailer, getRetailer } from '../../actions/Retailer/retailerAction'
import InfoPage from "../../Pages/InfoPage/InfoPage";


class Infopage_container extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        return (<>
            
            <InfoPage />
        </>);

    }
}




export default Infopage_container;



