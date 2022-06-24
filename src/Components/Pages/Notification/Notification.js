import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";

import Laststep from "../../../Assets/image/laststep.png";
import Header from "../../Layout/Header";
export default function Notification() {
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
                    <Row>
                      <Col xs={8}>
                        <img src={Laststep} alt="" />
                      </Col>
                    </Row>
                    <div className="upload">
                      <p className="navyColor font_bolder h3 mb-3 text-center">
                        Review In Progress
                        <br /> You will receive notification shortly
                      </p>
                      <Form>
                        <Form.Group className="mb-3">
                          <Link to="/home">
                            <Button
                              className="bigbutton rounded-pill border-0 w-100 p-3"
                              type="submit"
                            >
                              Ok
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
