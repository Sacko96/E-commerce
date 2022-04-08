import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Hidden, makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { checkAuthenticated, load_user } from "../../store/actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop:0,
    //paddingTop: 60,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    // overflow: "auto",
  },
  bac: {
  backgroundColor:"#0073a6"
  },
}));

const DashboardLayout = ({ checkAuthenticated, load_user, children }) => {
  const classes = useStyles();
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated, load_user]);

  return (
    <div className={classes.root}>
      <div className={classes.bac}>
      <TopBar />
      <NavBar />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { checkAuthenticated, load_user })(
  DashboardLayout
);
