import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>About</h4>
      {/* crct*/}
      <Link to={"team"}>Team</Link>
      <br />
      <Link to={"achievements"}>Achievements</Link>
      <br />
      {/* <Link to={"/history"}>History</Link>  wrong*/}
      <Link to={"history"}>History</Link>
      <Outlet />
    </div>
  );
};

export default About;
