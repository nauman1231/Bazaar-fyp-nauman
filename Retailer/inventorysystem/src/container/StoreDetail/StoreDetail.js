import React from 'react';
import NAVBAR from "../../components/NAVBAR/NAVBAR.js";
import DRAWER from "../../components/DRAWER/DRAWER.js";
import CARDS from "../../components/CARDS/CARDS";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));



function StoreDetail({ match, history }, props) {


    const classes = useStyles();

    console.log(match.params.name)

    return (

        <div>
            <NAVBAR />
            <Container maxWidth="lg">
                <h1>{match.params.name}</h1>
                <Typography variant="h6" component="h2" gutterBottom>
                    Address of Store
            </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                    Description of Store
             </Typography>

             <Button variant="contained" color="primary" onClick={()=>{
                 history.push("/addProduct")
             }}>Add a Product</Button>
            </Container>


        </div>
    );


}




export default StoreDetail;
