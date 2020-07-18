import React, { Component } from 'react';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faBoxOpen,faCog,faDollarSign} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../SearchBar/SearchBar'
 import {devices} from '../../assets/devices/devices'
 import {reactLocalStorage} from 'reactjs-localstorage';
 import {get,post,put} from 'axios';
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect

  } from "react-router-dom";
class navbar extends Component {

    constructor(props) {
        super(props);
        this.state={
            redirect:false
        }
        this.requestPayment=this.requestPayment.bind(this);
    }


    requestPayment(){
        const config = {
            headers: {
                'Content-Type':'application/json',
                'Authorization': '***'
            }
        }
        const data={
            date: new Date().toISOString().slice(0, 10).split('-').reverse().join('/'),
            orderID:this.props.orderID,
            items:this.props.products,
            due:this.props.total,
            storeID:reactLocalStorage.get('nauman')
        }
        post(`http://localhost:4000/payable/add`,  data ,config)
            .then(res => {
              console.log(res.data)
            })

            const bill={
                id:reactLocalStorage.get('retailer-acc'),
                amount:this.props.total
              }
        post(`http://localhost:4000/order/v1/transfers`,  bill ,config)
            .then(res => {
              console.log(res.data)
            })

            const update={
                checkout:true
              }
        put(`http://localhost:4000/order/update/`+this.props.orderID,  update ,config)
            .then(res => {
                  console.log(res.data)
                  this.setState({redirect:true})
             })
    }


    checkout(){
        const config = {
            headers: {
                'Content-Type':'application/json',
                'Authorization': '***'
            }
        }

        const update={
            checkout:false
          }
        put(`http://localhost:4000/order/update/`+this.props.orderID,  update ,config)
            .then(res => {
              console.log(res.data)
            })

    }



 

    render() {

        if(this.state.redirect){
            return <Redirect to='/order' />
        }

        return (<>
        <Navbar>
            <NavBartitleContainer className="NavBar-titleContainer">
           
            <NavBar__logo className="NavBar__logo">Payment</NavBar__logo>
            
            <StyledLink to={{pathname: `/`}} > <DashBoard><Icon><FontAwesomeIcon ></FontAwesomeIcon></Icon>Total Items:<Sales>{this.props.products}</Sales></DashBoard></StyledLink>
            <StyledLink to={{pathname: `/products`}} ><Products><Icon><FontAwesomeIcon ></FontAwesomeIcon></Icon>Grand Total:<Sales style={{color:"Red"}}>{this.props.total}</Sales></Products></StyledLink><br></br>
            <StyledLink to={{pathname: `/products`}} ><Products><Icon><FontAwesomeIcon ></FontAwesomeIcon></Icon>Avaliable Riders</Products></StyledLink>
            <Button onClick={this.requestPayment}>Checkout</Button>
            </NavBartitleContainer>

            
        </Navbar>
             

        </>
        )

    }
}
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Icon =styled.i
`
position:relative;
top:10px;
margin-right:10px;
font-size:1.5rem;
`


const Navbar = styled.div`
width:30%;
justify-content: space-between;
align-items: center;
height:100%;

// position:fixed;
background-color:#343847;
  
`
const NavBartitleContainer = styled.div`
// width: 25%;
margin-top:18%;
display: block;
margin-left:30px;
height:100%;
`


const NavBar__logo=styled.p
` margin: 0;

padding: 0;
cursor: pointer;
color:white;
font-family: 'Poppins';
font-size:2rem;
`
const DashBoard=styled.div
`
margin-top:45%;


height:60px;
color:white;
font-family:'Poppins';
text-decoration:none;
font-size:18px;
font-weight:lighter;
display:flex;
`
const Products=styled.div
`
display: inline-flex;
height:55px;
color:white;
font-family:'Poppins';
text-decoration:none;
padding-right:12px;
font-size:18px;
font-weight:lighter;
`
const Routes=styled.a
`
position:relative;
top:6px;
text-decoration:none;
text-align:center;
&:visited{
   color:white;
  }
`
const SubNavContent=styled.div
`
margin-top:18%;
display: block;
align-items: center;
text-align:center;

`
const Sales=styled.div
`


height:60px;
color:white;
font-family:'Poppins';
text-decoration:none;
font-size:18px;
font-weight:lighter;
padding-left:15px;
`
const Analytics=styled.div
`

height:60px;
color:white;
font-family:'Poppins';
text-decoration:none;
font-size:12px;
font-weight:lighter;
`
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
export default navbar;


