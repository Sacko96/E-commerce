import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Row from "./Row";

export default function Accordion() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Nom
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Téléphone
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Adresse
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
             Détail d'adresse
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Quantité
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Frais total
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Altitude
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="center">
              Longitude
            </TableCell>
          
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Action
              </TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
         
            <Row />
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
