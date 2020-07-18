import React, { Component } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faBoxOpen,faCog,faRocket} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../SearchBar/SearchBar';
 import {devices} from '../../assets/devices/devices';
import Navbar from '../Navbar/navbar';
import {put,post} from 'axios';
import img from '../ProductCard/1.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    
  } from "react-router-dom";
  import {reactLocalStorage} from 'reactjs-localstorage';
class card extends Component {

    constructor(props) {

        super(props);
        this.state={
            isAdded:false,
            addedToQuick:false,
            outofstock:false
        }
        this.addToCart = this.addToCart.bind(this);
        this.addToQuickBuy = this.addToQuickBuy.bind(this);
    }

    componentDidMount(){
        console.log(this.props.item.fileName)
        if(this.props.item.quantity<0){
            console.log(this.props.item.name+" "+this.props.item.quantity)
            this.setState(
                {
                    outofstock:true
                }
            )
        }
    }

    // addToCard = event => {
    addToCart(id) {
        const timeout = reactLocalStorage.get('login');

        if (timeout) {
          
        
        
        console.log(id);
        this.setState({
            isAdded:true
          });

          const carts={
              addedToCart:true,
              quantity:1,
              products:id,
              userID:reactLocalStorage.get('UserID')
          }

          const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(`http://localhost:4000/shoppingCart/add`, carts ,config)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          console.log(carts);
      }
      else{
      alert("Login First")
      }
    }
      
    addToQuickBuy(id) {
        const timeout = reactLocalStorage.get('login');

        if (timeout) {
          
        
        
        console.log(id);
        this.setState({
            addedToQuick:true
          });

          const quickbuy={
            addedToCart:true,
            quantity:1,
            products:id,
            userID:reactLocalStorage.get('UserID')
          }

          const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(`http://localhost:4000/quickbuy/add`, quickbuy ,config)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          console.log(this.state.addedToQuick);
      }
      else{
      alert("Login First")
      }
    }

    render() {

        return (
            
            
            <ProductsCard  value={this.props.item._id} >
               <StyledLink to={{pathname: `customer/${this.props.item._id}`}} >
                <ImageContainer src={`http://localhost:4000/uploads/${this.props.item.fileName}`}>

                </ImageContainer>
                </StyledLink>
                <Tag>
        <TagText>{this.props.item.name}</TagText>
                    <TagText>Rs. {this.props.item.Seller_price}</TagText>
                    
                    {this.state.isAdded && 
                     <Added  disabled>
                     Added
                    </Added>   }

                    {this.state.outofstock &&
                     <Added  disabled>
                     Out of Stock
                    </Added>   }

                    {/* {this.state.addedToQuick &&
                    <FontAwesomeIcon  style={{color:"red" , fontSize:'16px', cursor:"pointer" , position:"absolute",paddingBottom:"25px"  }} icon={faRocket} ></FontAwesomeIcon>
                    }

                    {!this.state.addedToQuick && !this.state.outofstock &&
                    <FontAwesomeIcon style={{color:"grey" , fontSize:'16px' , cursor:"pointer" , position:"absolute",paddingBottom:"25px"  }} icon={faRocket}  onClick={() => this.addToQuickBuy(this.props.item._id)}></FontAwesomeIcon>
                    }
                     */}
                    {!this.state.isAdded && !this.state.outofstock &&
                    
                    <Button  onClick={() => this.addToCart(this.props.item._id)}>
                        Add to cart
                    </Button>
    }
                </Tag>
               
            
            </ProductsCard>
     
     
        )

    }
}

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const ProductsCard=styled.div`
height:300px;
width:20%;
margin-left:10px;
// background-color: #FDFDFF;
// border: solid 0 #707070;

border-radius:5px;
margin-top:5%;
margin-bottom:5%;
overflow:hidden;
&:hover{
    overflow:visible;

    box-shadow: 0 15px 15px 0 rgba(0, 0, 0, 0.10);
    background-color: #FDFDFF;
border: solid 0 #707070;
border: solid 0 #707070;

    -webkit-filter:opacity(.85);
    height:270px;

}
@media ${devices.mobileM && devices.max } { 
    width:50%;
    height:70%;

    &:hover{
      
    
    }

   
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
outline:none;
@media ${devices.mobileM && devices.max } { 
  
    margin-top:20%;
    width:100%;
   
  }
`
const Added=styled.button`
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

font-family:"Poppins";
font-size:16px;
color:White;
border-radius:8px;
outline:none;


font-family:"Poppins";
font-size:16px;
border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
border-radius:8px;

`
export default card;


