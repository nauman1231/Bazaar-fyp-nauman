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
import queryString from 'query-string';
import avatar from '../../assets/images/Avatar.jpg'
import Product from './productCard';
class OrdersDetail extends Component {
  
    constructor(props) {
        super(props);
        this.state ={
            orders:[],
            details:[],
            userName:"",
            date:"",
            products:[],
            total:0,
            orderID:""
        }
        

    }


    componentDidMount(){
        console.log(this.props.location.search)
        let params = queryString.parse(this.props.location.search)
        console.log(params)
        this.getOrders().then((response)=>{
            this.setState({
                orders:response.data,
                userName:response.data[0].userName,
                date:response.data[0].date,
                orderID:response.data[0].orderID
              
            })
            console.log(this.state.orderID)
            var total=0;
            for(let i=0; i<this.state.orders.length; i++){
                 total+=Number(this.state.orders[i].products[0].Seller_price*this.state.orders[i].quantity)


  
            console.log(total)
            }
            this.setState({
                total:total
            }
               
            )
            
           
        })
        
    }
    
    getOrders(){
        const url = 'http://localhost:4000/order/one'+this.props.location.search;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                    
                }
              }
        
            return  get(url,config)
    }

    
    render() {
        
        return (<>
       
            <Section>
              

                
                <MainContainer>
                    <SideNav />


                    <Orders>
                        <MainHeading>Online Orders</MainHeading>
                        <Detail>
                       
                        <ExpandedCardContainer >
               
                    <ImageContainer className="ImageContainer">

                        <ExpandedCardImage className="ExpandedCardImage"  src={avatar}></ExpandedCardImage>
                    </ImageContainer>

                  
             <ExpandedCardDetailContainer className="ExpandedCardDetailContainer">

                        <DetailInnerContainer className="DetailInnerContainer">
                        
                            <Heading className="heading">
                                <p>Date</p>
                            </Heading>
                            <Content className="content">
                            <p>{this.state.date}</p>
                            </Content>
                           


                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>User</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.state.userName}</p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Payment</p>
                            </Heading>
                            <Content className="content">
                                <p>Online</p>
                            </Content>

                        </DetailInnerContainer>

                  
            </ExpandedCardDetailContainer>
          
                </ExpandedCardContainer>
                      
                     
                        </Detail>
                        
                        
                        <MainCardContainer>
                    <Title>
                            <Heading  style={{ paddingTop:"20px"}}>Orders</Heading>
                           
                        </Title>
                        <Cardcontainer className="Cardcontainer" >
                    <CardText className="CardText">#</CardText>
                    
                    
                    <CardText className="CardText">Product Name</CardText>
                    <CardText className="CardText">Price</CardText>
                    <CardText className="CardText">Category</CardText>
                    <CardText className="CardText info">Size</CardText>
                    <CardText className="CardText info">Quantity</CardText>
                    <CardText className="CardText info">Price</CardText>
                    



                </Cardcontainer>

                       
                 {this.state.orders.map((item) => 
                      <Product  item={item.products} qty={item.quantity} ></Product>)
                            }

                    </MainCardContainer>
                    </Orders>
                    

                </MainContainer>
                <Navbar total={this.state.total} products={this.state.orders.length} orderID={this.state.orderID} />
                
            </Section>
            
            </>
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

const Cardcontainer=styled.div`
    font-family: 'Poppins',sans-serif;
    letter-spacing: .5pt;
    display: inline-flex;
    
    align-items: center;
    padding: .6rem  1rem;
    margin: 1rem 0rem;
    justify-content: space-between;
    background: #F6F9FC;
    margin-top: .5rem;
    overflow-x: auto;
    cursor: pointer;
    word-break:break-all;
  width:95%;
`

const CardText=styled.p`
    font-weight: 600;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    color:#BDBDBD;
    width:25%;
`
const Orders=styled.div`
width:100%;
`
const MainHeading=styled.p
` margin: 0;
margin-top:5%;
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

height:100%;
overflow:hidden;
`
const MainContainer=styled.div`
width:80%;
display:flex;
`
const Detail=styled.div`
width:80%;

padding-left:2%;
padding-right:2%;


margin-top:3%;

margin-left:4%;

overflow-x: hidden;
align-self:center;
`
const MainCardContainer=styled.div
`
width:80%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:45%;
padding-bottom:5px;
margin-bottom:3%;
margin-top:1%;
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


const ExpandedCardContainer =styled.div`
display: grid;
padding: 1rem 0;
grid-template-columns: auto 65%;
grid-column-gap: 5%;
transition: all .5s;
width: 100%;
margin: 0rem 0;
border-radius: 12px;
margin-bottom: 2.5rem;
background: #F6F9FC;
transition:  all .5s;
cursor: pointer;
border-radius: 25px;
/* background-color: white; */
background-color: #FDFDFF;
border: solid 0 #707070;

box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
&:hover{
    
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-filter:opacity(.85);
}
`
const ImageContainer=styled.div
`
width: 50%;
display: flex;
min-width: 20px;
align-items: center;
justify-content: center;
// border: 1px solid rgb(219, 219, 219);
border-radius: 2px;
padding-left: 1rem;
`
const ExpandedCardImage=styled.img`
width: 100%;
`
const ExpandedCardDetailContainer=styled.div`
width: 100%;
font-family: 'Poppins', sans-serif;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`

const DetailInnerContainer=styled.div`
flex-basis: 25%;
    margin: 0rem 0 0rem 0;
`
const Content=styled.div`
color: #3A3A3A;
`

export default OrdersDetail;



