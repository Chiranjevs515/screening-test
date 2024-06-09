import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './components/Navbar'
function App() {
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

export default App
