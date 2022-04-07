import React from 'react';
import {
  makeStyles
} from '@material-ui/core';
import Footer from './Footer';

const useStyles = makeStyles(({ palette, typography }) => ({
  top: {
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
 
}));


function FooterView () {
  const classes = useStyles();
  return (

  <div> 
    <Footer />
  </div>
  )
}
export default FooterView