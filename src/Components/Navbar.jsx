import React, {useState, useEffect}  from "react";
import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { NavLink } from "react-router-dom";
import companyLogo from "../Assets/camelshop.png";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  wrapper: {
    justifyContent: "space-between",
  },
  logo: {
    width: 200,
  },
  link: {
    textDecoration: "none",
		marginLeft: 10,
  },
}));


  
const Loggin = () => {
  debugger
  const classes = useStyles();
  return(
    <div id="reload">
      <NavLink  to="/login">
        <Button
          variant="contained"
          color="primary" 
          startIcon={<AccountCircleIcon />}

        >
          Login
        </Button>
      </NavLink>
      <NavLink className={classes.link} to="/register">
        <Button
          variant="contained"
          color="success"
          startIcon={<PersonAddIcon />}
        >
          Register
        </Button>
      </NavLink>
     </div>
  )
}

  
const Logout = (props) => {
  const loggedOut = () => {
    debugger
    localStorage.clear()
    props.callback('Hola')

  }
  return(
    <div>
    <NavLink  to="/"> 
      <Button
        onClick={()=> loggedOut()}
        variant="contained"
        color="secondary"
        startIcon={<AccountCircleIcon />}
      >
        Logout
        
      </Button>
    </NavLink>
  </div>
  )
}

const Navbar = () => {
  

  const classes = useStyles();
  const [logout, setLogut] = useState(true)



  useEffect(() =>{
    if(localStorage.length > 0){ 
      setLogut(false)  
    }
   else{
    setLogut(true)
   }
  }, [])
  

  
 
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar className={classes.wrapper}>
          <div>
            <NavLink to="/">
              
              <img className={classes.logo} src={companyLogo} alt={"logo"} />
            </NavLink>
          </div>
          {logout ?
            <Loggin />
            :
            <Logout callback={()=>setLogut(true)}/>
          }
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navbar;
