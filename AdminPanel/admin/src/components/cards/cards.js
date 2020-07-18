import React, { Component } from 'react'
// import "./Card.scss";
// import Icon from "../../assets/images/corn.jpg";
import ExpandedCard from "../ExpandedCard/ExpandedCard"
import styled from 'styled-components';
import { Link } from 'react-router-dom'
export default class Cards extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false,
           
        }

    }

    componentDidMount() {
        console.log(this.props.val.name)
    }
    render() {
        return (
            <>
                <Cardcontainer  className="Cardcontainer"   onClick={() => { this.toggleExpanded() }}>
                <CardText className="CardText">1</CardText>
                
                    
                    <CardText className="CardText">{this.props.val.name}</CardText>
                    <CardText className="CardText">{this.props.val.number}</CardText>
                    <CardText className="CardText">{this.props.val.email}</CardText>
                    <CardText className="CardText info">12-10-20</CardText>
                    
                    

                </Cardcontainer>
               {this.state.isExpanded &&
                <ExpandedCard value={this.props.val} />    }
        </ >
            
        )
    }

    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}
const Cardcontainer=styled.div`
    font-family: 'Poppins',sans-serif;
    letter-spacing: .5pt;
    display: inline-flex;
    width:95%;
    align-items: center;
    padding: .6rem  1rem;
    margin: 1rem 0rem;
    justify-content: space-between;
    background: #F6F9FC;
    margin-top: .5rem;
    overflow-x: auto;
    cursor: pointer;
    word-break:break-word;
`

const CardText=styled.p`
    font-weight: 600;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    width:20%;
`

const CardimageContainer=styled.div`
  display: flex;  
  border-radius: 50%;
  background: rgb(221, 221, 221);
//   padding:.5rem;
  width: 36px;

`

const Cardimage=styled.img`
  width:100%;
`

// .info`
//     color: rgb(0, 160, 0);
// `