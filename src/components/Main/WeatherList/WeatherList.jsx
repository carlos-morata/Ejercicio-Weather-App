import React from "react";
import './WeatherList.css'

const WeatherList = ({ list, searchValue }) => {

  if (!list || list.length === 0) return <p>Cargando datos...</p>;
  const limit = list.slice(0, 10)
  
  return <section className="section-week">
    <h2>Previsión {searchValue} <span>(10 días)</span></h2>
    <ul>
        {
          limit.map(item => (
            <li key={item.dt} className="item-week">
              {item.dt_txt} <br /> {item.main.temp}°C <br /> 
              <img src={limit} alt={item.weather[0].description} />
            </li>
          ))
        }
    </ul>
  </section>;
};

export default WeatherList;
