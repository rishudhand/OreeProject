import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import Check from "../../../Assets/icon/check.png";
import Header from "../../Layout/Header";

export default function Donepassword() {
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
                      <img src={Check} alt="" />
                    </div>
                    <Card.Title className="navyColor text-center">
                      <p className="h1 font_bolder">Password Reset</p>
                    </Card.Title>
                    <Card.Text className="gray text-center font_bold">
                      Your Password has been successfully reset
                      <br />
                      Click below to log in magically.
                    </Card.Text>
                    <Form>
                      <Form.Group className="mb-3">
                        <Link to="/selectrole">
                          <Button
                            className="bigbutton rounded-pill border-0 w-100 p-3"
                            type="submit"
                          >
                            Continue
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
