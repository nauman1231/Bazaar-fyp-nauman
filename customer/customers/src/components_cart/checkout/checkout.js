import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard,faCoffee } from '@fortawesome/free-regular-svg-icons';
import Payment from '../payment/payment'
import Card_container from '../../container_cart/card_container'
import CreditCardInput from 'react-credit-card-input';
import { Route, Link, Switch } from "react-router-dom";
import Progress from '../progressBar/progress';
export default class classDetails extends Component {
    render() {
        
        return (
            <>

              <Rox>
                 
                    <Heading>Confirm</Heading>
                    <p>Please confirm after carefully readinng the details</p>
                    <Icons>
                   
                    </Icons>

                    <ContainerDetail >
                        <DIV>
                        <Label>Name: </Label>
                        <Text>Nauman Khalid Sheikh</Text>
                        </DIV>
                        <DIV>
                        <Label>Contact: </Label>
                        <Text>0307-5135138</Text>
                        </DIV>
                        <DIV>
                        <Label>Address: </Label>
                        <Text>st 12, house 12, Askari 20, Rawalpindi</Text>
                        </DIV>
                        <Border></Border>

                        <DIV>
                        <Label>Method: </Label>
                        <Text>Credit Card</Text>
                        </DIV>
                        <DIV>
                        <Label>Holder Name: </Label>
                        <Text>Nauman Sheikh</Text>
                        </DIV>
                        <DIV>
                        <Label>Card Number: </Label>
                        <Text>123 213 1234</Text>
                        </DIV>
                        <DIV>
                        <Label>CCV: </Label>
                        <Text>123</Text>
                        </DIV>
                        <Border></Border>

                        <Button style={{backgroundColor:'#292929'}} onClick = {this.props.action}>Previous</Button>
                        <Button type="button"  >Done</Button>

                    </ContainerDetail>
              </Rox>
            </>
        )
    }
}
const DIV = styled.div`
display:inline-flex;
height:30px;
`
const Border =styled.div`
border-bottom:solid 2px rgb(189, 189, 189,.5);
`
const Button =styled.button`
align-self:center;
margin-top:15%;
margin-left:5%;
margin-bottom:10px;
text-align:center;
width:40%;
height:40px;
border:none;
background-color:rgb(33, 150, 243,1);
font-family:"Poppins";
font-size:18px;
color:White;
border-radius:8px;
`

const Label=styled.label`
    font-size:12px;
    font-family:"Poppins";
    margin:0;

    padding:10px;
  
`
const Expiration=styled.span`
padding:1%;
border: none;
border-bottom: 2px solid rgb(189, 189, 189,.5);
backgroud-color:#BDBDBD;


`
const Dal=styled.input`
padding-top:1%;
border: 0;
`

const Input=styled.input`
border: none;
border-bottom: 2px solid rgb(189, 189, 189,.5);
backgroud-color:#BDBDBD;
margin-top:2%;
margin-bottom:3%;
width:70%;
`
const ContainerDetail =styled.div`
display:block;
justify-content: space-between;
font-size:12px;
font-family:"Poppins";

`
const Text =styled.p`
padding:10px;
`
const Icons =styled.div`
display:inline-flex;
margin-left:0%;
align-content:center;
border-bottom:solid 2px rgb(189, 189, 189,.5);
width:90%;


`
const CreditCardLogo=styled.div`
margin-bottom:10%;
display:relative;
color:#BDBDBD;
font-size:	2.375rem;
border: solid 2px #BDBDBD;
border-radius:10px;
width:100px;
text-align:center;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
margin-left:5%;
`
const Rox = styled.div` 



height:100%;
width:100%;


`

const Heading = styled.p`
margin-top:5%;
justify-content: space-between;
color:#292929;
font-family:'Poppins';
font-size:24px;
font-weight:100;

`

