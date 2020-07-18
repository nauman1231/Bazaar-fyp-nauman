import React, { Component } from 'react'
import "./Navbar.scss";
import Icon from "../../assets/images/Avatar.jpg";
import ExpandedCard from "../ExpandedCard/ExpandedCard";


export default class Navbar extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false };
    }


    render() {
        return (
            <>
                <div className="Navbar">
                

                    <div className="navIconsContainer">
                    
                    <div className="iconLink">
                    <img  src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" className="icon" />
                    <p className="icontext">Walk In</p>
                    </div>
                    
                       
                    <div className="iconLink">
                    <img  src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" className="icon" />
                    <p className="icontext">Walk In</p>
                    </div>
                    
                       
                    <div className="iconLink">
                    <img  src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" className="icon" />
                    <p className="icontext">Walk In</p>
                    </div>
                    
                    
                    </div>


                </div>
            </>
        )
    }

    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }



}
