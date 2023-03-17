import { Button } from "@mui/material";
import { logout } from "../config/firebase";

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Dashboard(Ruta protejida)</h1>
      <div>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
