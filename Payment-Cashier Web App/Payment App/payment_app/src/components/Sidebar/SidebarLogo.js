import React, { Component } from 'react'
import "./Sidebar_logo.scss";
import Icon from "../../assets/icons/delivery.svg";


export default class SidebarLogo extends Component {
    render() {
        return (
            <>
                <div className="Sidebar__div--LogoContainer">

                    <div className="Sidebar__div--LogoImageContainer">
                        <img src={Icon} className="Sidebar__img--LogoImage" />
                    </div>
                    <h1 className="Sidebar__h1--LogoTitle">{this.props.title}</h1>

                </div>
            </>
        )
    }
}
