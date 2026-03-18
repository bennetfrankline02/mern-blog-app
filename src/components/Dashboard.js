import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div style={{ padding: "30px" }}>
      <button onClick={() => setUser("PaulWalker")}>
        Login as PaulWalker
      </button>
      <button onClick={() => setUser("Admin")} style={{ marginLeft: "10px" }}>
        Login as Admin
      </button>
    </div>
  );
};

export default Dashboard;
