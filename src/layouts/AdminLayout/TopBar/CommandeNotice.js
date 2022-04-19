import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton, SvgIcon, Tooltip } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    marginRight: theme.spacing(3),
  },
  badge: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5,
  },
}));

export default function CommandeNotice() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Tooltip title="Commande en Dehors du restaurant">
        <Badge classes={{ badge: classes.badge }} >
          <IconButton color="inherit">
            <SvgIcon fontSize="small">
            <NotificationsIcon />
            </SvgIcon>
          </IconButton>
          <span
            style={{
              position: "absolute",
              top: "-4px",
              fontSize: "15px",
              right: "0px",
            }}
            color="black"
          >
            0
          </span>
        </Badge>
      </Tooltip>
    </React.Fragment>
  );
}
