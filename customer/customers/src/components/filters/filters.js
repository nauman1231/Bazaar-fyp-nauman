import React, { Component } from 'react';
import add from '../../assets/icons/plus.svg'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine,faBoxOpen,faCog} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../SearchBar/SearchBar'
import cover from '../../assets/icons/cover.svg'
 import {devices} from '../../assets/devices/devices'
import Navbar from '../Navbar/navbar'
import Card from '../ProductCard/card'
import  Footer from '../Footer/Footer'
import  FilterProducts from '../filterBar/filterProducts'
import {get} from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import Search from '../SearchBar/SearchBar2'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
class filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            products:[],
            category:[]
       
          }
          this.print = this.print.bind(this)
          
        this.getProductsCat = this.getProductsCat.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        console.log(this.props.history)
        if(this.props.history==null){
            reactLocalStorage.set("refresh",false);
        }
        reactLocalStorage.set("home5km",true);
        this.getProducts();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        // if(reactLocalStorage.get('redirect')){
    
        // }

        this.getProducts().then((response)=>{
            
            this.setState({
              data:response.data
            });
            console.log(response.data);

            for (let i = 0; i < response.data.length; i++) {

            get(`http://localhost:4000/product/getPros/`+response.data[i]._id,config).then(res=>{
                console.log(res.data)
                this.setState({ products: this.state.products.concat(res.data) })
                // this.setState(prevState => ({
                //     products: [
                //         ...prevState.products, 
                //         res.data
                //     ]
                // })

                  
                
              console.log(this.state.products)
            })
        }

           
          });
          
      }
      print(){
          console.log("Nauman");
      }
    getProducts(){
        const url = 'http://localhost:4000/store/location';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return  get(url,config)
    }
    getProductsCat(name){
        const url = 'http://localhost:4000/store/location';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            
            get(url,config).then(response=>{
                this.setState({
                           
                    products:[]
                })

                
            for (let i = 0; i < response.data.length; i++) {

                get(`http://localhost:4000/product/getProsCat/?id=${response.data[i]._id}&&category=${name}`,config).then(res=>{
                    console.log(res.data)
                    
                    this.setState({ products: this.state.products.concat(res.data) }
                    )
                      
                    
                    // this.setState(prevState => ({
                    //     products: [
                    //         ...prevState.products, 
                    //         res.data
                    //     ]
                    // })
    
                      
                    
                  console.log(this.state.category)
            
                })
               
              
            }
                

              
               
            } )
        console.log("pounch  gaya"+name)
    }

    search(search){
        
    
            const url = 'http://localhost:4000/product/search/'+search;
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                get(url,config).then(res=>{
                    this.setState({ products: res.data})
                })
        
        console.log("in search "+search)
       

    }

   

    render() {
        if(!reactLocalStorage.get('login')){
            return <Redirect to='/login'/>;
          }
        return (
        <Section>
        <Navbar />
        <DIV>
        <FilterContainer>


            <InnerContainer>
            <Title>
                            <Heading>Filter</Heading>
                            
                        
                        </Title>
            <FilterProducts action={this.getProductsCat} />
            </InnerContainer>

            </FilterContainer>

        <Products>
                <CoverImage src={cover}>  

                </CoverImage>

                
                    <Title>
                    <Heading style={{marginRight:"30%"}}>Near You</Heading>
                    <Search action={this.search}  />
                    </Title>
                    
                    <Row>
                    {this.state.products.map((item) => 
                      <Card item={item} value={item._id} onClick={this.print}></Card>)
                            }
                       
                    </Row>
                
                    

                
            </Products>
           
        </DIV>
        <Footer />
        </Section>
     
        )

    }
}

const Section=styled.section
    `
    width:100%;
    display: block;
   overflow:hidden;
    height:100%;
    `

    const Icon=styled.img`
    width: 18px;
    
    left: 25%;
    top: 5px;
    cursor: pointer;
    margin-left:35%;
    
    `
const DIV=styled.div
`
width:100%;
display: flex;
height:90%;
@media ${devices.mobileM && devices.max } { 
    width:100%;
    display:block
  }
 
`
const Heading=styled.p
`
font-family:'Poppins';
font-size:24px;
`
const Title =styled.div
`
height:5%;
display: inline-flex;
width:100%;
margin-left:9%;

align-items:center;
@media ${devices.mobileM && devices.max } { 
    display:block;
   
  }

`
const InnerContainer =styled.div
`
width:100%;
background-color:white;

height:max-content;

overflow: hidden;
display:block;
@media ${devices.mobileM && devices.max } { 
    width:80%;
    margin:auto;
   
  }
`


const FilterContainer = styled.div`
width:15%;
justify-content: space-between;
align-items: center;
height:100%;
@media ${devices.mobileM && devices.max } { 
    width:90%;
    display:inline;
  }

`
const StoreFilter = styled.div`
width:100%;
display: flex;
flex-direction: column;
border-top: 2px solid #BDBDBD;
margin-left: 9%;
display: inline-flex;
flex-direction: row;
`
const TagContainer=styled.div
`
display:inline-flex;
width:100%;
flex-wrap:wrap;
align-items:flex-start;
justify-content:center;

`
const SmallHeadings=styled.p
`
color:#787878;
font-family:"Poppins";
font-size:18px;
width: 84.55px;
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
const Products=styled.div`
// width:100%;
//     display: inline-flex;
//     flex-direction:row;
//     height:100%;
width: 60%;
height:70%;
margin-left: 10%;
@media ${devices.mobileM && devices.max } { 
    width:100%;
    margin-left:0;
   
  }

`

const CoverImage=styled.img`

height:300px;
width:100%;
border-radius:13px;
margin-top:40px;
@media ${devices.mobileM && devices.max } { 
    height:100px;
    margin-top:20px;
    
   
  }
`




const Row=styled.div`
display:inline-flex;
width:100%;
flex-wrap:wrap;
align-items:flex-start;
justify-content:center;
overflow:hidden;
padding-bottom:20px;
border-top:1px solid #BDBDBD;
@media ${devices.mobileM && devices.max } { 
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    border-top:2px solid #BDBDBD;
  }

`
export default filter;


