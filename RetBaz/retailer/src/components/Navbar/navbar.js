import React, { Component } from 'react';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faBoxOpen,faCog,faDollarSign,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../SearchBar/SearchBar'
 import {devices} from '../../assets/devices/devices'
 import Popup from "reactjs-popup";
 import {post} from 'axios';

 import {reactLocalStorage} from 'reactjs-localstorage';
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.configure();
class navbar extends Component {

    constructor(props) {
        super(props);
        this.state={
            confirmation:false
        }
        this.sendDeleteRequest=this.sendDeleteRequest.bind(this)
    }


    sendDeleteRequest(){
        const data = {
            type:'Delete',
            retailer:reactLocalStorage.get('reailerID'),
            stores:reactLocalStorage.get('nauman')
        };
        console.log(data)
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
    
    post(`http://localhost:4000/request/add`,  data ,config).then(res => {
        toast("Your request to delete the store has been send to the Bazaar administration", { type: "info" });

      })
    }

 

    render() {

        return (<>
        <Navbar>
            <NavBartitleContainer className="NavBar-titleContainer">
           
            <NavBar__logo className="NavBar__logo">Baazar.</NavBar__logo>
            <StyledLink to={{pathname: `/`}} > <DashBoard><Icon><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon></Icon>Dashboard</DashBoard></StyledLink>
            <StyledLink to={{pathname: `/products`}} ><Products><Icon><FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon></Icon>Products </Products></StyledLink>
            </NavBartitleContainer>

            <SubNavContent>
           
            <StyledLink to={{pathname: `/order`}} >  <Sales><Icon><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></Icon>Payment</Sales></StyledLink>
            <Analytics onClick={(e) => { if (window.confirm('Are you sure you wish to delete your store from Bazaar?')) this.sendDeleteRequest(e) } }  ><Icon><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Icon>Delete Store</Analytics>
    
            </SubNavContent>
        </Navbar>
             

        </>
        )

    }
}
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Icon =styled.i
`
position:relative;
top:5px;
margin-right:10px;
font-size:1.5rem;
`


const Navbar = styled.div`
width:20%;
justify-content: space-between;
align-items: center;
height:100%;

position:fixed;
background-color:#292929;
  
`
const NavBartitleContainer = styled.div`
// width: 25%;
margin-top:18%;
display: block;
align-items: center;
text-align:center;
height:50%;
`


const NavBar__logo=styled.p
` margin: 0;

padding: 0;
cursor: pointer;
color:white;
font-family: 'Poppins';
font-size:2rem;
`
const DashBoard=styled.div
`
margin-top:45%;
background-color:black;

height:60px;
color:white;
font-family:'Poppins';
text-decoration:none;
font-size:18px;
font-weight:lighter;

`
const Products=styled.div
`

height:55px;
color:white;
font-family:'Poppins';
text-decoration:none;
padding-right:12px;
font-size:18px;
font-weight:lighter;
`
const Routes=styled.a
`
position:relative;
top:6px;
text-decoration:none;
text-align:center;
&:visited{
   color:white;
  }
`
const SubNavContent=styled.div
`
margin-top:18%;
display: block;
align-items: center;
text-align:center;

`
const Sales=styled.div
`
margin-top:60%;

height:60px;
color:white;
font-family:'Poppins';
text-decoration:none;
font-size:12px;
font-weight:lighter;
padding-right:15px;
`
const Analytics=styled.div
`

height:60px;
color:red;
font-family:'Poppins';
text-decoration:none;
font-size:12px;
font-weight:lighter;
`

const Edit=styled.div`
position:relative;

`

const DeleteButton=styled.button`
border:none;
background:none;
cursor:pointer;
outline:none;
`
const Cardcontainer=styled.div`
    font-family: 'Poppins',sans-serif;
    letter-spacing: .5pt;
    display: flex;
    // width: 100%;
    align-items: center;
    padding: .6rem  1rem;
    margin: 1rem 0rem;
    justify-content: space-between;
    background: #F6F9FC;
    margin-top: .5rem;
    overflow-x: auto;
    cursor: pointer;
    @media ${devices.mobileM && devices.max }  { 
        height:100px;
      }
`

const CardText=styled.p`
    font-weight: 600;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    width:100px;
`

const CardimageContainer=styled.div`
  display: flex;  
  border-radius: 50%;
  background: rgb(221, 221, 221);
//   padding:.5rem;
  width: 36px;

`

const Cardimage=styled.img`
  width:100%;
`


const Modal=styled.div `
    font-size: 12px;
  `
  const Header=styled.div `
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  `

  const Content=styled.div `
    width: 100%;
    padding: 10px 5px;
  `
  const Action =styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  `
  const Close=styled.a`
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
  `


  const Title =styled.div
  `
  height:15%;
  display: inline-flex;
  width:100%;
  
  `
  const Heading=styled.p
  






export default navbar;


