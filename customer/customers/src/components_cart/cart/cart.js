import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAt,faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import Cards from '../cards/cards'
import poppy from '../../assets/fonts/Poppins-Regular.ttf'
import {devices} from '../../assets/devices/devices'
import axios from 'axios';
import {get,post,put} from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import StripeCheckout from 'react-stripe-checkout'
import { toast } from "react-toastify";
import { Link, Redirect,  } from 'react-router-dom'
import Popup from "reactjs-popup";
import DatePicker from 'react-date-picker';
import "react-toastify/dist/ReactToastify.css";
toast.configure();
var uniqid = require('uniqid');
export default class Cart extends Component {



  constructor(props) {
    super(props);
    this.state = {
        data:[],
        emptyCart:false,
        SubTotal:0,
        inventoryUpdated:false,
        name:"",
        startDate:new Date(),
        isClose:false
   
      }
 this.Total=this.Total.bind(this);
 this.handleToken = this.handleToken.bind(this)
 this.addToQuickBuy = this.addToQuickBuy.bind(this)
}

  componentDidMount() {



    if(this.state.emptyCart){
      console.log("inside mount")
    }

    this.getProducts().then((response)=>{
        
        this.setState({
          data:response.data,
          
        },() => {
          var people = 0;
          var products={}
          const config = {
            headers: {
                'Content-Type':'application/json',
                'Authorization': '***'
            }
        }
        
          
          for (let i = 0; i < this.state.data.length; i++) {
              people+=parseInt(this.state.data[i].products.Seller_price*this.state.data[i].quantity,10);
              console.log(people)
          }

      
        
          // for (let i = 0; i < this.state.data.length; i++) 
            // products="123"
            // products.push({Quantity:parseInt(this.state.data[i].quantity,10),Name:(this.state.data[i].products.name)})
            // products.Quantity=parseInt(this.state.data[i].quantity,10);
            // products.Name=(this.state.data[i].products.name);
            // products.StoreID=(this.state.data[i].products.stores);
            // items[i]=products;
           

            
        
          // console.log(items);
          // console.log(products);
          this.setState({
            SubTotal:people,
            
           
          })
      });
        
        // console.log(response.data[10].products.stores);

     
        // console.log("is it unique"+uniqid());

      //  
      });
    
      
    
  }

  Total(){

    console.log(this.state.SubTotal)
  }

  getProducts(){
    const url = 'http://localhost:4000/shoppingCart/'+ reactLocalStorage.get('UserID');
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
                
            }
          }
    
        return  get(url,config)
}

addToQuickBuy(){
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

    const config = {
      headers: {
          'Content-Type':'application/json',
          'Authorization': '***'
      }
  }
  
    for (let i = 0; i < this.state.data.length; i++) {
      const pro={
  
        addedToCart:true,
        quantity:this.state.data[i].quantity,
        products:this.state.data[i].products,
        userID:reactLocalStorage.get('UserID'),
        schedule:this.state.name.toLowerCase()
       
  
      }
    
    
    post(`http://localhost:4000/quickbuy/add`,  pro ,config)
    .then(res => {
      
      console.log("addded")
    })
  
  
  }
  toast("Succesfully added to Quickbuy", { type: "success" });
  this.setState({isClose:true})
      
  })


 
}
// handleToken(token){
//   const config = {
//     headers: {
//         'content-type': 'multipart/form-data'
//     }
// }
//   const [product]=this.state.items

//   post(`http://localhost:4000/payment/checkout`,  {token} ,config)
//   .then(res => {

//     console.log("successful"+res)
//   }
  
// }

