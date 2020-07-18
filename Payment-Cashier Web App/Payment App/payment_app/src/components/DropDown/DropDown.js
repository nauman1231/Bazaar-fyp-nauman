import React, { Component } from 'react'
import "./DropDown.scss";


export default class DropDown extends Component {
    render() {
        return (
            <>
                <div className="DropDown">
                <p className="DropDownLabel">Filter</p>
                    <select className="DropDownSelect">
                    <option>Name</option>
                    <option>Type</option>
                    <option>Date</option>
                    </select>
                </div>
            </>
        )
    }
}
