import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div>
      ProductDetails
      <h5>{id}</h5>
    </div>
  );
};

export default ProductDetails;
