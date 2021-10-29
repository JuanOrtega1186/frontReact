import React from 'react'
import {Grid, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const RegisterPage = () => {
const paperStyle={padding:'30px 50px', width:500, margin:"20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'blue'}
const marginTop = {marginTop:5}

    return (
        <div className = "container-fluid">
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                          <AddCircleOutlineOutlinedIcon/>  
                        </Avatar>
                        <h2 style={headerStyle}>Sing Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth label = 'Name' placeholder = 'Insert your name'/>
                        <TextField fullWidth label = 'Email' placeholder = 'Insert your email address'/>
                        <TextField fullWidth label = 'Country' placeholder = 'Insert your Country'/>
                        <TextField fullWidth label = 'City' placeholder = 'Insert your City'/>
                        <TextField fullWidth label = 'Password' type ="password" placeholder = 'Insert your password'/>
                        <FormControl component="fieldset" style = {marginTop}>
                        <FormLabel component="legend">Profile</FormLabel>
                            <RadioGroup aria-label="profile" name="profile" style={{display:'initial'}}>
                                <FormControlLabel value="owner" control={<Radio />} label="Owner" />
                                <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
                            </RadioGroup>
                        <TextField fullWidth label = 'Shopname' placeholder = 'Insert your Shop Name'/>
                        </FormControl>
                        <FormControlLabel control={<Checkbox name="checkedA" />} 
                        label="I accept Terms and Conditions."/>                 
                        <Button type = 'submit' variant='contained' color = 'primary' fullWidth>Sing Up</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default RegisterPage
