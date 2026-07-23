import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogout() {
    dispatch({ type: "LOGOUT" });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }
  return (
    <>
      <div>Profile</div>
      <h2>{state.user}</h2>
      {state.msg && <h3>{state.msg}</h3>}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
