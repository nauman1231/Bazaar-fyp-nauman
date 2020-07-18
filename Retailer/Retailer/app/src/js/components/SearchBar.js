import React, { Component } from 'react'
import styled from 'styled-components'




const Container = styled.div`
    border:2px solid #292929;
    margin:1rem;
    margin-left:2rem;
    padding:.3rem 1rem;
    border-radius:24px;
    display:flex;
    width:20%;

`;

const SearchInput = styled.input`
    border:none;
    margin-left:.5rem;
    outline:none;
`;

const SearchIcon = styled.img`
    width:24px;
    height:24px;
`;

export default class SearchBar extends Component {
    render() {
        return (
            <Container> 
                        <SearchIcon/>
                        <SearchInput placeholder="Search"/>
            </Container>
        )
    }
}
