import React, { Component } from 'react'
import "./Card.scss";
import Icon from "../../assets/images/Avatar.jpg";
import ExpandedCard from "../ExpandedCard/ExpandedCard";

export default class Card extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false };
    }


    render() {
        return (
            <>
                <div className="Cardcontainer" onClick={() => { this.toggleExpanded() }}>
                    <div className="CardimageContainer">
                        <img src={Icon} className="Cardimage"></img>
                    </div>
                    <p className="CardText">DriverName</p>
                    <p className="CardText">Islamabad</p>
                    <p className="CardText">0300 1234567</p>
                    <p className="CardText info">Online</p>

                </div>
                {this.state.isExpanded &&
                    <ExpandedCard />    }


            </>
        )
    }

    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }



}
