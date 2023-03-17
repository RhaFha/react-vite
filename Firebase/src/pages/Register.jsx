import { useState } from "react";
import { register } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    email: "",
    password: "",
  });

  const { user } = useUserContext();
  console.log(user);
  useRedirectActiveUser(user, "/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentialUser = await register(registerUser);
      console.log(credentialUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Registrar nuevo usuario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese Email"
          value={registerUser.email}
          onChange={(e) =>
            setRegisterUser({ ...registerUser, email: e.target.value })
          }
        ></input>
        <input
          type="password"
          placeholder="ingrese la contraseña"
          value={registerUser.password}
          onChange={(e) =>
            setRegisterUser({ ...registerUser, password: e.target.value })
          }
        ></input>
        <button typeof="submit"> Registrarme </button>
      </form>
    </>
  );
};

export default Register;
