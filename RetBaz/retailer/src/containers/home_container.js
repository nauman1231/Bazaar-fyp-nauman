import React, { Component } from 'react';
import { Link, Redirect,  } from 'react-router-dom'
import Card from '../components/cards/cards'
import styled from 'styled-components';
import Navbar from '../components/Navbar/navbar';
import Search from '../components/SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faShoppingBag,faAlignRight,faBell ,faBox,faBoxOpen} from '@fortawesome/free-solid-svg-icons';
import {get} from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import Logout from '../components/profiling/logout'
import {devices} from '../assets/devices/devices'
class home_container extends Component {


    constructor(props) {
        super(props);

        this.state = {
            data:[],
            TotalProducts:0,
            stock:0,
            timeout:false,
            logout:false,
            isExpanded:false
          }
          this.logout=this.logout.bind(this);
          this.search = this.search.bind(this);
    }


    componentDidMount() {

        let hours = 2
        let saved = localStorage.getItem('saved')
        if (saved && (new Date().getTime() - saved > hours * 60 * 60 * 1000)) {
            this.setState({
                timeout:true
            })
        localStorage.clear()
        }

        console.log(new Date().toDateString())
       

        this.getProducts().then((response)=>{
            
            this.setState({
              data:response.data,
              TotalProducts:response.data.length
            });
            console.log(response.data)
           
          });

          this.stock().then((response)=>{
            
            this.setState({
              stock:response.data.length
            });
            console.log(response.data.length)
           
          });
      }
      logout(){
        localStorage.clear();
        this.setState({
            logout:true
        })
        
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
    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    search(search){
        
    
        const url = 'http://localhost:4000/product/search/'+search;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            get(url,config).then(res=>{
                this.setState({ data: res.data})
            })
    
    console.log("in search "+search)
   

}
    render() {
        if (!reactLocalStorage.get('loginRetailer')) {
            return <Redirect to='/login'/>;
          }

        // const timeout = this.state.logout;

        // if (timeout) {
        //   return <Redirect to='/login'/>;
        // }

        return (
       
            <Section>
              

                <Navbar/>
                <Div>
                    <SearchBar>
                        <Search action={this.search} />
                        
                        <NavBar_iconContainer className="NavBar-iconContainer">
                        <Shopping_cart ><FontAwesomeIcon icon={ faBell }/></Shopping_cart>
                            <User  onClick={() => { this.toggleExpanded() }} ><FontAwesomeIcon icon={ faUser }/></User> 
                        </NavBar_iconContainer>
                        {this.state.isExpanded &&
                <Logout />    }
                    </SearchBar>
                    <SubDiv>
                <Products>
                        <Title>
                            <Heading>Products</Heading>
                            <Filter>Filter</Filter>
                            <Button><StyledLink to="/addproducts">Add Product</StyledLink></Button>
                        
                        </Title>

                    <Cardcontainer className="Cardcontainer" >
                    <CardText className="CardText">#</CardText>
                 
                    
                    <CardText className="CardText">Product Name</CardText>
                   
                    <CardText className="CardText">Category</CardText>
                    <CardText className="CardText info">Size</CardText>
                    <CardText className="CardText info">Cartons</CardText>
                    <CardText className="CardText">Qty</CardText>
                    <CardText className="CardText info"></CardText>
                   
                </Cardcontainer>
                {this.state.data.map((item) => 
                      <Card  item={item} ></Card>)
                            }

                        {/* <Card /> */}
                       
                </Products>

                <InventoryDetail>
                    <TotalProducts>
                        <SmallHeading>Total Products</SmallHeading>
                        <Value>{this.state.TotalProducts}</Value>
                       <Icon><FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon></Icon> 

                    </TotalProducts>

                    <OutofStock>
                    <SmallHeading style={{color: "red"}}>Out of Stock</SmallHeading>
                        <Value style={{color: "red"}}>{this.state.stock}</Value>
                       <IconOut><FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon></IconOut> 
                    </OutofStock>

                </InventoryDetail>
                </SubDiv>
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
const Div=styled.div`
width:100%;
display:block;
padding-left:20%;
`
const Filter=styled.div
`
padding: 10px;
align-self: center;
padding-top: 30px;
`
const Button=styled.button
`
position:absolute;
left:57%;
align-self: center;
    // margin-left: 330px;
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
left:100px;
font-size:3rem;

`
const IconOut=styled.i
`
position:relative;
top:-80px;
left:100px;
font-size:3rem;

`
const SmallHeading=styled.p
`
color:black;
font-size:16px;
font-family:"Poppins";
font-weight:600;
text-align:center;
`
const Value= styled.p   
`
color:black;
font-size:24px;
font-family:"Poppins";
font-weight:400;
paddding-bottom:30px;
padding-left:10px;
position:relative;
top: -22px;

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
const InventoryDetail = styled.div
`
display: inline-flex;
flex-direction: column;
align-items: center;
width:30%;
padding-top:3%;
`

const TotalProducts = styled.div`
width:50%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
height:20%;
padding-bottom:5px;
margin-top:3%;
border-radius:2%;
margin-left:4%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow-x: auto;
color:lightblue;
display:flex;
flex-direction:column;
overflow:hidden;

`

const OutofStock = styled.div`
width:50%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
height:20%;
padding-bottom:5px;
margin-top:3%;
border-radius:2%;
margin-left:4%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow-x: auto;

display:flex;
flex-direction:column;
overflow:hidden;
`
const Title =styled.div
`
height:15%;
display: inline-flex;
width:100%;

`
const Heading=styled.p
`
font-family:'Poppins';
font-size:24px;
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
    // width: 100%;
    align-items: center;
    padding: .6rem  1rem;
    margin: 1rem 0rem;
    justify-content: space-between;
    background: #F6F9FC;
    margin-top: .5rem;
    overflow-x: auto;
    cursor: pointer;
    font-weight:bold;
    @media ${devices.mobileM && devices.max }  { 
        height:100px;
      }
`

const CardText=styled.p`
    font-weight: 900;
    font-size: 10pt;
    margin: 0 ;
    padding: 0;
    margin: .5rem 1rem;
    width:110px;
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
export default home_container;



