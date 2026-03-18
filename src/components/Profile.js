import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <p style={{ padding: "10px" }}>
      Profile Page → Logged in as <b>{user}</b>
    </p>
  );
};

export default Profile;
