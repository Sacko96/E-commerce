import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(() => ({
  root: {
    // marginBottom: "1px",
    // marginTop: "1px",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Navbar />
    </div>
  );
}
