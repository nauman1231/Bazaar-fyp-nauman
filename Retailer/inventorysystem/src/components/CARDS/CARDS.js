import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AvatarImage from "../../assets/images/Avatar.jpg";
import ImagePlaceholder from "../../assets/icons/picture.svg";



const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        paddingTop:"1rem",
        height: 240,
        backgroundSize:"contain"
     }
    ,
});


function CARDS(props) {

    const classes = useStyles();

    return (
        <Card className={classes.card} elevation={8}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={ImagePlaceholder}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Store Name
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       Store Description
            </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}

export default CARDS;
