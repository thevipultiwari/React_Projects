import React from "react";

const App = () => {
  const student = {
    name: "Vipul",
    age: 18,
    rollNo: "21",
  };

  localStorage.setItem("student", JSON.stringify(student));
  const local = JSON.parse(localStorage.getItem("student"));
  console.log(local);
  localStorage.removeItem("student")

  return <div>App</div>;
};

export default App;
