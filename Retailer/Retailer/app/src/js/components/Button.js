import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin:1rem;
`;


const SimpleButton = styled.button`
padding:.6rem 2rem;
border-radius:24px;
outline:none;
font-weight:600;
font-family:"Poppins";
`;

const ButtonOutlined = styled(SimpleButton)`
      border:1.5px solid #3CA2F4;
      color:#3CA2F4;
      background:none;
`;

const ButtonFilled = styled(SimpleButton)`
       border:none;
       background:#3CA2F4;
       color:white;
`;



export default class Button extends Component {
    render() {
        
        const Button = ({ text, variant }) => {
            if (variant == "filled")
                return <ButtonFilled>{text}</ButtonFilled>

            if (variant == "outlined")
                return <ButtonOutlined>{text}</ButtonOutlined>

            return <ButtonFilled>{text}</ButtonFilled>
        }


        return (
            <Container onClick={this.props.click}>
                <Button variant={this.props.variant} text={this.props.text}   />
            </Container>
        )
    }
}
