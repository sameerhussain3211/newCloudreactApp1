import React, { useState } from 'react';
import './ToggleSwitch.css'; // Make sure to import the CSS

function ToggleSwitch(props) {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
        onClick={props.onchange}
      />
      <span className="slider"></span>
    </label>
  );
}

export default ToggleSwitch;
