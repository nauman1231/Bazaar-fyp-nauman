import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../orderSideDetail/navbar';
import SideNav from './sidenav'
import Cards from './cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faShoppingBag,faAlignRight,faBell ,faBox,faBoxOpen,faPlus,faArrowLeft,faUpload} from '@fortawesome/free-solid-svg-icons';
import {post,get} from 'axios';
import $ from 'jquery'
import {reactLocalStorage} from 'reactjs-localstorage';
import { Link, Redirect,  } from 'react-router-dom'
class AddProduct extends Component {
  
    constructor(props) {
        super(props);
        this.state ={
            orders:[]
        }
        

    }


    componentDidMount(){
        this.getOrders().then((response)=>{
            this.setState({
                orders:response.data
            })
            console.log("state:"+this.state.orders)
            // console.log("response"+response.data[0]._id)
        })
        
    }
    
    getOrders(){
        const url = 'http://localhost:4000/order/today';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                    
                }
              }
        
            return  get(url,config)
    }

    
    render() {
        
        return (
       
            <Section>
              

                
                <MainContainer>
                    <SideNav />


                    <Orders>
                        <MainHeading>Online Orders</MainHeading>
                        <CardContainer>
                    <Title>
                            <Heading  style={{ paddingTop:"20px"}}>Orders</Heading>
                           
                        </Title>

                        {this.state.orders.map((item) => 
                      <Cards item={item._id} value={item._id}></Cards>
                      
                      )
                      
                            }
                
                    </CardContainer>
                    </Orders>



               

                </MainContainer>
               
                
            </Section>
        );

    }
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Orders=styled.div`
width:100%;
`
const MainHeading=styled.p
` margin: 0;
margin-top:10%;
margin-left:5%;
padding: 0;
cursor: pointer;
color:#343847;
font-family: 'Poppins';
font-size:48px;
font-weight:600;
`

const Section = styled.section`
width:100%;
display: inline-flex;
flex-direction:row;
height:100%;
overflow:hidden;
`
const MainContainer=styled.div`
width:80%;
display:flex;
`

const CardContainer=styled.div
`
width:80%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:65%;
padding-bottom:5px;
margin-bottom:3%;
margin-top:3%;
border-radius:2%;
margin-left:4%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow-x: hidden;
align-self:center;

::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }

`
const Heading=styled.p
`
font-family:'Poppins';
font-size:24px;
padding:0;
margin:0;
`
const Title =styled.div
`
height:15%;
display: inline-flex;

`
export default AddProduct;



