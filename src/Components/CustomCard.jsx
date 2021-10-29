import * as React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
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

const CustomCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="http://lorempixel.com/300/300/animals/"
            alt="camelshop"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tigre
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className={classes.offset}></div>
    </div>
  );
};

export default CustomCard;
