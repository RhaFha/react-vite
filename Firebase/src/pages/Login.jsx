import { useState } from "react";
import { login } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
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
      const credentialUser = await login(values);
      console.log(credentialUser);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrors({ email: "Usuario no registrado" });
      }
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="ingrese Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <input
          type="password"
          placeholder="ingrese la contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="password"
        ></input>
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button type="submit"> Login </button>
      </form>
    </>
  );
};

export default Login;
