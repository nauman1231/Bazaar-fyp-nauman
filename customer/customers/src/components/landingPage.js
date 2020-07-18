import React, { Component } from 'react';
import Navbar from '../Componenets/navbar.js';
import Slider from '../Componenets/slider.js';
import HowItWorks from '../Componenets/howItWorks.js';
import CategoryCard from '../Componenets/categoryCard.js';
import Footer from '../Componenets/footer.js';
import {reactLocalStorage} from 'reactjs-localstorage';
import { Link, Redirect,  } from 'react-router-dom'
import {get} from 'axios';
export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            products:[]
       
          }
          this.print = this.print.bind(this)
    }




    componentDidMount() {
        if(this.props.history.location.pathname=='/category'){
            reactLocalStorage.set('refresh',true)
            reactLocalStorage.set('home5km',false)
        }
       
 
         const config = {
             headers: {
                 'content-type': 'multipart/form-data'
             }
         }
         this.getProducts().then((response)=>{
             reactLocalStorage.set('redirect',false)
             this.setState({
               data:response.data
             });
             console.log(response.data);
 
 
            
           });
           
       }
       print(){
           console.log("Nauman");
       }
     getProducts(){
         const url = 'http://localhost:4000/category/'
             const config = {
                 headers: {
                     'content-type': 'multipart/form-data'
                 }
             }
             return  get(url,config)
     }

    render(){
        if(!reactLocalStorage.get('login')){
            return <Redirect to='/login'/>;
          }

    return (
        <div className="App">
            {/* navbar */}
            <Navbar></Navbar>;

            {/* slider */}
            <div class="section">
                <Slider></Slider>
            </div>

            {/* how it works */}
            <div class="section-2">
                <HowItWorks></HowItWorks>
            </div>

            {/* how it works */}
            <div class="section-3">
                <div class="w-container">

                    <div class="div-block-183">
                        <div class="section-heding">
                            Categories</div>

                        <div class="div-block-182">
                        {this.state.data.map((item) => 
                      <CategoryCard item={item} value={item._id} ></CategoryCard>)
                            }
                        
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer></Footer>

        </div>

    );
}

}
