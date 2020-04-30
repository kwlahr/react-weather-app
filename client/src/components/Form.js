import React from "react";

const Form = (props) => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="city" />
    <input type="text" name="country" placeholder="state or country" />
    <button>Search</button>
  </form>
);

export default Form;
