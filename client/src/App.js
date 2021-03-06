import React from "react";
import Titles from "./components/Titles";
import SearchForm from "./components/Form";
import Weather from "./components/Weather";

const API_key = "e118a9757bbd90e8cbd8a9d2eff8445f";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    iconURL: undefined,
    temp: undefined,
    min: undefined,
    max: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_key}`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        iconURL: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        temp: data.main.temp.toFixed(0),
        min: data.main.temp_min.toFixed(0),
        max: data.main.temp_max.toFixed(0),
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        iconURL: undefined,
        temp: undefined,
        min: undefined,
        max: undefined,
        humidity: undefined,
        description: undefined,
        error:
          "Please enter valid City and State or Country. Check spelling and don't use abbreviations for States.",
      });
    }
  };

  render() {
    return (
      <div
        style={{
          height: "75rem",
          backgroundColor: "#808080",
        }}
      >
        <Titles />
        <SearchForm getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          iconURL={this.state.iconURL}
          temp={this.state.temp}
          min={this.state.min}
          max={this.state.max}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
