import React from "react";

const Jsx2 = () => {
  const name = "jhon";
  const age = 28;
  const user = {
    name: "Tom",
    salary: 4000,
  };

  return (
    <div>
      {/* to use javascript codes in this return area 
             we need to use curly brakets */}
      <h2>Name: {name}</h2>
      <h2>age: {age}</h2>
      <p>
        Employee {user.name} earns ${user.salary}
      </p>
    </div>
  );
};

export default Jsx2;
