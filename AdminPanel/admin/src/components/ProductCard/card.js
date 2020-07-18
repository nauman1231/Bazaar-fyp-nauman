import React, { Component } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
// import SearchBar from '../SearchBar/SearchBar';
 import {devices} from '../../assets/devices/devices';
import Navbar from '../Navbar/navbar';
import {put,post} from 'axios';
import Icon from "../../assets/icons/photoadd.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    
  } from "react-router-dom";
  import {reactLocalStorage} from 'reactjs-localstorage';
  import Popup from "reactjs-popup";
class card extends Component {

    constructor(props) {

        super(props);
        this.state={
            isClose:false
        }
   
        
    }

    editCategory(id) {
        
        
        console.log(id);
        
        const data = {
            name:this.state.name,
            description:this.state.description
        };

          const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        put(`http://localhost:4000/category/update/`+id, data ,config)
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
                isClose:true
            })
          })
          console.log(data);
    
    }

        

    render() {
        if(this.state.isClose){
            this.setState({
                isClose:false
            })
        }

        return (
            
            
            <ProductsCard>
               <StyledLink to={{pathname: `customer/` }}>
                <ImageContainer src='https://naveedtradingcompany.com/shop/wp-content/uploads/2018/12/028400017145aw-1-600x748.jpg'>

                </ImageContainer>
                </StyledLink>
                <Tag>
                    <TagText> {this.props.item.name}</TagText>
                    
                    
                  
                   
                   <Edit>
                    <Popup   trigger={<UploadButton  ><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></UploadButton>} modal>
                    {close => (
                      <Modal >
                        <Close onClick={close}>
                          &times;
                        </Close>
                        <Header > <Heading>Edit Category</Heading></Header>
                        <Content >
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
                    <Button onClick={() => this.editCategory(this.props.item._id)}>ADD</Button>

                    </InputContainer>


                            </Inputs>
                        </Form>
                        
                        </Content>
                        {this.state.isClose &&
                        
                                close() 
                                
                                 }
                        
                      </Modal>
                    )}
                  </Popup>
                  </Edit>
         </Tag>
               
            
            </ProductsCard>
     
     
        )

    }
}


const Edit=styled.div`
position:relative;
left:140px;
`
const UploadButton=styled.button`
border:none;
background:none;
cursor:pointer;
outline:none;
`
const Modal=styled.div `
    font-size: 12px;
  `
  const Header=styled.div `
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  `

  const Content=styled.div `
    width: 100%;
    padding: 10px 5px;
  `
  const Action =styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  `
  const Close=styled.a`
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
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
  font-size:18px;
  `
const Inputs = styled.div`
display:block;
width: min-content;
margin-left:20px;
`
const Photo = styled.div`
width:30%;
height:150px;
border: 1px solid #707070;
margin-left:20px;
margin-right:20px;
`
const Form = styled.div`
display:inline-flex;
width :500px;

`
const IconInput=styled.img`
width: 24px;
position: relative;
left: 45%;
top: 45%;
cursor: pointer;

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

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const ProductsCard=styled.div`
height:200px;
width:25%;
margin-left:10px;
// background-color: #FDFDFF;
// border: solid 0 #707070;
border: 1px solid #707070;
border-radius:5px;
margin-top:5%;
margin-bottom:5%;
overflow:hidden;


`
const ImageContainer =styled.img`
height:65%;
width: 85%;
padding:5%;
`
const Tag =styled.div`
height:15%;
width: 75%;
padding:5%;
margin:auto;

display: inline-flex;
flex-direction: column;
justify-content: center;

`
const TagText=styled.p`
font-size:18px;
font-family:"Poppins";
padding:0;
margin:0;
text-align: start;
font-weight:600;
color:#787878;
`
const Button=styled.button`
margin-top:15px;
align-self:center;
margin-top:25%;
margin-bottom:25%;
margin-left:2%;
text-align:center;
padding:2%;
width:90%;
height:40px;
border:none;
background-color:#2196F3;
font-family:"Poppins";
font-size:16px;
color:White;
border-radius:8px;
outline:none;
`
const Added=styled.button`
margin-top:15px;
align-self:center;
margin-top:25%;
margin-bottom:25%;
margin-left:2%;
text-align:center;
padding:2%;
width:90%;
height:40px;


font-family:"Poppins";
font-size:16px;
border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
border-radius:8px;

`
export default card;


