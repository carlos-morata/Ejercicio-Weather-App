import React from "react";
import './Main.css'

import WeatherList from './WeatherList'
import WeatherCard from './WeatherCard'

const Main = ({ data, searchValue }) => {
  return ( <main className="container-main">
      <h2>{searchValue}</h2>
      <WeatherCard list={data.list} />
      <WeatherList list={data.list} />
  </main>
  );
};

export default Main;
