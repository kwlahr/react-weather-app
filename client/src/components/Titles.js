import React from "react";
import { Card } from "reactstrap";

const Titles = () => (
  <div>
    <Card
      color="dark"
      className="text-white"
      style={{ textAlign: "center", fontSize: "1.5rem" }}
    >
      <h1 className="display-3">Weather App</h1>
      <p className="lead">Search weather by city</p>
    </Card>
  </div>
);

export default Titles;
