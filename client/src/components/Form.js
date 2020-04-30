import React from "react";
import {
  Container,
  Col,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const SearchForm = (props) => (
  <div>
    <Container>
      <Col>
        <Card
          color="dark"
          className="text-white"
          style={{
            marginTop: "3rem",
            padding: "2rem",
            borderRadius: "5px",
            border: "2px"
          }}
        >
          <Form style={{ border: "white" }} onSubmit={props.getWeather}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" placeholder="...city" />
            </FormGroup>
            <FormGroup>
              <Label for="country">State or Country</Label>
              <Input
                type="text"
                name="country"
                placeholder="...state or country"
              />
            </FormGroup>
            <FormGroup>
              <Button>Search</Button>
            </FormGroup>
          </Form>
        </Card>
      </Col>
    </Container>
  </div>
);

export default SearchForm;
