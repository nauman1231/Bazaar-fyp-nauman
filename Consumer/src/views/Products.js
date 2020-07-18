import React, { Component } from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import TomatoImage from "../assets/img/tomato.png";
import CartItem from './CartItem';
import ProductSection from "components/Sections/ProductSection";



export default class Products extends Component {
    render() {
        return (
            <div>
             
            
            <IndexNavbar navBarColor="primary" />

            <div className="banner">

                <h1>Products</h1>

            </div>

                <ProductSection />

            </div>
        )
    }
}
