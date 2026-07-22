import React from "react";
import { useParams } from "react-router-dom";

const Student = () => {
  const { id, name } = useParams();
  return (
    <>
      <h3>Student Id{id}</h3>
      <h3>Student Name{name}</h3>
    </>
  );
};

export default Student;
