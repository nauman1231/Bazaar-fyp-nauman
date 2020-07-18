import React, { Component } from 'react';
import "./DetailPage.scss";
import Placeholder from "../../assets/images/Avatar.jpg"

class DetailPage extends Component {




    render() {

        return (<>
        <div className="detailpage">
        <h1 className="detailpage__title">Detail Page</h1>
        <img src={Placeholder} className="detailpage__image" />
        <p className="detailpage_type">Retailer</p>
        <h1 className="detailpage__subtitle">Description</h1>
        <p  className="detailpage__description">lorem loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
        lorem loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
        lorem loremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
        <p className="detailpage__status">Approved</p>
        </div>



        </>)


    }
}



export default DetailPage;