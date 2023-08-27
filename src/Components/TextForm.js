import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("upper case was clicked", text);
    props.showAlert("Converted to Uppercase!", "success");
    let newText = text.toUpperCase();

    setText(newText);
  };

  const handleLowClick = () => {
    console.log("lower case was clicked", text);
    props.showAlert("Converted to Lowercase!", "success");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("clear button was clicked", text);
    props.showAlert("Text has been cleared!", "danger");
    let newText = " ";
    setText(newText);
  };

  const handleCopyClick = () => {
    console.log("copy button was clicked", text);
    props.showAlert("Text has been Copied to Clipboard!", "success");
    let ctext = document.getElementById("myBox");
    ctext.select();
    navigator.clipboard.writeText(ctext.value);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
            placeholder="Enter your text Here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          Words, {text.trim().length} Characters and{" "}
          {0.008 * text.split(" ").filter((value) => value !== "").length}{" "}
          Minutes Read{" "}
        </p>
        {/* <p>
          {text.split(" ").length} Words, {text.length} Characters and{" "}
          {0.008 * text.split(" ").length} Minutes Read
        </p> */}
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Preview
        </h2>
        <p>{text.length > 0 ? text : "Enter Something to Preview it"}</p>
      </div>
    </>
  );
}
