import React, { useState } from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
    root: {
      display: "inline-flex",
      alignItems: "center",
      padding: 1,
      borderRadius: 5,
      border: "1px solid",
      borderColor: palette.grey[300],
    },
    iconBtn: {
      padding: 4,
      backgroundColor:"#0073a6",
      color:"white",
      width:"100%",
      borderRadius: 0,
      "& svg": {
        fontSize: "15px",
        fontWeigth: "bold",
        color: "white",
        backgroundColor:"#0073a6",
      },
    },
    value: {
      padding: "0px 8px",
    },
  }));
  
const ButtonAdd = () => {
  const styles = useStyles();
  const [count, setCount] = useState(0);

  

  return (
    <div className={styles.root}>
      <IconButton
        disabled={count === 1}
        className={styles.iconBtn}
        onClick={() => setCount(count - 1)}
      >
        <Remove />
      </IconButton>
      <span className={styles.value}>{count}</span>
      <IconButton
        className={styles.iconBtn}
        onClick={() => setCount(count + 1)}
      >
        <Add />
      </IconButton>
    </div>
  );
};

export default ButtonAdd;
