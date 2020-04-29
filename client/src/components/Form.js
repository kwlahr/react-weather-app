import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="city"/>
        <input type="text" name="state" placeholder="state"/>
        <button>Search</button>
      </form>
    );
  }
}

export default Form;
