import React from 'react';
import NAVBAR from "../../components/NAVBAR/NAVBAR.js";
import DRAWER from "../../components/DRAWER/DRAWER.js";
import CARDS from "../../components/CARDS/CARDS";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import {
    Link,
  } from "react-router-dom";
  
  



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
    Link:{
        textDecoration:"none"
    }
}));



function Home() {

    const [Drawer, setDrawer] = React.useState(false);
    const classes = useStyles();


    return (

        <div onKeyDown={(e)=>{
            if(e.key=="Backspace"){
            setDrawer(false)
            }
        }}>
            <NAVBAR menuClicked={()=>{
                setDrawer(true)
            }} />

            <div style={{ margin: "3rem" }}  >
                <Grid container className={classes.root} spacing={2}
                    justify="center"
                    alignItems="center"
                    spacing={3}
                   
                >

                    <Grid item lg={3}>
                        <Link className={classes.Link} to="Stores/Xmart"><CARDS></CARDS></Link>
                    </Grid>
                    <Grid item lg={3}>
                        <CARDS></CARDS>
                    </Grid>
                    <Grid item lg={3}>
                        <CARDS></CARDS>
                    </Grid>

                    <Grid item lg={3}>
                        <CARDS></CARDS>
                    </Grid>
                    <Grid item lg={3}>
                        <CARDS></CARDS>
                    </Grid>
                    <Grid item lg={3}>
                        <CARDS></CARDS>
                    </Grid>



                </Grid>
            </div>

            <DRAWER drawerOpen={Drawer} />


        </div>
    );


}




export default Home;
