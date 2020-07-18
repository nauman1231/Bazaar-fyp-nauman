import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({

    extendedIcon: {
        width: "100%"
    },
}));


const emailRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
const passwordRegex = new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/");




function SignupPage(props) {

    const classes = useStyles();
    const [formsent, setformsent] = React.useState(false);
    const [formData, setformData] = React.useState({
        Name: "",
        City: "",
        Address: "",
        Email: "",
        MobileNo: "",
    })



    const [errorMessage, seterrorMessage] = React.useState("");

    const handleCityChange = event => {
        setformData({ ...formData, City: event.target.value })
    };



    return (

        <div>


            <Container maxWidth="sm">
                <form noValidate autoComplete="off" style={{ marginTop: "5rem" }}>
                    <h1>Retailer Form</h1>

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
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth helperText="Enter a valid email address" onChange={
                                (e) => {
                                    setformData({ ...formData, Email: e.target.value })
                                }
                            } />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="demo-simple-select-outlined-label">
                                    City
                        </InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    onChange={handleCityChange}
                                    value={formData.Cit}
                                >
                                    <MenuItem value={"Rawalpind"}>Rawalpindi</MenuItem>
                                    <MenuItem value={"Islamabad"}>Islamabad</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Address" variant="outlined" multiline rows="4" fullWidth onChange={
                                (e) => {
                                    setformData({ ...formData, Address: e.target.value })
                                }
                            } />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Mobile No" variant="outlined" type={"number"} fullWidth onChange={
                                (e) => {
                                    setformData({ ...formData, MobileNo: e.target.value })
                                }
                            } />
                        </Grid>


                        <Grid item xs={12}>
                            <Button className={classes.extendedIcon} variant="contained" color="primary" size="large" onClick={() => {
                                    
                     

                                if (formData.Name.length < 1 || formData.Address.length < 1 || formData.City.length < 1 || formData.Email.length < 1 || formData.MobileNo.length < 1) {
                                    seterrorMessage("Please fill all feilds")
                                    setformsent(false)
                                }
                                else {

                                    if (!emailRegex.test(formData.Email)) {
                                        seterrorMessage("Invalid Email")
                                        setformsent(false)

                                    }
                                    else if (formData.MobileNo.length < 11) {
                                        seterrorMessage("Invalid Mobile Number")
                                        setformsent(false)
                                    }
                                    else {

                                        const a =formData.Name.split(" ");
                                        const L_name = a[0];
                                        const F_name = a[1];
                             

                                        fetch('http://localhost:3000/retailer/request', {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({ F_name: F_name, L_name: L_name,Contact_no:formData.MobileNo,city:formData.City,address:formData.Address,email:formData.Email})
                                        });
                                        seterrorMessage("Response sent")
                                        setformsent(true)
                                        localStorage.mobileno = formData.MobileNo;
                                        props.history.push('/storeSignup')
                                    }

                                }


                            }}
                            >Sign up</Button>
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




export default SignupPage;
