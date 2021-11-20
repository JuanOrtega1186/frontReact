import * as React from 'react';
import {
  makeStyles,
} from "@material-ui/core";
import PerfilCard from "./PerfilCard";


const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  container: {
    display: 'flex',
  },
}));



const HomePage = () => {

  

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <PerfilCard />
    </div>
  );
};

export default HomePage;
