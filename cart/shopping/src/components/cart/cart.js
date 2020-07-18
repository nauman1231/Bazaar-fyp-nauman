import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAt } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import Cards from '../cards/cards'
import poppy from '../../assets/fonts/Poppins-Regular.ttf'
import {devices} from '../../assets/devices/devices'
export default class Cart extends Component {
    render() {
        return (<>

        <Container>
             {/* <smallText>Profile>Shopping Cart</smallText> */}
             
             <Text><FontAwesomeIcon icon={faMoneyBillAlt}/> Sopping Cart</Text>
             {/* <ProductTablecolumns className="ProductTable-columns">
                    <ProductTable__column className="ProductTable__column" >*</ProductTable__column>
                    <ProductTable__column className="ProductTable__column">Product Name</ProductTable__column>
                    <ProductTable__column className="ProductTable__column">Price</ProductTable__column>
                    <ProductTable__column className="ProductTable__column">Quantity</ProductTable__column>
                    <ProductTable__column className="ProductTable__column">Total   </ProductTable__column>
                </ProductTablecolumns> */}
                <Cardcontainer className="Cardcontainer" >
                <CardText className="CardText">*</CardText>
                    <CardimageContainer className="CardimageContainer">
                        <Cardimage  className="Cardimage"></Cardimage>
                    </CardimageContainer>
                    
                    <CardText className="CardText">Product Name</CardText>
                    <CardText className="CardText">Quantity</CardText>
                    <CardText className="CardText">Price</CardText>
                    <CardText className="CardText info">Total</CardText>

                </Cardcontainer>
            <Carts>
            
            
                
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                 
                <Cards />
                <Cards />
                <Cards />
                <Cards />
       

            </Carts>
            <Box>
                        <Tex><p>Sub Total:</p><p>1500</p></Tex> 
                        <Tex style={{borderBottom:'solid 1px #707070'}}><p>Sub Total:</p><p>1500</p></Tex> 
                        <Tex><p>Total:</p><P>1500</P></Tex> 
                    </Box>
            </Container>
            
            </>
        )
    }
}

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
    font-weight:bold;
    @media ${devices.mobileM && devices.max }  { 
        height:100px;
      }
`

const CardText=styled.p`
    font-weight: 900;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
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
const P=styled.p`
color:red;
`
const Tex=styled.div`
display:grid;
grid-template-columns:50% 50%;
font-family:'Poppins';
font-size:18px;
font-weight400;
align-items: flex-end;
text-align: end;
// margin-bottom:2%;
`
const Box = styled.div` 
display:grid;
grid-template-rows:40% 30%;
position:relative;
height:10%;
left:60%;
padding-top:5%;
height:28%;
width:30%;
@media ${devices.tablet}  { 
   
    width:30%;
    left:60%;
}
`
const Container=styled.div`
font-family:"Poppins";
padding:0;
margin:0;
width:60%;
@media ${devices.mobileM && devices.max } { 
    width:100%;
    overflow-y:hidden;
  }
  @media ${devices.tablet}  { 
    width:60%;
  
   
  }
`
const Text = styled.h2`
padding-top:20px;
justify-content: space-between;

`
const smallText = styled.h4`
font-family:"Poppins";
`

const Carts=styled.div` 

// margin-top: 2rem;
width: 100%;
height: 250px;
overflow: auto;
// margin-top:15%;

`

const ProductTablecolumns=styled.div` 
padding-top:20px;
// display: flex;
// justify-content: space-between;
// align-items: center;
// color: #BDBDBD;
font-family: 'Poppins',sans-serif;
// letter-spacing: .5pt;
display: flex;
// width: 100%;
// align-items: center;
// padding: .6rem  1rem;
// margin: 1rem 0rem;
justify-content: space-evenly;
background: #F6F9FC;
margin-top: .5rem;
overflow-x: auto;
cursor: pointer;

`
const ProductTable__column=styled.div` 

padding-bottom: 1rem

`

 

