import React, { useState } from "react";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { connect } from "react-redux";
import {
  Box,
  Button,
  Grid,
  FormHelperText,
  TextField,
  Collapse,
} from "@material-ui/core";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import PhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import {
  load_user,
  signup,
  signupSuccess,
  loginSuccess,
} from "../../../store/actions/auth";
import { useSnackbar } from "notistack";
import axios from "axios";
import CustomPhoneNumber from "../../../components/PhoneInput";
import 'react-phone-number-input/style.css'

const RegisterPage = ({
  className,
  isAuthenticated,
  signup,
  signupSuccess,
  load_user,
  loginSuccess,
  ...rest
}) => {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const [phoneValue, setPhoneValue] = useState()

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
        //   phone: "",
          email: "",
          password: "",
          re_password: "",
          policy: true,
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          first_name: Yup.string().required("Le prénom est obligatoire"),
          last_name: Yup.string().required("Le nom est obligatoire"),
        //   phone: Yup.string().required("le numèro est obligatoire"),
          email: Yup.string().max(255).required("Mot de passe obligatoire"),
          re_password: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
          policy: Yup.boolean().oneOf([true], "cette case doit être cocher"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            const {
              email,
              password,
              re_password,
              first_name,
              last_name,
            } = values;
            const body = JSON.stringify({
              first_name,
              last_name,
              email,
              phone:phoneValue,
              password,
              re_password,
            });
            const res = await axios.post(
              `http://127.0.0.1:8000/auth/users/`,
              body,
              config
            );
            signupSuccess(res.data, password);
            if (isMountedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
              enqueueSnackbar(
                "Veillez consulter votre agence principale pour activer votre compte",
                {
                  variant: "success",
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                  TransitionComponent: Collapse,
                }
              );
            }
          } catch (err) {
            setStatus({ success: false });
            if (err.response.data.password)
              setErrors({ submit: err.response.data.password[0] });
            else if (err.response.data.email) {
              setErrors({
                submit: "Un compte avec ce email existe déjà",
              });
            }
            setSubmitting(false);
            enqueueSnackbar("veillez verifier vos informations", {
              variant: "error",
              anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              },
              TransitionComponent: Collapse,
            });
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
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                <TextField
                  error={Boolean(touched.first_name && errors.first_name)}
                  fullWidth
                  helperText={touched.first_name && errors.first_name}
                  label="Prénom"
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
            </Grid>
            <Box>
              {/* <FormControl style={{ width: "100%" }}>
                <InputMask
                  mask="999-99-99-99"
                  disabled={false}
                  maskChar=" "
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                >
                  {() => (
                    <TextField
                      error={Boolean(touched.phone && errors.phone)}
                      fullWidth
                      helperText={touched.phone && errors.phone}
                      label="Téléphone"
                      margin="normal"
                      name="phone"
                      type="phone"
                      variant="outlined"
                    />
                  )}
                </InputMask>
              </FormControl> */}
              <Box mt={2}>
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  placeholder="Enter phone number"
                  value={phoneValue}
                  containerStyle={{ backgroundColor: "black" }}
                  onChange={setPhoneValue}
                  defaultCountry="GN"
                  error={
                    phoneValue
                      ? isValidPhoneNumber(phoneValue)
                        ? undefined
                        : "Invalid phone number"
                      : "Phone number required"
                  }
                  inputComponent={CustomPhoneNumber}
                />
              </Box>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Addresse Email"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Mot de passe"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.re_password && errors.re_password)}
                fullWidth
                helperText={touched.re_password && errors.re_password}
                label="Confirmation mot de passe"
                margin="normal"
                name="re_password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.re_password}
                variant="outlined"
              />
            </Box>
            {Boolean(touched.policy && errors.policy) && (
              <FormHelperText error>{errors.policy}</FormHelperText>
            )}
            {errors.submit && (
              <Box>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box mt={2}>
              <Button
                // color="primary"
                style={{backgroundColor:"#0073a6", color:"white"}}
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                S'inscrire
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

RegisterPage.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  signup,
  signupSuccess,
  load_user,
  loginSuccess,
})(RegisterPage);
