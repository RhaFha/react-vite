import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

//pertenece a config de firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);
  console.log("Desde UserContext");
  useEffect(() => {
    const unsuscrite = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsuscrite;
  }, []);

  if (user === false) return <h1>Loading app...</h1>;

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
