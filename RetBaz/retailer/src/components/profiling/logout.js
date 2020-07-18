import React, { Component } from 'react'

import styled from 'styled-components';
import { Link, Redirect,  } from 'react-router-dom'
import {post,put} from 'axios';
import Icon from "../../assets/icons/Union 1.svg"
import {reactLocalStorage} from 'reactjs-localstorage';
import IconPassword from "../../assets/icons/password.svg"
export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            logout:false
           
        }
        this.logout=this.logout.bind(this);
    }

    logout(){
        localStorage.clear();
        this.setState({
            logout:true
        })
        
      }

   
    render() {
        // const { redirect } = this.state;

        // if (redirect) {
        //   return <Redirect to='/'/>;
        // }
        const timeout = this.state.logout;

        if (timeout) {
          return <Redirect to='/login'/>;
        }
        

        return (
  
            <Drop>
<Button>Profile</Button>
<Button onClick={this.logout}>Logout</Button>
            </Drop>
        )
    }

   
}


const Drop= styled.div`
width:15%;

background-color:#BDBDBD;
position: absolute;
left: 35%;
top: 75px;
border-radius: 5px;

`
const Button=styled.button
`
    align-self: center;
    
  width:100%;
    border-bottom: 2px solid #707070;
    font-size: .9rem;
    color:#707070;
    font-size:18px;
   height:50px;

    padding:5px;
    cursor:pointer;
    
`