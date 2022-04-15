import React, { useState } from "react";
import _ from "lodash";
import clsx from "clsx";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  makeStyles,
  FormControl,
} from "@material-ui/core";
import InputMask from "react-input-mask";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {},
  editorContainer: {
    marginTop: theme.spacing(3),
  },
  editor: {
    "& .ql-editor": {
      height: 400,
    },
  },
}));


const GeneralSettings = ({ className, user, ...rest }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [resumeContent, setResumeContent] = useState(user ? user.resume : "");

  const [state, setstate] = useState(false);

  
  return (
    <Formik
      enableReinitialize
      initialValues={{
        first_name: user ? user.first_name : "",
        last_name: user ? user.last_name : "",
        email: user ? user.email : "", 
        phone: user ? user.phone : "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        first_name: Yup.string().max(255).required("Veillez donner votre Prénom"),
        last_name: Yup.string()
                  .max(255)
                  .required("Veillez donner votre Nom"),
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("votre Email est obligatoire"),
        phone: Yup.string()
          .min(12, "min 9 chiffres")
          .max(12)
          .required("Phone is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.getItem("access")}`,
            Accept: "application/json",
          },
        };
        try {
          // NOTE: Make API request

          const {first_name, last_name,phone, email } = values;
          const body = JSON.stringify({
            first_name, last_name,phone, email
          });
          
          const res = await axios.put(
            `${process.env.REACT_APP_API_URL}/api/accounts/update`,
            body,
            config
          );
          setStatus({ success: true });
          setSubmitting(false);
          setstate(true);
          enqueueSnackbar("Profile updated", {
            variant: "success",
          });
        } catch (err) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Card className={clsx(classes.root, className)} {...rest}>
            <CardHeader title="Profil" />
            <Divider />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.first_name && errors.first_name)}
                    fullWidth
                    helperText={touched.first_name && errors.first_name}
                    label="Prénom "
                    name="first_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.first_name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.last_name && errors.last_name)}
                    fullWidth
                    helperText={touched.last_name && errors.last_name}
                    label="Nom"
                    name="last_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.last_name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>

                <FormControl style={{ width: "100%" }}>
                    <InputMask
                      mask="999-99-99-99"
                      disabled={false}
                      maskChar=" "
                      value={values.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      {() => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          label="Téléphone"
                          name="phone"
                        />
                      )}
                    </InputMask>
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={
                      touched.email && errors.email
                        ? errors.email
                        : ""
                    }
                    label="Email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box p={2} display="flex" justifyContent="flex-end">
              <Button
                color="primary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                Modifier
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
};

export default GeneralSettings;
