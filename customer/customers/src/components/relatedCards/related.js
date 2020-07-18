import React, { Component } from 'react';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faBoxOpen,faCog} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../SearchBar/SearchBar'
 import {devices} from '../../assets/devices/devices'
import Navbar from '../Navbar/navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class related extends Component {

    constructor(props) {

        super(props);

        this.print = this.print.bind(this);
    }


    print(){
        console.log(this.props);
    }

    render() {

        return (
            
            
            <ProductsCard >
               {/* <Link > */}
                <ImageContainer src='https://naveedtradingcompany.com/shop/wp-content/uploads/2018/12/028400017145aw-1-600x748.jpg'>

                </ImageContainer>
                <Tag>
        <TagText>lays</TagText>
                    <TagText>100</TagText>
                    <Button>
                        Add to cart
                    </Button>
                </Tag>
               
            {/* </Link> */}
            </ProductsCard>
     
     
        )

    }
}


const ProductsCard=styled.div`
height:250px;
width:10%;
margin-left:10px;
background-color: #FDFDFF;
border: solid 0 #707070;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius:5px;
margin-top:5%;
margin-bottom:5%;
overflow:hidden;
&:hover{
    overflow:visible;
    box-shadow: 0px 510px 15px 0px rgba(0, 0, 0, 0.10);

    -webkit-filter:opacity(.85);
    height:270px;

}
 @media ${devices.mobileM && devices.max } { 
        width:40%

    }
`
const ImageContainer =styled.img`
height:65%;
width: 85%;
padding:5%;
`
const Tag =styled.div`
height:15%;
width: 75%;
padding:5%;
margin:auto;

display: inline-flex;
flex-direction: column;
justify-content: center;

`
const TagText=styled.p`
font-size:18px;
font-family:"Poppins";
padding:0;
margin:0;
text-align: start;
font-weight:600;
color:#787878;
`
const Button=styled.button`
margin-top:15px;
align-self:center;
margin-top:25%;
margin-bottom:25%;
margin-left:2%;
text-align:center;
padding:2%;
width:90%;
height:40px;
border:none;
background-color:#2196F3;
font-family:"Poppins";
font-size:16px;
color:White;
border-radius:8px;
`
export default related;


