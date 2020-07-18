import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import CardImage from "../../assets/img/joshua-stannard.jpg";
import TomatoImage from '../../assets/img/tomato.png';

export default class ProductSection extends Component {
    render() {

        const { title } = this.props;

        return (
            <div>


                <div id="typography" className="center">
                    <h1>
                        {title}
                    </h1>
                </div>


                <div className="Grid">
                    <Card style={{ width: '20rem' }} className="text-center">
                        <CardImg top src={TomatoImage} alt="..." />
                        <CardBody>
                            <CardTitle className="cardTitle">Tomato</CardTitle>
                            <CardText className="cardDescription">Fresh Tomato</CardText>
                            <Button color="primary">Buy 25$ </Button>
                        </CardBody>
                    </Card>

                    <Card style={{ width: '20rem' }} className="text-center">
                        <CardImg top src={TomatoImage} alt="..." />
                        <CardBody>
                            <CardTitle className="cardTitle">Tomato</CardTitle>
                            <CardText className="cardDescription">Fresh Tomato</CardText>
                            <Button color="primary">Buy 25$ </Button>
                        </CardBody>
                    </Card>

                    <Card style={{ width: '20rem' }} className="text-center">
                        <CardImg top src={TomatoImage} alt="..." />
                        <CardBody>
                            <CardTitle className="cardTitle">Tomato</CardTitle>
                            <CardText className="cardDescription">Fresh Tomato</CardText>
                            <Button color="primary">Buy 25$ </Button>
                        </CardBody>
                    </Card>



                </div>



            </div>
        )
    }
}
