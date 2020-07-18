import React, { Component } from 'react'
import styled from 'styled-components'



const Container = styled.div`
    background:#292929;
    width:100%;
    min-height:100vh;
`;

const Title = styled.h1`
    color:white;
    text-align:center;
    font-size: 2rem;
    font-weight:500;
    margin:0;
    margin-top:2rem;
`;

const LinkText = styled.p`
color:white;
text-align:center;
font-size: 1rem;
font-weight:400;
margin:0;
min-width:100px;
text-align:left;
`;

const LinkIcon = styled.img`
   width:40px;
   height:40px;
   margin-right:1rem;
`;

const Link = styled.div`
    display:flex;
    align-items:center;
    justify-content :center;
    margin-top:2rem;
`;

const NavLinks = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content :center;
    margin-top:3rem;
`;


const Spacer = styled.div`
    height:0%;
`;


export default class SideNav extends Component {

    render() {

        const NavLink = ({ name }) => {
            return <Link>
                <LinkIcon />
                <LinkText>{name}</LinkText>
            </Link>
        }


        return (
            <Container>
                <Title>Baazar</Title>
                <NavLinks>
                    <NavLink name="Dashboard" />
                    <NavLink name="Products" />
                </NavLinks>

                <Spacer />

              



            </Container>
        )
    }
}
