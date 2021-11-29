import * as React from 'react';
import {
  makeStyles,
} from "@material-ui/core";
import ProductsCard from './ProductsCards'




const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  container: {
    display: 'flex',
  },
}));



const Shop = () => {

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ProductsCard/>
    </div>
  );
};

export default Shop;