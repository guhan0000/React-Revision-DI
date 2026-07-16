import React from "react";

const CourseCard = ({ children }) => {
  return (
    <div style={{ border: "2px dotted green", backgroundColor: "wheat" }}>
      {children}
    </div>
  );
};

export default CourseCard;
