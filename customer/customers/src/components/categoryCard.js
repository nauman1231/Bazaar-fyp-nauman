import React, {Component} from 'react';
import styled from 'styled-components';
import { Link, Redirect,  } from 'react-router-dom'
import {post,put} from 'axios';
export default class CategoryCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
    
          }

    }
    render(){

    return (


        
        <CheckBox >
            <Img src={`http://localhost:4000/uploads/dairy.jpg`}></Img>
            <TextBox><Heading>Dairy Milk</Heading></TextBox>
        
     
         </CheckBox>
        


    );
}

}
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Heading = styled.p`
margin-top:5%;
padding-left:10px;
justify-content: space-between;
color:#292929;
font-family:'Poppins';
font-size:24px;
font-weight:100;

`
const TextBox=styled.div`
`

const Box = styled.div` 
display: flex;
    flex-direction: column;
    height: 60%;
    padding: 10px 10px 10px 10px;
// grid-template-rows:30%;


width:100%;

`
const Img=styled.img`
opacity:0.8;
width:100%;
height:100%;
border-radius: 3px;
`
const CheckBox = styled.div` 


background-color:#FDFDFF;
border:solid 0 #707070;

height:300px;
width:20%;
margin-left:60px;
padding-bottom:5px;
margin-top:3%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
const Category=styled.div`
height:300px;
width:20%;
margin-left:10px;
// background-color: #FDFDFF;
// border: solid 0 #707070;

border-radius:5px;
margin-top:5%;
margin-bottom:5%;
overflow:hidden;
  &:hover{
    // overflow:visible;

    box-shadow: 0 17px 16px 0 rgba(55, 62, 82, 0.25);
    // background-color: #FDFDFF;
// border: solid 0 #707070;
// border: solid 0 #707070;

    -webkit-filter:opacity(.85);
    height:270px;

}
`

const Link14=styled.a`
width: 100%;
height: 100%;
padding: 29px;
text-decoration: none;
max-width: 100%;
display: inline-block;
`

