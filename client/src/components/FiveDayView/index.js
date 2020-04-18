import React from "react";
import {
  Card,
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

const FiveDayView = () => {
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
          <CardBody>
            <Row>
              <Col className="col-md-6">
                <CardTitle>Searched Location</CardTitle>
              </Col>
              <Col className="col-md-6">
                <Button onClick={() => dispatch(hideFiveDay())}>x</Button>
              </Col>
            </Row>
            {/* For Each statement with templated list here */}
            <ListGroup horizontal="lg">
              <ListGroupItem>Sunday</ListGroupItem>
              <ListGroupItem>Monday</ListGroupItem>
              <ListGroupItem>Tuesday</ListGroupItem>
              <ListGroupItem>Wednesday </ListGroupItem>
              <ListGroupItem>Thursday</ListGroupItem>
              <ListGroupItem>Friday</ListGroupItem>
              <ListGroupItem>Saturday</ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};
export default FiveDayView;
