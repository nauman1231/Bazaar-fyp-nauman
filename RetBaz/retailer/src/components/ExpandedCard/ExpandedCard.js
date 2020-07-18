import React, { Component } from 'react'

import Icon from "../../assets/images/Avatar.jpg";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import ProductDetails from '../ProductDetail/details'

import { BrowserRouter as Router, Route,Switch, Redirect,Link} from 'react-router-dom'

export default class ExpandedCard extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false,
           
        }

    }

        
      
      
       
    componentDidMount() {
        console.log(this.props.value._id)
    }
    

    render() {
        return (
            <>
                <ExpandedCardContainer >
                <StyledLink to={{pathname: `product/detail/${this.props.value._id}`}} >
                    <ImageContainer className="ImageContainer">

                        <ExpandedCardImage className="ExpandedCardImage" src={`http://localhost:4000/uploads/${this.props.value.fileName}`} ></ExpandedCardImage>
                    </ImageContainer>

                    </StyledLink>
                    <StyledLink to={{pathname: `product/detail/${this.props.value._id}`}} >
             <ExpandedCardDetailContainer className="ExpandedCardDetailContainer">

                        <DetailInnerContainer className="DetailInnerContainer">
                        
                            <Heading className="heading">
                                <p>Product Name</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.name}</p>
                            </Content>
                           


                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Price</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.Seller_price}</p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Category</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.category}</p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>SKU</p>
                            </Heading>
                            <Content className="content">
                                <p>22</p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Size</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.size}</p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Cost</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.Retail_price}</p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Brand</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.brand}</p>
                            </Content>

                        </DetailInnerContainer>

                        <DetailInnerContainer className="DetailInnerContainer">
                            <Heading className="heading">
                                <p>Stock</p>
                            </Heading>
                            <Content className="content">
                                <p>{this.props.value.number_of_carton}</p>
                            </Content>

                        </DetailInnerContainer>
                    



            </ExpandedCardDetailContainer>
            </StyledLink>
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
flex-basis: 25%;
    margin: 0rem 0 0rem 0;
`
const Content=styled.div`
color: #3A3A3A;
`

const Heading=styled.div`
color: #979797;
`