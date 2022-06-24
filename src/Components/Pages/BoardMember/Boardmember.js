import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Header from "../../Layout/Header";

export default function Boardmember() {
  return (
    <div>
      <Header />
      <div>
        <div
          className="login_banner p-4"
          style={{
            backgroundImage: `url(${Loginbanner})`,
            //   height: "90vh",
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
                        <Col xs={7}>
                          <p className="text-dark font_bolder">Board Member</p>
                        </Col>
                      </Row>

                      <div className="investmentprofile">
                        <Form>
                          <Form.Group
                            className="mb-4"
                            controlId="formBasicEmail"
                          >
                            <div className="field border rounded-pill p-2 px-4">
                              <Form.Select
                                aria-label="Default select example "
                                className="border-0"
                              >
                                <option>Portfolio</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="mb-4"
                            controlId="formBasicEmail"
                          >
                            <div className="field border rounded-pill p-2 px-4">
                              <Form.Select
                                aria-label="Default select example "
                                className="border-0"
                              >
                                <option>Select Industry</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </div>
                          </Form.Group>

                          <Form.Group
                            className="mb-4 field "
                            controlId="formBasicPassword"
                          >
                            <div className="d-flex border rounded-pill p-2 px-4">
                              <Form.Select
                                aria-label="Default select example "
                                className="border-0"
                              >
                                <option>Select specialties</option>
                                <option value="Crowd Funded Investment">
                                  Crowd Funded Investment
                                </option>
                                <option value="Single Investment">
                                  Single Investment
                                </option>
                              </Form.Select>
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="mb-4 field"
                            controlId="formBasicPassword"
                          >
                            <div className="border rounded-pill p-2 px-4">
                              <Form.Select
                                aria-label="Default select example "
                                className="border-0"
                              >
                                <option>Select Goal</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </div>
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Biggest sidebar_profile professional success"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Biggest sidebar_profile professional success"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Link to="/investor">
                              <Button
                                className="bigbutton rounded-pill border-0 w-100 p-3"
                                type="submit"
                              >
                                Next
                              </Button>
                            </Link>
                          </Form.Group>
                        </Form>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
