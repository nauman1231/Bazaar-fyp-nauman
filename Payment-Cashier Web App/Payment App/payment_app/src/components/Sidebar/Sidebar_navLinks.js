import React, { Component } from 'react'
import "./Sidebar_navLinks.scss";
import Icon from "../../assets/icons/delivery.svg";
import { Link, Router } from "react-router-dom"

export default class SidebarNavLinks extends Component {

    constructor(props) {
        super(props);
        this.state = { expand_user: false }
    }


    render() {

        let class_homeLink      = "Links";
        let class_requestLink   = "Links";
        let class_User          = "Links";

        if(this.state.expand_user){
            class_User  +=  " showBorder"; 
        }
        else{
            class_User  =   "Links"
        }



        switch (this.props.nav_props.location.pathname) {

            case "/":
                class_homeLink      +=" isBold";
                class_requestLink    ="Links";
                break;

            case "/request":
                class_homeLink       ="Links";
                class_requestLink   +=" isBold";
                break;

            default:
                class_homeLink       ="Links";
                class_requestLink    ="Links";
                break;
        }



        console.log(this.props.nav_props)
        return (
            <>
                <div className="NavLinksContainer">
                    <p className={class_homeLink} onClick={() => this.props.nav_props.history.push("/")}   >Home</p>
                    <p className={class_requestLink} onClick={() => this.props.nav_props.history.push("/request")}   >Request/Complaints</p>
                    <p className={class_User} onClick={() => { this.toggle_isExpandUser() }}>Users</p>
                    {this.state.expand_user &&
                        <div className="subLinks">
                            <p className="Links subLink">Consumer</p>
                            <p className="Links subLink">Retailer</p>
                            <p className="Links subLink">Deliverer</p>
                        </div>
                    }
                </div>
            </>
        )
    }


    toggle_isExpandUser() {
        this.setState({ expand_user: !this.state.expand_user })
    }



}
