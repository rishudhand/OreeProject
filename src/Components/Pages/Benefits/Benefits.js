import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Col, Row, Button } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
export default function Benefits() {
  return (
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
                <Card
                  style={{
                    background: "#ffffffb8",
                  }}
                >
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
                        <p className="text-dark font_bolder">Benefits</p>
                      </Col>
                    </Row>

                    <Card.Text className="gray">
                      <ol className="font_bold text-dark">
                        <li className="mb-2">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly.
                        </li>
                        <li className="mb-2">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly.
                        </li>
                        <li className="mb-2">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly.
                        </li>
                        <li className="mb-2">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly.
                        </li>
                        <li className="mb-2">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly.
                        </li>
                        <li className="mb-2">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly.
                        </li>
                      </ol>
                    </Card.Text>
                    <Button
                      className="bigbutton rounded-pill border-0 w-100 p-3"
                      type="submit"
                    >
                      Next
                    </Button>
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
