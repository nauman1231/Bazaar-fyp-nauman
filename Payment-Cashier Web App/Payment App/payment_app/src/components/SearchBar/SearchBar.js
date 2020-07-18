import React, { Component } from 'react'
import "./SearchBar.scss";
import Icon from "../../assets/icons/searchIcon.svg";


export default class SearchBar extends Component {
    render() {
        return (
            <>
            
                <div className="Search">
                    <div className="SearchBarContainer">
                        <input placeholder="Search Here" className="SearchInput">
                        </input>
                        <img className="SearchIcon" src={Icon}></img>
                    </div>
                </div>

            </>
        )
    }
}
