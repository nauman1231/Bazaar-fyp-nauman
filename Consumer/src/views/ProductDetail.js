import React, { Component } from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import TomatoImage from "../assets/img/tomato.png";



export default class ProductDetail extends Component {
    render() {

        const History =this.props.history

        return (
            <div className="parentContainer">

                <IndexNavbar navBarColor="primary"  history={History} />
 
                <div className="banner">

                    <h1 className="bannerTitle">Tomato</h1>

                </div>

                <div className="product">

                    <div className="produtImage">
                        <img src={TomatoImage} className="prodImg"></img>
                    </div>


                    <div className="productDetail">
                        <h1 className="productTitle">Tomato 4KG</h1>
                        <h2 className="retailerName">by  Reatailer Name</h2>
                        <h3 className="productPrice">59$ </h3>
                        <p className="productDescription">Details of the Product Details of the Product Details of the Product
                        Details of the Product Details of the Product
                    </p>
                        <input placeholder="0"  className="productInp" />
                        <button className="productBtn">ADD TO CART</button>


                    </div>


                </div>



            </div>
        )
    }
}
