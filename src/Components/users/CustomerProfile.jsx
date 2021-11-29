import * as React from "react";
import profileImage from "../../Assets/user.svg";

import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '280px',
    backgroundColor: '#d77449',
    margin: '30px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    padding: '40px',
    alignItems: 'center',
    boxShadow: '6px 5px 3px #9E9E9E'
  },
  card: {
    textAlign: 'center',
    paddingBottom: '0 !important',
    color: '#fff',  
  },
  logo: {
    width: '80px',
    height: '80px',
    fill: '#fff',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '26px',
  },
  info: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
}));

const CustomerProfile = () => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <img src={profileImage} alt={"logo"} className={classes.logo} />
      <CardContent className={classes.card}>
        <Typography className={classes.name} variant="h5" component="div">
          {localStorage.getItem("name")}
        </Typography>
        <Typography className={classes.info} variant="h5" component="div">
          {localStorage.getItem("city")}
        </Typography>
        <Typography className={classes.info} gutterBottom variant="h5" component="div">
          {localStorage.getItem("country")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mas contenido sobre el perfil de el cliente
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomerProfile;
