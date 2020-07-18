import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard,faCoffee } from '@fortawesome/free-regular-svg-icons';
import Progress from '../progressBar/progress'
import CreditCardInput from 'react-credit-card-input';

export default class classDetails extends Component {
    render() {
        return (
            <>
              <Rox>
                    <Heading>Payment Method</Heading>
                    <Icons>
                    <CreditCardLogo><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon></CreditCardLogo>
                    <CreditCardLogo><FontAwesomeIcon icon={['fas', 'hand-holding-usd']} /></CreditCardLogo>
                    </Icons>

                    <Form>
                        <Label>Account#</Label>
                        <Input type="text" maxlength="16" style={{width: "80%"}}placeholder={"1234 5566 1234 4444"}></Input>
                        <br/>
                        <Label>Expiry</Label><Label style={{marginLeft: "34%"}}>Cvv</Label><br/>
                        <Expiration class="expiration">
                        <Dal type="text" name="month" placeholder="MM" maxlength="2" size="2" />
                        <span> / </span>
                        <Dal style={{marginLeft: "5%"}} type="text" name="year" placeholder="YY" maxlength="2" size="2" />
                        </Expiration>
                        
                        <Input placeholder={"Cvv"}  maxlength="2" size="3" style={{marginLeft: "5%"}}></Input><br/>

                        <Label>CARDHOLDER NAME</Label><br/>
                        <Input type="text" style={{width: "80%"}} placeholder={"Nauman Sheikh"}></Input><br/>

                        <Button type="button"  onClick = {this.props.action}>Next</Button>

                    </Form>
              </Rox>
            </>
        )
    }
}
const Button =styled.button`
align-self:center;
margin-top:15%;
margin-left:2%;
text-align:center;
width:90%;
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
    margin-top:8px;
  
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
`
const Form =styled.form`
background-color:;
height:40%;
align-content:center;
padding:5%;

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


margin-top:15%;
height:100%;
width:100%;


`

const Heading = styled.p`
justify-content: space-between;
color:#292929;
font-family:'Poppins';
font-size:24px;
font-weight:100;

`

