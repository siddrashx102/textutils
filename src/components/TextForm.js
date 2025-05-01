import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState("");
  //   Click event handler to convert text to uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to uppercase!");
  };
  //   Click event handler to convert text to lowercase
  const handleLoClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lowercase!");
  };

  //   Change event handler to update the text state
  const handleChange = (event) => {
    setText(event.target.value);
  };

  //count words and characters
  const wordCount = (text) => {
    const words = text.split(" ");
    return words.filter((word) => word !== "").length;
  };

  return (
    <div
      className="container"
      style={{ color: mode == "dark" ? "white" : "black" }}
    >
      <h2 className="my-3">{heading}</h2>
      <textarea
        className="form-control"
        onChange={handleChange}
        value={text}
        id="text-form"
        rows="8"
      ></textarea>
      <button
        type="button"
        className="btn btn-sm btn-primary mt-3 me-2"
        onClick={handleUpClick}
      >
        Uppercase
      </button>
      <button
        type="button"
        className="btn btn-sm btn-primary mt-3 mx-2"
        onClick={handleLoClick}
      >
        Lowercase
      </button>

      <p className="lead my-3">
        {wordCount(text)} words and {text.length} characters
      </p>
      <p className="lead">
        <span>{Math.round(text.split(" ").length * (1 / 238))}</span> minutes to
        read
      </p>
      <h2 className="my-3">Preview</h2>
      <p>{text == "" ? "Enter your text to preview here." : text}</p>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
