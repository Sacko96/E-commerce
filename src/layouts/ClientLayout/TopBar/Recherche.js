import React from "react";
import _ from "lodash";
// import Search from "../../../components/Search";
import {
  makeStyles,
  Button,
  Box,
  CircularProgress,
  InputBase,
  Paper,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    bottom: "3px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  iconButton: {
    position: "absolute",
    right: "1px",
    //backgroundColor:'#210557', uncommnet this one line and change the below to color: "white" to get a differebt design
    color: "black",
    top: "0.5px",
    "&.MuiIconButton-root": {
      fontSize: 10,
      padding: "8px",
    },
  },
  inputInput: {
    height: "42px",
    width: "100%",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0.1)}px)`,
    transition: theme.transitions.create("width"),

    color: "black",
    [theme.breakpoints.between("1900", "2600")]: {
      width: "700px",
    },
    [theme.breakpoints.between("900", "1899")]: {
      width: "400px",
    },
    [theme.breakpoints.between("768", "899")]: {
      width: "300px",
    },
  },
  chercheAutocomplete: {
    width: "700px",
    [theme.breakpoints.only("md")]: {
      width: "400px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "400px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "auto",
    },
   
    
    
  },
}));

export default function Recherche() {
  const classes = useStyles();

  const [value, setValue] = React.useState(""); // TODO nassir
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/trainings/`
      );

      const countries = await response.json();

      if (active) {
        setOptions(countries);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleSearch = (event, value) => {
    event.preventDefault();
    if (_.isObject(value)) {
      setValue(value.title);
    } else {
      setValue(event.target.value);
    }
  };

  const handleOptions = (option) => {
    return option.title ? option.title : value;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    document.getElementById("asynchronous-demo").value = "";
  };

  return (
    <Paper
      onSubmit={(e) => onSubmit(e)}
      component="form"
      className={classes.search}
      style={{ top: "0px" }}
    >
      <Autocomplete
        id="asynchronous-demo"
        className={classes.chercheAutocomplete}
        open={open}
        autoHighlight
        freeSolo
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.title === value.title}
        getOptionLabel={(option) => handleOptions(option)}
        options={options}
        loading={loading}
        onChange={(event, value) => handleSearch(event, value)}
        renderInput={(params) => (
          <Box display="flex">
            <InputBase
              {...params}
              ref={params.InputProps.ref}
              className={classes.inputInput}
              onSubmit={onSubmit}
              placeholder={" Chercher ..."}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
                type: "text",
              }}
            />
          </Box>
        )}
      />
      <IconButton type="submit" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
