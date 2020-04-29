import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <p>
            Location: {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temp && <p> Current Temperature: {this.props.temp}</p>}
        {this.props.min && <p> Min: {this.props.min}</p>}
        {this.props.max && <p> Max: {this.props.max}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
      </div>
    );
  }
}

export default Weather;
