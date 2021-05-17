import React, { useEffect, useState } from "react";
import Item from "./components/Item/Item";
import GlobalStyle from "./components/StyledComponents/GlobalStyle";
import StyledButton from "./components/StyledComponents/StyledButton";
import StyledForm from "./components/StyledComponents/StyledFrom";
import StyledInput from "./components/StyledComponents/StyledInput";
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
    <>
      <GlobalStyle />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={city}
          onChange={handleInput}
          placeholder="Search weather"
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
      <Item data={data} />
    </>
  );
}

export default App;
