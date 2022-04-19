import React from "react";
import { formatDate } from "../../utils/common";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  makeStyles,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import axios from "axios";
import useIsMountedRef from "../../hooks/useIsMountedRef";
import { useSelector } from "../../store";
import { connect } from "react-redux";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row() {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const isMountedRef = useIsMountedRef();
  

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">
         moi
        </TableCell>
        <TableCell align="center">toi</TableCell>
        <TableCell align="center" scope="row">
         dff
        </TableCell>
        <TableCell align="center">ews</TableCell>
        <TableCell align="center">dddddd</TableCell>
        <TableCell align="center" scope="row">
         23333 Gnf
        </TableCell>
        <TableCell align="center" scope="row">
      dsd
        </TableCell>
        <TableCell align="center" scope="row">
        hdshhs
        </TableCell>
        <TableCell align="right">
          <Box display="flex" justifyContent="center" marginLeft="20px">
            
              <Box mr={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                 
                >
                  Livrer
                </Button>
              </Box>
           
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                style={{ fontWeight: "bold" }}
                variant="h4"
                gutterBottom
                component="div"
              >
                Detail de la commande
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }}>plat</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Quantité
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }} scope="row">
                      Prix U
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                    fff
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Quartier
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Instruction du client
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}> Heure</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Date commande
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                
                    <TableRow >
                      <TableCell>e</TableCell>
                      <TableCell align="center"> eeeee</TableCell>
                      <TableCell scope="row">
                       12222 Gnf
                      </TableCell>
                      <TableCell>ecout</TableCell>
                      <TableCell>12</TableCell>
                      
                      <TableCell align="center">
                       ffffff
                      </TableCell>
                      <TableCell align="center">
                      dddddddddd
                      </TableCell>
                      <TableCell align="center">
                       ffff
                      </TableCell>
                    </TableRow>
                 
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default Row;
