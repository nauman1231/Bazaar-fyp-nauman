import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fabGoo } from '@fortawesome/free-solid-svg-icons';

import Cart from '../components/cart/cart';
import Payment from '../components/payment/payment';
import {devices} from '../assets/devices/devices'
export default class HomePage extends Component {
    render() {
        return (
            <>
              <Home_Page>
                    
                    <Cart />
                    <Payment/>
                  
              </Home_Page>
            </>
        )
    }
}
const P=styled.p`
color:red;
`
const Tex=styled.div`
display:grid;
grid-template-columns:50% 50%;
font-family:'Poppins';
font-size:18px;
font-weight400;
align-items: flex-end;
text-align: end;
margin-bottom:2%;
`
const Box = styled.div` 
display:grid;
grid-template-rows:50% 50%;
position:relative;
height:20%;
left:60%;
padding-top:5%;

border-bottom:solid 1px #707070;

height:50%;
width:40%;

`

const Home_Page=styled.div` 
justify-content: space-between;
width: 100%;
height:70%;
background-color:#FFFF;
padding-top: 0;
padding-bottom:10%;
display:flex;
flex-flow: row wrap;
justify-content: space-around;
margin-top:50px;
 @media ${devices.mobileM && devices.max } { 
  flex-direction: column;   
  display: flex;
  flex:1;
  padding:5%;
  overflow-y:hidden;
}

`

 

