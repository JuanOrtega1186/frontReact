import  React, {useState, useEffect} from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import {urlListSellers} from '../../service/url'
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
    flexDirection: 'unset',
    padding: '30px',
    display: "flex",
    margin: '30px',
    width: "90%",
    
  },
  card: {
    textAlign: 'center',
    
    color: '#fff',
  },
}));

const PerfilCard = () => {

  const [resp, setResp] = useState([])

  useEffect(() => {
      axios.get(urlListSellers + 'sellerprofile')
          .then((res) => {
            setResp(res.data);
              console.log(res.data);
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

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {resp.map(item => (
        <Card >
          <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
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
