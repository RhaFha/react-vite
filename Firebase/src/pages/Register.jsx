import { useState } from "react";
import { register } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import AddAPhoto from "@mui/icons-material/AddAPhoto";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Must be 6 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      onSubmit(values, setErrors);
    },
  });

  const { user } = useUserContext();
  useRedirectActiveUser(user, "/dashboard");

  const onSubmit = async (values, setErrors) => {
    try {
      const credentialUser = await register(values);
      console.log(credentialUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ mt: 8, maxWidth: 400, mx: "auto", textAlign: "center" }}>
      <Avatar sx={{ mx: "auto", bgcolor: "#111" }}>
        <AddAPhoto />
      </Avatar>
      <Typography variant="h5" component="h1">
        Registrarme
      </Typography>
      <Box onSubmit={formik.handleSubmit} sx={{ mt: 1 }} component="form">
        <TextField
          type="text"
          placeholder="test@test.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
          label="Ingrese email..."
          fullWidth
          sx={{ mb: 2 }}
          error={formik.errors.email !== undefined}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />
        <TextField
          type="password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="password"
          label="Ingrese la contraseña..."
          fullWidth
          sx={{ mb: 2 }}
          error={formik.errors.password !== undefined}
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />

        <LoadingButton
          variant="contained"
          type="submit"
          fullWidth
          loading={formik.isSubmitting}
        >
          Registrarme
        </LoadingButton>
        <Button
          variant="text"
          type="submit"
          fullWidth
          component={Link}
          to="/"
          sx={{ mt: 2 }}
        >
          ¿Ya tienes cuenta? Ingresa
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
