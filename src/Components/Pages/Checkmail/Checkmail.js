import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "../Login/Login.scss";
import Mailcheck from "../../../Assets/icon/checkmail.png";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";

export default function Checkmail() {
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
                      <img src={Mailcheck} alt="" />
                    </div>

                    <Card.Title className="navyColor">
                      <p className="h1 font_bolder">Check Your Mail</p>
                    </Card.Title>
                    <Card.Text className="gray">
                      We sent a password reset link to{" "}
                      <span className="text-dark font_bold">abc@gmail.com</span>
                    </Card.Text>
                    <Form>
                      <Form.Group className="mb-3">
                        <Link to="/newpassword">
                          <Button
                            className="bigbutton rounded-pill border-0 w-100 p-3"
                            type="submit"
                          >
                            Open email App
                          </Button>
                        </Link>
                      </Form.Group>
                      <p className="text-center mb-3 navyColor  position-relative font_bold">
                        Don’t recieved a email.&nbsp;
                        <Link
                          to="/"
                          className="text-decoration-none navyColor font_bolder"
                        >
                          Resend again.
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
