import React from "react";
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

const BasicDataView = () => {
  const dispatch = useDispatch();
  return (
    <div className="col-sm-12 col-md-6 offset-md-3">
      <Container
        color="light-gray"
        className="col-sm-12 col-md-6 offset-md-3"
        style={{
          border: "solid 2px ",
          marginTop: "3rem",
          padding: "1rem",
          width: "40rem",
        }}
      >
        <Card>
          <CardHeader>
            <Row>
              <Col className="col-md-6">
                <CardTitle>Searched Location</CardTitle>
              </Col>
              <Col className="col-md-6">
                <Button onClick={() => dispatch(hideBasicData())}>x</Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <CardText>Current Temp: </CardText>
            <CardText>High: </CardText>
            <CardText>Low: </CardText>
            <CardText>Percent Chance Preceipitation: </CardText>
          </CardBody>
          <Button onClick={() => dispatch(showFiveDay())}>Five Day Forecast</Button>
        </Card>
      </Container>
    </div>
  );
};
export default BasicDataView;
