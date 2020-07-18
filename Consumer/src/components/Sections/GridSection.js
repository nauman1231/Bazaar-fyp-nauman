import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import CardImage from "../../assets/img/joshua-stannard.jpg";



class GridSection extends Component {
    render() {

        const { title } = this.props;

        return (
            <div>

                <div id="typography" className="center">
                    <h1>
                        {title}
                    </h1>
                </div>


                <div className="Row">
                    <Card style={{ width: '20rem' }}>
                        <CardImg top src={CardImage} alt="..." />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary">Go somewhere</Button>
                        </CardBody>
                    </Card>

                    <Card style={{ width: '20rem' }}>
                    <CardImg top src={CardImage} alt="..." />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="primary">Go somewhere</Button>
                    </CardBody>
                </Card>

                <Card style={{ width: '20rem' }}>
                <CardImg top src={CardImage} alt="..." />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="primary">Go somewhere</Button>
                </CardBody>
            </Card>

                </div>




                

            </div>
        );
    }
}

export default GridSection;
