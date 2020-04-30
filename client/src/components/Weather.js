import React from "react";
import {
  Container,
  Col,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardText,
  CardImg
} from "reactstrap";

const Weather = (props) => (
  <div>
    {props.city &&
      props.country &&
      props.iconURL &&
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
                <CardImg style={{width: "10rem", height: "auto"}} src={props.iconURL} alt="Weather Icon" />
                <CardText>Current Temperature: {props.temp}&deg;F</CardText>
                <CardText>Min: {props.min}&deg;F</CardText>
                <CardText>Max: {props.max}&deg;F</CardText>
                <CardText>Humidity: {props.humidity}&#x25;</CardText>
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
