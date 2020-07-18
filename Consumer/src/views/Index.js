
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {fetchingRetailer, getRetailer} from '../actions/Retailer/retailerAction';
import GridSection from "components/Sections/GridSection";
import ProductSection from "components/Sections/ProductSection";
import { Row, Container } from "reactstrap";


function Index(props) {
  document.documentElement.classList.remove("nav-open");
  
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  const counter = useSelector(state => state.retailerReducer)
  console.log(counter)

  const dispatch = useDispatch()

  const History =props.history

  return (
    <>
      <IndexNavbar history={History} />
      <IndexHeader />
      <GridSection title="Top Vendors"/>
      <ProductSection title="Products"/>

      <footer className="footer footer-black footerBlack">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Bazaar
                </a>
              </li>
              
              
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} by Bazaar
            </span>
          </div>
        </Row>
      </Container>
    </footer>


    </>
  );
}

export default Index;
