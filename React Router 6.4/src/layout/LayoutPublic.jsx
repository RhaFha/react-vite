import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayoutPublic = () => {
  const navigation = useNavigate();

  return (
    <>
      <NavBar />
      <main className="container">
        {navigation.state === "loading" ? (
          <div className="alert alert-info my-5">Loading...</div>
        ) : (
          <Outlet />
        )}
      </main>
      <footer className="container text-center">Footer</footer>
    </>
  );
};

export default LayoutPublic;
