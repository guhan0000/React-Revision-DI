import axios from "axios";
import React, { useState } from "react";

const UpdateUser = () => {
  const [result, setResult] = useState(null);
  const requestBody = {
    city: "coimbatore",
    state: "TN",
    company: "AI",
    team: "market",
  };
  const updateUser = async () => {
    try {
      const response = await axios.put(
        "https://ca4a1c7df202b193b845.free.beeceptor.com/api/users/2d444ba16cfd92f656fc",
        requestBody,
      );
      console.log(response);

      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //   updateUser(); will call multiple times during every render
  return (
    <div>
      UpdateUser
      <button
        onClick={() => {
          updateUser();
        }}
      >
        update
      </button>
    </div>
  );
};

export default UpdateUser;
