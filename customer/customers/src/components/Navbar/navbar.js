import React, { Component } from 'react';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faShoppingBag,faAlignRight,faShoppingCart,faRocket } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/SearchBar'
import {devices} from '../../assets/devices/devices'
import Logout from '../profiling/logout'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class navbar extends Component {

    constructor(props) {
        super(props);
        this.state={
            isExpanded:false
        }
    }


    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    render() {
                   
        return (<>
    <Navbar className="App">
        <NavBartitleContainer className="NavBar-titleContainer" >
        <ICON><FontAwesomeIcon icon={ faBars }/></ICON>
        <StyledLink to={{pathname: `/5km`}} > <NavBar__logo className="NavBar__logo">Baazar.</NavBar__logo></StyledLink>

        </NavBartitleContainer>
            {/* <Category><FontAwesomeIcon icon={ faAlignRight }/> Categries </Category> */}
        <Search><SearchBar/></Search>

         <NavBar_iconContainer className="NavBar-iconContainer">
             
         <StyledLink to={{pathname: `/quickbuy`}} > <Shopping_cart ><FontAwesomeIcon icon={ faRocket }/></Shopping_cart></StyledLink>
         <StyledLink to={{pathname: `/cart`}} > <Shopping_cart ><FontAwesomeIcon icon={ faShoppingCart }/></Shopping_cart></StyledLink>
            <User onClick={() => { this.toggleExpanded() }}><FontAwesomeIcon icon={ faUser }/> </User> 
            
        </NavBar_iconContainer>
       
        
    </Navbar>
    {this.state.isExpanded &&
                <Logout />    }
    
        </>);

    }
}

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Navbar = styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
height:7%;
padding: .5rem;
background-color:#292929;
@media ${devices.mobileM && devices.max } { 

    flex-direction: column;   
    display: flex;
    flex:1;
    height:fit-content;
    align-items: baseline;
  
`
const NavBartitleContainer = styled.div`
width: 25%;
display: flex;
align-items: center;
@media ${devices.mobileM && devices.max }  { 
    width:100%;
  }
`
const ICON=styled.i
` font-size: 1.5rem;
margin-right: 1.2rem;
margin-left: 1.5rem;
cursor: pointer;
color:white
`

const NavBar__logo=styled.p
` margin: 0;

padding: 0;
cursor: pointer;
color:white;
font-family: 'Poppins';
font-size:2.875rem;


`
const Search=styled.div
` 
position:relative;
left:18%;
@media ${devices.mobileM && devices.max }  { 
    position:relative;
    left:0%;
  }
`
const NavBar_iconContainer=styled.div`
    width: 15%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media ${devices.mobileM && devices.max } { 
        position:relative;
        left:70%;
        top:-40px;
        width:fit-content;
      }
    `
const Shopping_cart  =styled.i`
margin: 0 1rem;
font-size: 1.5rem;
color:#BDBDBD;
cursor: pointer
`
const User  =styled.i`
margin: 0 1rem;
font-size: 1.5rem;
color:#BDBDBD;

cursor: pointer
`
const Category=styled.i`
// @import pop url('https://fonts.googleapis.com/css?family=Poppins:200&displ');
margin: 0 1rem;
font-size: 1.125rem;
// font-family:"pop";
color:#BDBDBD;
width:10%;
cursor: pointer
font-weight:lighter;
justify-content:flex-center;
@media ${devices.mobileM && devices.max }  { 
    align-self:center;
  }

`
export default navbar;


