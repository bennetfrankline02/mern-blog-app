import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <h2 style={{ background: "red", padding: "30px" }}>
      Welcome, {user}
    </h2>
  );
};

export default Navbar;

