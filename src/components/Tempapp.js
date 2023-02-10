import React, { useEffect, useState } from "react";
import "./Tempapp.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Nagpur");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bcb0ad23d670b5e0ca79b2dd51becf2d
      `;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      // console.log(resJson);
    };
    fetchApi();
  },[search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            className="inputField"
            type="search" value={search}
            onChange={(event) => {setSearch(event.target.value)}}
          ></input>
        </div>
{
  !city ?  (
    <p className="errorMsg">No Data Found</p>
  ):
(
        <div className="info">
          <h2 className="location">{search}</h2>
          <h1 className="temp">{city.temp}°C</h1>
          <h3>Min : {city.temp_min}°C Max: {city.temp_max}°C</h3>
        </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
