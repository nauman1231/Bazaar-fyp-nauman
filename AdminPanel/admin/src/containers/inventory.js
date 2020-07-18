import React, { Component } from 'react';
import { Link, Redirect,  } from 'react-router-dom'
import Card from '../components/cards/cards'
import Section2Card from '../components/cards/cards'
import styled from 'styled-components';
import Navbar from '../components/Navbar/navbar';
import Search from '../components/SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faShoppingBag,faAlignRight,faBell ,faBox,faBoxOpen} from '@fortawesome/free-solid-svg-icons';
import {get,post} from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import Logout from '../components/profiling/logout'
import Category from '../components/ProductCard/card'
import Icon from "../assets/icons/photoadd.svg"
class deliverer extends Component {


    constructor(props) {
        super(props);

        this.state = {
            data:[],
           
            description:"",
            name:"",
            
            timeout:false,
            logout:false,
            isExpanded:false
          }
          this.logout=this.logout.bind(this);
          this.addCategory = this.addCategory.bind(this)
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

       

        this.getCategory().then((response)=>{
            
            this.setState({
              data:response.data,
              Unverified:response.data.length
            });
            console.log(response.data)
           
          }).catch(function (error) {
            console.log(error.response.status)
            
          });
    
      }

      
      logout(){
        localStorage.clear();
        this.setState({
            logout:true
        })
        
      }

      getCategory(){
        const url = 'http://localhost:4000/category';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return  get(url,config)
    }


    addCategory = event => {
        event.preventDefault();
    
        const data = {
            name:this.state.name,
            description:this.state.description
        };
        console.log(data)
        const config = {
            headers: {
                
                'Content-Type':'application/json'
            }
        }
        post(`http://localhost:4000/category/add`,  data ,config)
          .then(res => {
            
            
           
              console.log(res.data)
            
             
          }).catch(function (error) {
            console.log(error.response.status)
            
          });
          console.log(this.state);
      }

    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
    render() {
        // if (!reactLocalStorage.get('loginRetailer')) {
        //     return <Redirect to='/login'/>;
        //   }

        // const timeout = this.state.logout;

        // if (timeout) {
        //   return <Redirect to='/login'/>;
        // }

        return (
       <>
            <Section>
              

                <Navbar/>
                <Div>
                    <SearchBar>
                        <Search />
                        
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
                            <Heading>Categories</Heading>
                            
                        </Title>
                           
                        {this.state.data.map((item) => 
                      <Category item={item} value={item._id}></Category>
                      
                      )
                      
                            }


                        </Products>
                        </SubDiv>
                        </Div>
</Section>
<Section2>
    <AddCategory>
                        <Title>
                            <Heading>Add Category</Heading>
                            
                        </Title>

                        <Form>
                            <Photo>
                            <IconInput  src={Icon}></IconInput>
                            </Photo>           
                            <Inputs>
                            <InputContainer>
                            
                            <Input type='text' placeholder="Category Name"  value={this.state.name} name="name" onChange={e => this.setState({name:e.target.value})}></Input>
                            
                    </InputContainer>
                    <InputContainer>
                            
                            <InputArea type='text'  placeholder="Description"  value={this.state.description} name="description" onChange={e => this.setState({description:e.target.value})}></InputArea>
                            
                    </InputContainer>

                    <InputContainer style={{marginBottom:"5px"}}>
                    <Button onClick={this.addCategory} >ADD</Button>

                    </InputContainer>


                            </Inputs>
                        </Form>
    </AddCategory>
                        
</Section2>

            </>
        );

    }
}

const Inputs = styled.div`
display:block;
`
const Photo = styled.div`
width:30%;

border: 1px solid #707070;
margin-left:20px;
margin-right:20px;
`
const Form = styled.div`
display:inline-flex;
width :70%;

`
const IconInput=styled.img`
width: 24px;
position: relative;
left: 45%;
top: 45%;
cursor: pointer;

`
const AddCategory=styled.div`
width:60%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:80%;
padding-bottom:5px;
margin-top:3%;
border-radius:2%;
margin-left:4%;


`
const InputContainer=styled.div`
position:relative;
width:100%;
display:inline-flex;
justify-content:space-evenly;
margin-bottom:40px;
`

const Input=styled.input`
width:200px;
border: none;
border-bottom: 2px solid #BDBDBD;
height:30px;
text-align:center;
&:focus{
    outline: none;
}
::placeholder{
    color:#BDBDBD;
    font-family:'Poppins';
    font-weight:bold;
    font-size:18px;
    text-align:center;
}
`

const InputArea=styled.textarea`
width:200px;
border: none;
border-bottom: 2px solid #BDBDBD;
height:50px;
text-align:center;
&:focus{
    outline: none;
}
::placeholder{
    color:#BDBDBD;
    font-family:'Poppins';
    font-weight:bold;
    font-size:18px;
    text-align:center;
}
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const Section2 = styled.section`
width:100%;
display: inline-flex;
flex-direction:row;
height:100%;
padding-left:20%;
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
    align-self: center;
    // margin-left: 20%;
    
    border-radius: 10px;
    background-color: #343847;
    border: 2px solid #707070;
    font-size: .9rem;
    color:white;
    font-size:18px;
    width:200px;
    padding:5px;
    cursor:pointer;
    height:50px;
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
display:inline-flex;
flex-flow: wrap;
width:60%;
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
::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
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
export default deliverer;



