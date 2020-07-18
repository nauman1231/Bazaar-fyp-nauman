import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fabGoo } from '@fortawesome/free-solid-svg-icons';
import Progress from '../progressBar/progress'
import ClassDetails from '../cardDetails/cardDetails'
import Card_container from '../../container/card_container'
import Shipping from '../../components/shipping/shipping'
import Checkout from '../../components/checkout/checkout'
import {devices} from '../../assets/devices/devices'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";
export default class Payment extends Component {
    constructor() {

        super();
        this.handler = this.handler.bind(this);
        this.nauman=this.nauman.bind(this);
        this.back=this.back.bind(this);
        this.backToPayment=this.backToPayment.bind(this)
        this.state = { isExpanded: false,
            screentwo: false ,
            screenthree: false,
            value:""
        };
    }
  
  
    render() {
        return (
            <>
              <Box>
              {!this.state.isExpanded && !this.state.screentwo && !this.state.screenthree &&
                 <div>
                 <TextHolder>Empty Cart Abhi ese hi 
                    choor do koi acha
                    sa screen icon laga dengy</TextHolder>
                 <Button type="button" onClick={() => { this.toggleExpanded() }}>
                         Next
                 </Button>
                 </div>
                 }
              
              {this.state.isExpanded &&
                 <Progress valueFromParent={this.state.value="'#BDBDBD'"} />   }
              
                <div></div>
                {this.state.isExpanded && !this.state.screentwo &&
                
                
                <ClassDetails action={this.handler} />    }


                 {this.state.screentwo && !this.state.isExpanded &&
                    <Shipping action={this.nauman} back={this.backToPayment} />    }

                {!this.state.screentwo && !this.state.isExpanded && this.state.screenthree &&
                    <Checkout action={this.back} />    }

              </Box>
            </>
        )
    }
   
    handler() {
        this.setState({ screentwo: !this.state.screentwo, isExpanded: false });
    }
    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
    nauman() {
        this.setState({screenthree: !this.state.screenthree,isExpanded:false,screentwo:false, });;
    }
    back() {
        this.setState({screenthree: !this.state.screenthree,isExpanded:false,screentwo:true, });;
    }
    backToPayment() {
        this.setState({screentwo: !this.state.screentwo,isExpanded:true,screenthree:false, });;
    }
}
const Button =styled.button`
align-self:center;
margin-top:25%;
margin-bottom:25%;
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
const Box = styled.div` 

// display:grid;
// grid-template-rows:10% 90%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
height:50%;
width:20%;
padding-bottom:5px;
margin-top:3%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media ${devices.mobileM && devices.max }  { 
    width:70%;
    align-self:center;
    margin-top:15%;
    margin-bottom:20%;
  }
  @media ${devices.tablet }  { 
    width:30%;
  
   
  }
  @media ${devices.laptop }  { 
    width:20%;
  
   
  }
`
const TextHolder=styled.p`
font-family:"Poppins";
font-size:18px;
align-content:center;
padding:1px;
margin-top:50%;
height:100px;
font-weight:100;
padding-bottom:5%;
`
 

