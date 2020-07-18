import React, { Component } from 'react'
// import "./Card.scss";
// import Icon from "../../assets/images/corn.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import ExpandedCard from "../ExpandedCard/ExpandedCard"
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {devices} from '../../assets/devices/devices'

import {put} from 'axios';
import axios from 'axios';
export default class Cards extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false,
            items:"",
            cartons:""
           
        }

    }

    componentDidMount() {
       
    }

    editProduct(id) {
        
        
        console.log(id);
        
        const data = {
            product_per_carton:this.state.items,
            number_of_carton:this.state.cartons,
            quantity:Number(this.state.cartons)*Number(this.state.items)
        };
        

          const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        put(`http://localhost:4000/product/update/`+id, data ,config)
          .then(res => {
            console.log(res);
            console.log(res.data);
            window.location.reload()
            // this.setState({
            //     isClose:true
            // })
          })
          console.log(data);
    
    }


        
    deleteItem(id){
        const config = {
          headers: {
             
              'Authorization': '***'
          }
      }
        axios.delete('http://localhost:4000/product/delete/'+id,config).then(res=>{
  
          console.log(res.data)
          window.location.reload()
          })
      }

    render() {
        return (
            <>
                <Cardcontainer className="Cardcontainer"   onClick={() => { this.toggleExpanded() }}>
                <CardText className="CardText">1</CardText>
                    
                    
                <CardText className="CardText">{this.props.item.name}</CardText>
                 
                 <CardText className="CardText">{this.props.item.category}</CardText>
                 <CardText className="CardText info">{this.props.item.size}</CardText>
                 <CardText className="CardText info">{this.props.item.Seller_price}</CardText>
                 <Quantity placeholder="1" type='number' value={this.state.qty} name="quantity" onChange={e => this.setState({qty:e.target.value})}></Quantity>

                 <CardText className="CardText info"><FontAwesomeIcon stlye={{fontSize:'20px' } } icon={faCheckCircle}></FontAwesomeIcon></CardText>
                 

                   

              

                </Cardcontainer>
              
        </ >
            
        )
    }

    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}
const Edit=styled.div`
position:relative;

`
const Quantity=styled.input`
width:50px;
margin-left:50px;
height:20px;

`
const DeleteButton=styled.button`
border:none;
background:none;
cursor:pointer;
outline:none;
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
    @media ${devices.mobileM && devices.max }  { 
        height:100px;
      }
`

const CardText=styled.p`
    font-weight: 600;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    width:100px;
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


const Modal=styled.div `
    font-size: 12px;
  `
  const Header=styled.div `
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  `

  const Content=styled.div `
    width: 100%;
    padding: 10px 5px;
  `
  const Action =styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  `
  const Close=styled.a`
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


  const Title =styled.div
  `
  height:15%;
  display: inline-flex;
  width:100%;
  
  `
  const Heading=styled.p
  `
  font-family:'Poppins';
  font-size:18px;
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
const IconInput=styled.img`

width:100%;

cursor: pointer;

`
const InputContainer=styled.div`
position:relative;
width:100%;
display:inline-flex;
justify-content:space-evenly;
margin-bottom:40px;
`

const Input=styled.input`
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

const InputArea=styled.textarea`
width:200px;
border: none;
border-bottom: 2px solid #BDBDBD;
height:50px;
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
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const ProductsCard=styled.div`
height:200px;
width:25%;
margin-left:10px;
// background-color: #FDFDFF;
// border: solid 0 #707070;
border: 1px solid #707070;
border-radius:5px;
margin-top:5%;
margin-bottom:5%;
overflow:hidden;


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


font-family:"Poppins";
font-size:16px;
border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
border-radius:8px;

`
// .info`
//     color: rgb(0, 160, 0);
// `