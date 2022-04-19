import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import Logo from '../../../components/Logo/index';
import CommandeNotice from './CommandeNotice';

const useStyles = makeStyles((theme) => ({
  root: {
   
  },
  toolbar: {
    minHeight: 64
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize="small" style={{color:"white"}} >
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        
       
          <RouterLink to="/dashboardAdmin">
            <Logo />
          </RouterLink>
       
        <Box
          ml={2}
          flexGrow={1}
        />
        <CommandeNotice/>
        <Box ml={2}>
         
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

TopBar.defaultProps = {
  onMobileNavOpen: () => {}
};

export default TopBar;
