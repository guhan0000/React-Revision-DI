import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProds } from "./store/slice/prodSlice";

const ProdList = () => {
  const { list, status, error } = useSelector((state) => state.prod);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProds());
    }
  }, [status, dispatch]);
  if (status === "failed") {
    return <h1>{error}</h1>;
  }
  if (status === "loading") {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      {list.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <h3>{item.price}</h3>
          <h3>{item.quantity}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProdList;
