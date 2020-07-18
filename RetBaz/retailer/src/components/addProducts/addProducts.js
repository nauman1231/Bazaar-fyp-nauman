import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/navbar';
import Search from '../SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser,faShoppingBag,faAlignRight,faBell ,faBox,faBoxOpen,faPlus,faArrowLeft,faUpload} from '@fortawesome/free-solid-svg-icons';
import {post,put} from 'axios';
import $ from 'jquery'
import {reactLocalStorage} from 'reactjs-localstorage';
import { Link, Redirect,  } from 'react-router-dom'
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.configure();
class AddProduct extends Component {
  
    constructor(props) {
        super(props);
        this.state ={
            file:null,
            data:[],
            catego:[],
            Names:[],

            name: " ",
            category: "",
            size:" ",
            brand:" ",
            product_per_carton: 0 ,
            number_of_carton: 0,
            Seller_price: 0,
            Retail_price: 0,
          
            details: " "
               
        
            

          }
          this.onFormSubmit = this.onFormSubmit.bind(this)
          this.onChange = this.onChange.bind(this)
          this.fileUpload = this.fileUpload.bind(this)

          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)

    }

    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
            console.log(this.state.file.name)
          this.setState({
            data: response.data,
            Names: response.data.match_path,
            catego:response.data.labels
            
          });
          console.log(this.state.data)
          
        })
        // this.fileUploadToNode(this.state.file).then((res)=>{
        //     console.log(res)
        
          
        // })
        // this.fileUploadToCustomer(this.state.file).then((resp)=>{
        //     console.log(resp)
         this.fileUploadToCustomer(this.state.file).then((res)=>{
            console.log(res)
        
          
        })
          
        // })
        // const config = {
        //     headers: {
        //         'Accept': 'multipart/form-data',
        //         'Content-Type': 'multipart/form-data',
                
        // }}
        // const formData = new FormData();
        // formData.append('photo',this.state.file)

        // post(`http://localhost:4000/upload`,  formData ,config)
        // .then(res => {
        //  console.log("node "+res)
        // })

        // post(`http://localhost:4000/upload/customer`,  formData ,config)
        // .then(res => {
        //  console.log("node "+res)
        // })
      
    }
        
    
       
      toServer(e){
        e.preventDefault();
        
      }
      componentDidMount() {
        this._handleClick();
      }
      handleChange = event => {
        this.setState({ 
            name: event.target.name,
            category: event.target.category,
            size:event.target.size,
            brand:event.target.brand,
            product_per_carton:event.target.product_per_carton,
            number_of_carton: event.target.number_of_carton,
            Seller_price: event.target.Seller_price,
            Retail_price: event.target.Retail_price,
            details: event.target.details
            
        });
        console.log(this.state);
      }

      onChange(e) {
        this.setState({
            file:e.target.files[0]
        })
        console.log(e.target.files[0])
       
      }
      fileUpload(file){
        const url = 'http://127.0.0.1:5000/upload';
        const formData = new FormData();
        formData.append('image',file,file.name)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
      }

      fileUploadToNode(file){
        const url = 'http://localhost:4000/upload';
        const formData = new FormData();
        formData.append('photo',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
      }
      fileUploadToCustomer(file){
        const url = 'http://localhost:4000/upload/customer';
        const formData = new FormData();
        formData.append('photo',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
      }

   

      handleSubmit = event => {
        event.preventDefault();
    
        const data = {
            name: this.state.name,
            category: this.state.category,
            size:this.state.size,
            brand:this.state.brand,
            product_per_carton: this.state.product_per_carton ,
            number_of_carton: this.state.number_of_carton,
            Seller_price: this.state.Seller_price,
            Retail_price: this.state.Retail_price,
            details: this.state.details,
            quantity:this.state.number_of_carton*this.state.product_per_carton,
            fileName:this.state.file.name,
        };
        console.log(data)
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(`http://localhost:4000/product/add`,  {data} ,config)
          .then(res => {
            const up = {
                products:res.data._id

            };
            const storeUp={
                stores:reactLocalStorage.get('nauman')
            }
            put(`http://localhost:4000/store/update/`+reactLocalStorage.get('nauman'),  {up} ,config).then(res=>{console.log(res.data)});
            put(`http://localhost:4000/product/update/`+res.data._id,  {stores:reactLocalStorage.get('nauman')} ,config).then(res=>{console.log(res.data)});
            console.log(res);
            console.log(res.data._id);
            toast("Product is successfuly added to your store", { type: "success" });
            // window.location.reload()
          })
          console.log(this.state);
      }


      _handleClick() {
        $('#Name').on('click','.name',function(){
          var name=$(this).attr('id');
          
          if(($('#'+name).attr('class'))==($('.inpu').attr('id'))){
            
      
      
            $(".inpu").val($('#'+name).text());
        }
    
        });
    
        $("#Category").on('click','.cat', function(){
            
          var name=$(this).attr('id');
          //  alert(name)
      
          if(($('#'+name).attr('class'))==($('.inpucat').attr('id'))){
            // alert(name)
      
      
            $(".inpucat").val($('#'+name).text());
          }
        });
    }
    
    render() {
        if (!reactLocalStorage.get('loginRetailer')) {
            return <Redirect to='/login'/>;
          }

        return (
       
            <Section>
              

                <Navbar/>
                <Div>
                   
                <Back>
                        
                        <NavBar_iconContainer >
                        <BackButton ><FontAwesomeIcon icon={ faArrowLeft }/></BackButton>
                           
                        </NavBar_iconContainer>
                </Back>

                    <MainTitle>
                            <BoxIcon ><FontAwesomeIcon icon={ faBoxOpen }/></BoxIcon> 
                            <Heading>Add Product</Heading>      
                    </MainTitle>

                    <SubDiv>
                   

                <Products>

                <TopContainer>
                    <Left>
                        <InputContainer>
                            <Label>Barcode:</Label>
                            <Input type="text" onChange={this.handleChange}></Input>
                        </InputContainer>
                        <InputContainer>
                            <Label >Product Name:</Label>
                            <Input type="text" value={this.state.name} name="name" className="inpu" id="name" onChange={e => this.setState({name:e.target.value})}></Input>
                        </InputContainer>
                        <InputContainer>
                            <Label>Category</Label>
                            <Select value={this.state.category} name="category" onChange={e => this.setState({category:e.target.value})}>
                                <Option>Category</Option>
                                <Option>Snacks</Option>
                                <Option>Dairy</Option>
                            {this.state.catego.map((item,i) => 
                                <Option className="cat" id={"1"+i} >{item}</Option>)
                            }
                                            
                            </Select>

                        </InputContainer>

                        <InputContainer>
                            <Label>Size</Label>
                            <Select value={this.state.size} name="size" onChange={e => this.setState({size:e.target.value})}> 
                                <Option>
                                    Size
                                </Option>
                                <Option>
                                    Small
                                </Option>
                            </Select>

                        </InputContainer>

                        <InputContainer>
                            <Label>Brand</Label>
                            <Select value={this.state.brand} name="brand"onChange={e => this.setState({brand:e.target.value})}>
                                <Option>
                                    Brand
                                </Option>
                                <Option>
                                    Pepsico
                                </Option>
                            </Select>

                        </InputContainer>

                    </Left>


                    <Right>
                    <InputContainer>
                            <Label>Product Image</Label>
                            <SelectFile type="file" name="photo" onChange={this.onChange}></SelectFile>
                            <UploadButton value="upload" onClick={this.onFormSubmit}><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon></UploadButton>
                            
                    </InputContainer>

                        <InputContainer>
                            <Label>Details</Label>
                            <Input type="text" value={this.state.details} name="details" onChange={e => this.setState({details:e.target.value})}></Input>
                        </InputContainer>

                        <InputContainer>
                            <Label>Suggestion</Label>
                            <Suggest id="Name">
                            {this.state.Names.map((item,i) => 
                                <button  style={{ color: "black", padding: '.3rem .6rem', borderRadius: '8px', margin: '.3rem', fontSize: '.9rem', backgroundColor: 'grey' }} value={item} onClick={e => this.setState({name:e.target.value})} className="name"  id={i} >
                                    {item}
                                </button>)
                                
                                }

                            </Suggest>
                        </InputContainer>


                    </Right>
                    </TopContainer>    

                    <Bottom>
                        <BottomInputContainer>
                            <Label>
                                Product per carton
                            </Label>
                            <BottomInput type="text" value={this.state.product_per_carton} name="product_per_carton" onChange={e => this.setState({product_per_carton:e.target.value})}>

                            </BottomInput>
                        </BottomInputContainer>

                        <BottomInputContainer>
                            <Label>
                                Number of carton
                            </Label>
                            <BottomInput type="text" value={this.state.number_of_carton} name="number_of_carton" onChange={e => this.setState({number_of_carton:e.target.value})}>

                            </BottomInput>
                        </BottomInputContainer>

                        <BottomInputContainer>
                            <Label>
                                Seller Price
                            </Label>
                            <BottomInput type="text" value={this.state.Seller_price} name="Seller_price" onChange={e => this.setState({Seller_price:e.target.value})}>

                            </BottomInput>
                        </BottomInputContainer>

                        <BottomInputContainer>
                            <Label>
                                Retail Price
                            </Label>
                            <BottomInput type="text" value={this.state.Retail_price} name="Retail_price" onChange={e => this.setState({Retail_price:e.target.value})}>

                            </BottomInput>
                        </BottomInputContainer>
                    </Bottom>

                     <Button onClick={this.handleSubmit}>Add Product</Button>
                </Products>

               
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
const TopContainer=styled.div`
display:inline-flex;
width:100%;

`

const Left =styled.div`
width:40%;
margin-right:50px;
`
const Right=styled.div`
width:40%;
margin-left:50px
`
const Bottom=styled.div`
display:inline-flex;
width:100%;
padding-left:20px;
`

const InputContainer=styled.div`
width:100%;
display:inline-flex;
justify-content:space-evenly;
margin-bottom:20px;
`
const BottomInputContainer=styled.div`
width:100%;
display:block;
justify-content:space-evenly;
margin-bottom:20px;
`
const UploadButton=styled.button`
border:none;
background:none;
cursor:pointer;
`

const Input=styled.input`
width:200px;
border: none;
border-bottom: 1px solid #343847;
&:focus{
    outline: none;
}
`
const SelectFile=styled.input`
width:160px;
border: none;

`
const BottomInput=styled.input
`
width:80px;
border: none;
border-bottom: 1px solid #343847;

`
const Suggest=styled.div
`
width:200px;
`
const Select=styled.select`
width:200px;
border: none;
border-bottom: 1px solid #343847;

`
const Option=styled.option`

`
const Label=styled.p
`
color:black;
font-size:12px;
font-family:"Poppins";
font-weight:400;
padding:0;
padding-top:10px;
margin:0;
padding-righr:10px;
width:120px;
`
// const AddProduct=styled.div`
// width:10%;
// background-color:#FDFDFF;
// border:solid 0 #707070;
// padding-left:2%;
// padding-right:2%;
// height:50%;
// padding-bottom:5px;
// margin-top:3%;
// border-radius:10px;
// margin-left:4%;
// box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// overflow: hidden;

// `

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
align-self:flex-end;
`


const MainTitle=styled.div`
display:inline-flex;
margin-left:4%;

`
const Products = styled.div`
padding-top:50px;
width:80%;
background-color:#FDFDFF;
border:solid 0 #707070;
padding-left:2%;
padding-right:2%;
height:70%;
padding-bottom:5px;
margin-top:3%;
border-radius:2%;
margin-left:6%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
overflow-x: hidden;
display:block;
`
const Button=styled.button
`
    align-self: center;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #292929;
    border: 2px solid #292929;
    font-size: .9rem;
    color:white;
    font-size:18px;
   
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
const Back =styled.div
`
height:20%;

width:100%;
display:inline-flex;
align-items: center;
padding-left:4%;
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
overflow-x: auto;
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
const BackButton  =styled.i`
margin: 0 1rem;
font-size: 1.5rem;
color:#BDBDBD;
cursor: pointer
`
const BoxIcon  =styled.i`
margin: 0 1rem;
font-size: 2.5rem;
color:#BDBDBD;
align-self: flex-end;
cursor: pointer
`


export default AddProduct;



