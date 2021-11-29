import  React, { useState, useEffect } from "react";
import axios from "axios";
import {urlgetproductsbyshop} from '../../service/url'
import Swal from 'sweetalert2'
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardActionArea,
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

const ProductsCard = (props) => {

  const [resp, setResp] = useState([])

  //let body = localStorage.getItem("shopName")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let array = {
    shopName: localStorage.getItem("shopName")
  }

  useEffect(() => {
    setResp([])
    console.log(resp)
      axios
          .post(urlgetproductsbyshop + 'searchproductsbyshop', array)
          .then((res) => {
              setResp(res.data);
              console.log(res.data);
              //localStorage.setItem("IdProduct", res.data[0]._id)
          })
          .catch((err) => {
              console.log(err);
              Swal.fire({
                title: 'error!',
                text: err,
                icon: 'error',
                confirmButtonText: 'Fine'
              })
          });
  }, []);


  const getProductInfo = (item) => {
    props.callBack(item)
    console.log(item);
  }

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {resp.map(item => (
        <Card >
          <CardActionArea onClick={()=>getProductInfo(item)}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {item.productName} --  {item.productBarCode}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {item.productDescription}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.shopName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>      
      ))}
      <div className={classes.offset}></div>
    </div>
  );
};

export default ProductsCard;
