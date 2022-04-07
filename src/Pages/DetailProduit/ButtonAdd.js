import React, { useState } from "react";
import { makeStyles, IconButton, Box } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    // padding: 1,
    // borderRadius: 40,
    border: "1px solid",
    // borderColor: palette.grey[300],
  },
  iconBtn: {
    padding: 4,
    width: "100px",
    "& svg": {
      fontSize: "15px",
      fontWeigth: "bold",
      color: "black",
    },
  },
  value: {
    padding: "0px 70px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 40px",
    },
  },
  btn: {
    backgroundColor: "#DCDCDC",
  },
}));

const ButtonAdd = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  return (
    <div className={classes.root}>
      {/* <IconButton
        disabled={count === 1}
        className={classes.iconBtn}
        onClick={() => setCount(count - 1)}
      >
        <Remove />
      </IconButton>

      <span className={classes.value}>{count}</span>

      <IconButton
        className={classes.iconBtn}
        onClick={() => setCount(count + 1)}
      >
        <Add />
      </IconButton> */}
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
