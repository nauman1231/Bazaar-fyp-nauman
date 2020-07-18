import React, { Component } from 'react';


import Progress from '../components/progressBar/progress'
import ClassDetails from '../components/cardDetails/cardDetails'
import Footer from '../components/Footer/Footer'




class card_container extends Component {

    constructor() {

        super();
        
        this.state = { isExpanded: false,
            counter: false };
    }


    render() {

        return (<>
             <div><Progress /></div>
            <div><ClassDetails  /></div>
            
           
        </>);

    }
   
    toggleExpanded() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}




export default card_container;



