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
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;
