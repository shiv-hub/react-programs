import React from "react";
import Person from "./Person/Person";
import "./App.css";

const switchHandler = () => {
  console.log("switch Handler Click");
};

function App() {
  return (
    <div className="App">
      <button onClick={switchHandler}>Switch</button>
      <p>Hello There...!</p>
      <Person name="Shiv">This is my message</Person>
    </div>
  );
}

export default App;
