import React, { Component } from 'react'
import "./IconText.scss";
import Icon from "../../assets/icons/delivery.svg";


export default class IconText extends Component {
    render() {
        return (
            <>
                <div className="ITcontainer">
                    <img src={Icon} className="Iimage"></img>
                    <h1 className="Itext">Home</h1>
                </div>
            </>
        )
    }
}
