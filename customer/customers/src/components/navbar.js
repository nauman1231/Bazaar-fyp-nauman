import React from 'react';
import searchIcon from '../assets/images/images/Search.png'
import Bazaar from '../assets/images/images/BAZAAR..svg'
import Profile from '../assets/images/images/5dd1ca04edfe6a591970a2cd_face-chad_15dd1ca04edfe6a591970a2cd_face-chad.jpg'
function Navbar() {
    return (

        <div className="navigation-container w-container">
            <div className="navigation-wrapper-large">
                <div className="left-block"><a href="/" aria-current="page" className="logo w-inline-block w--current"><img src={Bazaar} height="45" width="101" alt=""></img></a>
                    <div data-hover="" data-delay="0" className="dropdown w-dropdown">
                        <div className="dropdown-toggle w-dropdown-toggle">
                            <div className="icon w-icon-dropdown-toggle"></div>
                            <div className="text-block">Categories</div>
                        </div>
                        <nav className="dropdown-list-2 w-dropdown-list">
                            <div className="nav-categoriy-container">
                                <a href="#" className="side-nav-link-blocks w-inline-block">
                                    <div className="text-block-115">Foods and Drinks</div>
                                </a>
                            </div>
                            <div className="nav-categoriy-container">
                                <a href="#" className="side-nav-link-blocks w-inline-block">
                                    <div className="text-block-115">Meats</div>
                                </a>
                            </div>
                            <div className="nav-categoriy-container">
                                <a href="#" className="side-nav-link-blocks w-inline-block">
                                    <div className="text-block-115">Dairy Products</div>
                                </a>
                            </div>
                            <div className="nav-categoriy-container">
                                <a href="#" className="side-nav-link-blocks w-inline-block">
                                    <div className="text-block-115">Kitchen Accessories</div>
                                </a>
                            </div>
                            <div className="nav-categoriy-container">
                                <a href="#" className="side-nav-link-blocks w-inline-block">
                                    <div className="text-block-115">Others</div>
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div className="divider"></div>
                    <form action="/search" className="search w-form"><input type="search" className="search-input w-input" maxlength="256" name="query" placeholder="Search Products" id="search" required=""></input>
                        <div className="div-block-3"><input type="submit" value="" className="search-button w-button"></input>
                            <div className="html-embed w-embed"><img src={searchIcon}></img></div>
                        </div>
                    </form>
                </div>
                <div className="nav-link-container">
                    <div className="div-block-413">
                        <div data-delay="0" className="profile-dropdown-nav w-dropdown">
                            <div className="dropdown-toggle-4 w-dropdown-toggle">
                                <div className="div-block-78"><img src={Profile} alt="" className="user-img"></img></div>
                            </div>
                            <nav className="dropdown-list-7 w-dropdown-list">
                                <div className="div-block-172-copy-copy">
                                    <div className="div-block-173"><img src="images/profile-icon.png" alt="" className="image-98"></img><a href="#" className="dropdown-link-2 w-dropdown-link">My Profile</a></div>
                                    <div className="div-block-173"><img src="images/settings.png" alt="" className="image-98"></img><a href="#" className="dropdown-link-2 w-dropdown-link">Settings</a></div>
                                    <div className="div-block-174"></div>
                                    <div className="div-block-173"><img src="images/exit.png" alt="" className="image-98"></img><a href="#" className="dropdown-link-2 w-dropdown-link">Log Out</a></div>
                                </div>
                            </nav>
                        </div><a href="cart.html" className="nav-link-blocks w-inline-block"><img src="images/shopping-bag.svg" alt="" className="image-2"></img></a></div>
                </div>
            </div>
            <div className="navigation-wrapper-small">
                <div className="top-block">
                    <div data-w-id="697416cb-94f2-21d6-9327-fa425539a10d" className="hamburger-menu"><img src="images/menu-icon_1menu-icon.png" width="25" alt=""></img></div><a href="index.html" aria-current="page" className="logo w-inline-block w--current"><img src="images/BAZAAR..svg" height="45" width="101" alt=""></img></a>
                    <div className="nav-link-container">
                        <div><a href="cart.html" className="w-inline-block"><img src="images/shopping-bag.svg" alt="" className="image-2"></img></a></div>
                    </div>
                </div>
                <div className="search-warapper-small">
                    <form action="/search" className="search small-search w-form"><input type="search" className="search-input w-input" maxlength="256" name="query" placeholder="Search Products" id="search" required=""></input>
                        <div className="div-block-3"><input type="submit" value="" className="search-button w-button"></input>
                            <div className="html-embed w-embed"><img src="images/search.png"></img></div>
                        </div>
                    </form>
                </div>
                <div className="side-menu-wrapper">
                    <div className="side-menu">
                        <div data-delay="0" className="profile-dropdown w-dropdown">
                            <div className="dropdown-toggle-4 w-dropdown-toggle">
                                <div className="div-block-78"><img src="images/5dd1ca04edfe6a591970a2cd_face-chad_15dd1ca04edfe6a591970a2cd_face-chad.jpg" alt="" className="user-img"></img>
                                    <h5 className="heading-18">Retailer</h5>
                                    <div className="icon-4 w-icon-dropdown-toggle"></div>
                                </div>
                            </div>
                            <nav className="dropdown-list-7 w-dropdown-list">
                                <div className="div-block-172-copy-copy">
                                    <div className="div-block-173"><img src="images/profile-icon.png" alt="" className="image-98"></img><a href="#" className="dropdown-link-2 w-dropdown-link">My Profile</a></div>
                                    <div className="div-block-173"><img src="images/settings.png" alt="" className="image-98"></img><a href="#" className="dropdown-link-2 w-dropdown-link">Settings</a></div>
                                    <div className="div-block-174"></div>
                                    <div className="div-block-173"><img src="images/exit.png" alt="" className="image-98"></img><a href="#" className="dropdown-link-2 w-dropdown-link">Log Out</a></div>
                                </div>
                            </nav>
                        </div>
                        <div className="divider-line-side-nav"></div>
                        <div className="nav-categoriy-container">
                            <a href="#" className="side-nav-link-blocks w-inline-block">
                                <div className="text-block-115">Foods and Drinks</div>
                            </a>
                        </div>
                        <div className="nav-categoriy-container">
                            <a href="#" className="side-nav-link-blocks w-inline-block">
                                <div className="text-block-115">Meats</div>
                            </a>
                        </div>
                        <div className="nav-categoriy-container">
                            <a href="#" className="side-nav-link-blocks w-inline-block">
                                <div className="text-block-115">Dairy Products</div>
                            </a>
                        </div>
                        <div className="nav-categoriy-container">
                            <a href="#" className="side-nav-link-blocks w-inline-block">
                                <div className="text-block-115">Kitchen Accessories</div>
                            </a>
                        </div>
                        <div className="nav-categoriy-container">
                            <a href="#" className="side-nav-link-blocks w-inline-block">
                                <div className="text-block-115">Others</div>
                            </a>
                        </div>
                    </div>
                    <div data-w-id="9c1a1ba9-ce6b-0a05-3df8-63c7f082fb00" className="close"></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
