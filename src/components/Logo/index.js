import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "1px",
    marginBottom: "1px",
  },
  appBar: {
    height: "5ch",
    width: "auto",
    [theme.breakpoints.down("960")]: {
      height: "5ch",
    },
  },
}));

const Logo = (props) => {
  const classes = useStyles();

  return (
    <Box component={Link} to={"/"}>
      
      <img alt="Logo" src={logo} {...props} className={classes.appBar} />
    </Box>
  );
};

export default Logo;
