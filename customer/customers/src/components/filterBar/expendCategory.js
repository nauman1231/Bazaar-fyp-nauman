import React, { Component } from 'react'


import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Alert } from '@material-ui/lab';
import { BrowserRouter as Router, Route,Switch, Redirect,Link} from 'react-router-dom'
import { Checkbox } from '@material-ui/core';
import {reactLocalStorage} from 'reactjs-localstorage';
import {get,post,put} from 'axios';
import {devices} from '../../assets/devices/devices'
export default class Expanded extends Component {

    constructor() {
        super();
        this.state = { isExpanded: false,
            storeDefault:false,
            redirectToCategory:false,
            data:[],
            store5km:false
           
        }

    }

        
      
      
       
    componentDidMount() {
        console.log(this.props)
        this.getProducts().then((response)=>{
            this.setState({
                data:response.data
            })

        })
    //     this.filterCategory().then((response)=>{

    //         this.setState({
    //             data:response.data,
    //             redirectToCategory:true
    //         })

    //     })
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

     getProducts(){
        const url = 'http://localhost:4000/category/'
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                    
                }
              }
        
            return  get(url,config)
    }
    filterCategory(name){
        reactLocalStorage.set('category',name)
        reactLocalStorage.set('redirect',true)
        this.setState({ store5km: !this.state.store5km,
            redirectToCategory:true
          });
    }

    render() {
        
          if (this.state.redirectToCategory) {
            
            window.location.reload()
          }
        //       if(reactLocalStorage.get('redirect')){
            
        //         if(reactLocalStorage.get('refresh') ){
        //             if(!reactLocalStorage.get('home5km')){
        //                 window.location.reload()
        //             }
                   
        //         }
                
        //       if(reactLocalStorage.get('login')){
        //         return <Redirect to='/category'/>;

        //       }
        //     }
        //       return <Alert severity="info">Please Login, to proceed.</Alert>

           
              
        //   }
        return (
            <>
                <ExpandedContainer >
                <TagContainer>
                {this.state.data.map((item) => 
                      <Tags onClick={() => { this.props.action(item.name)}} >{item.name}</Tags>
                      
                      )
                      
                            }
       
                </TagContainer> 
        
      

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

const TagContainer=styled.div
`
display:inline-flex;
width:100%;
flex-wrap:wrap;
align-items:flex-start;
justify-content:center;
cursor:pointer;
`
const Tags=styled.p
`
background:gray;
padding:.3rem .6rem;
border-radius:8px;
font-size:.9rem;
color:black;
margin:.3rem;
width:fit-content;

`
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
    width:70%;
    
   
  }


`