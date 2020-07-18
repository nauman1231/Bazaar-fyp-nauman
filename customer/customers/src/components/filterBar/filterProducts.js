import React, { Component } from 'react';

import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine,faBoxOpen,faCog} from '@fortawesome/free-solid-svg-icons';
// // import SearchBar from '../SearchBar/SearchBar';
//  import {devices} from '../../assets/devices/devices';
// import Navbar from '../Navbar/navbar';
// import {put,post} from 'axios';
import add from '../../assets/icons/plus.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    
  } from "react-router-dom";
 import Expanded from './expanded'
 import ExpandedCategory from './expendCategory'
 import {devices} from '../../assets/devices/devices'
class filterProducts extends Component {

    constructor(props) {

        super(props);
        this.state = { isExpandedStore: false,
            isExpandedCategory: false,
            isExpandedBrand: false,
           
        }
    }

    componentDidMount(){
       console.log(this.props)
    }

    StoreExpanded() {
        this.setState({ isExpandedStore: !this.state.isExpandedStore,
            isExpandedCategory: false,
            isExpandedBrand: false
        });
    }
    CategoryExpanded() {
        this.setState({ isExpandedCategory: !this.state.isExpandedCategory ,
            isExpandedStore: false,
            isExpandedBrand: false
        
        });
    }

    BrandExpanded() {
        this.setState({ isExpandedBrand: !this.state.isExpandedBrand,
            isExpandedStore: false,
            isExpandedCategory: false
        });
    }


    render() {

        return (
            

     <>
     <StoreFilter   onClick={() => { this.StoreExpanded() }} >
                <SmallHeadings>Stores</SmallHeadings>
                <Icon src={add}></Icon>
                {/* <TagContainer>
                    <Tags>CSD</Tags>
                    <Tags>CSD</Tags>
                    <Tags>CSD</Tags>
                    <Tags>CSD</Tags>
                    <Tags>CSD</Tags>
                    <Tags>CSD</Tags>
                </TagContainer> */}
               
            </StoreFilter>
            {this.state.isExpandedStore &&
                <Expanded />    }

            <StoreFilter onClick={() => { this.CategoryExpanded() }}>
            <SmallHeadings>Category</SmallHeadings>
            <Icon src={add}></Icon>
            </StoreFilter>
            {this.state.isExpandedCategory &&
                <ExpandedCategory action={this.props.action}/>    }
            <StoreFilter onClick={() => { this.BrandExpanded() }}>
            <SmallHeadings>Brand</SmallHeadings>
            <Icon src={add}></Icon>
            </StoreFilter>
            {this.state.isExpandedBrand &&
                <Expanded />    }
     </>
        )

    }
}

const SmallHeadings=styled.p
`
color:#787878;
font-family:"Poppins";
font-size:18px;
width: 84.55px;
`
const StoreFilter = styled.div`
width:100%;
display: flex;
flex-direction: column;
border-top: 2px solid #BDBDBD;
margin-left: 9%;
display: inline-flex;
flex-direction: row;
@media ${devices.mobileM && devices.max } { 
    width:80%;
    
   
  }
`
const Icon=styled.img`
width: 18px;

left: 25%;
top: 5px;
cursor: pointer;
margin-left:35%;
@media ${devices.mobileM && devices.max } { 
   
    margin-left:55%;
  }
`
export default filterProducts;


