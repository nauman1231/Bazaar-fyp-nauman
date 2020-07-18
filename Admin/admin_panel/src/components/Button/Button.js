import React, { Component } from 'react'
import "./Button.scss";
import Icon from "../../assets/icons/delivery.svg";


export default class Button extends Component {
    render() {
        return (
            <>
                <div className="BtnContainer Btn_filled">
                    <h1 className="BtnText ">Button</h1>
                </div>
                {" "}
                <div className="BtnContainer Btn_outlined">
                    <h1 className="BtnText ">Button</h1>
                </div>
                {" "}
                <div className="BtnContainer Btn_filled_gradient">
                    <h1 className="BtnText ">Button</h1>
                </div>
                {" "}
                <div className="BtnContainer Btn_filled_danger ">
                    <h1 className="BtnText ">Button</h1>
                </div>

            </>
        )
    }
}
