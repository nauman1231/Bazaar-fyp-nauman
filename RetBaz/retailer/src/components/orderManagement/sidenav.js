import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../orderSideDetail/navbar';
import Search from '../SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faShoppingBag,faAlignRight,faBell ,faBox,faBoxOpen,faPlus,faArrowLeft,faUpload} from '@fortawesome/free-solid-svg-icons';
import {post,put} from 'axios';
import $ from 'jquery'
import {reactLocalStorage} from 'reactjs-localstorage';
import { Link, Redirect,  } from 'react-router-dom'
import onspot from '../../assets/icons/onspot.svg'
import online from '../../assets/icons/online.svg'
import sales from '../../assets/icons/Sales.svg'
class AddProduct extends Component {
  
    constructor(props) {
        super(props);
        this.state ={
        
               
        
            

          }
        

    }

  
    
    render() {
        
        return (
       
          <SideNav>
             <StyledLink to='/walkin'  ><Icon style={{marginTop:"250px"}}>
                  <Img src={onspot}>
                  </Img>
                  <Label>
                        Walk in
                  </Label>
              </Icon>
              </StyledLink>
            <StyledLink to='/order'  ><Icon>
                  <Img src={online}>
                  </Img>
                  <Label>
                        Online
                  </Label>
              </Icon></StyledLink>

              <StyledLink to='/order/sales'  > <Icon>
                  <Img src={sales}>
                  </Img>
                  <Label>
                        Sales
                  </Label>
              </Icon></StyledLink> 
              <StyledLink to='/'><Logo>BAZAAR</Logo></StyledLink>

          </SideNav>
        );

    }
}

const Icon=styled.div`
display:block;
width 100%;
height:50px;
margin-bottom:20px;
text-align:center;

`
const Img=styled.img`

`
const Label=styled.p`
color:#707070;
font-size:12px;
font-family:"Poppins";
margin-top:4px;
`
const Logo=styled.p`
color:#BDBDBD;
font-size:18px;
font-family:"Poppins";
margin-top:200px;
margin-left:20px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const SideNav = styled.section`
// padding-top:50px;
width:10%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:100%;
// padding-bottom:5px;


border-radius:2%;
margin-left:2%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow: hidden;
display:block;
`


export default AddProduct;



