// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // light mode by default
  const [alert, setAlert] = useState(null);

  const showAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      console.log("Dark mode has been enabled");
      // showAlert("Dark mode has been enabled");
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled");
      console.log("Dark mode has been enabled");
    } else {
      // showAlert("Light mode has been enabled");
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled");
    }
  };

  // const changeTheme = (theme) => {
  //   console.log(`Theme changed to ${theme}`);
  //   if (theme === "danger") {
  //     document.body.style.backgroundColor = "#dc3545";
  //     showAlert("Theme changed to Danger");
  //   }
  //   else if (theme === "success") {
  //     document.body.style.backgroundColor = "#198754";
  //     showAlert("Theme changed to Success");
  //   }
  //   else if (theme === "primary") {
  //     document.body.style.backgroundColor = "#0d6efd";
  //     showAlert("Theme changed to Primary");
  //   }
  //   else if (theme === "secondary") {
  //     document.body.style.backgroundColor = "#6c757d";
  //     showAlert("Theme changed to Secondary");
  //   }
  //   // document.body.style.backgroundColor = "#042743";
  // }

  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar
            title="TextUtils"
            aboutText="About"
            mode={mode}
            toggleMode={toggleMode}
            // changeTheme={changeTheme}
          />

          {/* {welcomeMessage()} */}

          {alert == null ? null : <Alert alert={alert} />}

          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <TextForm
                    heading="Enter your text here to analyze"
                    mode={mode}
                    toggleMode={toggleMode}
                    showAlert={showAlert}
                  />
                }
              ></Route>
              <Route path="/about" element={<About mode={mode} />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
