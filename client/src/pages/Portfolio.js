import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card"

function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Card />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
