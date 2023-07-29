import React , {useState} from "react";
import style from './style.css';
import clear from './clear.png';
import cloud from './cloud.png';
import drizzle from './drizzle.png';
import humidity from './humidity.png';
import mist from './mist.png';
import rain from './rain.png';
import snow from './snow.png';
import wind from './wind.png';

export default function Contact() {
  const [w_img , setImg] = useState("weather");
  const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
  var apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

  const checkWeather = (event) => {
    let city =  document.querySelector(".search input").value;
    fetch(`${apiURL}&q=${city}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === "404" || city.length === 0 || data.cod === "404") { 
        //invalid city name
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
      } else {  
        //valid city name
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        let icon = data.weather[0].main;
        let img = document.querySelector(".weather img");
        setImg(icon);
        if (icon === "Cloud") {
          img.src = cloud;
        } else if (icon === "Clear") {
          img.src = clear;
        } else if (icon === "Rain") {
          img.src = rain;
        } else if (icon === "Mist") {
          img.src = mist;
        } else if (icon === "Drizzle") {
          img.src = drizzle;
        } else if (icon === "Snow") {
          img.src = snow;
        }
        else {
          img.src = mist;
        }
      }
    })
    .catch((err) => console.error(err));
  };

  // const checkWeather = async (event) => {
  //   let city =  document.querySelector(".search input").value;
  //   const res = await fetch(`${apiURL}&q=${city}&appid=${apiKey}`);
  //   let data = await res.json();   //converted into json file
  //   // console.log(data);

  //   if (data.cod === "404" || city.length === 0 || data.cod === "404") { 
  //     //invalid city name
  //     document.querySelector(".weather").style.display = "none";
  //     document.querySelector(".error").style.display = "block";
  //   } else {  
  //     //valid city name
  //     document.querySelector(".weather").style.display = "block";
  //     document.querySelector(".error").style.display = "none";

  //     document.querySelector(".city").innerHTML = data.name;
  //     document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  //     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  //     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  //     let icon = data.weather[0].main;
  //     let img = document.querySelector(".weather img");
  //     setImg(icon);
  //     if (icon === "Cloud") {
  //       img.src = cloud;
  //     } else if (icon === "Clear") {
  //       img.src = clear;
  //     } else if (icon === "Rain") {
  //       img.src = rain;
  //     } else if (icon === "Mist") {
  //       img.src = mist;
  //     } else if (icon === "Drizzle") {
  //       img.src = drizzle;
  //     } else if (icon === "Snow") {
  //       img.src = snow;
  //     }
  //     else {
  //       img.src = mist;
  //     }
  //   }
  // };

  const check = (event)=> {
    if(event.key === "Enter") {
      checkWeather();
    }
  }
  
  return (
    <>
      <div className="card" style = {style}>
        <div className="search">
          <input type="text" spellCheck="false" placeholder="Enter city name" onKeyDown={check}/>
          <button onClick={checkWeather}>search</button>
        </div>
        <div className="error">
          <h3>invalid city name</h3>
        </div>
        <div className="weather">
          <img src={rain} alt={w_img} />
          <h1 className="temp">31°C</h1>
          <h2 className="city">Kanpur</h2>
          <div className="details">
            <div className="col">
              <img src={humidity} alt="" />
              <div>
                <p className="humidity">30%</p>
                <p>humidity</p>
              </div>
            </div>

            <div className="col">
              <img src={wind} alt="" />
              <div>
                <p className="wind">70 km/h</p>
                <p>wind speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}