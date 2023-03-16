import { Outlet } from "react-router-dom";

const LayoutRoot = () => {
  return (
    <>
      <div>
        <h1>NavBar</h1>
      </div>
      <Outlet />
      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default LayoutRoot;
