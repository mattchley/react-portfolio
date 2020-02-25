import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Title from "../components/Title"
import Content from "../components/Content"
import Image from "../components/Image"
import Links from "../components/Links"

function Home() {
  // there will need to be a page state prop that passes through so that the Titles will change based on the route

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Title />
          <Col size="md-2">
          <Image/>
          </Col>
          <Col size="md-10">
          <Content/>
          <Links/>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}


export default Home;
