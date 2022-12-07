import "./App.css";
import React, { useState } from "react";
import { StatePractice } from "./Components/TextArea.js";
import DarkTheme from "./Components/DarkTheme/darkTheme";
import Navbar from "./Components/NavBar/navbar";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // weather Dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
      setInterval(() => {
        document.title = "TextUtils is amazing mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - light mode";
      setInterval(() => {
        document.title = "TextUtils is amazing mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <StatePractice
        showAlert={showAlert}
        mode={mode}
        heading="Enter the text to analyze below.."
      />
      {/* <DarkTheme/> */}
    </>
  );
}

export default App;
