import React, { Component } from 'react'
import styled from "styled-components";
import { post } from 'axios';
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';


const Container = styled.div`
padding:2rem;
`;

const Icon = styled.img`
width:${props => props.large ? '50px' : '20px'};
height:${props => props.large ? '50px' : '20px'};
`

const Row = styled.div`
display:flex;
margin-top:1.5rem;
align-items:center;
`;


const TwoColumn = styled.div`
display:flex;
justify-content:space-between;
width:100%;
align-items:center;
margin-top:1rem;
`;

const Label = styled.p`
font-size:1rem;
margin:0;
`;

const Input = styled.input`
border:none;
border-bottom:solid 1px gray;
outline:none;
width:${props => props.large ? '60%' : '150px'};
`

const Tag = styled.button`
background:gray;
padding:.3rem .6rem;
border-radius:8px;
font-size:.9rem;
color:black;
margin:.3rem;
`;

const TagRow = styled(Row)`
    width:60%;
    flex-wrap:wrap;
    align-items:flex-start;
    `;


const Title = styled.h1`
font-size:1.5rem;
margin-left:1.5rem;
`;

const InfoText = styled.p`
color:gray;
font-size:.9rem;
margin:0rem;
`;

const Button = styled.button`
background:black;
color:white;
outline:none;
border:none;
padding:.5rem 1rem;
border-radius:8px;
font-family:Poppins;
`;

