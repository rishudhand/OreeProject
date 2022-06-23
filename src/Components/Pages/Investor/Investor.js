import React from "react";
import Loginbanner from "../../../Assets/image/loginbanner.png";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

import File from "../../../Assets/icon/file.png";
import Showfile from "../../../Assets/icon/showfile.png";
import Cross from "../../../Assets/icon/cross.png";
export default function Investor() {
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
                        <p className="text-dark font_bolder">Investor</p>
                      </Col>
                    </Row>

                    <div className="d-flex overflow-hidden text-center justify-content-between align-items-center">
                      <div className="main">
                        <div
                          className="circle m-auto start_point position-relative rounded-circle text-center "
                          style={{ width: "49px", height: "49px" }}
                        >
                          <p
                            className="bigbutton text-white font_bolder rounded-circle position-absolute investor_progress"
                            style={{ width: "40px", height: "40px" }}
                          >
                            1
                          </p>
                        </div>
                        <p className="text-dark">Personal Detail</p>
                      </div>
                      <div className="main">
                        <div
                          className="circle m-auto start_point position-relative rounded-circle text-center "
                          style={{ width: "49px", height: "49px" }}
                        >
                          <p
                            className="bigbutton font_bolder text-white rounded-circle position-absolute investor_progress"
                            style={{ width: "40px", height: "40px" }}
                          >
                            2
                          </p>
                        </div>
                        <p className="text-dark">Investment Profile</p>
                      </div>
                      <div className="main">
                        <div
                          className="circle m-auto position-relative rounded-circle text-center "
                          style={{ width: "49px", height: "49px" }}
                        >
                          <p
                            className="bigbutton font_bolder text-white rounded-circle position-absolute investor_progress"
                            style={{ width: "40px", height: "40px" }}
                          >
                            3
                          </p>
                        </div>
                        <p className="text-dark">Upload Document</p>
                      </div>
                    </div>
                    <div className="personaldetail">
                      <Card.Title className="navyColor">
                        <p className="h3">Let’s Get Started</p>
                      </Card.Title>
                      <Form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <Form.Control
                              type="text"
                              className="border-0 bg-transparent"
                              placeholder="First Name"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <Form.Control
                              type="text"
                              className="border-0 bg-transparent"
                              placeholder="Last Name"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <Form.Control
                              type="text"
                              className="border-0 bg-transparent"
                              placeholder="Date of Birth"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <Form.Control
                              type="text"
                              className="border-0 bg-transparent"
                              placeholder="Country"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <Form.Control
                              type="text"
                              className="border-0 bg-transparent"
                              placeholder="State"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <Form.Control
                              type="text"
                              className="border-0 bg-transparent"
                              placeholder="City"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="d-flex field border rounded-pill p-2 px-4">
                            <Form.Control
                              type="email"
                              className="border-0 bg-transparent"
                              placeholder="Email"
                            />
                          </div>
                        </Form.Group>

                        <Form.Group
                          className="mb-4 field  position-relative "
                          controlId="formBasicPassword"
                        >
                          <div className="d-flex border rounded-pill p-2 px-4">
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
                          className="mb-4 field  position-relative "
                          controlId="formBasicPassword"
                        >
                          <div className="d-flex border rounded-pill p-2 px-4">
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
                    <div className="investmentprofile">
                      <Form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="field border rounded-pill p-2 px-4">
                            <Form.Select
                              aria-label="Default select example "
                              className="border-0"
                            >
                              <option>Business Category</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <div className="field border rounded-pill p-2 px-4">
                            <Form.Select
                              aria-label="Default select example "
                              className="border-0"
                            >
                              <option>Business Type</option>
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
                              <option>Funding Type</option>
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
                              <option>Preferred Valuation Range</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-between">
                          <p>Do you want to become a Qualified investor?</p>
                          <Link to="/benefits">
                            <Form.Check type="switch" id="custom-switch" />
                          </Link>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-between">
                          <p>Do you want to become a Board member?</p>
                          <Link to="/boardbenefits">
                            <Form.Check type="switch" id="custom-switch" />
                          </Link>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Link to="/boardmember">
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
                    <div className="upload">
                      <p className="navyColor font_bold text-center">
                        Please submit your Tax return last 3 years
                      </p>
                      <Form>
                        <Form.Group className="lightestblue p-3 mb-3 rounded">
                          <p className="h2 navyColor font_bolder text-center">
                            Upload Files
                          </p>
                          <p className="navyColor text-center font_bold">
                            We will be allowed Only:
                            <span className="text-success jpg ms-2">JPG</span>
                            <span className="text-primary png ms-2">PNG</span>
                            <span className="text-secondary pdf ms-2">PDF</span>
                          </p>
                          <div className="choosefile text-center gray_light p-3 mb-3 rounded position-relative">
                            <img src={File} alt="" />
                            <p className="text-dark font_bold">
                              Choose files here...
                            </p>
                            <p className="text-secondary font_bold ">
                              (Max file size: 10mb)
                            </p>
                            <div
                              className="position-absolute w-100"
                              style={{
                                top: "0",
                                left: "0",
                                opacity: "0",
                                height: "100%",
                              }}
                            >
                              <Form.Control
                                type="file"
                                style={{ height: "100%" }}
                              />
                            </div>
                          </div>
                          <div className="show_file bg-white p-2 rounded">
                            <Row className="align-items-center">
                              <Col xs={2}>
                                <img src={Showfile} alt="" className="w-100" />
                              </Col>
                              <Col xs={8} className="text-left">
                                <p className="h5 text-dark text-left">
                                  File.tax
                                </p>
                                <p className="text-secondary">File.tax :6mb</p>
                              </Col>
                              <Col xs={2}>
                                <img src={Cross} alt="" />
                              </Col>
                            </Row>
                          </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Link to="/notification">
                            <Button
                              className="bigbutton rounded-pill border-0 w-100 p-3"
                              type="submit"
                            >
                              Submit
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
