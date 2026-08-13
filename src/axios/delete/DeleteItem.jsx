import axios from "axios";
import React, { useEffect } from "react";

const DeleteItem = () => {
  const id = "6a7d5c0f63d7494ca121e89b";
  async function deleteItem(id) {
    try {
      console.log(id);

      const response = await axios.delete(
        `http://localhost:5000/api/items/${id}`,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    deleteItem(id);
  }, []);
  return <div>DeleteItem</div>;
};

export default DeleteItem;
