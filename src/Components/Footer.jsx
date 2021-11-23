import companyLogo from "../Assets/camelshop.png";
import { makeStyles } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.box}>
        <div>
          Daniel Diaz y Juan Ortega
          <text className={classes.copy}>
            Material UI
            <span className={classes.span}>
              {new Date().getFullYear()}&reg;
            </span>
          </text>
        </div>
        <img className={classes.logo} src={companyLogo} alt={"logo"} />
      </div>
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
  copy: {
    color: '#ccc',
    marginLeft: '10px',
  },
  span: {
    marginLeft: '6px',
  },
  box: {
    backgroundColor: "#4e6678",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
  },
  logo: {
    width: "100px",
    height: "auto",
    opacity: ".7"
  },
}));
