import React, { Component } from 'react'
import styled from 'styled-components'
import Dots from '../assets/images/shapes-and-symbols.svg';
import ExpandedCard from "./ExpandedCard";
import Axios from 'axios';

const ActiveColor ='#2196F3';


const Container = styled.div`
background:#F5F5F5;
cursor:pointer;
padding:.5rem 0;
width:100%;
margin-top:1rem;
`;


const Row = styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 width:100%;
`;

const ProductImage = styled.img`
width:50px;
height:50px;
position:absolute;
left:-60px;
`;

const Text = styled.p`
 font-size:.9rem;
 font-weight:600;
 color:${props=>props.active ? ActiveColor : 'black'};
 margin:0;
`;

const ImageText = styled.div`
 display:flex;
 align-items:center;
 position:relative;
`;

const Icon = styled.img`
width:18px;
height:18px;
cursor:pointer;
`;


const Menu = styled.div`
background:#EEEEEE;
padding:.2rem .8rem;
border-radius:16px;
position:absolute;
`;

const Options = styled.p`

`;

const MenuContainer = styled.div`
position:relative;
`;


export default class ProductCard extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            showMenu:false,
            showExpandedCard :false,
        }
    }
    
    
    
    render() {

    
    let {showImage,Product} = this.props;
    

        return (
            <Container >
            <Row onClick={()=>{this.setState({showExpandedCard:!this.state.showExpandedCard})}}>
                <ImageText>
                {showImage && 
                    <ProductImage src={Product.imgUrl} />
                }
                 <Text active={this.state.showExpandedCard}>{Product.name}</Text>
                </ImageText>

                <Text active={this.state.showExpandedCard}>{Product.sku}</Text>
                <Text active={this.state.showExpandedCard}>{Product.category}</Text>
                <Text active={this.state.showExpandedCard}>{Product.size}</Text>
                <Text active={this.state.showExpandedCard}>{Product.Retail_price}</Text>
                <Text active={this.state.showExpandedCard}>{Product.number_of_carton}</Text>
                <MenuContainer>
                <Icon src={Dots}  onClick={(e)=>{
                    e.stopPropagation()
                    this.setState({showMenu:!this.state.showMenu})}} />
                {this.state.showMenu && 
                    <Menu>
                    <Options>Edit</Options>
                    <Options onClick={()=>{
                        Axios.delete('http://localhost:4000/product/delete/'+Product.name).then(()=>{
                            window.location.reload(false);
                        })  
                    }}>Delete</Options>
                    </Menu>
                } 
                </MenuContainer>
                
            </Row>

                {this.state.showExpandedCard &&
                <ExpandedCard product={Product}/>
                }


            </Container>
        )
    }
}
