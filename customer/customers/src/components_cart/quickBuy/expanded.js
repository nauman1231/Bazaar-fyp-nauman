
import React, { Component } from 'react'

import Icon from "../../assets/images/Avatar.jpg";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt ,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import avatar from '../../assets/images/Avatar.jpg'
import { BrowserRouter as Router, Route,Switch, Redirect,Link} from 'react-router-dom'
import axios from 'axios'
export default class ExpandedCard extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false,
           
        }

    }

        
      componentDidMount(){
         
      }
      
      deleteQuickbuy(id){
        const config = {
          headers: {
             
              'Authorization': '***'
          }
      }
        axios.delete('http://localhost:4000/schedule/delete/'+id,config).then(res=>{
  
          console.log(res.data)
          window.location.reload()
          })
      }
  

    render() {
        return (
            <>
                <ExpandedCardContainer >
                <DeleteButton onClick={() => this.deleteQuickbuy(this.props.item._id)}  ><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></DeleteButton>
                
                    <StyledLink  to={{pathname: `/inside/${this.props.item.schedule}`}}>
             <ExpandedCardDetailContainer className="ExpandedCardDetailContainer">

                        <DetailInnerContainer className="DetailInnerContainer">
                       
                            <Heading className="heading">
                          
                                <p >{this.props.item.schedule} Grocery</p>
                            </Heading>
                            <Heading className="heading">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Heading>
                        </DetailInnerContainer>
                      

                    

                        

                   
                    



            </ExpandedCardDetailContainer>
            </StyledLink>
                </ExpandedCardContainer>

            </>
        )
    }
}
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const DeleteButton=styled.button`
border:none;
background:none;
cursor:pointer;
outline:none;
color:#979797;
padding:10px;


`
const ExpandedCardContainer =styled.div`
//display: grid;
padding: 1rem 0;
//grid-template-columns: auto 65%;
grid-column-gap: 5%;
transition: all .5s;
width: 100%;
margin: 0rem 0;
border-radius: 12px;
margin-bottom: 2.5rem;
background: #F6F9FC;
transition:  all .5s;
cursor: pointer;
border-radius: 25px;
/* background-color: white; */
background-color: #FDFDFF;
border: solid 0 #707070;

box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
&:hover{
    
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-filter:opacity(.85);
}
`
const ImageContainer=styled.div
`
width: 50%;
display: flex;
min-width: 20px;
align-items: center;
justify-content: center;
// border: 1px solid rgb(219, 219, 219);
border-radius: 2px;
padding-left: 1rem;
`
const ExpandedCardImage=styled.img`
width: 100%;
`
const ExpandedCardDetailContainer=styled.div`
width: 100%;
font-family: 'Poppins', sans-serif;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`

const DetailInnerContainer=styled.div`
flex-basis: 85%;
    margin: 0rem 0 0rem 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
`
const Content=styled.div`
color: #3A3A3A;
`

const Heading=styled.div`
color: #979797;
font-size:24px;
font-weight:700;
`