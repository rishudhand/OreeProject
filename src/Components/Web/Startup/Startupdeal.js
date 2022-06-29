import React, { useState } from "react";

import Profilebackground from "../../../Assets/image/profilebackground.jfif";
import Profile from "../../../Assets/image/avtar.png";
import { Dropdown, Nav, Tab, Col, Button, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nextuser from "../../../Assets/image/nextuser.png";
import Steve from "../../../Assets/image/steve.png";
import Kyra from "../../../Assets/image/kyra.png";
import Julia from "../../../Assets/image/julia.png";
import Bg_card from "../../../Assets/image/bg_card.png";
import Verified from "../../../Assets/icon/verified.png";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Done from "../../../Assets/icon/done.png";
import Like from "../../../Assets/icon/like.png";
import Share from "../../../Assets/icon/share.png";
import "./Startupdeal.scss";
import Contract from "../../../Assets/image/contract.png";
import Modallayout from "../Popup/Modallayout";
import Pending_startup from "../Popup/Pending_startup";
import Filterboard from "../../../Assets/icon/filterboard.png";
export default function Startupdeal() {
  const [pendingshow, pendingsetShow] = useState(false);

  const pendinghandleShow = () => pendingsetShow(true);
  const pendinghandleClose = () => pendingsetShow(false);
  return (
    <div>
      <Header />

      <div className="bg_light p-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="board">
          <div className="container">
            <Row className="mb-3 align-items-center  ">
              <Col xs={3}></Col>
              <Col
                sm={6}
                className="justify-content-between align-items-center d-flex"
              >
                <Nav
                  variant="pills"
                  className="flex-rows gray_fill ms-5 text-dark sidebar_profile justify-content-between p-1  board_invester"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="board">Board</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="investors">Investors</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Dropdown>
                  <Dropdown.Toggle className="bg-transparent border-0" id="dropdown-basic">
                    <p className="m-0">
                      <img src={Filterboard} alt="" />
                    </p>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="text-center">
                    <Dropdown.Item  className="p-2">Accepted</Dropdown.Item>
                    <hr  className="p-0 m-0"/>
                    <Dropdown.Item className="p-2">
                      Rejected
                    </Dropdown.Item>
                    <hr className="p-0 m-0"/>
                    <Dropdown.Item className="p-2">
                      Pending
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={2}></Col>
            </Row>
          </div>
          <div className="container">
            <Row>
              <Col md={3}>
                <div className="sidebar_profile mb-3">
                  <img
                    src={Profilebackground}
                    alt=""
                    className="w-100"
                    style={{ maxHeight: "150px" }}
                  />
                  <div className="profile_detail text-center p-2 bg-white">
                    <div className="profile_img rounded-circle mb-3">
                      <img
                        src={Profile}
                        alt=""
                        className="w-100 h-100 rounded-circle"
                      />
                    </div>
                    <p className="text-dark font_bolder h2 mb-0">John Doe</p>
                    <p className="text-secondary h5 font_bold"> Startup</p>
                    <Link to="/">
                      <Button
                        className="bg_gray mb-3 rounded-pill border-0 w-100 p-3"
                        type="submit"
                      >
                        Trial Expires in 7 Days
                      </Button>
                    </Link>
                    <p className="text-dark">
                      If want more learn more about the product and feactures
                      upgrade your membership
                    </p>
                    <p className="red font_bold">Upgrade Membership</p>
                    <hr />
                    <div
                      className="about_user text-left"
                      style={{ textAlign: "left" }}
                    >
                      <p className="text-dark h4 font_bold text-left">About</p>
                      <p className="text-secondary ">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <hr />
                      <div className="d-flex font_bold justify-content-between">
                        <p className="text-secondary">My Connections</p>
                        <p className="text-dark">5k+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="maindesign">
                  <Tab.Content>
                    <Tab.Pane eventKey="board">
                      <Card
                        className="border-0 mb-3"
                        style={{ background: "#ffffff" }}
                      >
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Board
                                    </p>
                                  </p>
                                  <p
                                    className="m-0  border border-dark text-dark rounded p-2 px-4"
                                    style={{ height: "40px" }}
                                    onClick={pendinghandleShow}
                                  >
                                    Pending
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Board
                                    </p>
                                  </p>
                                  <p className="m-0 lightgreen text-white  p-2 px-4">
                                    Accepted
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Board
                                    </p>
                                  </p>
                                  <p
                                    className="m-0  border border-dark text-dark rounded p-2 px-4"
                                    style={{ height: "40px" }}
                                  >
                                    Pending
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Board
                                    </p>
                                  </p>
                                  <p
                                    className="m-0 bg_red text-white p-2 px-4"
                                    style={{ height: "40px" }}
                                  >
                                    Rejected
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Board
                                    </p>
                                  </p>
                                  <p
                                    className="m-0 bg-transparent text-dark border border-dark p-2 px-4"
                                    style={{ height: "40px" }}
                                  >
                                    Pending
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                      <p className="text-dark font_bolder text-center">
                        View More
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="investors">
                      <Card
                        className="border-0 mb-3"
                        style={{ background: "#ffffff" }}
                      >
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Investors
                                    </p>
                                  </p>
                                  <p
                                    className="m-0  border border-dark text-dark rounded p-2 px-4"
                                    style={{ height: "40px" }}
                                  >
                                    Pending
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Investors
                                    </p>
                                  </p>
                                  <p className="m-0 lightgreen text-white  p-2 px-4">
                                    Accepted
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Investors
                                    </p>
                                  </p>
                                  <p
                                    className="m-0  border border-dark text-dark rounded p-2 px-4"
                                    style={{ height: "40px" }}
                                  >
                                    Pending
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Investors
                                    </p>
                                  </p>
                                  <p
                                    className="m-0 bg_red text-white p-2 px-4"
                                    style={{ height: "40px" }}
                                  >
                                    Rejected
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-4">
                          <div className="">
                            <div className="profile_head d-flex justify-content-between">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <div
                                className="right_notification"
                                style={{ width: "90%" }}
                              >
                                <div className="d-flex m-0 mb-3 justify-content-between">
                                  <p className="font_bolder m-0">
                                    Julia William &nbsp;
                                    <img src={Verified} alt="" />
                                    <p className="text-secondary font_bold m-0 ">
                                      Board
                                    </p>
                                  </p>
                                  <p
                                    className="m-0 bg-transparent text-dark border border-dark p-2 px-4"
                                    style={{ height: "40px" }}
                                  >
                                    Pending
                                  </p>
                                </div>
                                <Row className="">
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                      <p className="font_bold m-0">Deal Name</p>
                                      <p className="font_bolder m-0">
                                        Luke Pvt Ltd
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                      <p className="text-dark font_bolder text-center">
                        View More
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
              <Col md={3}>
                <Card
                  className="border-0 mb-3 sidebar_profile"
                  style={{
                    backgroundColor: "#ffffff",
                  }}
                >
                  <Card.Body className="p-2">
                    <Row className="align-items-center">
                      <Col xs={7}>
                        <p className="navyColor h5 font_bolder">
                          Contract Details
                        </p>
                        <p className="text-secondary ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Leo quam dolor nisl donec varius erat nunc
                          mauris. At quis ipsum integer.
                        </p>
                        <Button
                          className="bigbutton px-3 p-2 rounded-pill"
                          type="submit"
                        >
                          View Contract
                        </Button>
                      </Col>
                      <Col xs={5}>
                        <img src={Contract} alt="" />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card
                  className="border-0 mb-3 sidebar_profile"
                  style={{ background: "#ffffff" }}
                >
                  <p className="font_bolder p-2">People you may know</p>
                  <Card.Body className="p-2">
                    <div className="d-flex ">
                      <div
                        className="avatar avatar-md position-relative text-center justify-content-center rounded-circle"
                        style={{ height: "55px", width: "55px" }}
                      >
                        <img src={Steve} class="avatar-img w-100" />
                      </div>
                      &nbsp;&nbsp;
                      <p className="h5">
                        Steve Smith
                        <p className="text-secondary text_bold h6">
                          Angel Startup
                        </p>
                        <Button
                          className="bigbutton px-5 p-2 rounded-pill"
                          type="submit"
                        >
                          Connect
                        </Button>
                      </p>
                    </div>
                  </Card.Body>

                  <hr className="m-0" />
                  <Card.Body className="p-2">
                    <div className="d-flex ">
                      <div
                        className="avatar avatar-md position-relative text-center justify-content-center rounded-circle"
                        style={{ height: "55px", width: "55px" }}
                      >
                        <img src={Kyra} class="avatar-img w-100" />
                      </div>
                      &nbsp;&nbsp;
                      <p className="h5">
                        Kayra James
                        <p className="text-secondary text_bold h6">
                          Angel Startup
                        </p>
                        <Button
                          className="bigbutton px-5 p-2 rounded-pill"
                          type="submit"
                        >
                          Connect
                        </Button>
                      </p>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                  <Card.Body className="p-2">
                    <div className="d-flex ">
                      <div
                        className="avatar avatar-md position-relative text-center justify-content-center rounded-circle"
                        style={{ height: "55px", width: "55px" }}
                      >
                        <img src={Nextuser} class="avatar-img w-100" />
                      </div>
                      &nbsp;&nbsp;
                      <p className="h5">
                        Anny Jameson
                        <p className="text-secondary text_bold h6">
                          Angel Startup
                        </p>
                        <Button
                          className="bigbutton px-5 p-2 rounded-pill"
                          type="submit"
                        >
                          Connect
                        </Button>
                      </p>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                  <Card.Body className="p-2">
                    <div className="d-flex ">
                      <div
                        className="avatar avatar-md position-relative text-center justify-content-center rounded-circle"
                        style={{ height: "55px", width: "55px" }}
                      >
                        <img src={Julia} class="avatar-img w-100" />
                      </div>
                      &nbsp;&nbsp;
                      <p className="h5">
                        Julia William
                        <p className="text-secondary text_bold h6">
                          Angel Startup
                        </p>
                        <Button
                          className="bigbutton px-5 p-2 rounded-pill"
                          type="submit"
                        >
                          Connect
                        </Button>
                      </p>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                  <Card.Body className="p-2">
                    <p className="text-center text-secondary m-0 font_bold">
                      Show More...
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Tab.Container>
      </div>
      <Footer />
      <Modallayout show={pendingshow} handleChange={pendinghandleClose}>
        <Pending_startup />
      </Modallayout>
    </div>
  );
}
