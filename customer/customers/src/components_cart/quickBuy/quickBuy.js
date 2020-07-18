import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAt, faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import Cards from './cards'
import AddtoQuick from './quickByCard'
import poppy from '../../assets/fonts/Poppins-Regular.ttf'
import { devices } from '../../assets/devices/devices'
import axios from 'axios';
import { get, post, put } from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import StripeCheckout from 'react-stripe-checkout'
import { toast } from "react-toastify";
import { Link, Redirect, } from 'react-router-dom'
import add from '../../assets/icons/addButton.svg'
import "react-toastify/dist/ReactToastify.css";
import Popup from "reactjs-popup";
import Search from '../../components/SearchBar/SearchBar2'
toast.configure();
var uniqid = require('uniqid');
export default class Cart extends Component {



  constructor(props) {
    super(props);
    this.state = {
      data: [],
      emptyCart: false,
      SubTotal: 0,
      inventoryUpdated: false,
      products: [],
      prodata:[]

    }
    this.Total = this.Total.bind(this);
    this.handleToken = this.handleToken.bind(this)
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.getallProducts().then((res)=>{
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
  
        }
      }
      for (let i = 0; i < res.data.length; i++) {

        get(`http://localhost:4000/product/getPros/`+res.data[i]._id,config).then(res=>{
            console.log(res.data)
            this.setState({ products: this.state.products.concat(res.data) })
            // this.setState(prevState => ({
            //     products: [
            //         ...prevState.products, 
            //         res.data
            //     ]
            // })

              
            
          console.log(this.state.products)
        })
    }
    })



    this.getProducts().then((response) => {

      this.setState({
        data: response.data,

      }, () => {
        var people = 0;
      
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '***'
          }
        }


        for (let i = 0; i < this.state.data.length; i++) {
          people += parseInt(this.state.data[i].products.Seller_price * this.state.data[i].quantity, 10);
          console.log(people)
        }

        this.setState({
          SubTotal: people,


        })
      });

    });



  }

  Total() {

    console.log(this.state.SubTotal)
  }

  getProducts() {
    const url = `http://localhost:4000/quickbuy/list?id=${reactLocalStorage.get('UserID')}&&schedule=${this.props.schedule}` 
    const config = {
      headers: {
        'content-type': 'multipart/form-data'

      }
    }

    return get(url, config)
  }
  handleToken(token) {
    const product = this.state.SubTotal

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '***'
      }
    }
    post(`http://localhost:4000/payment/checkout`, { token, product }, config)
      .then(res => {
        const orderID = uniqid()
        var inventory = false;
        let upy = false;
        console.log(res.data.address)

        const { status } = res.data;

        if (status === "success") {
          const paymentDetails = {
            orderID: orderID,
            amount: this.state.SubTotal,
            date: new Date().toISOString().slice(0, 10).split('-').reverse().join('/')
          }
          post(`http://localhost:4000/payment/details`, paymentDetails, config)
            .then(res => {
              console.log(res.data)
            })


          toast("Success! Check email for details", { type: "success" });
          for (let i = 0; i < this.state.data.length; i++) {
            const pro = {

              stores: this.state.data[i].products.stores,
              products: this.state.data[i].products,
              userID: this.state.data[i].userID,
              quantity: this.state.data[i].quantity,
              userName: reactLocalStorage.get('UserName'),
              shipping: res.data.address,
              bill: this.state.SubTotal,
              orderID: orderID,

              payment: true,
              date: new Date().toISOString().slice(0, 10).split('-').reverse().join('/'),
              delivery: false,
              checkout: false

            }
            const qty = this.state.data[i].products.quantity - this.state.data[i].quantity


            post(`http://localhost:4000/order/add`, pro, config)
              .then(res => {

                console.log(res.data)
              })

          }

          get(`http://localhost:4000/quickbuy/qty`, config).then(res => {
            console.log(res.data)
            console.log(res.data.length)

            for (let i = 0; i < res.data.length; i++) {

              const detect = {
                qty: res.data[i].total
              }
              console.log(detect.qty);
              put(`http://localhost:4000/product/updateQty/` + res.data[i]._id, detect, config).then(res => {
                console.log('quantity updted' + res.data)
                console.log('quantity updted' + res)


              })





              //   if(i==res.data.length-1){

              //     console.log("chalagaya" +inventory+this.state.emptyCart)
              //     axios.delete('http://localhost:4000/shoppingcart/delete/'+this.state.data[0].userID,config).then(res=>{

              //       window.location.reload();


              //   })
              //   }
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

  

  getallProducts() {
    const url = 'http://localhost:4000/store/location';
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return get(url, config)
  }


  search(search) {


    const url = 'http://localhost:4000/product/search/' + search;
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    get(url, config).then(res => {
      this.setState({ products: res.data })
    })

    console.log("in search " + search)


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
    <Text><FontAwesomeIcon icon={faMoneyBillAlt} /> Quick Buy {this.props.schedule}
    </Text>

            <Edit>
              <Popup trigger={<IMG src={add}></IMG>} modal>
                {close => (
                  <Modal >
                    <Close onClick={close}>
                      &times;
                        </Close>
                    <Header > <Heading>Add Products</Heading>
                    <div style={{width:'45%', marginBottom:'10px'}}><Search action={this.search} /></div>
                    </Header>
                    <Content >

                      <Cardcontainer className="Cardcontainer" >
                        <CardText className="CardText">*</CardText>
                        <CardimageContainer className="CardimageContainer">
                          <Cardimage className="Cardimage"></Cardimage>
                        </CardimageContainer>

                        <CardText className="CardText">Product Name</CardText>
                        <CardText className="CardText">Quantity</CardText>
                        <CardText className="CardText">Price</CardText>
                        <CardText className="CardText info" >Total</CardText>
                        <CardText className="CardText info" >..</CardText>
                      </Cardcontainer>
                      <Carts>



                    
                        {this.state.products.map((item) =>
                          <AddtoQuick schedule={this.props.schedule} item={item} value={item._id}></AddtoQuick>

                        )

                        }



                      </Carts>


                    </Content>
                    {this.state.isClose &&

                      close()

                    }

                  </Modal>
                )}
              </Popup>
            </Edit>
            {/* <QuickBuy><FontAwesomeIcon icon={faFighterJet}/> Add to Quick Buy</QuickBuy> */}
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
              <Cardimage className="Cardimage"></Cardimage>
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

            <Tex><p style={{ width: '70%' }}>Sub Total:</p><p style={{ width: '30%' }}>{this.state.SubTotal}</p></Tex>
            <Tex><p style={{ width: '70%' }}>Delivery Charges:</p><p style={{ width: '30%' }}>121</p></Tex>
            <div style={{ width: '80%', borderBottom: 'solid 2px #707070' }}></div>
            <Tex><p style={{ width: '70%' }}>Total:</p><P style={{ width: '30%' }}>{this.state.SubTotal + Number(121)}</P></Tex>


          </Box>
          <Button>
            <StripeCheckout

              stripeKey="pk_test_g4nL9bOh7cQZ9LJoZOjTbb9x005ihzs4Fb"
              style={{ width: "100px;" }}
              token={this.handleToken}
              amount={5 * 100}

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

const IMG = styled.img`
width: 50px;
height: 50px;
margin-top: 30px;
margin-left: auto;
cursor: pointer;
border-radius: 100px;
padding: 5px;



// margin-left: 85%;
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
const Button = styled.div`
display:flex;
justify-content:center;
`
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
const Tex = styled.div`
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
width:25%;
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



