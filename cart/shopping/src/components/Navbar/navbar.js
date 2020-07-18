import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faShoppingBag,faAlignRight } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/SearchBar'
import {devices} from '../../assets/devices/devices'


class navbar extends Component {

    constructor(props) {
        super(props);
    }


 

    render() {

        return (<>
    <Navbar className="App">
        <NavBartitleContainer className="NavBar-titleContainer">
        <ICON><FontAwesomeIcon icon={ faBars }/></ICON>
        <NavBar__logo className="NavBar__logo">Baazar.</NavBar__logo>

        </NavBartitleContainer>
            <Category><FontAwesomeIcon icon={ faAlignRight }/> Categries </Category>
        <Search><SearchBar/></Search>

         <NavBar_iconContainer className="NavBar-iconContainer">
           <Shopping_cart ><FontAwesomeIcon icon={ faShoppingBag }/></Shopping_cart>
            <User ><FontAwesomeIcon icon={ faUser }/></User> 
        </NavBar_iconContainer>
    </Navbar>
        </>);

    }
}


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
left:10%;
@media ${devices.mobileM && devices.max }  { 
    position:relative;
    left:0%;
  }
`
const NavBar_iconContainer=styled.div`
    width: 10%;
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


