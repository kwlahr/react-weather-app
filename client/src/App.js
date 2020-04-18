import React from "react";
import { useSelector } from "react-redux";
import InputForm from "./components/InputForm/";
import BasicDataView from "./components/BasicDataView/";
import FiveDayView from "./components/FiveDayView/";
import { Container } from "reactstrap";

function App() {
  const basicData = useSelector((state) => state.basicData);
  const fiveDay = useSelector((state) => state.fiveDay);

  return (
    <div className="App">
      <Container>
        <InputForm />
        {basicData ? <BasicDataView /> : " "}
        {fiveDay ? <FiveDayView /> : " "}
      </Container>
    </div>
  );
}

export default App;
