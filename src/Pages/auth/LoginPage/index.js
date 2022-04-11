import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import LoginForm from './LoginForm';
import bacimage from '../../../components/Logo/images/money3.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundImage: `url(${bacimage})`,
    width: "100%",
    height:"100%",
    // backgroundRepeat: "no-repeat",
    //  backgroundSize: "cover",
  },
  cardContainer: {
    paddingTop: 40,
    paddingBottom:40,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 370
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title="Se connecter:"
    >
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Card>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
            >
            </Box>
            <Box
              flexGrow={0.6}
            >
              <LoginForm />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default LoginPage;
