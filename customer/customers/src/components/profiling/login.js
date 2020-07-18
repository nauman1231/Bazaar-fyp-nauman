import React, { Component } from 'react'

import styled from 'styled-components';
import { Link, Redirect,  } from 'react-router-dom'
import {post,put} from 'axios';
import Icon from "../../assets/icons/Union 1.svg"
import {reactLocalStorage} from 'reactjs-localstorage';

import IconPassword from "../../assets/icons/password.svg"
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default class Login extends Component {

    constructor() {
        super();
        this.state = {
             redirect: false,
             email:"",
             password:""
           
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
      
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const data = {
            
            email:this.state.email,
            password:this.state.password
        };
        console.log(data)
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(`http://localhost:4000/authentication/customer/login`,  data ,config)
          .then(res => {
              if(res.status==500){
                  alert("nauman")
              }
              
              console.log(res.data.user)
              reactLocalStorage.set('UserID', res.data.user._id);
              reactLocalStorage.set('UserName', res.data.user.name);
              reactLocalStorage.set('login', true);
              localStorage.setItem('UserTime', new Date().getTime())
                
              this.setState({
                  redirect:true
              })
             
          }).catch(function (error) {
            console.log(error.response.status)
            if (error.response.status === 422) {
                console.log('failed');
                toast("*Email or Password are Required", { type: "error" });
  
              }
              if (error.response.status === 500) {
                console.log('failed');
                toast("Failed! Incorrect email or password", { type: "error" });
  
              }
          });
          console.log(this.state);
      }
    render() {
        const { redirect } = this.state;

        if (redirect) {
          return <Redirect to='/5km'/>;
        }

        return (
           
            <Section>
                <Logincontainer >
                    <Text>Login</Text>
                    <InputContainer>
                            {/* <Label>Barcode:</Label> */}
                            <Input type="email" placeholder="User Name"  value={this.state.email} name="email" onChange={e => this.setState({email:e.target.value})}></Input>
                            <IconInput className="SearchIcon" src={Icon}></IconInput>
                    </InputContainer>

                    <InputContainer>
                            {/* <Label>Barcode:</Label> */}
                            <Input type="password" placeholder="Password" value={this.state.password} name="password" onChange={e => this.setState({password:e.target.value})}></Input>
                            <IconInput className="SearchIcon" src={IconPassword}></IconInput>
                    </InputContainer>

                    <InputContainer style={{marginBottom:"5px"}}>
                    <Button onClick={this.handleSubmit} >Login</Button>

                    </InputContainer>

                    <Extra>
                       <StyledLink to="/signup"><SmallText>Sign Up</SmallText></StyledLink> 
                        <SmallText>Forgot Password</SmallText>
                    </Extra>
                   

                </Logincontainer>
               
            </Section>
            
        )
    }

    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Button=styled.button
`
    align-self: center;
    // margin-left: 20%;
    
    border-radius: 10px;
    background-color: #343847;
    border: 2px solid #707070;
    font-size: .9rem;
    color:white;
    font-size:18px;
    width:200px;
    padding:5px;
    cursor:pointer;
    height:50px;
`
const SmallText=styled.p`
color:#69718F;
font-size:12px;
font-weight:regular;
font-family:'Open sans';
margin-top:20%;
margin-left:20%;
padding:0;
margin:0;
`
const Extra=styled.div`
display:inline-flex;
justify-content: space-evenly;
margin-left: 0px;
height: 20px;
width: 100%;
`
const IconInput=styled.img`
width: 18px;
position: absolute;
left: 25%;
top: 5px;
cursor: pointer;

`
const InputContainer=styled.div`
position:relative;
width:100%;
display:inline-flex;
justify-content:space-evenly;
margin-bottom:40px;
`

const Input=styled.input`
width:200px;
border: none;
border-bottom: 2px solid #BDBDBD;
height:30px;
text-align:center;
&:focus{
    outline: none;
}
::placeholder{
    color:#BDBDBD;
    font-family:'Poppins';
    font-weight:bold;
    font-size:18px;
    text-align:center;
}
`

const Section=styled.section
    `
    width:100%;
    display: inline-flex;
    flex-direction:row;
    height:100%;
    justify-content:center;
    background-color:#FCFCFC;
    position:absolute;

    `
    const Logincontainer=styled.div`
width:364px;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:384.5px;
padding-bottom:5px;
margin-top:3%;
border-radius:2%;
margin-left:4%;
box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow-x: auto;
margin-bottom:20px;
margin:auto;
`
const Text= styled.p`
color:#343847;
font-size:24px;
font-weight:regular;
font-family:'Poppins';
margin-top:20%;
margin-left:20%;

`