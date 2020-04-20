import React from "react";
import { useSelector } from "react-redux";
import InputForm from "./components/InputForm/";
import BasicDataView from "./components/BasicDataView/";
import FiveDayView from "./components/FiveDayView/";
import { Container, Row, Col } from "reactstrap";


function App() {
  const basicData = useSelector((state) => state.basicData);
  const fiveDay = useSelector((state) => state.fiveDay);

  return (
    <div className="App">
      <Container>
        <Row>
        <Col md={6} sm={12}>
          <InputForm />
        </Col>
        <Col md={6} sm={12}>
          {basicData ? <BasicDataView /> : " "}
        </Col>
        </Row>
        {fiveDay ? <FiveDayView /> : " "}
      </Container>
    </div>
  );
}

export default App;
