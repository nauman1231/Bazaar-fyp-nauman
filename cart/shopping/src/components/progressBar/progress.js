import React, { Component } from 'react'
// import "./Card.scss";
import Icon from "../../assets/images/corn.jpg";
import '../progressBar/style.css';
import styled from 'styled-components';

export default class Progress extends Component {

  
    constructor() {
        super();
        this.state = { ispayment: "false" ,
        
        };
        
         
    }


    render() {
        return (
            <>

    	<Progresss >
       
        <One class=""><In></In></One>

        <Two ></Two>
        <Three class=""></Three>
        <Four class=""></Four>
        <Text><SmallText style={{color: "#2196F3", marginLeft:"0"}}>Cart</SmallText><SmallText style={{marginLeft: "20%"}}>Payment</SmallText><SmallText style={{marginLeft: "15%"}}>Shipping</SmallText><SmallText style={{marginLeft: "8%"}}>Checkout</SmallText></Text>
		
        </Progresss>
       
            </>
        )
    }


}
const SmallText=styled.p`

margin-top:2%;
`
const Text=styled.div`
display:flex;

font-size:0.625rem;
color:#BDBDBD;
font-family:"Poppins";
font-weight:400;
`
const Container=styled.div`
    // height:100%;
    // margin-top:5px;
    // display:inline;
    // width:100%; 
`

const Progresss=styled.div`

position:absolute;
margin-top:10px;

background-color:#BDBDBD;
height:2px;
border-radius:10px;
width:15%;
  
`
const One=styled.div`

margin-top:-7px;
z-index:1;
height:15px;
width:15px;
border-radius:25px ;
border:solid 2px #2196F3;

`
const Two=styled.div`

margin-top:-15px;
z-index:1;
height:15px;
width:15px;
border-radius:25px ;
background-color:#BDBDBD;
margin-left:37%;


`
const Three=styled.div`

margin-top:-15px;
z-index:1;
height:15px;
width:15px;
border-radius:25px ;
border:solid 2px #BDBDBD;
margin-left:70%;
background-color: white;

`
const Four=styled.div`

margin-top:-15px;
z-index:1;
height:15px;
width:15px;
border-radius:25px ;
border:solid 2px #BDBDBD;
margin-left:100%;
background-color: white;


`
const In=styled.div`

margin-top:2px;
z-index:1;
height:7px;
width:7px;
border-radius:50px ;
background-color:#2196F3;
margin-left:2px;
`
// .info`
//     color: rgb(0, 160, 0);
// `