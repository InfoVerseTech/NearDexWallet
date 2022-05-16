import React from "react";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Image,
  Dropdown,
} from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import cryptologo from "../../assets/img/bnb.png";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";
import CryptoDropdown from "./CryptoDropdown";

const SwapCard = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={5}>
            <Card className="swap-card">
              <Card.Body className="p-3 p-sm-4">
                <Form.Label>You pay</Form.Label>
                <InputGroup className="mb-3 p-3">
                  {/* <Button variant="outline-secondary" id="button-addon1">
                    <Image src={cryptologo.src} alt="" className="img-fluid" />{" "}
                    Button <MdKeyboardArrowDown className="ms-2" />
                  </Button> */}
                  <CryptoDropdown />
                  <FormControl
                    placeholder="0.00"
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <div className="text-center">
                  <Button variant="outline-secondary" className="swapbtn">
                    <MdOutlineSwapVerticalCircle size="35" />
                  </Button>
                </div>
                <Form.Label>You receive</Form.Label>
                <CryptoDropdown />
                {/* <Button variant="outline-secondary" className="swapbtn m-3">
                  <Image src={cryptologo.src} alt="" className="img-fluid" />{" "}
                  Button <MdKeyboardArrowDown className="ms-2" />
                </Button> */}

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SwapCard;
