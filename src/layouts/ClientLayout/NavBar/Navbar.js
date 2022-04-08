import PropTypes from "prop-types";
import React from "react";
import Hidden from "@material-ui/core/Hidden";
import {withWidth, Box } from "@material-ui/core";
import Recherche from "../TopBar/Recherche";
import Menu from "../TopBar/Menu";


const Navbar = () => {

  return (
    <>
      <Hidden smUp>
        <div
          style={{
            gap: "0",
            padding: "10px",
            background: "#0073a6",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Menu />
          </div>
          <Box ml={2} />
          <div>
            <Recherche />
          </div>
        </div>
      </Hidden>
    </>
  );
};

Navbar.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Navbar);
