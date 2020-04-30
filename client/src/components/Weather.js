import React from "react";
import {
  Container,
  Col,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardText,
} from "reactstrap";

const Weather = (props) => (
  <div>
    {props.city &&
      props.country &&
      props.temp &&
      props.min &&
      props.max &&
      props.humidity &&
      props.description && (
        <Container>
          <Col>
            <Card
              color="dark"
              className="text-white"
              style={{
                marginTop: "3rem",
                padding: "2rem",
                borderRadius: "5px",
                border: "2px",
              }}
            >
              <CardHeader>
                <CardTitle>
                  <h3>
                    Location: {props.city}, {props.country}
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>Current Temperature: {props.temp}</CardText>
                <CardText>Min: {props.min}</CardText>
                <CardText>Max: {props.max}</CardText>
                <CardText>Humidity: {props.humidity}</CardText>
                <CardText>Conditions: {props.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Container>
      )}

    {props.error && (
      <Container>
        <Col>
          <Card
            color="dark"
            className="text-white"
            style={{
              marginTop: "3rem",
              padding: "2rem",
              borderRadius: "5px",
              border: "2px",
              textAlign: "center",
            }}
          >
            <CardTitle> {props.error}</CardTitle>
          </Card>
        </Col>
      </Container>
    )}
  </div>
);

export default Weather;
