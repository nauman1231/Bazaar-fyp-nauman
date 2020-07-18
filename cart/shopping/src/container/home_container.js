import React, { Component } from 'react';

import HomePage from "../pages/homePage";
import Navbar from '../components/Navbar/navbar'

import Footer from '../components/Footer/Footer'




class home_container extends Component {


    constructor(props) {
        super(props);
    }


    render() {

        return (
        <>
            
            <Navbar />
            <HomePage />
            
        </>);

    }
}




export default home_container;



