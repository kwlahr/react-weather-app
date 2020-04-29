import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_key = "e118a9757bbd90e8cbd8a9d2eff8445f";

class App extends React.Component {
  getWeather = async () => {
    const apiCall = await fetch(`api.openweathermap.org/data/2.5/weather?q=denver,colorado&units=imperial&appid=${API_key}`);
    const data = await apiCall.json();
    console.log(data)
  };
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
