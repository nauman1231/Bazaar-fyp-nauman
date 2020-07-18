import React, { Component } from 'react'
import styled from 'styled-components'



const Container = styled.div`
    margin:1rem;
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.15);
    padding:.8rem;
    border-radius:8px;
`;

const Title = styled.p`
    font-size:1.3rem;
    margin:0;
    font-weight:500;
`;

const CardRow = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-top:1rem;
`;

const CardImage = styled.img`
    width:60px;
    height:60px;
`;


export default class Card extends Component {
    render() {

        const CardTitle = ({ title }) => (
            <Title>{title}</Title>
        )

        const CardNumberText = ({ number }) => (
            <Title>{number}</Title>
        )



        return (
            <Container>
                <CardTitle title={this.props.title} />
                <CardRow>
                    <CardNumberText number={this.props.number} />
                    <CardImage src={this.props.icon}></CardImage>
                </CardRow>
            </Container>
        )
    }
}
