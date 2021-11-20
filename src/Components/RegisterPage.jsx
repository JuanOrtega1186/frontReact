import React, {useState}from 'react';
import {Grid, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import Swal from 'sweetalert2'
import {urlGuardar} from '../service/url'

const RegisterPage = () => {
const paperStyle={padding:'30px 50px', width:500, margin:"20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'blue'}
const marginTop = {marginTop:5}



//const [detal, setDetal] = useState([])
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [country, setCountry] = useState('')
const [city, setCity] = useState('')
const [passWord, setPassword] = useState('')
const [profile, setProfile] = useState('')
const [shop, setShop] = useState('')



const register = () =>{
    debugger
    if(!name || !email || !country || !city || !passWord){
        Swal.fire({
            title: 'Warning!',
            text: 'Please fill in all the fields ',
            icon: 'warning',
            confirmButtonText: 'Cool'
        })
    }else{
        let body = {
            name: name,
            email: email,
            country: country, 
            city: city,
            password: passWord,
            profile: profile,
            shopName: shop
        }
        axios.post(urlGuardar + 'users', body)
    
        .then(res => {
            // eslint-disable-next-line no-lone-blocks
            { Object.entries(res.data).length !== 0 && warning(res.data) }
        }).catch(
            function(error) {
                Swal.fire({
                    title: 'error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Fine'
                  })
            }
        )
    }


    const warning = (message) => {
        Swal.fire({
            title: 'Mensaje!',
            text: message.message,
            icon: message.icon,
            confirmButtonText: 'Warning'
          })
    }

/*     const validator = (data) => {
        if(data[0].email != null)
        {

            setDetal(data)
            let datos = data
            console.log(detal)
            console.log(datos)
            window.location.href= urlhome
        }else {
            validator(data)
        }
    } */
}

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
                        <TextField fullWidth label = 'Name' onChange={(e)=>setName(e.target.value)} placeholder = 'Insert your name'/>
                        <TextField fullWidth label = 'Email' onChange={(e)=>setEmail(e.target.value)} placeholder = 'Insert your email address'/>
                        <TextField fullWidth label = 'Country' onChange={(e)=>setCountry(e.target.value)} placeholder = 'Insert your Country'/>
                        <TextField fullWidth label = 'City' onChange={(e)=>setCity(e.target.value)} placeholder = 'Insert your City'/>
                        <TextField fullWidth label = 'Password' onChange={(e)=>setPassword(e.target.value)} type ="password" placeholder = 'Insert your password'/>
                        <FormControl component="fieldset" style = {marginTop}>
                        <FormLabel component="legend">Profile</FormLabel>
                            <RadioGroup aria-label="profile" name="profile" style={{display:'initial'}}>
                                <FormControlLabel value= "true" onChange={(e)=>setProfile(e.target.value)} control={<Radio />} label="Seller" />
                                <FormControlLabel value= "" onChange={(e)=>setProfile(e.target.value)} control={<Radio />} label="Buyer" />
                            </RadioGroup>
                        <TextField fullWidth label = 'Shopname' onChange={(e)=>setShop(e.target.value)} placeholder = 'Insert your Shop Name'/>
                        </FormControl>
                        <FormControlLabel control={<Checkbox name="checkedA" />} 
                        label="I accept Terms and Conditions."/>                 
                        <Button type = 'button' variant='contained' onClick={()=>register()} color = 'primary' fullWidth>Sing Up</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default RegisterPage
