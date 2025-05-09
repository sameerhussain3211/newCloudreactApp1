import React, { useState } from 'react'



export default function TextForm({ newColor = "black", bgColor = "white", showAlert,

 }) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    settext(newText);
    showAlert("Converted to Uppercase", "success")
  }
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    settext(newText);
    showAlert("Text Cleared", "success")
  }
  const handleDownClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    settext(newText);
    showAlert("Converted to LowerCase", "success")
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    settext(event.target.value);
  }
  const [text, settext] = useState("");
  return (
    <div className="textForm" style={{ color: newColor, backgroundColor: bgColor }}>
      <h1>{"Enter your text"}</h1>
      <div className="mb-3" >
        <label htmlFor="myBox" className="form-label">your text should be enterd here</label>
        <textarea className="form-control" placeholder='Enter your Text here' style={{
          color: newColor, // optional text color
          backgroundColor: bgColor// optional background color
        }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

        <button className="btn btn-primary" onClick={handleUpClick} >Convert To Uppercase</button>

        <button className="btn btn-primary" onClick={handleDownClick} >Convert To Lowercase</button>

        <button className="btn btn-primary" onClick={handleClearClick} >Clear</button>

      </div>
      <div className="summary" >
        <h2>Summary of your text </h2>
        <p>your text has <b>{text.length}</b> letters and <b>{text.split(" ").length -1} </b> words </p>
        <p>user can read this text in almost <b> {0.004202 * text.split(" ").length}</b> minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

TextForm.defaultProps = {
  heading: "Default Heading"
};