import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayoutRoot = () => {
  return (
    <>
      
      <NavBar />
      <Outlet />
      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default LayoutRoot;
