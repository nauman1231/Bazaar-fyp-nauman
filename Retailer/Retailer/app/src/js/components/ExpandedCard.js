import React, { Component } from 'react'
import styled from 'styled-components'


const Grid = styled.div`
display:grid;
grid-template-columns: 20% 80%;
margin-top:.6rem;
width:100%;
align-items:center;


`;

const Column = styled.div`
display:flex;
flex-direction:column;
justify-content :center;
align-items:center;
`;

const Row = styled.div`
display:flex;
align-items:center; 
justify-content :space-between;
margin-top:1rem;
`;

const Image = styled.img`
width:150px;
height:150px;
`;

const EditText = styled.input`
border:none;
border-bottom:2px solid #757575;
outline:none;
width:${props => props.large ? '300px' : '120px'};
margin-top:.8rem;
background:#F5F5F5;

&:focus{
    border-color:#03A9F4;
}

`;

const Text = styled.p`


font-size:.8rem;
margin:0;
margin-top:.5rem;


`;

const InputField = styled.div``;

const Label = styled.p`
color:#9E9E9E;
margin:0;
`;





export default class ExpandedCard extends Component {
    render() {

        const {product}  = this.props;


        return (
            <Grid>

                <Column>
                    <Image />
                    <Text>1 of 3</Text>
                    <Text>+ Add Image</Text>
                </Column>

                <div>

                    <Row>
                        <InputField>
                            <Label>Product Name</Label>
                            <EditText large  value={product.name} />
                        </InputField>

                        <InputField>
                            <Label>Price</Label>
                            <EditText value={product.price}  />
                        </InputField>

                        <InputField>
                            <Label>Category</Label>
                            <EditText  value={product.category}  />
                        </InputField>

                    </Row>

                    <Row>
                        <InputField>
                            <Label>SKU</Label>
                            <EditText  value={product.sku}  />
                        </InputField>

                        <InputField>
                            <Label>BarCode</Label>
                            <EditText  value={product.barcode}  />
                        </InputField>

                        <InputField>
                            <Label>Size</Label>
                            <EditText  value={product.size}  />
                        </InputField>

                        <InputField>
                            <Label>Cost</Label>
                            <EditText  value={product.cost}  />
                        </InputField>

                        <InputField>
                            <Label>Brand</Label>
                            <EditText  value={product.brand}  />
                        </InputField>

                    </Row>

                    <Row>
                    <InputField>
                        <Label>Stock</Label>
                        <EditText  value={product.stock}  />
                    </InputField>


                </Row>



                </div>


            </Grid>
        )
    }
}
