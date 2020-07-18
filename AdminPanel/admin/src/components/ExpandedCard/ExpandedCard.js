import React, { Component } from 'react'

import Icon from "../../assets/images/Avatar.jpg";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import ProductDetails from '../ProductDetail/details'
import {put,post} from 'axios';
import { BrowserRouter as Router, Route,Switch, Redirect,Link} from 'react-router-dom'

export default class ExpandedCard extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false,
           
        }
        this.handleVerify = this.handleVerify.bind(this)
    }

        
      
      
       
    componentDidMount() {
        // console.log(this.props.value._id)
    }
    
    handleVerify() {
        const data={
            verified:true
        }
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        put(`http://localhost:4000/retailer/verified/`+this.props.value._id,  data ,config)
        .then(res=>{
            console.log("verified"+res)
        })

        const store={
            storeName:this.props.value.stores.name
        }
        console.log(this.props.value.stores.name)
        post(`http://localhost:4000/retailer/v1/accounts`,  store ,config)
        .then(response=>{
            console.log("created"+response.data)
            const update={
                stripe_id:response.data.id
            }
            const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            put(`http://localhost:4000/retailer/verified/`+this.props.value._id,  update ,config)
            .then(res=>{
                console.log("id"+response.id)
                window.location.reload();
              
            })
        })

    
    }
        
    


    render() {
        return (
            <>
                <ExpandedCardContainer >
                
                    <ImageContainer className="ImageContainer">

                        <ExpandedCardImage className="ExpandedCardImage" src={Icon}></ExpandedCardImage>
                    </ImageContainer>

             <ExpandedCardDetailContainer className="ExpandedCardDetailContainer">

                        <DetailInnerContainer className="DetailInnerContainer">
                        
                            <Heading className="heading">
                                <p>Store Name</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.stores.name}</p>
                            </Content>
                           


                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Address</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.stores.address}</p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Contact</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.stores.number}</p>
                            </Content>

                        </DetailInnerContainer>

                         <DetailInnerContainer className="DetailInnerContainer">
                          
                            <Content className="content">
                                <Button onClick={this.handleVerify}>Verifiy</Button>
                            </Content>

                        </DetailInnerContainer>

                       {/* <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Size</p>
                            </Heading>
                            <Content className="content">
                                <p></p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Cost</p>
                            </Heading>
                            <Content className="content">
                                <p></p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Brand</p>
                            </Heading>
                            <Content className="content">
                                <p></p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Stock</p>
                            </Heading>
                            <Content className="content">
                                <p></p>
                            </Content>

                        </DetailInnerContainer> */}
                    



            </ExpandedCardDetailContainer>
       
                </ExpandedCardContainer>

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
const Button=styled.button
`
// position:absolute;
// left:57%;
align-self: center;
    // margin-left: 330px;
    margin-top: 20px;
    border-radius: 50px;
    background-color: white;
    border: 2px solid #2196F3;
    font-size: .9rem;
    color:#2196F3;
    font-size:12px;
    font-weight:bold;
    padding:5px;
    cursor:pointer;
    width:100%;
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
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:hover{
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
    -webkit-filter:opacity(.85);
}
`
const ImageContainer=styled.div
`
width: 100%;
display: flex;
min-width: 150px;
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
flex-basis: 30%;
    margin: 0rem 0 0rem 0;
`
const Content=styled.div`
color: #3A3A3A;
`

const Heading=styled.div`
color: #979797;
`