import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import { BsFillEyeSlashFill } from "react-icons/bs";
import Lock from "../../../Assets/icon/lock.png";
import Forgetkey from "../../../Assets/icon/forget.png";
import Header from "../../Layout/Header";
export default function Newpassword() {
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
                      <p className="h1 font_bolder">Set New password</p>
                    </Card.Title>
                    <Card.Text className="gray">
                      Your new password will be different from previously used
                      password.
                    </Card.Text>
                    <Form>
                      <Form.Group
                        className="mb-4 field  position-relative "
                        controlId="formBasicPassword"
                      >
                        <div className="d-flex border rounded-pill p-2 px-4">
                          <img src={Lock} alt="" />
                          <Form.Control
                            type="password"
                            className="border-0 bg-transparent"
                            placeholder="New Password"
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
                            placeholder="Re-enter New Password"
                          />

                          <BsFillEyeSlashFill
                            className="position-absolute"
                            style={{ bottom: "18px", right: "30px" }}
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Link to="/donepassword">
                          <Button
                            className="bigbutton rounded-pill border-0 w-100 p-3"
                            type="submit"
                          >
                            Reset Password?
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
