import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Card,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  }
}));

const Overview = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h1"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Prix Total de Commandes par jour
          </Typography>
          <div className={classes.valueContainer}>
            <Typography
              variant="h1"
              color="textPrimary"
            >
            gggggg
            </Typography>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h1"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
           Prix Total de frais d'expédition par jour
          </Typography>
          <div className={classes.valueContainer}>
            <Typography
              variant="h1"
              color="textPrimary"
            >
           gggggg
            </Typography>
          </div>
        </Grid>
        <Grid
          className={classes.item}  
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h1"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Nombre total de Commandes par jour
          </Typography>
          <div className={classes.valueContainer}>
            <Typography
              variant="h1"
              color="textPrimary"
            >
             1233
            </Typography>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h1"
            gutterBottom
            variant="overline"
            color="textSecondary"
          >
            Nombre total de commandes en cours de preparation par jour
          </Typography>
          <div className={classes.valueContainer}>
            <Typography
              variant="h1"
              color="textPrimary"
            >
         gg
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

Overview.propTypes = {
  className: PropTypes.string
};

export default Overview;
