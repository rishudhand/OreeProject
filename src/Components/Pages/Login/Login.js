import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "./Login.scss";
import { Link } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";
import Envelope from "../../../Assets/icon/envelope.png";
import Lock from "../../../Assets/icon/lock.png";
import Facebook from "../../../Assets/icon/facebook.png";
import Google from "../../../Assets/icon/google.png";
import Apple from "../../../Assets/icon/apple.png";
export default function Login() {
  return (
    <div>
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
                <Card
                  style={{
                    background: "#ffffffb8",
                  }}
                >
                  <Card.Body className="p-4">
                    <Card.Title className="navyColor">
                      <p className="h1 font_bolder">Welcome Back</p>
                    </Card.Title>
                    <Card.Text className="gray">
                      Please enter your details. Stay updated on your
                      professional world
                    </Card.Text>
                    <Form>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <div className="d-flex field border rounded-pill p-2 px-4">
                          <img src={Envelope} alt="" />
                          <Form.Control
                            type="email"
                            className="border-0 bg-transparent"
                            placeholder="Enter your email"
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
                            placeholder="Password"
                          />

                          <BsFillEyeSlashFill
                            className="position-absolute"
                            style={{ bottom: "18px", right: "30px" }}
                          />
                        </div>
                      </Form.Group>
                      <Form.Group
                        className="mb-4 d-flex justify-content-between"
                        controlId="formBasicCheckbox"
                      >
                        <Link to="/" className="text-decoration-none">
                          <Form.Check type="radio" inline name="group1" />
                          &nbsp;
                          <span className="h6 navyColor">Remember me</span>
                        </Link>
                        <Link
                          to="/forgetpassword"
                          className="text-decoration-none"
                        >
                          &nbsp;
                          <span className="h6 navyColor font_bolder">
                            Forgot Password?
                          </span>
                        </Link>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Button
                          className="bigbutton rounded-pill border-0 w-100 p-3"
                          type="submit"
                        >
                          Log In
                        </Button>
                      </Form.Group>
                      <p className="text-center mb-3 text-dark other position-relative font_bold">
                        Or Login With
                      </p>
                      <div className="d-flex justify-content-center">
                        <p className="icon_bg text-center rounded-circle p-2">
                          <img src={Facebook} alt="" />
                        </p>
                        <p className="icon_bg text-center  rounded-circle p-2">
                          <img src={Google} alt="" />
                        </p>
                        <p className="icon_bg text-center  rounded-circle p-2">
                          <img src={Apple} alt="" />
                        </p>
                      </div>
                      <p className="text-secondary d-flex justify-content-center align-items-center font_bold">
                        Don’t have any account?
                        <Link to="/signup" className="text-decoration-none">
                          &nbsp;
                          <span className="h6 m-0 p-0 navyColor font_bolder">
                            Sign up
                          </span>
                        </Link>
                      </p>
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
