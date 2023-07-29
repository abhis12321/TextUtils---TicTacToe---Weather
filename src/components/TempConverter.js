import React, {useState} from "react";
import './style/temp.css';

export default function TempConvterter(props) {
  const [load , setLoad] = useState(false);
  const change = (e) => {
    let name = e.target.name;
    let value = e.target.value - 0;
    let C = value;
    if(name === "kelv") {
      C = k2c(value);
    }
    else if(name === "forh") {
      C = f2c(value);
    }

      document.querySelector("#cels  input").value = C;  
      document.querySelector("#forh  input").value = forh(C);
      document.querySelector("#kelv  input").value = kelv(C);
      
  };

  // const cels = (F) => ((F - 32) * 5) / 9;
  const forh = (C) => ( (9 * C) / 5 + 32 );
  const kelv = (C) => (C + 273.15);

  const k2c = (K)=> (K-273.15);
  const f2c = (F)=> ((F - 32) * 5) / 9;;


  let incr = ()=> {
    let div1 = document.querySelector("#inc");
    // let target = +div.getAttribute('data-target');
    // div.innerHTML = '0';
    console.log(div1)
    // let target = 2000;
    // let i = target / 100;

    // const update = ()=> {
    //   let curr = Number(div1.innerHTML);
      
    //   if(curr < target) {
    //     div1.innerHTML = (curr + i);
    //     setTimeout(update, 10);
    //   }
    //   else {
    //     setLoad(true)
    //   }

    // }

    // update();

    // setLoad(true)
  }

  if(!load)
  document.body.onload = incr();

  return (
    <div  style = {{color:props.mode==="dark" ? "white" : "black"}} >
      <h1 id = "hh">Enter A temperature to change</h1>

      <div className="cant">
        <div className="pair"  style = {{backgroundColor : props.mode === "dark" ? " rgb(31, 51, 51)" : "rgb(100, 128, 128)"}}>
          <h3>in Celcius</h3>
          <h3 id="cels"><input type="number" onInput={change} name = "cels"/>°C</h3>
        </div>
        <div className="pair"  style = {{backgroundColor : props.mode === "dark" ? " rgb(31, 51, 51)" : "rgb(100, 128, 128)"}}>
          <h3>in Forenhite</h3>
          <h3 id="forh"><input type="number" onInput={change} name="forh"/>°F</h3>
        </div>
        <div className="pair"  style = {{backgroundColor : props.mode === "dark" ? " rgb(31, 51, 51)" : "rgb(100, 128, 128)"}}>
          <h3>in Kelvin</h3>
          <h3 id="kelv"><input type="number" onInput={change}  name="kelv"/>K</h3>
        </div>

      </div>

      <div className="incr pair">
        <div id = "inc" data-target = "1200" >0</div>
      </div>
    </div>
  );
}
