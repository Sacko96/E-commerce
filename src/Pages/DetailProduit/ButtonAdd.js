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
      padding: "0px 20px",
    },
  },
  btn: {
    backgroundColor: "#DCDCDC",
  },
  value1: {
    padding: "0px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
    },
  },
}));

const ButtonAdd = ({ conf = false }) => {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  return (
    <div className={classes.root}>
      <Box className={classes.btn}>
        <Button disabled={count === 1} onClick={() => setCount(count - 1)}>
          <Remove />
        </Button>
      </Box>
      {!conf ? (
        <span className={classes.value}>{count}</span>
      ) : (
        <span className={classes.value1}>{count}</span>
      )}
      <Box className={classes.btn}>
        <Button onClick={() => setCount(count + 1)}>
          <Add />
        </Button>
      </Box>
    </div>
  );
};

export default ButtonAdd;
