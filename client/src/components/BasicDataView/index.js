import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { hideBasicData } from "../../actions/hideBasicData";
import { showFiveDay } from "../../actions/showFiveDay";

function BasicDataView() {
  const dispatch = useDispatch();
  const city = "Denver";
  const state = "Colorado";
  const temp = "50";
  const high = "60";
  const low = "40";
  const precip = "25";

  return (
    <div>
      <Container
        color="light-gray"
        style={{
          border: "solid 2px ",
          marginTop: "3rem",
          padding: "1rem",
        }}
      >
        <Card>
          <CardHeader>
            <Row>
              <Col>
                <CardTitle>
                  <h3>
                    {city}, {state}
                  </h3>
                </CardTitle>
              </Col>
              <Col>
                <Button
                  style={{ float: "right" }}
                  onClick={() => dispatch(hideBasicData())}
                >
                  x
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <CardText>Current Temp: {temp}&deg; </CardText>
            <CardText>High: {high}&deg; </CardText>
            <CardText>Low: {low}&deg; </CardText>
            <CardText>Percent Chance Preceipitation: {precip}&#37; </CardText>
          </CardBody>
          <Button onClick={() => dispatch(showFiveDay())}>
            Five Day Forecast
          </Button>
        </Card>
      </Container>
    </div>
  );
};
export default BasicDataView;
