import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({

    extendedIcon: {
        width: "100%"
    },
}));



function StoreSignupPage(props) {

    const classes = useStyles();

    const [formsent, setformsent] = React.useState(false);
    const [formData, setformData] = React.useState({
        Name: "",
        Description: "",
        Address: "",

    })

    const [errorMessage, seterrorMessage] = React.useState("");




    return (

        <div>


            <Container maxWidth="sm">
                <form noValidate autoComplete="off" style={{ marginTop: "5rem" }}>
                    <h1>Add a Store</h1>

                    <Grid container spacing={2}
                        justify="start"
                    >


                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth onChange={
                                (e) => {
                                    setformData({ ...formData, Name: e.target.value })
                                }
                            } />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Description" variant="outlined" helperText="Description length should greater than 25 characters" multiline rows="4" fullWidth onChange={
                                (e) => {
                                    setformData({ ...formData, Description: e.target.value })
                                }
                            } />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth multiline rows="4" onChange={
                                (e) => {
                                    setformData({ ...formData, Address: e.target.value })
                                }
                            } />
                        </Grid>

                        <Grid item xs={12}>
                            <Button className={classes.extendedIcon} variant="contained" color="primary" size="large" onClick={() => {


                                if (formData.Name.length < 1 || formData.Description.length < 1 || formData.Address.length < 1) {
                                    seterrorMessage("Please fill all feilds")
                                    setformsent(false)


                                }
                                else {

                                    if (formData.Description.length <= 25) {
                                        seterrorMessage("Invalid entry")
                                        setformsent(false)

                                    }

                                    else {
                                        fetch('http://localhost:3000/retailer/request/store', {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({ name: formData.Name, description: formData.Description,location: formData.Address,mobileNo:localStorage.mobileNo})
                                        });
                                        seterrorMessage("Response has been submitted")
                                        setformsent(true)
                                        props.history.push("/Home")
                                    }
                                }


                            }}

                            >Submit</Button>
                        </Grid>

                        <Grid item xs={12}>
                            {formsent &&
                                <p style={{ color: "green" }}>{errorMessage}</p>

                            }

                            {!formsent &&
                                <p style={{ color: "red" }}>{errorMessage}</p>
                            }

                        </Grid>



                    </Grid>
                </form>
            </Container>

        </div>
    );


}




export default StoreSignupPage;
