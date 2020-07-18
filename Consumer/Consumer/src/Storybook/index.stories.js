import React from 'react';
import SplashScreen from "../components/SplashScreen/SplashScreen";
import SidebarLogo from "../components/Sidebar/SidebarLogo";
import SidebarNavLinks from "../components/Sidebar/Sidebar_navLinks";
import Sidebar from "../components/Sidebar/Sidebar";
import IconText from "../components/IconText/IconText";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import ExpandedCard from "../components/ExpandedCard/ExpandedCard";
import SearchBar from "../components/SearchBar/SearchBar";
import DropDown from "../components/DropDown/DropDown";


export default { title: 'Button' };

export const splashScreen = () => (<SplashScreen></SplashScreen>);

export const sidebar_Logo = () => (<SidebarLogo title="Baazar" />);

export const Sidebar_navLinks = () => (<SidebarNavLinks />);

export const sidebar = () => (<Sidebar />);

export const iconText = () => (<IconText />);

export const button = () => (<Button />);

export const card = () => (<Card />);

export const serach = () => (<SearchBar />);

export const dropdown = () => (<DropDown />);


export const expandedCard = () => (<>
    
    <ExpandedCard />
    </>);


    