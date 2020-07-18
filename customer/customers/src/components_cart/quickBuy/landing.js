import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import Cards from './expanded'

import { devices } from '../../assets/devices/devices'

import { get, post, put } from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

import { toast } from "react-toastify";
import { Link, Redirect, } from 'react-router-dom'
import add from '../../assets/icons/addButton.svg'
import Popup from "reactjs-popup";
import DatePicker from 'react-date-picker';
import "react-toastify/dist/ReactToastify.css";

toast.configure();
var uniqid = require('uniqid');
export default class Landing extends Component {



    constructor(props) {
        super(props);
        this.state = {
            data: [],
            emptyCart: false,
            SubTotal: 0,
            inventoryUpdated: false,
            startDate: new Date(),
            name:"",

        }
     
        this.addSchedule = this.addSchedule.bind(this)
    }

    componentDidMount() {



        

        this.getProducts().then((response) => {

            this.setState({
                data: response.data,

            })
             
            });

     
    }

    Total() {

        console.log(this.state.SubTotal)
    }

    getProducts() {
        const url = 'http://localhost:4000/schedule/' + reactLocalStorage.get('UserID');
        const config = {
            headers: {
                'content-type': 'multipart/form-data'

            }
        }

        return get(url, config)
    }
 

        handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    addSchedule(){
        const data = {
            userID:reactLocalStorage.get('UserID'),
            schedule:this.state.name,
            date:this.state.startDate
        };
        console.log(data)
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(`http://localhost:4000/schedule/add`,  data ,config)
          .then(res => {
              window.location.reload()
          })

    }

    render() {
        const cartEmpty = this.state.emptyCart;

        // if (cartEmpty) {
        //   return <Redirect to='/cart'/>;
        //  //try this next time// window.location.reload();
        // }
        return (<>
            <Home_Page>
                <Container>
                    {/* <smallText>Profile>Shopping Cart</smallText> */}
                    <TextContainer>
                        <Text><FontAwesomeIcon icon={faMoneyBillAlt} /> Quick Buy </Text>

                    </TextContainer>

                    <Carts>
                        {/* <CheckBox>
            <StyledLink  to={{pathname: "inside/monthly"}}><Heading>Monthly</Heading></StyledLink> 
            </CheckBox>
               <CheckBox>
               <Heading>Weekly</Heading>
               </CheckBox> */}
                        {this.state.data.map((item) => 
                      <Cards item={item} value={item._id} onClick={this.print}></Cards>)
                            }


                    </Carts>
                    <Edit>
                        <Popup trigger={<IMG src={add}></IMG>} modal>
                            {close => (
                                <Modal >
                                    <Close onClick={close}>
                                        &times;
                        </Close>
                                    <Header > <Heading>Schedule Grocery</Heading>
                                        {/* <div style={{width:'45%', marginBottom:'10px'}}><Search action={this.search} /></div> */}
                                    </Header>
                                    <Content >
                                        <div style={{
                                            display:'flex',
                                            flexDirection:'column',
                                            width:'50%',
                                             margin: 'auto'
                                            }}>
                                                <Tex>Schedule Name</Tex>
                                        <Input type="text" placeholder="Name" value={this.state.name} name="name" onChange={e => this.setState({name:e.target.value})}></Input>
                                        <Tex> Date</Tex>
                                        <DatePicker
                                            onChange={this.handleChange}
                                            value={this.state.startDate}
                                           
                
                                        />
                                        <Button onClick={this.addSchedule}>Add</Button>

                                      
                                        </div>
                                        

                                    </Content>
                                    {this.state.isClose &&

                                close()

                            }

                                </Modal>
                            )}
                        </Popup>
                    </Edit>







                </Container>


            {/* <CheckBox >
            <Heading>Payment</Heading>
            <Box>
        
        <Tex><p  style={{width:'70%'}}>Sub Total:</p><p style={{width:'30%'}}>{this.state.SubTotal}</p></Tex> 
        <Tex><p style={{width:'70%'}}>Delivery Charges:</p><p style={{width:'30%'}}>121</p></Tex> 
        <div style={{width:'80%', borderBottom:'solid 2px #707070'}}></div>
        <Tex><p style={{width:'70%'}}>Total:</p><P style={{width:'30%'}}>{this.state.SubTotal+Number(121)}</P></Tex> 

    
        </Box>
        <Button>
        <StripeCheckout
              
              stripeKey="pk_test_g4nL9bOh7cQZ9LJoZOjTbb9x005ihzs4Fb"
              style={{width:"100px;"}}
             token={this.handleToken}
             amount={5 * 100}

             billingAddress
             shippingAddress
             
           />
        </Button>
              
                    </CheckBox> */}
        </Home_Page>
        </>
        )
    }
}

