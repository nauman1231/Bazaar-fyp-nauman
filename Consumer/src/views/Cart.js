import React, { Component } from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import TomatoImage from "../assets/img/tomato.png";
import CartItem from './CartItem';



export default class Cart extends Component {
    render() {

        const History =this.props.history

        return (
            <div className="parentContainer">

                <IndexNavbar navBarColor="primary" history={History} />

                <div className="banner">

                    <h1>Cart</h1>

                </div>


                <div className="cartItems">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />

                    <div className="TotalPrice">
                        <p>Total Price : <span className="totalPriceText">128$</span> </p>
                    </div>

                    <button className="checkoutBtn">Checkout</button>

                </div>




            </div>
        )
    }
}
