import React, { Component } from 'react';

import QuickBuy from "../components_cart/quickBuy/landing";
import Navbar from '../components/Navbar/navbar'

import Footer from '../components_cart/Footer/Footer'
import styled from 'styled-components';
import {reactLocalStorage} from 'reactjs-localstorage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
class home_container extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount(){
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
        if (!reactLocalStorage.get('login')) {
            return <Redirect to='/login'/>;
          }
        return (
        <Section>
         
        <Navbar />
          <QuickBuy />
        <Footer />
        </Section>
         
        );

    }
}

const Section=styled.section
    `
    width:100%;
    display: block;
   overflow:hidden;
    height:100%;
    `
    


export default home_container;



