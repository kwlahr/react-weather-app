import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { hideFiveDay } from "../../actions/hideFiveDay";

function FiveDayView() {
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
                <CardTitle>
                  <h3>Searched Location</h3>
                </CardTitle>
              </Col>
              <Col>
                <Button
                  style={{ float: "right" }}
                  onClick={() => dispatch(hideFiveDay())}
                >
                  x
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            {/* For Each statement with templated list here */}
            <ListGroup horizontal="lg">
              <ListGroupItem style={{ margin: "1rem" }}>Sunday</ListGroupItem>
              <ListGroupItem style={{ margin: "1rem" }}>Monday</ListGroupItem>
              <ListGroupItem style={{ margin: "1rem" }}>Tuesday</ListGroupItem>
              <ListGroupItem style={{ margin: "1rem" }}>Wednesday</ListGroupItem>
              <ListGroupItem style={{ margin: "1rem" }}>Thursday</ListGroupItem>
              <ListGroupItem style={{ margin: "1rem" }}>Friday</ListGroupItem>
              <ListGroupItem style={{ margin: "1rem" }}>Saturday</ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
export default FiveDayView;
