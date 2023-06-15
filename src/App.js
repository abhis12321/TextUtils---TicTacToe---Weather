import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Nav from "./components/NAV";
import TextForm from "./components/TextForm.js";
import Acordian from "./components/Acordian";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Alert from "./components/Alert";
// import NoPage from "./components/NoPage";

export default function App() {
  const [mode, setMode] = useState("light");
  const [btn, setBtn] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState({ msg: "Hello Jack", type: "success" });

  const handleAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    setBtn(
      btn === "Enable Dark Mode" ? "Enable Normal Mode" : "Enable Dark Mode"
    );
    if (mode === "light") {
      handleAlert("dark mode Enabled", "success");
      setAlert({ msg: "dark mode elabled", type: "success" });
      document.body.style.backgroundColor = "rgb(3, 0, 36)";
    } else {
      handleAlert("dark mode Disabled", "success");
      document.querySelector("body").style.backgroundColor = "white";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          handle={handleAlert}
          alert={alert}
        ></Nav>

        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/blog" element={<Blog />}></Route>

          <Route
            exact
            path="/textform"
            element={
              <TextForm mode={mode} handleAlert={handleAlert} alert={alert} />
            }
          ></Route>

          <Route
            exact
            path="/accordian"
            element={<Acordian mode={mode} />}
          ></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
