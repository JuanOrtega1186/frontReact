import  React, {useState} from "react";
import profileImage from "../../Assets/user.svg";
import ProductsCard from '../products/ProductsCards'
import NewProduct from '../products/products'
import {Typography, makeStyles, Card, CardContent} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '580px',
    backgroundColor: '#39aaa8',
    margin: '30px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    padding: '30px 50px',
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

const SellerProfile = () => {
  const [item, setItem] =  useState([])
  const classes = useStyles();
  return (
    
    <div >
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
        <Typography className={classes.info} gutterBottom variant="h5" component="div">
          {localStorage.getItem("email")} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {localStorage.getItem("shopName")}
        </Typography>
      </CardContent>
    </Card>

      <>
        <Card>
          <ProductsCard callBack={e=>setItem(e)}/>
        </Card>
      </>

      <>
        <Card>
          <NewProduct item={item}/>
        </Card>
      </>
    </div>
    
    

    
  );
};

export default SellerProfile;
