import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//hi this a test app
function App() {
  const [alert, setalert] = useState(null);
  const [normalStyle, setNormalStyle] = useState({
    color: "black",
    backgroundColor: "white",
    text: "DarkMode"
  });
  const showAlert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null);
    }
      , 1500);

  }

  const handleDarkMode = () => {
    if (normalStyle.backgroundColor === "white") {
      setNormalStyle({
        color: "white",
        backgroundColor: "black",
        text: "LightMode",

      });
      document.title = "TextUtils - DarkMode";
      showAlert("Dark Mode is enabled", "success")
    }
    else {
      setNormalStyle({
        color: "black",
        backgroundColor: "white",
        text: "DarkMode"
      });
      showAlert("normal Mode is enabled", "success")
      document.title = "TextUtils - LightkMode";
    }

  };

  return (
    <div className="overall" style={{ color: normalStyle.color, backgroundColor: normalStyle.backgroundColor }}>
       <Navbar
        title="hello"
        aboutText="AboutThis"
        newColor={normalStyle.color}
        bgColor={normalStyle.backgroundColor === 'white' ? '#ADD8E6' : '#666666'}
        onClick={handleDarkMode}
        normalStyle={normalStyle}
      />
      <Alert alert={alert} />
     
      <div className="container">
        <TextForm heading="Enter your text here" newColor={normalStyle.color} bgColor={normalStyle.backgroundColor} showAlert={showAlert} />
      </div>

    </div>
  );
}

export default App;
