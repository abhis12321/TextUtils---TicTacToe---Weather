// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/NAV";
import TextForm from "./components/TextForm.js";
import Acordian from "./components/Acordian";
import Home from "./components/Home";
import About from "./components/Contact";
import Blog from "./components/Blog";
import Alert from "./components/Alert";
import Temp from "./components/TempConverter";
// import song from "./components/audio/Chand.mp3";

// document.activeElement  -> for active element/clicked element

export default function App() {
  const [mode, setMode] = useState("light");
  const [btn, setBtn] = useState("Enable Dark Mode");

  // const [alert, setAlert] = useState({ msg: "Hello Jack", type: "success" });
  const [alert, setAlert] = useState(null);
  const[b , setB]  = useState(true);
  if(b) {
    document.querySelector("body").style.backgroundColor = "white";
    setB(false) ;
  }
  
  const handleAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const clsBdCl = ()=> {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    
  }
  const toggleMode = (mod) => {
    setMode(mod);
    clsBdCl();
    document.body.classList.add('bg-'+mod);

    // setBtn(
    //   btn === "Enable Dark Mode" ? "Enable Normal Mode" : "Enable Dark Mode"
    // );
    // if (mode === "light") {
    //   handleAlert("dark mode Enabled", "success");
    //   setAlert({ msg: "dark mode elabled", type: "success" });
    //   document.body.style.backgroundColor = "rgb(3, 0, 36)";
    // } else {
    //   handleAlert("dark mode Disabled", "success");
    //   document.querySelector("body").style.backgroundColor = "white";
    // }

    // switch (mod) {
    //   case "danger":
    //     document.querySelector("body").style.backgroundColor = 'rgb(120 0 6)';
    //     break;
      
    //   case "primary":
    //     document.querySelector("body").style.backgroundColor = 'rgb(0 60 137)';
    //     break;
      
    //   case "dark":
    //     document.querySelector("body").style.backgroundColor = 'rgb(5 1 31)';
    //     break;
      
    //   case "light":
    //     document.querySelector("body").style.backgroundColor = 'white';
    //     break;
      
    //   case "success":
    //     document.querySelector("body").style.backgroundColor = 'rgb(37 88 24)';
    //     break;
      
    //   case "warning":
    //     document.querySelector("body").style.backgroundColor = 'rgb(144 110 36)';
    //     break;
      
    //   default:
    //     break;
    // }
  };

  setInterval(()=> {
    document.querySelector("#time").innerHTML = new Date();
    // document.querySelector("#time").innerHTML = (new Date()).toLocaleString();
  } , 1000);


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

        <Alert alert={alert}  />
        <h1 id = "time" style = {{
          color:"black",
          // color:mode === "dark" ? "white" : "black",
          textAlign:"center" , backgroundColor:"yellowgreen" , padding:"10px"
          }}>{Date()}</h1>
        
        {/* <a href={document.URL}> click on me {document.URL}</a> */}
        {/* <a href={song} download> click on me to download</a> */}
        <Routes>
          <Route path="/" element={<Home mode = {mode}/>}></Route>

          <Route path="/about" element={<About mode = {mode}/>}></Route>

          <Route path="/blog" element={<Blog mode = {mode}/>}></Route>

          <Route
            exact1
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

          <Route
            exact
            path="/temp"
            element={<Temp mode={mode} />}
          ></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
