import React, { Component } from 'react'

import Icon from "../../assets/icons/searchIcon.svg"
import {devices} from "../../assets/devices/devices"
import styled from 'styled-components'
import {reactLocalStorage} from 'reactjs-localstorage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state={
            isExpanded:false,
            search:"",
            redirect:false
        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    


 
   search(){
       console.log("search clicked"+this.state.search)
       reactLocalStorage.set("search",this.state.search)
       
       this.setState({
           redirect:true
       })
   }

   
    render() {
        // if(this.state.redirect && reactLocalStorage.get("home5km")){
        //     reactLocalStorage.set("home5km",false)
        //     reactLocalStorage.set("searchRedirect",true)
        //     return  <Redirect to='/search' /> 
        // }

        // else if(this.state.redirect && !reactLocalStorage.get("home5km")  ){
        //     window.location.reload(); 
        //     return  <Redirect to='/search' /> 
        // }
        return (
            <>
            
                <div className="Search">
                    <SearchBarContainer className="SearchBarContainer" >
                        <SearchInput placeholder="Search" className="SearchInput" onChange={e => this.setState({search:e.target.value})}>
                        </SearchInput>
                        <SearchIcon className="SearchIcon" src={Icon}  onClick={() => this.props.action(this.state.search)} ></SearchIcon>
                    </SearchBarContainer>
                </div>

            </>
        )
    }
}

const SearchBarContainer = styled.div`

display: inline-block;
    position: relative;
    width: 100%;
    @media ${devices.mobileM && devices.max } { 
        width:auto;
       
      }
    
   
`

const SearchInput = styled.input`
padding: .5rem 1rem;
border-radius: 24px;
width: 300px;
outline: none;
border: 1px solid #292929;
color:#BDBDBD;
font-family: "Poppins", sans-serif;
color:black;
font-weight: 400;
@media ${devices.mobileM && devices.max } { 
    width:250px;
   
  }



`
const SearchIcon=styled.img`
width: 18px;
position: absolute;

right: 14px;
top: 10px;;
cursor: pointer;

`