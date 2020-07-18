import React, { Component } from 'react';
import Dashboard from "../../components/Dashboard/Dashboard";
import "./InfoPage.scss";


class InfoPage extends Component {




    render() {
        
        return (<>

            <div className="InfoPage-container">

                

                <Dashboard title="Requests"/>
                <Dashboard title="Complaints"/>

            </div>





        </>)


    }
}



export default InfoPage;