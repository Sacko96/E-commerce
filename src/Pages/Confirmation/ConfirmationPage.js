import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import {
  Avatar,
  Box,
  CardMedia,
  Hidden,
  Paper,
  TableCell,
  TableRow,
} from "@mui/material";
import ButtonAdd from "../DetailProduit/ButtonAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  name: {
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    fontWeight: "bold",
    fontSize: 14,
    color: "blue",
    margin: "0 0 8px 0",
    [theme.breakpoints.down("xs")]: { fontSize: 11 },
  },
  tailleprix: {
    fontSize: 14,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: { fontSize: 10 },
  },
  image: {
    width: "200px",
    height: "1000px",
    objectFit: "contain",
  },
}));

const ConfirmationPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper >
      <TableRow>
        <TableCell component="th" scope="row" style={{ padding: "4px" }}>
          <Box display={"flex"} justifyContent="flex-start">
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ width: "40%" }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCYuLTI6afeiY_mtCgXuJPSYVRPJsIIFlWA&usqp=CAU"
            />
            <Box ml={1}>
              <Typography className={classes.name}>
                Samsung glass A12
              </Typography>
              <Typography className={classes.tailleprix}>
                Meilleur phone de la place
              </Typography>
              <Typography className={classes.tailleprix}>1 000 Gnf</Typography>
              <ButtonAdd />
            </Box>
          </Box>
        </TableCell>

        <TableCell>
          {/* <DeleteBoutton id={orderId} local={local} /> */}
        </TableCell>
      </TableRow>
      </Paper>
    </Container>
  );
};

export default ConfirmationPage;
