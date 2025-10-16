import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
    <div className="container">
      <Card
        user="Vipul Tiwari"
        age={23}
        img="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=1024x1024&w=is&k=20&c=iX0adGZVKv9wS5yrs0-hpFsJBnRAacZa1DcDZ0I9Bqk="
        p="I am a software developer and i also have great love for swimming."     
      />
      <Card
        user="Aman Kumar"
        age={20}
        img="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4="
        p="I play football,basketball and cricket etc and i am a college undergrad."
      />
      <Card
        user="Nikhil"
        age={26}
        img="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
        p="I am a cloud Enginner in Koch Enterprised and I am a medium fast bowler as well."
      />
      
      </div>
      <div className="R">
       <p>Mad with ❤️ by Vipul Tiwari using Reactjs.</p> 
        <p>The moto was to learn components and props.</p>
      </div>
      </>
  );
};

export default App;
