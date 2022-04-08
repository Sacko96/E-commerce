import React from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer, makeStyles, Avatar } from "@material-ui/core";
import { Drawer, makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 240,
    top: 64,
    height: "calc(100% - 64px)",
    [theme.breakpoints.down("xs")]: {
      top: 120,
    },
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

export default function Menu() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center" mt={2}>
        <Avatar />
      </Box>
      <Typography
        style={{
          fontSize: "15px",
          paddingTop: "10px",
          textAlign: "center",
        }}
      >
        Idris Sacko
      </Typography>

      <Typography
        style={{
          fontSize: "15px",
          paddingTop: "2px",
          paddingLeft: "10px",
        }}
      >
        idrissasacko0@gmail.com
      </Typography>

      <Typography
        style={{
          fontSize: "15px",
          paddingTop: "2px",
          paddingLeft: "10px",
        }}
      >
        625 22 88 80
      </Typography>

      <Typography
        style={{
          fontSize: "15px",
          paddingTop: "2px",
          paddingLeft: "10px",
        }}
      >
        Liste des commandes
      </Typography>
      <Box pt={2} />
      <Divider />

      <Typography
        style={{
          fontSize: "20px",
          textAlign: "center",
          paddingTop: "10px",
          fontWeight: "bold",
        }}
      >
        Catégories
      </Typography>

      <List>
        {["Ecouteur", "Chargeur", "Anti-casse", "Téléphone", "Autres"].map(
          (text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <div>
        <React.Fragment>
          <IconButton
            onClick={toggleDrawer("left", true)}
            aria-label="cart"
            style={{
              backgroundColor: "black",
              borderRadius: "0px",
              height: "42px",
            }}
          >
            <Badge style={{ color: "white" }}>
              <MenuIcon />
            </Badge>
            <Box style={{ color: "white", fontSize: "15px" }}>Shop</Box>
          </IconButton>

          <Drawer
            anchor="left"
            open={state["left"]}
            classes={{ paper: classes.desktopDrawer }}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
