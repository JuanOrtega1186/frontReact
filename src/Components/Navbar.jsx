import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button, Link} from '@material-ui/core';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const useStyles = makeStyles(theme=>({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title:{
        flexGrow: 1
    }
}))
const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                  <IconButton
                   color="inherit" 
                   aria-label="menu" 
                   className={classes.menuButton}>
                      <MenuOpenIcon/>
                  </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Camelshop
                </Typography>
                <Link href="./Components/LoginPage">
                    <Button variant="contained" color="primary" startIcon={<AccountCircleIcon/>}>Login</Button>
                </Link>
                <Link href="./Components/RegisterPage">
                    <Button variant="contained" color="secondary" startIcon={<PersonAddIcon/>}>Register</Button>
                </Link>
              </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar
