import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likecounter, setlikecounter] = useState(0); //input: likecounter and output:SETLIKECOUNTER
  const [doublelikecounter, setlikecounter1] = useState(0);

  function clickhandler() {
    var newlikecounter = likecounter + 1; //LIKE INCREMENT FUNCTION
    setlikecounter(newlikecounter); //OUTPUT
  }

  function doubleclickhandler() {
    var newdoublelike = doublelikecounter + 2;
    setlikecounter1(newdoublelike);
  }
  //DISPLAY FUNCTION . WHEN CLICKED IT WILL SHOW OUTPUT
  return (
    <div className="App">
      <h1 style={{ background: "red" }}> LIKE COUNTER !</h1>
      <button onClick={clickhandler}>like </button> {likecounter}
      <br />
      <button onClick={doubleclickhandler}>doublelike</button>
      {doublelikecounter}
    </div>
  );
}
