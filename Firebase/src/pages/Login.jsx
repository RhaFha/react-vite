import { useState } from "react";
import { login } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const { user } = useUserContext();
  useRedirectActiveUser(user, "/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentialUser = await login(loginUser);
      console.log(credentialUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese Email"
          value={loginUser.email}
          onChange={(e) =>
            setLoginUser({ ...loginUser, email: e.target.value })
          }
        ></input>
        <input
          type="password"
          placeholder="ingrese la contraseña"
          value={loginUser.password}
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
        ></input>
        <button typeof="submit"> Login </button>
      </form>
    </>
  );
};

export default Login;
