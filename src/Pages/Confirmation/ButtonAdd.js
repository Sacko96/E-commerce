import React, { useState } from "react";
import { makeStyles, IconButton, Box } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    // border: "1px solid",
    width:"53%",
    [theme.breakpoints.down("sm")]: {
      width:"89%",
    },
  },
  iconBtn: {
    padding: 4,
    width: "50px",
    "& svg": {
      fontSize: "10px",
      fontWeigth: "bold",
      color: "black",
    },
  },
  value: {
    padding: "0px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
    },
  },
  btn: {
    backgroundColor: "#DCDCDC",
  },
}));

const ButtonAdd = () => {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  return (
    <div className={classes.root}>
      <Box className={classes.btn}>
        <Button disabled={count === 1} onClick={() => setCount(count - 1)}>
          <Remove />
        </Button>
      </Box>
      <span className={classes.value}>{count}</span>
      <Box className={classes.btn}>
        <Button onClick={() => setCount(count + 1)}>
          <Add />
        </Button>
      </Box>
    </div>
  );
};

export default ButtonAdd;
