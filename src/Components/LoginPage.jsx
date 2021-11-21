import React, {useRef, useState}from 'react';
import {Avatar, Grid, Paper, TextField, Button, Typography, Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import {urlConsultarEmail, urlSellerProfile, urlCostumerProfile} from '../service/url'
import Swal from 'sweetalert2'




const Login = () => {
    const paperStyle={padding :20, height :'70vh', width :280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0'}
    const userName = useRef(null)


    const [detal, setDetal] = useState([])
    const [email, setEmail] = useState('')
    const [passWord, setPassword] = useState('')

    console.log(email)


    
    const loggedIn = () => {
        if( email === ''){
            Swal.fire({
                title: 'Error!',
                text: 'Please enter your Email',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        if( passWord === ''){
            Swal.fire({
                title: 'Error!',
                text: 'Please enter your Password',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        
        else{
            localStorage.setItem("email", email)
            let body = {
                email: email,
                password: passWord
            }
            axios.post(urlConsultarEmail + 'users/login', body)
    
            .then(res => {
                // eslint-disable-next-line no-lone-blocks
                { Object.entries(res.data).length !== 0 && validator(res.data) }
            }, error => console.log(error))
        }
       
    }
    const warning = () => {
        Swal.fire({
            title: 'warning!',
            text: 'Somethig is goin wrong',
            icon: 'warning',
            confirmButtonText: 'Cool'
          })
    }

    const validator = (data) => {
        if(data[0].email != null)
        {

            setDetal(data)
            let datos = data
            console.log(detal)
            console.log(datos)
            localStorage.setItem("email", data[0].email);
            localStorage.setItem("profile", data[0].profile);
            localStorage.setItem("name", data[0].name);
            localStorage.setItem("city", data[0].city);
            localStorage.setItem("country", data[0].country);

            if(data[0].profile === true)
            {
                console.log("Vendedor");
                window.location.href= urlSellerProfile
            }

            if(data[0].profile === false)
            {
                console.log("Cliente");
                window.location.href= urlCostumerProfile
            }
            //window.location.href= urlhome
        }else{
        warning()
        }
       
       
        
    }



    return(
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
                <Grid align = 'center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label='Username' ref={userName} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Username' fullWidth required/>
                <TextField label='Password' onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Password' type='password' fullWidth required/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Remember me"/>
                <Button variant="contained" color="primary" onClick={()=>loggedIn()}  startIcon={<CloudUploadIcon/>} style={btnstyle} fullWidth>Sign In</Button>
                <Typography>
                    <Link href="#">
                            Forgot Password?
                    </Link>
                </Typography>
                <Typography> Do you have account?
                    <Link href = "/register">
                            Register
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    )

}

export default Login;