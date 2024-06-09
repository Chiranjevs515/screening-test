import React, { useEffect } from "react";
import './navbar.css';
import { useState } from "react";
export default function ToggleButton() {
    const [isToggled, setIsToggled] = useState(false);
    const handleChange = () => {
        
      setIsToggled(!isToggled);
    };
    return (
        <div className={isToggled ? "white" : "black"}>
      <button onClick={handleChange} className={`toggle-button ${isToggled ? 'on' : 'off'}` } >
        {isToggled ? 'ON' : 'OFF'}
      </button>
      </div>
    );
  }