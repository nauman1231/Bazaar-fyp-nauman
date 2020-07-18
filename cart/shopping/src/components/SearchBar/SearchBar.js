import React, { Component } from 'react'

import Icon from "../../assets/icons/searchIcon.svg";
import styled from 'styled-components';


export default class SearchBar extends Component {
    render() {
        return (
            <>
            
                <div className="Search">
                    <SearchBarContainer className="SearchBarContainer">
                        <SearchInput placeholder="Search" className="SearchInput">
                        </SearchInput>
                        <SearchIcon className="SearchIcon" src={Icon}></SearchIcon>
                    </SearchBarContainer>
                </div>

            </>
        )
    }
}

const SearchBarContainer = styled.div`

display: inline-block;
    position: relative;
    width: 100%;
   
`

const SearchInput = styled.input`
padding: .5rem 1rem;
// border-radius: 24px;
width: 200px;
outline: none;
border-bottom: 2px solid #BDBDBD;
color:#BDBDBD;
font-family: "Poppins", sans-serif;
color:black;
font-weight: 400;
border-top:none;
border-left:none;
border-right:none;

background-color:#292929;


`
const SearchIcon=styled.img`
width: 18px;
position: absolute;

right: 14px;
top: 10px;;
cursor: pointer;

`