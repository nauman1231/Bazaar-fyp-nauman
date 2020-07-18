import React from 'react';
import styled from 'styled-components'
function Slider() {
    return (


        <Section style={{marginTop:'60px'}} class="section" >
            <Hero class="container hero-container w-container">
                <Sliders data-animation="slide" data-duration="500" data-infinite="1" class="slider w-slider">
                    <Wslidermask class="w-slider-mask">
                        <HeroSlider class="hero-slider w-slide">
                            <Div181 class="div-block-181">
                                <HeroText1 class="hero-text-1">Buy Online <br />Groceries</HeroText1>
                            </Div181><SliderImg src="images/photo-1505740420928-5e560c06d30e.jpg" alt="" class="slider-image"></SliderImg></HeroSlider>
                        <HeroSlider class="hero-slider w-slide">
                            <Div181 class="div-block-181">
                                <HeroText1 class="hero-text-1">Buy Online Groceries</HeroText1>
                            </Div181><SliderImg src="images/photo-1505740420928-5e560c06d30e.jpg" alt="" class="slider-image"></SliderImg></HeroSlider>
                        <HeroSlider class="hero-slider w-slide">
                            <Div181 class="div-block-181">
                                <HeroText1 class="hero-text-1">Buy Online Groceries</HeroText1>
                            </Div181><SliderImg src="images/photo-1505740420928-5e560c06d30e.jpg" alt="" class="slider-image"></SliderImg></HeroSlider>
                    </Wslidermask>
                    <SliderArrow  style={{zIndex:'3', left:'auto' }} class="w-slider-arrow-left">
                        <IconLeft class="slider-icon w-icon-slider-left"></IconLeft>
                    </SliderArrow>
                    <SliderArrow  class="w-slider-arrow-right">
                        <IconRight class="slider-icon w-icon-slider-right"></IconRight>
                    </SliderArrow>
                    <SliderNav class="w-slider-nav w-round"></SliderNav>
                </Sliders>
            </Hero>
        </Section>

    );
}

const Section=styled.div `
padding-right: 10px;
padding-left: 10px;
`
const Hero=styled.div `
margin-left: auto;
margin-right: auto;
max-width: 940px;
max-width: 1100px;
padding: 20px;
-webkit-justify-content: space-around;
-ms-flex-pack: distribute;
justify-content: space-around;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-align: stretch;
-webkit-align-items: stretch;
-ms-flex-align: stretch;
align-items: stretch;
height: 50vh;
padding-right: 0px;
padding-left: 0px;
`

const Sliders=styled.div`
height: 100%;
position: relative;
height: 300px;
text-align: center;
background: #dddddd;
clear: both;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
tap-highlight-color: rgba(0, 0, 0, 0);
`
const Wslidermask =styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    z-index: 1;
    left: 0;
    right: 0;
    height: 100%;
    white-space: nowrap;
  `
  const HeroSlider=styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 100%;
  white-space: normal;
  text-align: left;
  `
const HeroText1=styled.div`
margin-bottom: 12px;
font-size: 2rem;
line-height: 3rem;
text-align: left;
`
  const Div181=styled.div`
  position: absolute;
  left: 10%;
  top: 44%;
  top: 11%;
  left: 4%;
  top: 6%;
  `

  const SliderImg=styled.img`
  width: 100%;
  height: 107%;
  padding-left: 0px;
  -o-object-fit: cover;
  object-fit: cover;
  `
  const SliderArrow=styled.div`
  position: absolute;
  width: 80px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  cursor: pointer;
  overflow: hidden;
  color: white;
  font-size: 40px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  `
  const IconLeft=styled.div`
  position: absolute;

  content: "\e601";
  font-family: 'webflow-icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  `
  const IconRight=styled.div`
  position: absolute;
  content: "\e601";
  font-family: 'webflow-icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  `

  const SliderNav=styled.div`
  position: absolute;
  z-index: 2;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding-top: 10px;
  height: 40px;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 100%;
  `
export default Slider;
