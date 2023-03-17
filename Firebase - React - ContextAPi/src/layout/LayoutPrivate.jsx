import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {

  const {user, setUser} = useUserContext();

  // const navigate = useNavigate();

  // useEffect( () => {
  //   if(!user) navigate('/');
  // }, [user])

  return <>{ user ? <Outlet /> : <Navigate to='/' />}</>
};

export default LayoutPrivate;