const Heading = styled.p`
margin-top:5%;
padding-left:10px;
justify-content: space-between;
color:#292929;
font-family:'Poppins';
font-size:24px;
font-weight:100;

`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const IMG = styled.img`
width: 90px;
height: 90px;
margin-top: 30px;
margin-left: auto;
//border: 2px solid black;
border-radius: 100px;
padding: 5px;
// background: #F44336;

cursor: pointer;
margin-left: 85%;
margin-top: 40px;
}
`
const TextContainer = styled.div`
display:flex;
`
const QuickBuy = styled.p`
padding-top:20px;
justify-content: space-between;
align-self:flex-end;
margin-left:45%;
cursor: pointer;
font-weight:bold;
font-family:'Poppins';
`
const Home_Page = styled.div` 
justify-content: space-between;
width: 100%;
height:70%;
background-color:#FFFF;
padding-top: 0;
padding-bottom:10%;
display:flex;
flex-flow: row wrap;
justify-content: space-around;

margin-top:50px;
 @media ${devices.mobileM && devices.max} { 
  flex-direction: column;   
  display: flex;
  flex:1;
  padding:5%;
  overflow-y:hidden;
}

`
// const Button = styled.div`
// display:flex;
// justify-content:center;
// `
const Cardcontainer = styled.div`
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
    @media ${devices.mobileM && devices.max}  { 
        height:100px;
      }
`

const CardText = styled.p`
    font-weight: 900;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    width:110px;
`

const CardimageContainer = styled.div`
  display: flex;  
  border-radius: 50%;
  background: rgb(221, 221, 221);
//   padding:.5rem;
  width: 11px;

`

const Cardimage = styled.img`
  width:100%;
`
const P = styled.p`
color:red;
`
const Tex = styled.path`
display:inline-flex;

font-family:'Poppins';
font-size:18px;
font-weight:400;
justify-content:space-between;
margin-top:20px;
margin-bottom:20px;
`
const Box = styled.div` 
display: flex;
    flex-direction: column;
    height: 60%;
    padding: 10px 10px 10px 10px;
// grid-template-rows:30%;


width:100%;

`
const Container = styled.div`
font-family:"Poppins";
padding:0;
margin:0;
width:60%;
@media ${devices.mobileM && devices.max} { 
    width:90%;
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

const Carts = styled.div` 

// margin-top: 2rem;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-evenly;

// margin-top:15%;

`

const ProductTablecolumns = styled.div` 
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
const CheckBox = styled.div` 

// display:grid;
// grid-template-rows:10% 90%;
background-color:#FDFDFF;
border:solid 0 #707070;

height:370px;
width:35%;
padding-bottom:5px;
margin-top:3%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media ${devices.mobileM && devices.max} { 
  width:90%

}
`
const ProductTable__column = styled.div` 

padding-bottom: 1rem

`



const Edit = styled.div`
position:relative;
margin-left:auto;
`

const DeleteButton = styled.button`
border:none;
background:none;
cursor:pointer;
outline:none;
`



const Modal = styled.div`
    font-size: 12px;
  `
const Header = styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  `

const Content = styled.div`
    width: 100%;
    padding: 10px 5px;
  `
const Action = styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  `
const Close = styled.a`
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
  `


const Inputs = styled.div`
display:block;
width: min-content;
margin-left:20px;
`
const Photo = styled.div`
width:30%;
height:150px;
border: 1px solid #707070;
margin-left:20px;
margin-right:20px;
`
const Form = styled.div`
display:inline-flex;
width :500px;

`
const IconInput = styled.img`

width:100%;

cursor: pointer;

`
const InputContainer = styled.div`
position:relative;
width:100%;
display:inline-flex;
justify-content:space-evenly;
margin-bottom:40px;
`

const Input = styled.input`
width:200px;
border: none;
border-bottom: 2px solid #BDBDBD;
height:30px;
text-align:center;
margin-bottom:20px;
&:focus{
    outline: none;
}
::placeholder{
    color:#BDBDBD;
    font-family:'Poppins';
    font-weight:bold;
    font-size:18px;
    text-align:center;
}
`
const Button=styled.button
`
    align-self: center;
    margin-top: 20px;
    
    border-radius: 10px;
    background-color: #343847;
    border: 2px solid #707070;
    font-size: .9rem;
    color:white;
    font-size:18px;
    width:200px;
    padding:5px;
    cursor:pointer;
    height:50px;
`


