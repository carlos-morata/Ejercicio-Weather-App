import React from "react";
import './WeatherCard.css'

const WeatherCard = ({ list }) => {

  if (!list || list.length === 0) return <p>Cargando datos...</p>;

  return <section className="section-hours">
    <h2>Próximas Horas...</h2>
    <ul> { list.map(item => (
            <li key={item.dt} className="item-hours">
              {item.dt_txt} <br />  {item.main.temp}°C <br />  {item.weather[0].description} <br /> 
              <img src={list} alt={item.weather[0].description} />
            </li>
          ))
        }
    </ul>
  </section>;
};

export default WeatherCard;
