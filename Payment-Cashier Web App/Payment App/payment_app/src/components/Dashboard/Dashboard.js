import React, { Component } from 'react';
import "./Dashboard.scss";
import Card from "../Card/Card"
import SearchBar from "../SearchBar/SearchBar"


class Dashboard extends Component {



    render() {
        
        return (<>
            <div className="dashboard" >
            <h1 className="dashboard__title">{this.props.title}</h1>
            <div className="searchBar-container">
                <SearchBar />
            </div>
            <div className="dashboard-table">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
          
        </>)


    }
}



export default Dashboard;