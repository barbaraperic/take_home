import React, { useState } from 'react';
import Form from "./Form"
import sunIcon from "../icons/sun.svg"
import "./styling.scss"

//

const App = () => {
  // const [ city, setCity ] = useState("")
  // const [ temperature, setTemperature ] = useState("")
  // const [ description, setDescription ] = useState("")
  // const [ icon, setIcon ] = useState("")

  const [ weatherData, setWeatherData ] = useState({})

 const handleClick = () => {
   console.log("my current location")
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  const city = "Zagreb"
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setWeatherData(state => ({
      ...state,
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    }))
  })

}

console.log(weatherData)
const { city, temperature, description, icon } = weatherData
let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";

  return (
    <div className="layout-weather">
      <h1>What is the weather outside</h1>
      <div className="container-form">
        <button onClick={handleClick}>My current location</button>
        <Form handleSubmit={handleSubmit}/>
      </div>
      <div className="container-weather">
        <h2>{city}</h2>
        <p>{temperature}</p>
        <p>{description}</p>
        {icon && <img src={iconurl} alt="icon"/>}
      </div>
    </div>
  );
}

export default App;
