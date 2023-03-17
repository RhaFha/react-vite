import { useState } from "react";
import { register } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useFormik } from "formik";
import * as Yup from "yup";

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
    <>
      <h1>Registrar nuevo usuario</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="ingrese Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
        ></input>
        <input
          type="password"
          placeholder="ingrese la contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="password"
        ></input>
        <button typeof="submit"> Registrarme </button>
      </form>
    </>
  );
};

export default Register;
