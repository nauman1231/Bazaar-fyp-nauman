import React, { Component } from 'react'
// import "./Card.scss";
import Icon from "../../assets/images/corn.jpg";

import styled from 'styled-components';
import {devices} from '../../assets/devices/devices'
export default class Cards extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false };
    }


    render() {
        return (
            
                <Cardcontainer className="Cardcontainer" >
                <CardText className="CardText">1</CardText>
                    <CardimageContainer className="CardimageContainer">
                        <Cardimage src={Icon} className="Cardimage"></Cardimage>
                    </CardimageContainer>
                    
                    <CardText className="CardText">Corn Flakes</CardText>
                    <CardText className="CardText">12334</CardText>
                    <CardText className="CardText">100Rs</CardText>
                    <CardText className="CardText info">Online</CardText>

                </Cardcontainer>
              

            
        )
    }


}
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

// .info`
//     color: rgb(0, 160, 0);
// `