import React, { Component } from 'react'
import "./Sidebar.scss";
import Sidebar_logo from './SidebarLogo';
import Sidebar_navLinks from './Sidebar_navLinks';

export default class Sidebar extends Component {

    constructor(props){
        super(props)
    }


    render() {
        console.log(this.props)
        return (
            <>

                <div className="SidbarContainer">
                    <Sidebar_logo title="Baazar"></Sidebar_logo>

                    <div className="sidenavLinksContainer">
                        <Sidebar_navLinks nav_props={this.props} ></Sidebar_navLinks>
                    </div>

                </div>


            </>
        )
    }
}
