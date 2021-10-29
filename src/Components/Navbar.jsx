import React from "react";
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
const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar className={classes.wrapper}>
          <div>
            <NavLink to="/">
              <img className={classes.logo} src={companyLogo} alt={"logo"} />
            </NavLink>
          </div>
          <div>
            <NavLink className={classes.link} to="/login">
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
                color="secondary"
                startIcon={<PersonAddIcon />}
              >
                Register
              </Button>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
