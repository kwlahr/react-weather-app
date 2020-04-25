import React, { Component } from "react";
import { useSelector } from "react-redux";
import InputForm from "./components/InputForm/";
import BasicDataView from "./components/BasicDataView/";
import FiveDayView from "./components/FiveDayView/";
import { Container, Row, Col } from "reactstrap";

// const API_KEY = "e118a9757bbd90e8cbd8a9d2eff8445f";

function App() {
  const basicData = useSelector((state) => state.basicData);
  const fiveDay = useSelector((state) => state.fiveDay);
  //  const getWeather = async () => {
  //   const api_call = await fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?q=denver,colorado&units=imperial&appid=${API_KEY}`
  //   );
  //   const data = await api_call.json();
  //   console.log(data);
  // };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <InputForm />
          </Col>
          <Col md={6} sm={12}>
            {basicData ? <BasicDataView/> : " "}
          </Col>
        </Row>
        {fiveDay ? <FiveDayView /> : " "}
      </Container>
    </div>
  );
}

export default App;
