import React, { useState } from 'react';

export default function TextForm({ newColor = "black", bgColor = "white", showAlert }) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to Uppercase", "success");
  };

  const handleDownClick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container my-4">
      <div className="card shadow" style={{ color: newColor, backgroundColor: bgColor }}>
        <div className="card-body">
          <h1 className="card-title mb-4">Enter your text</h1>
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Your text should be entered here</label>
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              placeholder="Enter your text here"
              style={{ color: newColor, backgroundColor: bgColor }}
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>

          <div className="btn-group mb-3" role="group" aria-label="Text operations">
            <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-secondary" onClick={handleDownClick}>Lowercase</button>
            <button className="btn btn-danger" onClick={handleClearClick}>Clear</button>
          </div>

          <div className="mt-4">
            <h2>Summary</h2>
            <p><b>{text.length}</b> characters, <b>{text.trim().split(/\s+/).filter(Boolean).length}</b> words</p>
            <p>Estimated read time: <b>{(0.0042 * text.split(/\s+/).filter(Boolean).length).toFixed(2)}</b> minutes</p>
          </div>

          <div className="mt-4">
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

TextForm.defaultProps = {
  heading: "Default Heading"
};
