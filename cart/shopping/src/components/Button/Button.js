import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fabGoo } from '@fortawesome/free-solid-svg-icons';
import Progress from '../progressBar/progress'
import ClassDetails from '../cardDetails/cardDetails'
import Card_container from '../../container/card_container'

export default class Payment extends Component {
    render() {
        return (
            <>

                    <div className="BtnContainer Btn_filled">
                    <h1 className="BtnText ">Button</h1>
                    </div>
            
            </>
        )
    }
}

const Box = styled.div` 

// display:grid;
// grid-template-rows:10% 90%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
height:115%;
width:50%;
margin-left:20%;
margin-top:3%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

 

