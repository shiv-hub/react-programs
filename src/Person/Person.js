import React from "react";

const person = (props) => {
  return (
    <div>
      <h1>Hey person method is working</h1>
      <p>Hey {props.name}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
