import React from "react";
import clsx from "clsx";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { Formik } from "formik";
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  makeStyles,
  Collapse,
} from "@material-ui/core";
import { connect } from "react-redux";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import { load_user, loginSuccess } from "../../../store/actions/auth";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useSelector } from "../../../store";
// import { getRestoSlug } from "../../../store/actions/search";
import { useHistory  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  googleButton: {
    backgroundColor: theme.palette.common.white,
  },
  providerIcon: {
    marginRight: theme.spacing(2),
  },
  divider: {
    flexGrow: 1,
  },
  dividerText: {
    margin: theme.spacing(2),
  },
}));

const LoginForm = ({
  className,
  loginSuccess,
  load_user,
  // getRestoSlug,
  ...rest
}) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const userAdd = useSelector((state) => state.adresse);
  const history = useHistory();
  
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email n'est pas valide")
            .max(255)
            .required("Email est obligatoire "),
          password: Yup.string()
            .max(255)
            .required("Le mot de passe est obligatoire"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          try {
            const { email, password } = values;
            const body = JSON.stringify({ email, password });
            const res = await axios.post(
              `http://127.0.0.1:8000/api/token/`,
              body,
              config
            );
            loginSuccess(res.data);
            load_user();

            setStatus({ success: true });
            setSubmitting(false);
            history.push("/listdevise");
          } catch (err) {
            if (isMountedRef.current) {
              setStatus({ success: false });
              console.log(err.response.data);
              setErrors({
                submit:
                  err.response.data.detail && "Email ou mot de passe incorrect",
              });
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
          <form
            noValidate
            onSubmit={handleSubmit}
            className={clsx(classes.root, className)}
            {...rest}
          >
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label=" Addresse Email"
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
              label="Votre mot de passe"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box mt={2}>
              <Button
                style={{backgroundColor:"#0073a6", color:"white"}}
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Connexion
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  load_user,
  loginSuccess,
  // getRestoSlug,
})(LoginForm);
