import * as React from "react";

import { useSnackbar } from "notistack";
import {
    Collapse,
    Button,
    Box,
    TextField,
    Grid,
} from "@material-ui/core";

import { Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import useIsMountedRef from "../../hooks/useIsMountedRef";
import {
    Card,
    CardContent,
    Container,
    makeStyles
} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    cardContainer: {
        paddingTop: 80,
    },
    cardContent: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        // minHeight: 370
    },
}));

 const  CreateUser = () => {
    function refreshPage() {
        window.location.reload(false);
    }
    const history = useHistory();

    const classes = useStyles();
    const handlereturn = () => {
        history.push("/ListeTablbe");
    };
    const isMountedRef = useIsMountedRef();
    const { enqueueSnackbar } = useSnackbar();
    return (
        <div>
            <Box>
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('ça doit être un e-mail valide').max(255).required('Email est obligatoire'),
                    })}
                    onSubmit={async (
                        values,
                        { setErrors, setStatus, setSubmitting }
                    ) => {
                        try {
                            const config = {
                                headers: {

                                    "Content-Type": "application/json",
                                    Authorization: `JWT ${localStorage.getItem("access")}`,
                                    Accept: "application/json",
                                },
                            };
                            const { email } = values;
                            const body = JSON.stringify({
                                email,
                            });

                            const response = await axios.update(
                                `http://localhost:8000/emlploye`,
                                body,
                                config,
                            );
                            console.log(response);
                            if (isMountedRef.current) {
                                setStatus({ success: true });
                                setSubmitting(false);
                                enqueueSnackbar("Le produit enregistré avec succés ", {
                                    variant: "success",
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "center",
                                    },
                                    TransitionComponent: Collapse,
                                });
                                handlereturn()
                                refreshPage()

                            }
                        } catch (err) {
                            if (isMountedRef.current) {
                                setStatus({ success: false });
                                setErrors({ submit: err.message });
                                setSubmitting(false);
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
                        >
                            <Container
                                className={classes.cardContainer}
                                maxWidth="sm"
                            >
                                <Card>
                                    <CardContent className={classes.cardContent}>
                                        <typography > Delete  produit</typography>
                                        <Box mt={2} />
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    error={Boolean(touched.email && errors.email)}
                                                    fullWidth
                                                    helperText={touched.email && errors.email}
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.email}
                                                    variant="outlined"
                                                    label=" email"
                                                />
                                            </Grid>

                                        </Grid>
                                        <Box mt={2} />
                                        <Box
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                paddingTop: 20,
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                style={{ color: "red" }}
                                                onClick={handlereturn}
                                            >
                                                Annuler
                                            </Button>
                                            <Box pl={3} />
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Ajouter
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Container>
                            <Box mt={2} />
                        </form>
                    )}
                </Formik>
            </Box>
        </div>
    );
}
export default CreateUser;