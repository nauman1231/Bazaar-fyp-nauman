import React, { Component } from 'react'
// import "./Card.scss";
import Icon from "../../assets/images/corn.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {devices} from '../../assets/devices/devices'
import axios from 'axios';
export default class Cards extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false };

        
    }

    
    deleteCartItem(id){
      const config = {
        headers: {
           
            'Authorization': '***'
        }
    }
      axios.delete('http://localhost:4000/shoppingcart/deleteCartItem/'+id,config).then(res=>{

        console.log(res.data)
        window.location.reload()
        })
    }


    render() {
        return (
            
                <Cardcontainer className="Cardcontainer" >
                <CardText className="CardText">1</CardText>
                    <CardimageContainer className="CardimageContainer">
                        <Cardimage src={Icon} className="Cardimage"></Cardimage>
                    </CardimageContainer>
                    
        <CardText className="CardText">{this.props.item.products.name}</CardText>
                    <CardText className="CardText">{this.props.item.quantity}</CardText>
                    <CardText className="CardText">{this.props.item.products.Seller_price}</CardText>
                    <CardText className="CardText info">{Number(this.props.item.products.Seller_price)*Number(this.props.item.quantity)}</CardText>
                    <CardText className="CardText"><DeleteButton onClick={() => this.deleteCartItem(this.props.item._id)}  ><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></DeleteButton></CardText>
                </Cardcontainer>
              

            
        )
    }


}

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

// .info`
//     color: rgb(0, 160, 0);
// `