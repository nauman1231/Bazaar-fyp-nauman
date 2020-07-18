import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from "../../assets/images/logo192.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGooglePlay,faAppStore} from '@fortawesome/free-brands-svg-icons'
import {devices} from '../../assets/devices/devices'

export default class Footer extends Component {
    render() {
        return (
            <>
                <Footery className="Footer">


                    <FooterFSection className="Footer-FSection FooterSection">
                <div style={{width:"25%" ,height:"25%"}}>
                <FSection__title className="FSection__title">
                    About 
                </FSection__title>
                <p style={{fontFamily:"Poppins"}}>About Bazaar. Everything About Bazaari Chezain</p>

                </div>    

                <Div>
                <FSection__title className="FSection__title">
                    Downloads
                </FSection__title>
                <ICON><FontAwesomeIcon icon={ faGooglePlay }/></ICON>
                <ICON><FontAwesomeIcon icon={ faAppStore }/></ICON>

                </Div>
                <div style={{width:"25%" ,height:"maxContent"}}>
                <FSection__title className="FSection__title">
                    Join Us 
                </FSection__title>
                <p>About Bazaar. Everything About Bazaari Chezain <a>Click here.</a></p>

                </div>   
              

                    </FooterFSection>

                    <Border></Border>  
                    
                    <MainTitle>
                    <div style={{width:"50%"}} >
                        <Title>Bazaar.</Title>
                        <p>All Right Reserved @ Bazaar. 2020 </p>
                        </div>  
                        <div style={{width:"50%",textAlign:"center"}}>
                        <Ul>
                            <li>Terms of use</li>
                            <li>Join us</li>
                            <li>help</li>
                        </Ul>
                        </div>  
                    </MainTitle>
                    
                    
                </Footery>
            </>
        )
    }
}
const Ul=styled.ul`
list-style: none;
display: inline-flex;
padding-left: 0px;
width: inherit;
justify-content: space-around;
margin-left: 60px;
@media ${devices.mobileM && devices.max}  { 
    justify-content: space-around;
    margin-left: 50px;
    display: block;
   }
`
const MainTitle=styled.div`
width: 100%;
color:white;
display:flex;
justify-content:space-evenly;
padding:2%;
margin-top:2%;
padding-left:8%;
`
const Title=styled.h1`
font-family:"Poppins";
font-size:46px;
`
const Footery=styled.footer` 

    background-color:#292929;
    position: relative;
    bottom: 0;
    width: 100%;
    height:300px;
    display:grid;
    grid-template-rows:40% 10% 50%;
    @media ${devices.mobileM && devices.max }  { 
       height:20%;
      }
   
`
const FooterFSection=styled.div` 

    width: 100%;
    color:white;
    display:flex;
    justify-content:space-evenly;
    padding:2%;
    height:max-content;
    @media ${devices.mobileM && devices.max}  { 
       font-size:.8rem;
    }
   
`
const FSection__title=styled.h1`
color:white;
@media ${devices.mobileM && devices.max}  { 
    font-size:1.5rem;
 }
`
// .Footer-StoreIcons {}
const ICON=styled.i
` font-size: 2rem;
margin-right: 1.2rem;
margin-left: 2.5rem;
cursor: pointer;
color:white

`
const Div=styled.div `
 width:25%;
 height:max-content;
 @media ${devices.mobileM && devices.max}  { 
    width:35%;
 }
`
const Border=styled.div`
border-bottom:solid 2px white;
width: 70%;
    padding: 2%;
    margin-left: 15%;
`

// .Footer-StoreContainer {
//     width: 50%;
//     min-width: 200px;
//     display: flex;
//     margin: 1rem 0;
//     align-items: center;
//     padding: 1rem;
//     border: 2px solid rgb(182, 182, 182)(182, 182, 182);
//     border-radius: 16px;
//     background: rgb(12, 12, 12);
// }

// .Footer_StoreIconText {
//     margin: 0;
//     font-size: 1.5rem;
//     color: white;
// }

// .AppStoreIcon{
//     color: #FAFAFA;
// }

// .Footer-MSection {
//     display: flex;
//     justify-content: center;
// }

// .MSection__img{
//     width: 50%;
//     object-fit: contain;
// }




// @media only screen and (max-width:900px){

//     .Footer-ESection{
//         display: none;
//     }

//     .Footer-MSection{
//         display: none;
//     }

 

