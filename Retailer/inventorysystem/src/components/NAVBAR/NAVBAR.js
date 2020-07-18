import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function NAVBAR(props) {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar >
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.menuClicked}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Retailer
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NAVBAR;
