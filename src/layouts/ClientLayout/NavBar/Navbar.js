import Logo from "../../../components/Logo";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as ReactRouteLink } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Hidden from "@material-ui/core/Hidden";
import { Button, Link, withWidth, Box } from "@material-ui/core";
import { IoCloseOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import FaUserAlt from '@material-ui/icons/AccountCircleOutlined';
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
