import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Lock from "../../../Assets/icon/lock.png";
import Calander from "../../../Assets/icon/calander.png";
import User from "../../../Assets/icon/user.png";
import Drcard from "../../../Assets/icon/card.png";
import Header from "../../Layout/Header";
export default function Carddetail() {
  return (
    <div>
      <Header />
      <div
        className="login_banner p-4"
        style={{
          backgroundImage: `url(${Loginbanner})`,
          height: "90vh",
          backgroundSize: "100%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#F6F6F6",
        }}
      >
        <div className="container">
          <div className="login_form">
            <Row className="justify-content-center">
              <Col md={5}>
                <Card className="border-0" style={{ background: "#ffffff" }}>
                  <Card.Body className="p-4">
                    <Row>
                      <Col xs={5}>
                        <Link
                          to="/"
                          className="text-decoration-none text-dark font_bold"
                        >
                          <BsArrowLeft />
                          &nbsp; Back
                        </Link>
                      </Col>
                      <Col xs={7}></Col>
                    </Row>

                    <Card.Title className="navyColor">
                      <p className="h1 font_bolder">Card Details</p>
                    </Card.Title>
                    <Form>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <div className="d-flex field border rounded-pill p-2 px-4">
                          <img src={Drcard} alt="" />
                          <Form.Control
                            type="text"
                            className="border-0 bg-transparent"
                            placeholder="Card Number"
                          />
                        </div>
                      </Form.Group>
                      <Row>
                        <Col xs={6}>
                          <Form.Group
                            className="mb-4 field "
                            controlId="formBasicPassword"
                          >
                            <div className="d-flex border rounded-pill p-2 px-4">
                              <img src={Calander} alt="" />
                              <Form.Control
                                type="text"
                                className="border-0 bg-transparent"
                                placeholder="Month/year"
                              />
                            </div>
                          </Form.Group>
                        </Col>
                        <Col xs={6}>
                          <Form.Group
                            className="mb-4 field"
                            controlId="formBasicPassword"
                          >
                            <div className="d-flex border rounded-pill p-2 px-4">
                              <img src={Lock} alt="" />
                              <Form.Control
                                type="password"
                                className="border-0 bg-transparent"
                                placeholder="CVV"
                              />
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <div className="d-flex field border rounded-pill p-2 px-4">
                          <img src={User} alt="" />
                          <Form.Control
                            type="text"
                            className="border-0 bg-transparent"
                            placeholder="Name on card"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Link to="/investor">
                          <Button
                            className="bigbutton rounded-pill border-0 w-100 p-3"
                            type="submit"
                          >
                            Pay Now
                          </Button>
                        </Link>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
