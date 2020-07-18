import React, { Component } from 'react'

import styled from 'styled-components';
import ExpandedCard from "../ExpandedCard/ExpandedCard"
import Navbar from "../Navbar/navbar"
import InventoryCard from "../InventoryCard/inventoryCard"
import Search from '../SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBell} from '@fortawesome/free-solid-svg-icons';
import {Bar,Pie,Doughnut} from 'react-chartjs-2';
import {get} from 'axios';
import Logout from "../profiling/logout"
export default class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[],
            TotalProducts:0,
            inventory:[],
            isExpanded:false,
            salesData:{},
            Sales:[],
            Months:[],
       
          }
    }


    componentDidMount() {
        this.getProducts();

        this.getProducts().then((response)=>{
            
            this.setState({
              data:response.data,
              TotalProducts:response.data.length
            });
            console.log(response.data)
           
          });

          this.getInventory().then((response)=>{
            
            this.setState({
              inventory:response.data
            });
            console.log(response.data)
           
          });

          this.getDataAvgSales().then((response)=>{
            
            this.setState({
              Months: response.data.labels,
              Sales: response.data.values,
            });
            console.log(response.data.values)
            console.log(response.data.labels)
            var va=this.getSalesGraph(this.state.Months,this.state.Sales)
            // this.dat=response.data.values
            // this.label=response.data.labels
            this.setState({
                salesData: va
            })
            // console.log("my values are"+ this.state.data[1].datasets)
          });
         
      }

      getProducts(){
        const id=this.props.match.params.id;
        const url = 'http://localhost:4000/product/'+id;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return  get(url,config)
    }
    getDataAvgSales(){
        const url = 'http://127.0.0.1:5000/line_chart';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return  get(url,config)
    }
    
    getInventory(){
        
        const url = 'http://localhost:4000/product/inventory';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return  get(url,config)
    }
    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
    getSalesGraph(labels,values){
        let object = {
             labels: labels,
             datasets: [
               {
                 label: 'Unit Sales per Month',
                 backgroundColor: 'rgba(251,99,64,1)',
                 borderColor: 'rgba(0,0,0,1)',
                 borderWidth: 2,
                 
                 data: values
               }
             ]
           }
           return object
    }
    render() {
        return (
            <>
        <DetailSection>
            
        <Navbar/>
                <Div>
                    <SearchBar>
                        <Search />
                        <NavBar_iconContainer className="NavBar-iconContainer">
                        <Shopping_cart ><FontAwesomeIcon icon={ faBell }/></Shopping_cart>
                            <User onClick={() => { this.toggleExpanded() }} ><FontAwesomeIcon icon={ faUser }/></User> 
                        </NavBar_iconContainer>
                        {this.state.isExpanded &&
                <Logout />    }
                    </SearchBar>
                    <SubDiv>

                        <Products>
                            <ExpandedCard value={this.state.data} />
                    
                        </Products>

                        <ProductSaleSummary>
                        <Title>
                            <Heading>Product Sale Summary</Heading>
                            
                        
                        </Title>
                            <Bar
                            data={this.state.salesData}
                            options={{
                                title:{
                                display:true,
                                
                                fontSize:20
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                            />

                            
                        </ProductSaleSummary>

                        <ProductSaleSummary>
                        <Title>
                            <Heading>Inventory</Heading>
                        </Title>
                        <Cardcontainer className="Cardcontainer" >
                    <CardText className="CardText">#</CardText>
                    <CardimageContainer className="CardimageContainer">
                        <Cardimage className="Cardimage"></Cardimage>
                    </CardimageContainer>
                    
                    <CardText className="CardText">Product Name</CardText>
                    <CardText className="CardText">SKU</CardText>
                    <CardText className="CardText">Category</CardText>
                    <CardText className="CardText info">Size</CardText>
                    <CardText className="CardText info">Stock</CardText>
                    <CardText className="CardText info">Inovice</CardText>
                    <CardText className="CardText info"></CardText>

                </Cardcontainer>
               
                {this.state.inventory.map((item) => 
                      <InventoryCard  item={item} ></InventoryCard>)
                            }
                            
                 </ProductSaleSummary>

                
                </SubDiv>
            </Div>
               
         </DetailSection>
            </>
        )
    }
}

const Heading=styled.p
`
font-family:'Poppins';
font-size:24px;
`
const Title =styled.div
`
height:15%;
display: inline-flex;

`
const ProductSaleSummary=styled.div`
width:65%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:80%;
padding-bottom:5px;
margin-top:3%;
border-radius:2%;
margin-left:4%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow-x: auto;
margin-bottom:20px;
`
const DetailSection=styled.section
    `
    width:100%;
    display: inline-flex;
    flex-direction:row;
    height:100%;
    `
const CardContainer=styled.div
`
height:30%;
`
const Div=styled.div`
width:100%;
display:block;
padding-left:20%;
`

const Button=styled.button
`
align-self: center;
    margin-left: 330px;
    margin-top: 20px;
    border-radius: 50px;
    background-color: white;
    border: 2px solid #2196F3;
    font-size: .9rem;
    color:#2196F3;
    font-size:12px;
    font-weight:bold;
    padding:5px;
    cursor:pointer;
`

const SubDiv=styled.div
`
display:block;
height:80%;
width:100%;

`

const SearchBar =styled.div
`
height:20%;

width:100%;
display:inline-flex;
align-items: center;
padding-left:4%;
`
const Products = styled.div`
width:70%;
background-color:white;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:max-content;
padding-bottom:5px;
margin-top:3%;
border-radius:2%;
margin-left:4%;
overflow: hidden;
`

const NavBar_iconContainer=styled.div`
    width: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `
const Shopping_cart  =styled.i`
margin: 0 1rem;
font-size: 1.5rem;
color:#BDBDBD;
cursor: pointer
`
const User  =styled.i`
margin: 0 1rem;
font-size: 1.5rem;
color:#BDBDBD;

cursor: pointer
`

const Cardcontainer=styled.div`
    font-family: 'Poppins',sans-serif;
    letter-spacing: .5pt;
    display: flex;
    
    align-items: center;
    padding: .6rem  1rem;
    margin: 1rem 0rem;
    justify-content: space-between;
    background: #F6F9FC;
    margin-top: .5rem;
    overflow-x: auto;
    cursor: pointer;
  
`

const CardText=styled.p`
    font-weight: 600;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    color:#BDBDBD;
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
const ExpandedCardContainer =styled.div`
display: grid;
padding: 1rem 0;
grid-template-columns: auto 65%;
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
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:hover{
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
    -webkit-filter:opacity(.85);
}
`
const ImageContainer=styled.div
`
width: 100%;
display: flex;
min-width: 150px;
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
flex-basis: 25%;
    margin: 0rem 0 0rem 0;
`
const Content=styled.div`
color: #3A3A3A;
`

// const Heading=styled.div`
// color: #979797;
// `