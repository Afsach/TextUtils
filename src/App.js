import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import PropTypes from 'prop-types';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';

const App = () => {
  const [mode, setMode] = useState("light")
  const [theme, setTheme] = useState("Enable Darkmode")
  const [alertMessage, setAlertMessage] = useState(null);

  const showAlert = (message, type) => {
    setAlertMessage({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlertMessage(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#151f28";
      setTheme("Enable Lightmode")
      showAlert("Dark Mode has Enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      setTheme("Enable Darkmode")
      showAlert("Light Mode has Enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} theme={theme} />
        <Alert alertMessage={alertMessage} />
        <Routes>
          <Route exact path="/" element={
            <div className='container mt-3'>
              <Textform heading="Try TextUtils to munipulate your text and copy it" mode={mode} showAlert={showAlert} />
            </div>
          } />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

// setting type of props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}


// setting default props value if not set
Navbar.defaultProps = {
  title: "Set Title Here",
  about: "About"
}