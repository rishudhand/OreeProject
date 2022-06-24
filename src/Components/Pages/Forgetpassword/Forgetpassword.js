import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "../Login/Login.scss";
import Envelope from "../../../Assets/icon/envelope.png";
import Forgetkey from "../../../Assets/icon/forget.png";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
export default function Forgetpassword() {
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
                <Card style={{ background: "#ffffffb8" }}>
                  <Card.Body className="p-4">
                    <div className="forget_key text-center mb-4">
                      <img src={Forgetkey} alt="" />
                    </div>

                    <Card.Title className="navyColor">
                      <p className="h1 font_bolder">Forgot Password</p>
                    </Card.Title>
                    <Card.Text className="gray">
                      No Worries, we'll send your reset instructions
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

                      <Form.Group className="mb-3">
                        <Link to="/mailcheck">
                          <Button
                            className="bigbutton rounded-pill border-0 w-100 p-3"
                            type="submit"
                          >
                            Reset Password?
                          </Button>
                        </Link>
                      </Form.Group>
                      <p className="text-center mb-3 text-dark  position-relative font_bold">
                        Back to Login
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
