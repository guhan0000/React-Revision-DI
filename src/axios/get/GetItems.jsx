import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../api/api";

const GetItems = () => {
  const [result, setResult] = useState([]);
  async function getAllItems() {
    try {
      const response = await api.get("/items");
      console.log(response);

      setResult(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllItems();
  }, []);
  useEffect(() => {
    console.log("useEffect called");

    console.log(result);
  }, [result]);
  return (
    <div>
      GetItems
      {result &&
        result.map((item) => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
            <h3>{item.quantity}</h3>
          </div>
        ))}
    </div>
  );
};

export default GetItems;
