import store from "./js/store/Store";
import ReactDOM from "react-dom";
import App from "./js/App";
import React, { Component } from "react";


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App store={store} />, wrapper) : false;
