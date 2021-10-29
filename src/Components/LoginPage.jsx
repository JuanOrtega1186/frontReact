import React, {useRef, useState} from 'react';
import {Avatar, Grid, Paper, TextField, Button, Typography, Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import url from '../services/users.services'




export default function Login(){

    const paperStyle={padding :20, height :'70vh', width :280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0'}
    const userName = useRef(null)
    const password = useRef(null)

    const [detal, setDetal] = useState([])
    const [email, setEmail] = useState('')
    const [logged, setlogged] = useState(false) 

    console.log(email)

    const loggedIn = () => {

        let body = {
            email: email
        }
        axios.post(url + 'users/login', body)

        .then(res => {

          setDetal(res.data)
          console.log(detal)
          validator()

        }, error => console.log(error))
      }

      const validator = () => {

       // localStorage.setItem("logged", true);
          setlogged(localStorage.getItem('logged') !==  null ? true : false)
          console.log(logged)
      }
     

    return(
        <>
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
                <Grid align = 'center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label='Username' ref={userName} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Username' fullWidth required/>
                <TextField label='Password' ref={password} placeholder='Enter Password' type='password' fullWidth required/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Remember me"/>
                <Button variant="contained" color="primary" onClick={()=>loggedIn()} startIcon={<CloudUploadIcon/>} style={btnstyle} fullWidth>Sign In</Button>
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
        </>  

    )

}

