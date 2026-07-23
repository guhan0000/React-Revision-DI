import React, { useMemo } from "react";
// sorting emp by descending order of ids
const ObjectDemo = () => {
  const empList = [
    { id: 101, name: "Naresh", dept: "IT" },
    { id: 2, name: "Guhan", dept: "HR" },
    { id: 200, name: "Muthu" },
  ];
  const sortedEmp = useMemo(() => {
    return [...empList].sort((a, b) => b.id - a.id);
  }, []);
    // empList.push({ id: 300, name: "kavashkar", dept: "IT" });
  return (
    <>
      <div>ObjectDemo</div>
      {empList.map((emp) => (
        <h1 key={emp.id}>{emp.name}</h1>
      ))}
    </>
  );
};

export default ObjectDemo;
