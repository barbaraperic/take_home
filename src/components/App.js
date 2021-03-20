import React, { useState } from 'react';
import Form from './Form';
import Loader from "./Loader"

import './styling.scss';

const App = () => {
  const [weatherData, setWeatherData] = useState({
    city: null,
    temperature: null,
    description: null,
    icon: null,
    error: null,
    loading: false
  });
  const [location, setLocation] = useState("");

  const handleClick = () => {
    console.log('my current location');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        console.log('>>', data);
        setWeatherData((state) => ({
          ...state,
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          error: null,
          loading: false
        }));
      })
      .catch(({ message }) => {
        setWeatherData({
          error: message,
          loading: false
        })
    })
  };

  const { city, temperature, description, icon, loading, error } = weatherData;
  let iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="layout-weather">
      <h1>What is the weather outside</h1>
      <div className="container-form">
        <button className="btn-current-location" onClick={handleClick}>My current location</button>
        <Form onChange={(e) => setLocation(e.target.value)} value={location} handleSubmit={handleSubmit} />
      </div>
      <div className="container-weather">
        <h2>{city}</h2>
        <p>{temperature}</p>
        <p>{description}</p>
        {icon && <img src={iconUrl} alt="icon" />}
      </div>
    </div>
  );
};

export default App;
