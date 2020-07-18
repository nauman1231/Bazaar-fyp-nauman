import React, { Component } from 'react'


import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Alert } from '@material-ui/lab';
import { BrowserRouter as Router, Route,Switch, Redirect,Link} from 'react-router-dom'
import { Checkbox } from '@material-ui/core';
import {reactLocalStorage} from 'reactjs-localstorage';
import {devices} from '../../assets/devices/devices'
export default class Expanded extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false,
            storeDefault:false,
            store5km:false
           
        }

    }

        
      
      
       
    componentDidMount() {
       
    }

    toggleCheckBox(){
        this.setState({ store5km: !this.state.store5km,
          storeDefault:false
        });
    }
    toggleCheckBoxDefault(){
        this.setState({ storeDefault: !this.state.storeDefault,
            store5km:false
          });
    }
    filter(){
       if(this.state.storeDefault){
           this.setState({
               redirectToAll:true
           })
       }
       if(this.state.store5km){
        this.setState({
            redirectTo5km:true
        })
       }
    }
     // const { redirect } = this.state;

       
    render() {
        if (this.state.redirectToAll) {
           
            return <Redirect to='/'/>;
          }
          if (this.state.redirectTo5km) {
              if(reactLocalStorage.get('login')){
                return <Redirect to='/5km'/>;
              }
              return <Alert severity="info">Please Login, to proceed.</Alert>

           
              
          }
        return (
            <>
                <ExpandedContainer >

                <FormControlLabel
                    control={
                    <Checkbox
                    onClick={() => { this.toggleCheckBoxDefault() }}
                    checked={this.state.storeDefault}
                        name="All Stores"
                        value="All Stores"
                    />
                    }
                    label="All Stores"
                  
                />

                <FormControlLabel
                    control={
                    <Checkbox
                    onClick={() => { this.toggleCheckBox() }}
                    checked={this.state.store5km}
                        name="Stores within 5km"
                        value="Stores within 5km"
                    />
                    }
                    
                    label="Stores within 5km"
                />
               <Button  onClick={() => { this.filter() }}>Fitler</Button>

                </ExpandedContainer>

            </>
        )
    }
}
// const Button=styled.button
// `
//     align-self: center;
//     // margin-left: 20%;
    
//     border-radius: 10px;
//     background-color: #343847;
//     border: 2px solid #707070;
//     font-size: .9rem;
//     color:white;
//     font-size:18px;
    
//     padding:5px;
//     cursor:pointer;
//     margin-bottom:10px;
// `
const Button=styled.button
`

align-self: center;
    margin-left: 5px;
    margin-top: 5px;
    border-radius: 50px;
    background-color: white;
    border: 2px solid #2196F3;
    
    color:#2196F3;
    font-size:12px;
    font-weight:bold;
    padding:5px;
    cursor:pointer;
    margin-bottom:10px;
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const ExpandedContainer=styled.div`
width:100%;
display: block;


margin-left: 9%;
@media ${devices.mobileM && devices.max } { 
   
    width:60%;
  }

`