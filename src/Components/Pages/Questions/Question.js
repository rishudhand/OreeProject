import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Header from "../../Layout/Header";
export default function Question() {
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
                    <Link
                      to="/"
                      className="text-decoration-none text-dark font_bold"
                    >
                      <BsArrowLeft />
                      &nbsp; Back
                    </Link>
                    <Card.Title className="navyColor">
                      <p className="h1 font_bolder">Select Your Role</p>
                    </Card.Title>
                    <Form className="scroll w-100%">
                      <Card.Text className="text-dark font_bold">
                        <p className="d-flex">
                          <span className="font_bolder me-2">Q1</span> Lorem
                          ipsum dolor sit amet, consectetur adipiscing
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="container ms-1">
                          <Row>
                            <Col xs={3}>
                              <Form.Check
                                type="checkbox"
                                id="custom-check"
                                label="Yes"
                              />
                            </Col>
                            <Col xs={3}>
                              <Form.Check
                                type="checkbox"
                                id="custom-check"
                                label="No"
                              />
                            </Col>
                          </Row>
                        </div>
                      </Card.Text>
                      <Card.Text className="text-dark font_bold">
                        <p className="d-flex">
                          <span className="font_bolder me-2">Q2</span> Lorem
                          ipsum dolor sit amet, consectetur adipiscing
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="container ms-1">
                          <Row>
                            <Col xs={3}>
                              <Form.Check
                                type="checkbox"
                                id="custom-check"
                                label="Yes"
                              />
                            </Col>
                            <Col xs={3}>
                              <Form.Check
                                type="checkbox"
                                id="custom-check"
                                label="No"
                              />
                            </Col>
                          </Row>
                        </div>
                      </Card.Text>
                      <Card.Text className="text-dark font_bold">
                        <p className="d-flex">
                          <span className="font_bolder me-2">Q3</span> Lorem
                          ipsum dolor sit amet, consectetur adipiscing
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="container ms-1">
                          <Row>
                            <Col xs={3}>
                              <Form.Check
                                type="checkbox"
                                id="custom-check"
                                label="Yes"
                              />
                            </Col>
                            <Col xs={3}>
                              <Form.Check
                                type="checkbox"
                                id="custom-check"
                                label="No"
                              />
                            </Col>
                          </Row>
                        </div>
                      </Card.Text>
                      <Card.Text className="text-dark font_bold">
                        <p className="d-flex">
                          <span className="font_bolder me-2">Q4</span> Lorem
                          ipsum dolor sit amet, consectetur adipiscing
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="container ms-1">
                          <Row>
                            <Col xs={3}>
                              <Form.Check
                                type="checkbox"
                                id="custom-check"
                                label="Yes"
                              />
                            </Col>
                            <Col xs={3}>
                              <Form.Check
                                type="checkbox"
                                id="custom-check"
                                label="No"
                              />
                            </Col>
                          </Row>
                        </div>
                      </Card.Text>
                    </Form>
                    <Form.Group className="mb-3">
                      <Link to="/stepone">
                        <Button
                          className="bigbutton rounded-pill border-0 w-100 p-3"
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Link>
                    </Form.Group>
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
