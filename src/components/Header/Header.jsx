import React from "react";
import './Header.css'

const Header = ({ onSearch }) => {

  const handleSumbit = e => {
    e.preventDefault();
    onSearch(e.target.search.value);
  }

  return <header className="container-header">
      <h1>Aplicación del Tiempo</h1>
      <form className="search-form" onSubmit={handleSumbit}>
        <input type="text" name="search" placeholder="Buscar Ciudad" />
        <button>Buscar</button>
      </form>
  </header>;
};

export default Header;
