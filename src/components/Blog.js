import React from "react";
import "./style/blog.css";
import music0 from "./audio/Chand.mp3";
import music1 from "./audio/fir.mp3";
import music2 from "./audio/pyar.mp3";

export default function Blog(props) {
  // let toggle = setInterval(() => {
  //   document.body.style.backgroundColor =
  //     document.body.style.backgroundColor === "red" ? "yellow" : "red";
  // }, 1500);

  // document.title = "Blog";
  // document.addEventListener("click", () => {
  //   clearInterval(toggle);
  // });

  const startD = (event) => {
    event.target.style.color = "red";
    event.dataTransfer.setData("Text", event.target.id);
  };

  const onD = (event) => {
    event.target.style.backgroundColor = "yellow";
  };

  const overD = (event) => {
    event.target.style.border = "2px dotted green";
    event.target.style.backgroundColor = "grey";
    event.preventDefault();
  };

  const droP = (event) => {
    event.target.style.color = props.mode === "dark" ? "white" : "black";
    event.target.style.border =
      props.mode === "dark" ? "2px solid white" : "2px solid black";
    event.target.style.background = "local";
    event.preventDefault();
    const text = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(text));
  };

  const steal = () => {
    const frame = document.getElementById("myFrame");
    const h1 = frame.contentWindow.document.getElementsByTagName("H1")[0];
    const node = document.adoptNode(h1); //creating a copy of the element h1
    document.body.appendChild(node);
    // document.body.appendChild(h1);    //steal the element from iframe and use it
  };

  const addSub = () => {
    const p = document.createElement("p");
    p.className = "sub";
    p.innerText = document.querySelector(".subIp").value;
    // p.innerHTML = 'shipping-fast';
    document.querySelector(".catalog").append(p);
  };

  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div
        id="h1"
        onDrop={droP}
        onDragOver={overD}
        style={{
          height: "4rem",
          width: "25rem",
          border: props.mode === "dark" ? "2px solid white" : "2px solid black",
          margin: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          draggable="true"
          onDrag={onD}
          onDragStart={startD}
          id="para"
          // style={{textAlign:"center"}}
        >
          Drag to the Block
        </h1>
      </div>

      <div
        id="h2"
        onDrop={droP}
        onDragOver={overD}
        style={{
          height: "4rem",
          width: "25rem",
          border: props.mode === "dark" ? "2px solid white" : "2px solid black",
          margin: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>

      {/* <video >
        <source src={av} type="video/mkv" />
        <source src="mov_bbb.ogg" type="video/ogg" />
        Your browser does not support HTML5 video.
      </video> */}
      <div className="music">
        <iframe
          id="myFrame"
          src={<Blog mode={props.mode} />}
          frameborder="1"
          height="300"
          width="1100"
          title="Iframe Example"
        >
          How Are You
        </iframe>
        <audio controls className="song" preload="metadata" loop muted>
          <source src={music0} type="audio/ogg" />
          Your browser does not support the audio tag.
        </audio>
        <audio controls className="song" autoPlay muted>
          <source src={music1} type="audio/ogg" />
          Your browser does not support the audio tag.
        </audio>
        <audio controls className="song">
          <source src={music2} type="audio/ogg" />
          Your browser does not support the audio tag.
        </audio>
      </div>

      {/* <iframe
        src="demo_iframe.htm"
        name="iframe_a"
        height="300px"
        width="100%"
        title="Iframe Example"
      ></iframe> */}
      <div className="container" >
        <a href="https://www.w3schools.com" target="iframe_a">
          W3Schools.com
        </a>
        <button id="stop" className="subjects">
          Stop toggling
        </button>
        <button onClick={steal} className="subjects">
          steal
        </button>
      </div>

      <div className="catalog"></div>
      <div className="add">
        <input type="text" className="subIp subjects" />
        <button className="subjects" onClick={addSub}>
          add
        </button>
      </div>
    </div>
  );
}
