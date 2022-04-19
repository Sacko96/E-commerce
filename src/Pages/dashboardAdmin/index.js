import React, { useCallback, useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  makeStyles,
  useTheme,
  AppBar,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import TabPanels from "../../components/TabPanels";
import Header from "./Header";
import Tables from "./Tables";
import _ from "lodash";
import Overview from "./Overview";
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "96%",
    marginLeft: "20px",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [reload, setReload] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Header />

      <Box mb={10}>
        <Overview />
      </Box>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Nouvelles commandes" {...a11yProps(0)} />
          <Tab label="Commandes en cours de livraison" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanels value={value} index={0} dir={theme.direction}>
          <Tables />
        </TabPanels>
        <TabPanels value={value} index={1} dir={theme.direction}>
          <Tables />
        </TabPanels>
      </SwipeableViews>
    </div>
  );
}
