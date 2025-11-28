import React, {useState, useEffect} from 'react';
import axios from 'axios'
import 'normalize.css'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

    // Guardamos el dato a buscar
    const [searchValue, setSearchValue] = useState("Madrid");
    // Guardamos la ciudad
    const [countrys, setCountrys] = useState([]);
  
    useEffect(() => {
      async function fetchWeather() {
        const API_KEY = import.meta.env.VITE_API_KEY

        try {
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${API_KEY}&units=metric&lang=es`);
          const json = res.data;

          setCountrys(json);
        } catch(e) {
          console.log(e);
          setCountrys([]);
        }
      }
      fetchWeather();
    }, [searchValue]);

  const handleSearch = (city) => {
    setSearchValue(city)
  }
  
  

  return (
    <>
    <Header onSearch={handleSearch} />
    <Main data={countrys} searchValue={searchValue} />
    <Footer />
    </>
  )
}

export default App
