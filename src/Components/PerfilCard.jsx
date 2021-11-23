import  React, {useState, useEffect} from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import {urlListSellers} from '../service/url'
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

const PerfilCard = () => {

  const [resp, setResp] = useState([])
  useEffect(() => {
    return () => {
      getSellers();
    }
  }, [])

  const getSellers = () => {
    //debugger
    axios.get(urlListSellers + 'sellerprofile')
    .then(res => {
      setResp(res.data)
    }).catch(
        function(error) {
            Swal.fire({
                title: 'error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Fine'
              })
        }
    )

  /* const warning = (message) => {
    Swal.fire({
        title: 'Mensaje!',
        text: message.message,
        icon: message.icon,
        confirmButtonText: 'Warning'
      })
  } */
  }

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {resp.map(item => (
        <Card >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
                {item.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.shopName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>      
      ))}
      <div className={classes.offset}></div>
    </div>
  );
};

export default PerfilCard;
