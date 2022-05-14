import React, { useState } from "react";
import { Button, Card, Modal, Container, Row, Col } from "react-bootstrap";
const ConnectWallet = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={5} className="text-center">
            <Card className="bgtransparent border-0 mt-5">
              <Card.Body  className="d-grid p-0">
                <Button className="connectbtn" variant="dark" size="lg" onClick={handleShow}>
                Connec tWallet
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConnectWallet;
