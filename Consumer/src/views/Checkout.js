import React, { Component } from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import TomatoImage from "../assets/img/tomato.png";
import CartItem from './CartItem';
import { CardElement } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


export default class Checkout extends Component {
    render() {

        const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');


        return (
            <Elements stripe={stripePromise}>
                <div className="pareFntContainer">

                    <IndexNavbar   history={History} />

                    <div className="banner">

                        <h1>Checkout</h1>

                    </div>


                    <div className="checkoutForm">

                <input placeholder="Name" className="checkoutInput"     />
                <input placeholder="Address" className="checkoutInput"     />
                <input placeholder="Name" className="checkoutInput"     />
                <input placeholder="Name" className="checkoutInput"     />

                <div className="cardInput">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
            
                                },
                            }}
                        />

                        </div>

                <button className="purchaseBtn">PURCHASE</button>


                    </div>




                </div>


            </Elements >

        )
    }
}
