import React, { Component } from 'react'
import styled from "styled-components";
import Button from './Button';
import ProductCard from './ProductCard';

const Container = styled.div`
width:80%;
margin:0 auto;
background:#F5F5F5;
padding:1rem 5rem;
`;

const Row = styled.div`
display:flex;
background:${props => props.tableCol ? '#9E9E9E' : 'none'};
justify-content:space-between;
align-items:center;
`;

const Icon = styled.img``;

const Heading = styled.h1`
display:inline-block;
margin-right:1.5rem;
`;

const SubHeading = styled.h2`
display:inline-block;
font-weight:500;
font-size:1.2rem;
`;

const Block = styled.div``;

const Text = styled.p`
marign:0;
text-align:center;
`;


export default class Table extends Component {
    render() {



        let { products,heading } = this.props;

        const Products = ()=> products.map((prod) => {
            return <Row>
                <ProductCard showImage Product={prod} />
            </Row>
            

        })



        return (
            <Container>

                <Row>
                    <Block>
                        <Heading>{heading}</Heading>
                        <SubHeading>Filter</SubHeading>
                    </Block>

                    <Button text="Add Product" variant="outlined" />

                </Row>


                <Row tableCol>
                    <Block><Text>Product</Text></Block>
                    <Block><Text>SKU</Text></Block>
                    <Block><Text>Category</Text></Block>
                    <Block><Text>Size</Text></Block>
                    <Block><Text>Price</Text></Block>
                    <Block><Text>Stock</Text></Block>
                    <Text></Text>
                </Row>


                <Products />


            </Container>
        )
    }
}
