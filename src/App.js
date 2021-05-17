import React, { useEffect, useState } from "react";
import { API_URL } from "./constans";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  const fetchWeather = async (city) => {
    await fetch(`${API_URL}${city}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchWeather("Warszawa");
  }, []);

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleInput} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
