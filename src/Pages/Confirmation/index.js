import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Page from "../../components/Page";
import ConfirmationPage from "./ConfirmationPage";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const ConfirmationView = (props) => {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title="Confirmation paiement"
      content="Page de confirmation de paiement"
    >
      <Container maxWidth="md">
        <ConfirmationPage />
      </Container>
    </Page>
  );
};

export default ConfirmationView;
