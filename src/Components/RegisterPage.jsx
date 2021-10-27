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
const paperStyle={padding:'30px 50px', width:300, margin:"20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'blue'}
const marginTop = {marginTop:5}

    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                          <AddCircleOutlineOutlinedIcon/>  
                        </Avatar>
                        <h2 style={headerStyle}>Registrarse</h2>
                        <Typography variant='caption' gutterBottom>Diligencia este formato para crear una cuenta!</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth label = 'Nombre' placeholder = 'Ingresa tu Nombre'/>
                        <TextField fullWidth label = 'Email' placeholder = 'Ingresa tu Email'/>
                        <TextField fullWidth label = 'Pais' placeholder = 'Ingresa tu Pais'/>
                        <TextField fullWidth label = 'Ciudad' placeholder = 'Ingresa tu Ciudad'/>
                        <TextField fullWidth label = 'Contraseña' placeholder = 'Ingresa tu Contraseña'/>
                        <FormControl component="fieldset" style = {marginTop}>
                        <FormLabel component="legend">Perfil</FormLabel>
                            <RadioGroup aria-label="perfil" name="perfil" style={{display:'initial'}}>
                                <FormControlLabel value="dueño" control={<Radio />} label="Dueño" />
                                <FormControlLabel value="comprador" control={<Radio />} label="Comprador" />
                            </RadioGroup>
                        </FormControl>
                        <FormControlLabel control={<Checkbox name="checkedA" />} 
                        label="Acepto Terminos y Condiciones."/>
                        <Button type = 'submit' variant='contained' color = 'primary'>Registrar</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default RegisterPage
