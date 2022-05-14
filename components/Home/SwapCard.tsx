import React from "react";
import { Button, Card, Form, Container, Row, Col, InputGroup, FormControl  } from "react-bootstrap";
const SwapCard = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={5}>
            <Card>
              <Card.Body>
                <InputGroup>
                  <InputGroup.Text>With textarea</InputGroup.Text>
                  <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SwapCard;
