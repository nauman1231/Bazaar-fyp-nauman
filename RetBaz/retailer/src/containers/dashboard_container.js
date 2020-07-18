import React, { Component } from 'react';
import InventoryCard from '../components/lowstock/lowstock'
import Logout from '../components/profiling/logout'
import styled from 'styled-components';
import Navbar from '../components/Navbar/navbar';
import Search from '../components/SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faShoppingBag,faAlignRight,faBell ,faBox,faBoxOpen,faPlus} from '@fortawesome/free-solid-svg-icons';
import {Bar,Pie,Doughnut} from 'react-chartjs-2';
import {get} from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import { Link, Redirect,  } from 'react-router-dom'
class dashboard_container extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
            data:{},
            leb:[],
            dat:[],
            salesData:{},
            Sales:[],
            Months:[],
            stock:0,
            isExpanded:false,
            TotalProducts:0,
            invoices:[],
            lowstock:[],
            monthInt:1,shift:false
            
          }
        
            
            this.getData = this.getData.bind(this)
            this.getDataAvgSales = this.getDataAvgSales.bind(this)
            this.change = this.change.bind(this)
            this.getGraph = this.getGraph.bind(this)
            this.getSalesGraph = this.getSalesGraph.bind(this)
    }
    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
    change(e) {
        // this.state.datasets[0]=this.state.dat
        // this.state.bar.labels=this.state.leb
        // console.log(this.state.bar.datasets[4])
        this.setState({
            monthInt: e.target.value
        }, () => {

             this.getData().then((response)=>{
            
            this.setState({
              leb: response.data.labels,
              dat: response.data.values,
            });
            console.log(response.data.values)
            console.log(response.data.labels)
            var va=this.getGraph(this.state.leb,this.state.dat)
            // this.dat=response.data.values
            // this.label=response.data.labels
            this.setState({
                data: va
            })
            // console.log("my values are"+ this.state.data[1].datasets)
          });
            
        });
        

       
        // this.getData().then((response)=>{
            
        //     this.setState({
        //       leb: response.data.labels,
        //       dat: response.data.values,
        //     });
        //     console.log(response.data.values)
        //     console.log(response.data.labels)
        //     var va=this.getGraph(this.state.leb,this.state.dat)
        //     // this.dat=response.data.values
        //     // this.label=response.data.labels
        //     this.setState({
        //         data: va
        //     })
        //     // console.log("my values are"+ this.state.data[1].datasets)
        //   });
      }
    componentDidMount() {
        const DATE_OPTIONS = {year: 'numeric', month: 'short', day: 'numeric' };
        console.log(new Date().toISOString().slice(0, 10).split('-').reverse().join('/'));
        this.getData().then((response)=>{
            
            this.setState({
              leb: response.data.labels,
              dat: response.data.values,
            });
            console.log(response.data.values)
            console.log(response.data.labels)
            var va=this.getGraph(this.state.leb,this.state.dat)
            // this.dat=response.data.values
            // this.label=response.data.labels
            this.setState({
                data: va
            })
            // console.log("my values are"+ this.state.data[1].datasets)
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

        //   this.getDataAvgSales().then((response)=>{



        //   })
        
        this.stock().then((response)=>{
            
            this.setState({
              stock:response.data.length,
              lowstock:response.data,
            });
            console.log(response.data.length)
           
          });
      
          this.getProducts().then((response)=>{
            
            this.setState({
             invoices:response.data,
              TotalProducts:response.data.length
            });
            console.log(this.state.invoices)
           
          });
      }

getGraph(labels,values){
       let object = {
            labels: labels,
            datasets: [
              {
                label: 'Top',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                backgroundColor: [
                    '#F53C56',
                    '#11CDEF',
                    '#FB6340',
                    '#2DCE98',
                    '#6800B4'
                  ],
                  hoverBackgroundColor: [
                  '#501800',
                  '#4B5000',
                  '#175000',
                  '#003350',
                  '#35014F'
                  ],
                data: values
              }
            ]
          }
          return object
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


getData(){
        const url = 'http://127.0.0.1:5000/month?id='+this.state.monthInt;
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
getProducts(){
    const url = 'http://localhost:4000/product/storeProducts/'+reactLocalStorage.get('nauman');
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  get(url,config)
}
stock(){
        
    const url = 'http://localhost:4000/product/outOfStock';
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  get(url,config)
}
    render() {
       
        if (!reactLocalStorage.get('loginRetailer')) {
            return <Redirect to='/login'/>;
          }

        return (
            
       
            <Section>
              

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

                    <MainTitle>
                            <Heading>Dashboard</Heading>
                            <Subheading>Sales</Subheading>
                    </MainTitle>

                    <SubDiv>
                   

                <Products>
                        <Title>
                            
                            <Subheading>Sales Chart</Subheading>
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

                  

                </Products>

                <InventoryDetail>
                    <Top5>
                    <SmallSubheadings>Overview</SmallSubheadings>
                        <SmallHeading>Top 5 Selling items</SmallHeading>
                        <Select name="month" onChange={this.change} value={this.state.value}  >
                                 <Option >Month</Option>
                                <Option value='1' >January</Option>
                                <Option value='2' > February</Option>
                                <Option value='3'>March</Option>
                                <Option value='4' >April</Option>
                                <Option value='5' > May</Option>
                                <Option value='6'>June</Option>
                                <Option value='7' >July</Option>
                                <Option value='8' > August</Option>
                                <Option value='9'>September</Option>
                                <Option value='10' >October</Option>
                                <Option value='11' > November</Option>
                                <Option value='12'>December</Option>
                                        
                            </Select>
                            
                        <Doughnut
                        data={this.state.data}
                        options={{
                            responsive: true,
                            maintainAspectRatio: true,
                            title:{
                            display:true,
                            text:'Top 5',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right',
                            boxWidth:20
                            }
                        }}
                        />
                    </Top5>

                    <TodaysSale>
                    <SmallHeading>Today's Sales</SmallHeading>
                        <Value>69</Value>
                       <IconOut><FontAwesomeIcon ></FontAwesomeIcon></IconOut> 
                    </TodaysSale>

                </InventoryDetail>
                </SubDiv>

                    <ProductSummary>
                            <AddProduct>
                            <IconCircle> <StyledLink to={{pathname: `/addproducts`}} ><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></StyledLink></IconCircle>
                            <StyledLink to={{pathname: `/addproducts`}} ><VerySmallHeadings>Add Product</VerySmallHeadings></StyledLink>
                            </AddProduct>

                            <AddProduct>
                                <TotalProducts>Total Products</TotalProducts>
                                <IconContainer>
                                <Value>{this.state.TotalProducts}</Value>
                            <FontAwesomeIcon className="fa-2x" icon={faBoxOpen}></FontAwesomeIcon>
                            </IconContainer>

                            </AddProduct>

                            <AddProduct>
                            <TotalProducts style={{color: "red"}}>Out of Stock</TotalProducts>
                            
                            <IconContainer>
                            <Value style={{color: "red"}}>{this.state.stock}</Value>
                            <FontAwesomeIcon className="fa-2x" icon={faBoxOpen}></FontAwesomeIcon>
                            </IconContainer>
                            </AddProduct>
                    </ProductSummary>

                    <LowStock>
                    <Title>
                            <Heading  style={{color: "red", paddingTop:"20px"}}>Low Stock Items</Heading>
                           
                        </Title>

                    <Cardcontainer className="Cardcontainer" >
                    <CardText className="CardText">#</CardText>
                
                    <CardText className="CardText">Name</CardText>
                    <CardText className="CardText">SKU</CardText>
                    <CardText className="CardText">Qunatity</CardText>
                   
                    
                    
                </Cardcontainer>
                    {this.state.lowstock.map((item) => 
                      <InventoryCard  item={item} ></InventoryCard>)
                            }


                    </LowStock>
                </Div>

            </Section>
        );

    }
}
const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Select=styled.select`
width:max-content;
border: none;
border-bottom: 1px solid #343847;
outline:none;

`
const Option=styled.option`

`
const ProductSummary=styled.div`
width:100%;
height:30%;
display:inline-flex;
`
const IconCircle=styled.i`
    border-radius: 50%;
    border: 2px solid #BDBDBD ;
    height: 30%;
    width: 30%;
    padding: 5px;
    position: relative;
    top: 30px;
    left: 38%;
   
`

const AddProduct=styled.div`
width:10%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:50%;
padding-bottom:5px;
margin-top:3%;
border-radius:10px;
margin-left:4%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow: hidden;

`
const IconContainer=styled.div
`
justify-content: space-between;
display:flex;
margin-top:40px;
`
const Div=styled.div`
width:100%;
display:block;
padding-left:20%;
`
const Heading=styled.p
`
font-family:'Poppins';
font-size:24px;
padding:0;
margin:0;
`
const Subheading=styled.p
`
font-family:'Poppins';
font-size:18px;

padding:0;
padding-top:10px;
margin:0;
`
const SmallSubheadings=styled.p`
font-size:16px;
color:#BDBDBD;
padding:0;
padding-top:10px;
margin:0;
`
const SmallHeading=styled.p
`
color:black;
font-size:16px;
font-family:"Poppins";
font-weight:600;
padding:0;
padding-top:10px;
margin:0;
`
const VerySmallHeadings=styled.p`
font-family: "Poppins";
    font-size: 14px;
    padding: 0;
    margin: 0;
    position: relative;
    top: 40px;
    font-weight: 600;
    text-align:center;
`
const TotalProducts=styled.p`
font-family: "Poppins";
    font-size: 14px;
    padding: 0;
    margin: 0;
    text-align:center;
    padding-top:5px;
    font-weight: 600;
`
const MainTitle=styled.div`
display:block;
margin-left:4%;
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
const Icon=styled.i
`
position:relative;
top:-90px;
left:120px;
font-size:3rem;

`
const IconOut=styled.i
`
position:relative;
top:-80px;
left:120px;
font-size:3rem;

`

const Value= styled.p   
`
color:black;
font-size:32px;
font-family:"Poppins";
font-weight:400;
paddding-bottom:30px;
padding-left:10px;
position:relative;
top: -40px;

`
const SubDiv=styled.div
`
display:inline-flex;
height:80%;
width:100%;

`
const Section = styled.section`
width:100%;
display: inline-flex;
flex-direction:row;
height:100%;
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
width:50%;
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
`

const LowStock=styled.div
`
width:50%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:40%;
padding-bottom:5px;
margin-bottom:3%;
margin-top:3%;
border-radius:2%;
margin-left:4%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow-x: hidden;

`
const InventoryDetail = styled.div
`
display: inline-flex;
flex-direction: column;

width:50%;
padding-top:3%;
`

const Top5 = styled.div`
width:50%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
height:50%;
padding-bottom:5px;
margin-top:3%;
border-radius:10px;
margin-left:4%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


overflow:hidden;

`

const TodaysSale = styled.div`
width:30%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
height:28%;
padding-bottom:5px;
margin-top:3%;
border-radius:10px;
margin-left:4%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow: hidden;
`
const Title =styled.div
`
height:15%;
display: inline-flex;

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
    display: inline-flex;
    
    align-items: center;
    padding: .6rem  1rem;
    margin: 1rem 0rem;
    justify-content: space-between;
    background: #F6F9FC;
    margin-top: .5rem;
    overflow-x: auto;
    cursor: pointer;
    word-break:break-all;
  width:95%;
`

const CardText=styled.p`
    font-weight: 600;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    color:#BDBDBD;
    width:25%;
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
export default dashboard_container;