const Grid = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
width:90%;
column-gap:3rem;
`

const FirstCol = styled.div``;
const SecondCol = styled.div``;


const File = styled.input``;

const Select = styled.select`
width:150px;
border:none;
border-bottom:solid 1px gray;
outline:none;
`;

const Option = styled.option``;


const RangeContainer = styled.div`
margin:1rem;
margin-bottom:2rem;
`;
const UploadButton = styled.button`
border:none;
background:none;
cursor:pointer;
`

const DropDown = ({ Options,onchange }) => {

    if (Options) {
        return <Select onChange={onchange}>
            <Option value="" disabled selected >Select your option</Option>
            {Options.map(val =>
                <Option value={val}>{val}</Option>
            )}

        </Select>
    }

    else{
        return <Select>
        <Option value="" disabled selected >Select your option</Option>
    </Select> 
    }

}



const Range = ({onchange}) => {
    return <Input type="number" min="0" max="10" placeholder="0" onChange={onchange}/>
}

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            data: [],
            catego: ['Milk',"Seasoning"],
            Names: [],
            barcode: '',
            prod_name: '',
            category: '',
            size: '',
            brand: '',
            product_image: '',
            details: '',
            product_per_carton: '',
            no_per_carton: '',
            seller_price: '',
            retail_price: ''

        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)



    }
    onFormSubmit(e) {
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response) => {

            this.setState({
                data: response.data,
                Names: response.data.match_path,
                catego: response.data.labels

            });
            console.log(this.state.data)

        })

    }
    componentDidMount() {
      

        this._handleClick();
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] })
        console.log(e.target.files[0])
    }
    fileUpload(file) {
        const url = 'http://127.0.0.1:5000/upload';
        const formData = new FormData();
        formData.append('image', file, file.name)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }

    _handleClick() {
        $('#Name').on('click', '.name', function () {
            var name = $(this).attr('id');

            if (($('#' + name).attr('class')) == ($('.inpu').attr('id'))) {



                $(".inpu").val($('#' + name).text());
            }

        });

        $("#Category").on('click', '.cat', function () {

            var name = $(this).attr('id');
            //  alert(name)

            if (($('#' + name).attr('class')) == ($('.inpucat').attr('id'))) {
                // alert(name)


                $(".inpucat").val($('#' + name).text());
            }
        });
    }

    render() {

     let Size = ['sm','md','lg','xl']
     let Brands = ['Nestle','Olpers','National']
     let Category = ['Milk',"Seasoning"]
     

        return (
            <Container>

                <Row>
                    <Icon />
                </Row>


                <Row>
                    <Icon large />
                    <Title>Add Product</Title>
                </Row>

                <Row>
                    <InfoText>Fill in the following details to add new product</InfoText>
                </Row>

                <Grid>
                    <FirstCol>
                        <TwoColumn>
                            <Label>Barcode</Label>
                            <Input placeholder="Enter or Scan" onChange={(e)=>this.setState({barcode:e.target.value})} />
                        </TwoColumn>

                        <TwoColumn>
                            <Label>Product Name</Label>
                            <Input type="text" value={this.state.prod_name} onChange={(e)=>this.setState({prod_name:e.target.value})}  name="name" className="inpu" id="name" ></Input>
                        </TwoColumn>

                        <TwoColumn>
                            <Label>Category</Label>
                            {/* <DropDown/> */}
                            <Select value={this.state.category} name="category" onChange={e => this.setState({ category: e.target.value })}>
                                <Option>Category</Option>
                                {this.state.catego.map((item, i) =>
                                    <Option className="cat" id={"1" + i} >{item}</Option>)
                                }

                            </Select>
                        </TwoColumn>


                        <TwoColumn>
                            <Label>Size</Label>
                            <DropDown Options={Size} onchange={(e)=>this.setState({size:e.target.value})}/>
                        </TwoColumn>

                        <TwoColumn>
                            <Label>Brand</Label>
                            <DropDown Options={Brands}  onchange={(e)=>this.setState({brand:e.target.value})} />
                        </TwoColumn>



                    </FirstCol>

                    <SecondCol>
                        <TwoColumn>
                            <Label>Product Image</Label>
                            <File type="file" onChange={this.onChange} />
                            <UploadButton onClick={this.onFormSubmit}><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon></UploadButton>
                        </TwoColumn>

                        <TwoColumn>
                            <Label>Details</Label>
                            <Input  onChange={(e)=>this.setState({details:e.target.value})}    large placeholder="Enter Details" />
                        </TwoColumn>

                        <TwoColumn >
                            <Label>Suggestion</Label>
                            <TagRow id="Name">

                                {this.state.Names.map((item, i) =>
                                    <p style={{ color: "black", padding: '.3rem .6rem', borderRadius: '8px', margin: '.3rem', fontSize: '.9rem', backgroundColor: 'grey' }} class="name" id={i} >
                                        {item}
                                    </p>)

                                }



                            </TagRow>
                        </TwoColumn>

                    </SecondCol>



                </Grid>


                <Row>
                    <RangeContainer>
                        <Label>Product Per Carton</Label>
                        <Range onchange={(e)=>this.setState({product_per_carton:e.target.value})}/>
                    </RangeContainer>

                    <RangeContainer>
                        <Label>Number Per Carton</Label>
                        <Range onchange={(e)=>this.setState({no_per_carton:e.target.value})} />
                    </RangeContainer>


                    <RangeContainer>
                        <Label>Seller Price</Label>
                        <Range onchange={(e)=>this.setState({seller_price:e.target.value})}/>
                    </RangeContainer>


                    <RangeContainer>
                        <Label>Retail Price</Label>
                        <Range onchange={(e)=>this.setState({retail_price:e.target.value})}/>
                    </RangeContainer>




                </Row>


                <Button onClick={()=>this.addProduct()}>Add Product</Button>


            </Container>
        )
    }




addProduct(){

console.log(this.state)

if(this.state.prod_name != ''  &&  this.state.barcode!=''  && this.state.category!='' && this.state.size !=''&& this.state.brand!='' && this.state.details!='' && this.state.product_per_carton!='' && this.state.no_per_carton !=''&& this.state.seller_price!='' && this.state.retail_price!='' ){ 

    let date = new Date();
    let curr_date = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();

    let product = {
    name                    :this.state.prod_name,
    category                :this.state.category,
    size                    :this.state.size,
    brand                   :this.state.brand,
    product_per_carton      :this.state.product_per_carton,
    number_of_carton        :this.state.no_per_carton,
    Seller_price            :this.state.seller_price,
    Retail_price            :this.state.retail_price,
    details                 :this.state.details,
    barcode                 :this.state.barcode,
    sku                     :curr_date,
}
Axios.post("add",product).then(()=>{
    alert('Product Added')
})
}
else{
    alert('empty product')
}


}


}