handleToken(token) {
  const product=this.state.SubTotal
  console.log("this is payment token"+" "+token)
  const config = {
      headers: {
          'Content-Type':'application/json',
          'Authorization': '***'
      }
  }
  post(`http://localhost:4000/payment/checkout`,  {token,product} ,config)
    .then(res => {
      const orderID=uniqid()
      var inventory=false;
      let upy=false;
       console.log(res.data.address)
       
        const { status } = res.data;
        
        if (status === "success") {
          const paymentDetails={
            orderID:orderID,
            amount:this.state.SubTotal,
            date:new Date().toISOString().slice(0, 10).split('-').reverse().join('/')
          }
          post(`http://localhost:4000/payment/details`,  paymentDetails ,config)
            .then(res => {
              console.log(res.data)
            })

        
          toast("Success! Check email for details", { type: "success" });
          for (let i = 0; i < this.state.data.length; i++) {
            const pro={
              
              stores:this.state.data[i].products.stores,
              products:this.state.data[i].products,
              userID:this.state.data[i].userID,
              quantity:this.state.data[i].quantity,
              userName: reactLocalStorage.get('UserName'),
              shipping:res.data.address,
              bill:this.state.SubTotal,
              orderID:orderID,
             
              payment:true,
              date: new Date().toISOString().slice(0, 10).split('-').reverse().join('/'),
              delivery:false,
              checkout:false

            }
            const qty=this.state.data[i].products.quantity-this.state.data[i].quantity
           
          
          post(`http://localhost:4000/order/add`,  pro ,config)
          .then(res => {

            console.log(res.data)
          })
        
        }

        get(`http://localhost:4000/shoppingCart/qty`,config).then(res=>{
              console.log(res.data)
              console.log(res.data.length)
              
              for (let i = 0; i < res.data.length; i++) {

                const detect={
                  qty:res.data[i].total
                }
                console.log(detect.qty);
              put(`http://localhost:4000/product/updateQty/`+res.data[i]._id,  detect ,config).then(res=>{
              console.log('quantity updted'+res.data)
              console.log('quantity updted'+res)
            
           
            })
        


         

          if(i==res.data.length-1){
          
            console.log("chalagaya" +inventory+this.state.emptyCart)
            axios.delete('http://localhost:4000/shoppingcart/delete/'+this.state.data[0].userID,config).then(res=>{

              window.location.reload();
            
            
          })
          }
          }
            
            

            
        })
        // console.log("after updaatw but before check "+upy)
        // console.log("after updaatw but before check "+inventory)
        // console.log("after updaatw but before check "+this.state.inventoryUpdated)

        // if(this.state.inventoryUpdated){
        //   console.log("after updaatw intcentort"+this.state.inventoryUpdated)

        // }
     
      } else {
        toast("Something went wrong", { type: "error" });
      }
     
      console.log(this.state.emptyCart)
        
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
             <Text><FontAwesomeIcon icon={faMoneyBillAlt}/> Shopping Cart  </Text>
             
             <Edit>
                        <Popup trigger={<QuickBuy ><FontAwesomeIcon icon={faFighterJet}/> Add to Quick Buy</QuickBuy>} modal>
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
                                        <Buttons onClick={this.addToQuickBuy}>Add</Buttons>

                                      
                                        </div>
                                        

                                    </Content>
                                    {this.state.isClose &&

                                close()

                            }

                                </Modal>
                            )}
                        </Popup>
                    </Edit>

             </TextContainer>
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
                    <CardText className="CardText info" >Total</CardText>
                    <CardText className="CardText info" >..</CardText>
                </Cardcontainer>
            <Carts>
            
            
                
        
                             {this.state.data.map((item) => 
                      <Cards item={item} value={item._id}></Cards>
                      
                      )
                      
                            }
       
       

            </Carts>
          
                  
            </Container>
            <CheckBox >
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
             currency="pkr"
             amount={ (this.state.SubTotal+Number(121))* 100}

             billingAddress
             shippingAddress
             
           />
        </Button>
              
                    </CheckBox>
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
const TextContainer=styled.div`
display:flex;
`
const QuickBuy = styled.p`
padding-top:40px;
justify-content: space-between;
align-self:flex-end;

cursor: pointer;
font-weight:bold;
font-family:'Poppins';
`
const Home_Page=styled.div` 
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
 @media ${devices.mobileM && devices.max } { 
  flex-direction: column;   
  display: flex;
  flex:1;
  padding:5%;
  overflow-y:hidden;
}

`
const Button = styled.div`
display:flex;
justify-content:center;
`
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
    width:110px;
`

const CardimageContainer=styled.div`
  display: flex;  
  border-radius: 50%;
  background: rgb(221, 221, 221);
//   padding:.5rem;
  width: 11px;

`

const Cardimage=styled.img`
  width:100%;
`
const P=styled.p`
color:red;
`
const Tex=styled.div`
display:inline-flex;

font-family:'Poppins';
font-size:18px;
font-weight:400;
justify-content:space-between;
// margin-bottom:2%;
`
const Box = styled.div` 
display: flex;
    flex-direction: column;
    height: 60%;
    padding: 10px 10px 10px 10px;
// grid-template-rows:30%;


width:100%;

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
const CheckBox = styled.div` 

// display:grid;
// grid-template-rows:10% 90%;
background-color:#FDFDFF;
border:solid 0 #707070;

height:370px;
width:25%;
padding-bottom:5px;
margin-top:3%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

@media ${devices.mobileM && devices.max } { 
  width:90%

}


`
const ProductTable__column=styled.div` 

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
const Buttons=styled.button
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
 

