import React, { Component } from 'react'
// import "./Card.scss";
// import Icon from "../../assets/images/corn.jpg";
import ExpandedCard from "../ExpandedCard/ExpandedCard"
import styled from 'styled-components';
import { Link, Redirect,  } from 'react-router-dom'
import {post,put} from 'axios';
import Icon from "../../assets/icons/Union 1.svg"
import {reactLocalStorage} from 'reactjs-localstorage';
import IconPassword from "../../assets/icons/password.svg"
import Geocode from "react-geocode";

import { toast } from "react-toastify";
import Map from './map';
export default class Store extends Component {

    constructor() {
        super();
        this.state = {
             redirect: false,
            address:"",
             number:null,
             name:"",
             lng:73.047882,
             lat:33.684422,
             zoom:10

           
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)

    }

  onChange(e){
   console.log(e)
     e.persist();
    let text=e.target.value
    Geocode.setApiKey("AIzaSyB_UY8Mg65jm8F_BHOarN0wQAf1pFlqqtM");
    Geocode.fromAddress(e.target.value).then(

        response => {
            console.log(response)
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          this.setState({
              lng:lng,
              lat:lat,
              
          })
        
        },
        error => {
          console.error(error);
        }
      );
      this.setState({
        address:text,
        zoom:16
     })
      console.log("state"+this.state.name)
      console.log("state"+this.state.address)
      
  }

    handleSubmit = event => {
        event.preventDefault();
    
        const data = {
            name:this.state.name,
            address:this.state.address,
            number:this.state.number,
            lat:this.state.lat,
            lng:this.state.lng
        };
        console.log(data)
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(`http://localhost:4000/store/add`,  data ,config)
          .then(res => {
            const retailerUpdate={
                stores:res.data._id
            };
            console.log(res.data)
            put(`http://localhost:4000/retailer/update/`+reactLocalStorage.get('RetailerID'),  {retailerUpdate} ,config).then(res=>{console.log(res.data)});
            toast("Thankyou for showing interest in Bazaar! Your request will be verified, you will be notified when the process is done", { type: "info" });
            this.setState({
                redirect:true
            })
          })
          console.log(this.state);
      }
    render() {
        const { redirect } = this.state;

        if (redirect) {
          return <Redirect to='/login'/>;
        }

        return (
           
            <Section>
                <Logincontainer >
                    <Text>Store Information</Text>
                    <InputContainer>
                            {/* <Label>Barcode:</Label> */}
                            <Input type="text" placeholder="Store Name"  value={this.state.name} name="name" onChange={e => this.setState({name:e.target.value})}></Input>
                            <IconInput className="SearchIcon" src={Icon}></IconInput>
                    </InputContainer>
                    <InputContainer>
                            {/* <Label>Barcode:</Label> */}
                            <Input type="number" placeholder="Phone Number"  value={this.state.number} name="number" onChange={e => this.setState({number:e.target.value})}></Input>
                            <IconInput className="SearchIcon" src={Icon}></IconInput>
                    </InputContainer>
                    <InputContainer>
                            {/* <Label>Barcode:</Label> */}
                            <Input type="text" placeholder="Address" value={this.state.address}  name="address" onChange={this.onChange}></Input>
                            <IconInput className="SearchIcon" src={Icon}></IconInput>
                    </InputContainer>
                   

                    <InputContainer style={{marginBottom:"5px"}}>
                    <Button onClick={this.handleSubmit} >Continue</Button>

                    </InputContainer>

                    <Extra>
                        <SmallText>Sign Up</SmallText>
                        <SmallText>Forgot Password</SmallText>
                    </Extra>
                   

                </Logincontainer>
               
               <Map
                isMarkerShown
                defaultOptions={{ scaleControl: true }}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB_UY8Mg65jm8F_BHOarN0wQAf1pFlqqtM&libraries=visualization,drawing,geometry,places`}
                loadingElement={
                  <div style={{ height: `calc(100vh - 112px)` }}> Loading... </div>
                }
                containerElement={<div style={{ height: "100%", width:"50%" }} />}
                mapElement={<div style={{ height: "100%"  }} />}
                lng={this.state.lng}
                lat={this.state.lat}
                zoom={this.state.zoom}
               />
               
            </Section>
            
        )
    }

    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}

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
left: 20%;
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
width:250px;
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

    `
    const Logincontainer=styled.div`
width:364px;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:90%;
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