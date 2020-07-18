import React, { Component } from 'react'

import Icon from "../../assets/icons/searchIcon.svg"

import styled from 'styled-components'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state={
            isExpanded:false,
            search:""
        }
    }


 
   
   
    render() {
        return (
            <>
            
                <div className="Search">
                    <SearchBarContainer className="SearchBarContainer">
                        <SearchInput placeholder="Search" className="SearchInput" onChange={e => this.setState({search:e.target.value})}>
                        </SearchInput>
                        <SearchIcon className="SearchIcon" src={Icon } onClick={() => this.props.action(this.state.search)} ></SearchIcon>
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
border-radius: 24px;
width: 300px;
outline: none;
border: 1px solid #292929;
color:#BDBDBD;
font-family: "Poppins", sans-serif;
color:black;
font-weight: 400;




`
const SearchIcon=styled.img`
width: 18px;
position: absolute;

right: 14px;
top: 10px;;
cursor: pointer;

`