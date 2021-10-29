import * as React from 'react';
import {
  makeStyles,
} from "@material-ui/core";
import CustomCard from "./CustomCard";

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
      <CustomCard />
    </div>
  );
};

export default HomePage;
