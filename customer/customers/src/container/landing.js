import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Slider from '../components/slider.js';
import HowItWorks from '../components/howItWorks.js';
import CategoryCard from '../components/categoryCard.js';
import Footer from '../components/footer.js';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Link, Redirect, } from 'react-router-dom'
import { get } from 'axios';
import styled from 'styled-components'
import Lottie from 'react-lottie'
import animationData from '../assets/lf30_editor_wyq8fg.json'
import background from '../assets/images/pattern.svg'
export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            products: []

        }
        this.print = this.print.bind(this)
    }




    componentDidMount() {
        if (this.props.history.location.pathname == '/category') {
            reactLocalStorage.set('refresh', true)
            reactLocalStorage.set('home5km', false)
        }


        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        this.getProducts().then((response) => {
            reactLocalStorage.set('redirect', false)
            this.setState({
                data: response.data
            });
            console.log(response.data);



        });

    }
    print() {
        console.log("Nauman");
    }
    getProducts() {
        const url = 'http://localhost:4000/category/'
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return get(url, config)
    }

    render() {
        if (!reactLocalStorage.get('login')) {
            return <Redirect to='/login' />;
        }

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <>
                {/* navbar */}
                {/* <Navbar></Navbar>; */}

                {/* slider */}
                <Section class="section">
                    <MainDiv>
                        {/* <Img src={background}></Img> */}

                        <Upper>
                            <Text>
                                Its All about sex baby<br /> its all about you and me
                    </Text>
                            <SmallText>
                                No. one fucking bazaar
                    </SmallText>

                        </Upper>

                        <Lower  >
                            <Lottie options={defaultOptions}

                                width={250}
                            />

                        </Lower>





                    </MainDiv>
                </Section>

                {/* how it works */}
                <div class="section-2">
                    <HowItWorks></HowItWorks>
                </div>

                {/* how it works */}
                <Section3 >
                    <Container>
                        
                        {this.state.data.map((item) => 
                      <CategoryCard item={item} value={item._id} onClick={this.print}></CategoryCard>)
                            }
                    </Container>
                </Section3>
                {/* Footer */}
                {/* <Footer></Footer> */}

            </>

        );
    }

}
const Section = styled.div`
// padding-right: 10px;
// padding-left: 10px;


`
const Container = styled.div`
display: flex;
/* justify-content: center; */
flex-direction: row;
flex-wrap: wrap;
margin-left:10%;
margin-right:10%;
justify-content:center;
`
const MainDiv = styled.div`
height:80vh;

background: linear-gradient(180deg, #ffffffe3,transparent),url(/static/media/pattern.094d67e0.svg);
`
const Upper = styled.div`
align-content: center;
text-align: center;
/* margin-top: 40vh; */
height: 60%;
display: flex;
flex-direction: column;
justify-content: flex-end;
`
const Lower = styled.div`
height: 40%;
`


const Text = styled.p`
font-weight: bold;
font-size:48px;
margin-bottom:0;

`
const SmallText = styled.p`
font-size:18px;
font-family:'Poppins'

`
const Img = styled.img`

`
const Section3 = styled.div`
    margin-bottom: 40px;
    
  `
const Sectionheding = styled.div`

    margin-top: 0px;
    margin-bottom: 40px;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  `

const Wcontainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  `
const Div183 = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  overflow: auto;
  `

const Div182 = styled.div`
    display:inline-flex;
width:100%;
flex-wrap:wrap;
align-items:flex-start;
justify-content:center;
overflow:hidden;
padding-bottom:20px;
border-top:1px solid #BDBDBD;
//     display: -ms-grid;
//     display: grid;
//     justify-items: center;
//     -webkit-box-align: center;
//     -webkit-align-items: center;
//     -ms-flex-align: center;
//     align-items: center;
//     grid-auto-columns: 1fr;
//     grid-column-gap: 16px;
//     grid-row-gap: 16px;
//     -ms-grid-columns: 1fr 1fr 1fr;
//     grid-template-columns: 1fr 1fr 1fr;
//     -ms-grid-rows: auto auto;
//     grid-template-rows: auto auto;

//     display: -ms-grid;
//     display: grid;
//     padding-right: 10px;
//     justify-items: center;
//     grid-auto-columns: 1fr;
//     grid-column-gap: 16px;
//     grid-row-gap: 16px;
//     -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
// overflow:hidden;
  `
