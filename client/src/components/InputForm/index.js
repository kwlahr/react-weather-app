import React from "react";
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

const InputForm = () => {
  const dispatch = useDispatch();
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
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip" />
            </FormGroup>
          </Col>
        </Row>
        <Button style={{marginRight: "1rem"}} onClick={() => dispatch(showBasicData())}>show</Button>
        <Button onClick={() => dispatch(hideBasicData())}>hide</Button>
      </Container>
    </div>
  );
};
export default InputForm;
