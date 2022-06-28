import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Form, Row, Col } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import Investor from "../../../Assets/icon/investor.png";
import Startup from "../../../Assets/icon/startup.png";
import Header from "../../Layout/Header";
export default function Selectrole() {
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
                    <Card.Title className="navyColor">
                      <p className="h1 font_bolder">Select Your Role</p>
                    </Card.Title>
                    <Card.Text className="gray font_bold">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly
                    </Card.Text>
                    <Form className="px-4">
                      <Form.Group className="mb-3 bg_light rounded-3">
                        <Link to="/questions" className="text-decoration-none ">
                          <div className="d-flex align-items-center p-3">
                            <div
                              className="role_img bg-white rounded-circle"
                              style={{
                                width: "65px",
                                height: "55px",
                                padding: "10px",
                              }}
                            >
                              <img src={Investor} alt="" />
                            </div>
                            <div className="role_content ms-2">
                              <p className="text-dark h5 font_bold">Investor</p>
                              <p className="gray font_bold">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.{" "}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </Form.Group>
                      <Form.Group className="mb-3 bg_light rounded-3">
                        <Link
                          to="/startupstepone"
                          className="text-decoration-none "
                        >
                          <div className="d-flex align-items-center p-3">
                            <div
                              className="role_img bg-white rounded-circle"
                              style={{
                                width: "65px",
                                height: "55px",
                                padding: "10px",
                              }}
                            >
                              <img src={Startup} alt="" />
                            </div>
                            <div className="role_content ms-2">
                              <p className="text-dark h5 font_bold">Startup</p>
                              <p className="gray font_bold">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.{" "}
                              </p>
                            </div>
                          </div>
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
