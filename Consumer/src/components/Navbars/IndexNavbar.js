
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";


import CartIcon from '../../assets/img/supermarket.svg';


function IndexNavbar({ navBarColor, history }) {


  if (navBarColor == undefined) {
    navBarColor = "navbar-transparent"
  }
  else {
    navBarColor = "navbar-primary"
  }
  console.log(navBarColor)


  const [navbarColor, setNavbarColor] = React.useState(navBarColor);


  console.log(navbarColor)

  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            Baazar
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>

            <NavItem>
              <NavLink
                data-placement="bottom"
              >
              <i class="nc-icon nc-box largeIcon" onClick={() => { history.push('/products') }} />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title=""
              >
                <div>
                  <i class="fa fa-cart-plus largeIcon" onClick={() => { history.push('/cart') }} ></i>
                  <div class="circle">
                    <p className="cirlceText">1</p>
                  </div>
                </div>

                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <Button
                className="btn-round"
                color="primary"
                href="#pablo"
                target="_blank"
                onClick={() => { history.push('/signin') }}
              >
                Sign in
              </Button>
            </NavItem>





          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
