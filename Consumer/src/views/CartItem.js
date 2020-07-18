import React, { Component } from 'react'
import TomatoImage from "../assets/img/tomato.png";

export default class CartItem extends Component {
    render() {
        return (
            <div className="cartItem">

                <div className="itemImageContainer">
                    <img  src={TomatoImage} className="itemImage"  />
                </div>

                <div className="itemDescription">
                 <p className="itemName itemTxt">Tomato</p>
                 <p className="itemCategory itemTxt">Vegetables</p>
                </div>

                <div className="itemQuantity">
                <p className="itemTxt">5</p>  
                </div>

                <div className="itemPrice">
                <p className="itemTxt">54 $</p>  
               
                </div>

            </div>
        )
    }
}
