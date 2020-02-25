import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Title from "../components/Title"
import { Input, TextArea, FormBtn } from "../components/Form";


function Contact(props) {


  return (
    <Container fluid>
      <Row>
        <Col size="lg-12">
          <Title />
          <form>
            <Input

              name="Email"
              placeholder="name@example.com (required)"
            />
            <Input

              name="name"
              placeholder="Taylor Doe (required)"
            />
            <TextArea

              name="message"
              placeholder="Your message here ..."
            />
            <FormBtn
              // disabled={!(formObject.author && formObject.title)}
              // onClick={handleFormSubmit}
            >
              Submit
</FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}


export default Contact;