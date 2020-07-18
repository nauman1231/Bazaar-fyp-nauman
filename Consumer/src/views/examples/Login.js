
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function Login(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
     
      <div
        className="page-header"
        style={{
          background:'#E0E0E0'
        }}
      >
        <Container >
          <Row >
            <Col className="ml-auto mr-auto" lg="4" >
              <Card className="card-register ml-auto mr-auto form">
                <h3 className=" mx-auto FormTitle">Signin</h3>
              
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" className="formInput"/>
                  <label>Password</label>
                  <Input placeholder="Password" type="password" className="formInput"/>
                  <Button block className="btn-round" color="#EEEEEE">
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="[danger]"
                    href="#pablo"
                    onClick={e => {e.preventDefault()
                      props.history.push('/signup')
                    }}
                  >
                   Dont  have an account?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        
      </div>
    </>
  );
}

export default Login;
