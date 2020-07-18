import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import SideNav from "./components/SideNav";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import Card from "./components/Card";
import ProductCard from "./components/ProductCard";
import ExpandedCard from "./components/ExpandedCard";
import Table from "./components/Table";
import Home from './pages/home';
import AddProduct from "./pages/AddProduct";


const GlobalStyle = createGlobalStyle`
  
 a{
   text-decoration:none;
 }

`;


const Grid = styled.div`
 display:grid;
 grid-template-columns:20% 80%;
`;


class App extends Component {

  constructor() {
    super();
  }


  render() {



    let product = {
      name: "Potatoes",
      sku: '123-456',
      category: "Vegetables",
      size: '2Kg',
      price: '200 PKR',
      stock: "200 Kg",
      barcode: '125464',
      brand: 'none'
    }


    let products = [];
    for (let index = 0; index < 6; index++) {
      products.push(product)
    }


    return (
      <>


        <GlobalStyle />
        <Router>

          <Grid>

            <SideNav />

            <Switch>

            
        <Route  component={AddProduct}  path="/addProduct" />
        <Route  component={Home} path="/"  />


            </Switch>
          </Grid>

        </Router>
      </>
    );
  }
}

export default App;
