import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.handleAlert("Extra Spaces been removed", "success");
  };
  const handleUPClick = () => {
    // let str = text;
    console.log("upper case");
    setText(text.toUpperCase());
    props.handleAlert("text has been converted to upperCase", "success");
  };

  const handleOnChange = (event) => {
    console.log("text changed");
    setText(event.target.value);
  };

  const handleLOWClick = () => {
    console.log("lower case");
    setText(text.toLowerCase());
    props.handleAlert("text has been converted to lowerCase", "success");
  };

  const handleClearClick = () => {
    console.log("text cleared");
    setText("");
    props.handleAlert("text has been cleared", "success");
  };
  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div className=" container mb-3">
        <h1>Enter the text to Analyze</h1>
        <textarea
          style={{
            borderWidth:'3px',
            backgroundColor:
              props.mode === "dark" ? "rgb(29, 26, 26)" : "#e7e3e3" ,
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter the text"
        ></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUPClick}>
          change To UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLOWClick}>
          change To LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          clear Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my3">
        <p>
          words = {text.split(" ").filter((word)=>{return word.length > 0;}).length} , characters = {text.length}
        </p>
      </div>
      <div className="container my-3">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
