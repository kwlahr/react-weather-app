import React, { Component } from "react";
import {
  Button,
  Container,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { showBasicData } from "../../actions/showBasicData";
import { hideBasicData } from "../../actions/hideBasicData";
import { getBasicData } from "../../actions/getBasicData";

function InputForm() {
  const dispatch = useDispatch();
  // const City = document.getElementById("city").val();
  // const State = document.getElementById("state").val();
  return (
    <div>
      <Container
        style={{
          border: "solid 2px ",
          marginTop: "3rem",
          padding: "1rem",
        }}
      >
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="state">City</Label>
              <Input type="text" name="city" id="city" placeholder="City" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input type="text" name="state" id="state" placeholder="State" />
            </FormGroup>
          </Col>
        </Row>
        <Button
          style={{ marginRight: "1rem" }}
          onClick={(() => dispatch(showBasicData()))}
        >
          Search
        </Button>
        <Button onClick={() => dispatch(hideBasicData())}>hide</Button>
      </Container>
    </div>
  );
}

export default InputForm;
