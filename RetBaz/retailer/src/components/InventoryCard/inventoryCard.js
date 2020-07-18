import React, { Component } from 'react'
// import "./Card.scss";
// import Icon from "../../assets/images/corn.jpg";

import styled from 'styled-components';

export default class inventoryCard extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false ,
        
        };

    }


    render() {
        return (
            <>
                <Cardcontainer className="Cardcontainer"  onClick={() => { this.toggleExpanded() }}>
                <CardText className="CardText">1</CardText>
                 
                    
                    <CardText className="CardText">{this.props.item.name}</CardText>
                    <CardText className="CardText">{this.props.item.Retail_price}</CardText>
                    <CardText className="CardText">{this.props.item.category}</CardText>
                    <CardText className="CardText info">{this.props.item.size}</CardText>
                    <CardText className="CardText info">{this.props.item.number_of_carton}</CardText>
                    <CardText className="CardText info">{this.props.item.number_of_carton*this.props.item.product_per_carton*this.props.item.Retail_price}</CardText>
                   
                </Cardcontainer>
               
        </ >
            
        )
    }

}
const Cardcontainer=styled.div`
    font-family: 'Poppins',sans-serif;
    letter-spacing: .5pt;
    display: inline-flex;
    width:95%;
    align-items: center;
    padding: .6rem  1rem;
    margin: 1rem 0rem;
    justify-content: space-between;
    background: #F6F9FC;
    margin-top: .5rem;
    overflow-x: auto;
    cursor: pointer;
    word-break:break-word;
`

const CardText=styled.p`
    font-weight: 600;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    width:80px;
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