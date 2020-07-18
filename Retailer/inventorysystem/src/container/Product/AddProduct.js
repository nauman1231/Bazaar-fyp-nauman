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




function AddProduct(props) {

    const classes = useStyles();
    const [formsent, setformsent] = React.useState(false);
    const [formData, setformData] = React.useState({
        Name: "",
        Stock: "",
        Category: "",
        Description: "",
    })



    const [errorMessage, seterrorMessage] = React.useState("");

    const handleCategoryChange = event => {
        setformData({ ...formData, Category: event.target.value })
    };



    return (

        <div>


            <Container maxWidth="sm">
                <form noValidate autoComplete="off" style={{ marginTop: "5rem" }}>
                    <h1>Product Form</h1>

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
                            <TextField id="outlined-basic" label="Stock" variant="outlined" type={"number"} fullWidth  onChange={
                                (e) => {
                                    setformData({ ...formData, Stock: e.target.value })
                                }
                            } />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Category
                        </InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    onChange={handleCategoryChange}
                                    value={formData.Category}
                                >
                                    <MenuItem value={"Rawalpind"}>Snack</MenuItem>
                                    <MenuItem value={"Islamabad"}>Soft Drinks</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Description" variant="outlined" multiline rows="4" fullWidth onChange={
                                (e) => {
                                    setformData({ ...formData, Description: e.target.value })
                                }
                            } />
                        </Grid>

                  


                        <Grid item xs={12}>
                            <Button className={classes.extendedIcon} variant="contained" color="primary" size="large" onClick={() => {


                                if (formData.Name.length < 1  ) {
                                    seterrorMessage("Please fill all feilds")
                                    setformsent(false)
                                }
                                else {

                                    seterrorMessage("Product Added")
                                    setformsent(true)

                                }


                            }}
                            >Add Product</Button>
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




export default AddProduct;
