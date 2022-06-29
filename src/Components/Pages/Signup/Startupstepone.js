import React, { useRef } from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

import File from "../../../Assets/icon/file.png";
import Showfile from "../../../Assets/icon/showfile.png";
import Cross from "../../../Assets/icon/cross.png";
import Header from "../../Layout/Header";
import User from "../../../Assets/icon/user.png";
import Envelope from "../../../Assets/icon/envelope.png";
import Lock from "../../../Assets/icon/lock.png";
import Globe from "../../../Assets/icon/globe.png";
export default function Startupstepone() {
  const ref = useRef();
  return (
    <div>
      <Header />
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
                    <Row className="mb-3">
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
                        <p className="font_bolder">Startup</p>
                      </Col>
                    </Row>

                    <div className="personaldetail">
                      <Card.Title className="navyColor">
                        <p className="h3 text-dark text-center">
                          Let’s Get Started
                        </p>
                      </Card.Title>
                      <Form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <img src={User} alt="" />
                            <Form.Control
                              type="text"
                              className="border-0 bg-transparent"
                              placeholder="First Name"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <img src={User} alt="" />
                            <Form.Control
                              type="text"
                              className="border-0 bg-transparent"
                              placeholder="Last Name"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <img src={User} alt="" />
                            <Form.Control
                              type="text"
                              className="border-0 bg-transparent"
                              placeholder="Company Name"
                            />
                          </div>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <img src={Envelope} alt="" />
                            <Form.Control
                              type="email"
                              className="border-0 bg-transparent"
                              placeholder="Email"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <Form.Control
                              type="date"
                              name="duedate"
                              className="border-0"
                              placeholder="Due date"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <img src={Globe} alt="" />
                            <Form.Control
                              type="email"
                              className="border-0 bg-transparent"
                              placeholder="State"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <img src={Globe} alt="" />
                            <Form.Control
                              type="email"
                              className="border-0 bg-transparent"
                              placeholder="Country"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <img src={Globe} alt="" />
                            <Form.Control
                              type="email"
                              className="border-0 bg-transparent"
                              placeholder="City"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group
                          className="mb-4 field  position-relative "
                          controlId="formBasicPassword"
                        >
                          <div className="d-flex border rounded-pill p-2 px-4">
                            <img src={Lock} alt="" />
                            <Form.Control
                              type="password"
                              className="border-0 bg-transparent"
                              placeholder="Create Password"
                            />

                            <BsFillEyeSlashFill
                              className="position-absolute"
                              style={{ bottom: "18px", right: "30px" }}
                            />
                          </div>
                        </Form.Group>
                        <Form.Group
                          className="mb-4 field  position-relative "
                          controlId="formBasicPassword"
                        >
                          <div className="d-flex border rounded-pill p-2 px-4">
                            <img src={Lock} alt="" />
                            <Form.Control
                              type="password"
                              className="border-0 bg-transparent"
                              placeholder="Confirm Password"
                            />

                            <BsFillEyeSlashFill
                              className="position-absolute"
                              style={{ bottom: "18px", right: "30px" }}
                            />
                          </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Link to="/membership">
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
  );
}
