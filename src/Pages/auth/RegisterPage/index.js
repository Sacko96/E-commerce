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
import RegisterForm from './RegisterForm';
import bacimage from '../../../components/Logo/images/money3.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundImage: `url(${bacimage})`,
    width: "100%",
    height:"100%",
    // backgroundRepeat: "no-repeat",
    //  backgroundSize: "cover",
     
  },

  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400
  },
  cardContainer: {
    paddingTop: 40,
    paddingBottom:40,
  },
}));

const RegisterView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="S'enregistrer"
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
              flexGrow={1}
              mt={3}
            >
              <RegisterForm/>
            </Box>
            <Box my={1}>
            
            </Box>
            <Link
              to="/login"
            >
            j'ai déjà un compte
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default RegisterView;
