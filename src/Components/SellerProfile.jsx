import * as React from "react";
import profileImage from '../Assets/profile.jpg'


import {
  makeStyles,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    container: {
      display: "flex",
    },
    card: {
      maxWidth: 300,
      margin: 24,
    },
  }));
  

 const SellerProfile = () => {
    const classes = useStyles();
  return (
      < >
        <Card sx={{ maxWidth: 34 }}>
            <>
                <img src={profileImage} alt={"logo"} style={{width: "50%", height: "50%"}}/>
            </>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {localStorage.getItem('name')}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {localStorage.getItem('city')}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {localStorage.getItem('country')}
                </Typography>
            <Typography variant="body2" color="text.secondary">
                Mas contenido sobre el perfil de el vendedor
            </Typography>
            </CardContent>
        </Card>
        <div className={classes.offset}></div>
      </>
    
  );
}


export default SellerProfile;