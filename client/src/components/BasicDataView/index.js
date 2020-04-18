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
                <CardTitle><h3>Searched Location</h3></CardTitle>
              </Col>
              <Col>
                <Button style={{float: "right"}} onClick={() => dispatch(hideBasicData())}>x</Button>
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
