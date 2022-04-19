import React, { useState } from "react";
import { 
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Container,
  Card,
  IconButton,
  InputBase
} from "@material-ui/core";
import {
  Search as SearchIcon
} from 'react-feather';
import {formatDate} from '../../../utils/common';


const useStyles = makeStyles(({ breakpoints }) => ({
  heading: {
    fontWeight: 900,
    fontSize: "1.60rem",
    textAlign: "center",
    [breakpoints.up("sm")]: { textAlign: "center" },
    [breakpoints.up("md")]: { fontSize: "2.20rem" },
  },
  table: {
    minWidth: "100%",
    fontSize: "100px",
    [breakpoints.down("xs")]: { fontSize: 1 },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

export default function ListAllCommande({ data }) {
  const classes = useStyles();
  const  [searchPlat, setSearchPlat] = useState("");
  return (
    <Container maxWidth="lg">
        <Box mt={5} />
      <Card>
      <Box
        p={2}
        minHeight={56}
        display="flex"
        alignItems="center"
        justifyContent= 'space-between'
      >
      <Paper component="form" className={classes.search}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
         <SearchIcon />
          </IconButton>
         <InputBase
        className={classes.input}
        placeholder="Entrer le Nom d'un Plat"
        onChange={(event)=>{
          setSearchPlat(event.target.value);
        }}
      />    
    </Paper>
    </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Numero</TableCell>
              <TableCell align="center">Nom du client</TableCell>
              <TableCell align="center">Nom du plat(s)</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Heure</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
              <TableRow >
                <TableCell align="center">
                  ddd
                </TableCell>
                <TableCell align="center">d</TableCell>
                <TableCell align="center">
                 d
                    <React.Fragment>
                     ddddddddd
                    </React.Fragment>
               
                </TableCell>
                <TableCell align="center">cccc</TableCell>
                <TableCell align="center">asds</TableCell>
                <TableCell align="center">czxc</TableCell>
                <TableCell align="center">sdd</TableCell>
              </TableRow>
             
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
      <Box mb={5} />
    </Container>
  );
}
