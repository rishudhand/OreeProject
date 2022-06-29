import React from "react";
import "../../Layout/Header.scss";
import "./Setting.scss";
import { Col, Button, Row, Card, Form, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Loginuser from "../../../../Assets/icon/login.png";
import Blockuser from "../../../../Assets/icon/block.png";
import Forgetpass from "../../../../Assets/icon/forgetpass.png";
import Privacy from "../../../../Assets/icon/privacy.png";
import Terms from "../../../../Assets/icon/terms.png";
import Search from "../../../../Assets/icon/search.png";
import Steve from "../../../../Assets/image/steve.png";
import Kyra from "../../../../Assets/image/kyra.png";
import Julia from "../../../../Assets/image/julia.png";

import Mutual from "../../../../Assets/image/mutual.png";
import Mutualo from "../../../../Assets/image/mutualo.png";
import Jordan from "../../../../Assets/image/jordan.png";
import Userone from "../../../../Assets/image/userone.png";
import Nextuser from "../../../../Assets/image/nextuser.png";
import James from "../../../../Assets/image/james.png";
import Jullia from "../../../../Assets/image/jullia.png";
import Victoria from "../../../../Assets/image/victoria.png";
export default function Setting() {
  return (
    <div>
      <div>
        <Header />
        <div className="bg_light p-5">
          <div className="container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="account">
              <Row>
                <Col md={3}>
                  <div className="sidebar_profile">
                    <div className="profile_detail p-2 bg-white">
                      <p className="navyColor font_bolder m-0">Setting</p>
                      <hr />
                      <Nav variant="pills" className="flex-column setting   ">
                        <Nav.Item>
                          <Nav.Link eventKey="account">
                            <img src={Loginuser} alt="" />
                            &nbsp; Account
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="block">
                            <img src={Blockuser} alt="" />
                            &nbsp; Block User
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="forget">
                            <img src={Forgetpass} alt="" />
                            &nbsp; Forget Password
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="privacy">
                            <img src={Privacy} alt="" />
                            &nbsp; Privacy Policy
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="terms">
                            <img src={Terms} alt="" />
                            &nbsp; Terms & Conditions
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col md={9}>
                  <div className="maindesign">
                    <Card
                      className="border-0 mb-3"
                      style={{ background: "#ffffff" }}
                    >
                      <Card.Body className="p-4 py-2">
                        <Form>
                          <Tab.Content>
                            <Tab.Pane eventKey="account">
                              <Card.Header className="navyColor bg-transparent p-0 mb-3 pb-2 align-items-center font_bolder d-flex justify-content-between">
                                Account setting
                                <Form
                                  className="d-flex position-relative border p-1 rounded-pill"
                                  style={{ width: "30%" }}
                                >
                                  <Form.Group>
                                    <Form.Control
                                      type="text"
                                      className="border-0 ms-3 bg-transparent"
                                      placeholder="Search here..."
                                    />
                                  </Form.Group>
                                  <Link to="/">
                                    <Button
                                      className="bigbutton position-absolute rounded-circle"
                                      type="submit"
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        lineHeight: "15px",
                                        right: "1%",
                                        top: "5%",
                                      }}
                                    >
                                      <img src={Search} alt="" />
                                    </Button>
                                  </Link>
                                </Form>
                              </Card.Header>
                              <Form.Group>
                                <div className="d-flex justify-content-between">
                                  Public
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                  />
                                </div>
                              </Form.Group>
                              <hr />
                              <Form.Group>
                                <div className="d-flex justify-content-between">
                                  Private
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                  />
                                </div>
                              </Form.Group>
                            </Tab.Pane>
                            <Tab.Pane eventKey="block">
                              <Card.Header className="navyColor bg-transparent p-0 mb-3 pb-2 align-items-center font_bolder d-flex justify-content-between">
                                Block User
                                <Form
                                  className="d-flex position-relative border p-1 rounded-pill"
                                  style={{ width: "30%" }}
                                >
                                  <Form.Group>
                                    <Form.Control
                                      type="text"
                                      className="border-0 ms-3 bg-transparent"
                                      placeholder="Search here..."
                                    />
                                  </Form.Group>
                                  <Link to="/">
                                    <Button
                                      className="bigbutton position-absolute rounded-circle"
                                      type="submit"
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        lineHeight: "15px",
                                        right: "1%",
                                        top: "5%",
                                      }}
                                    >
                                      <img src={Search} alt="" />
                                    </Button>
                                  </Link>
                                </Form>
                              </Card.Header>
                              <Row>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Steve}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Victoria}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Jullia}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Jordan}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Mutual}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Julia}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Kyra}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={James}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Nextuser}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Userone}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Steve}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                                <Col md={3} className="mb-3">
                                  <Card className="gray_light p-2 border-0">
                                    <div className="profile_head text-center">
                                      <div
                                        className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                        style={{
                                          height: "80px",
                                          width: "80px",
                                        }}
                                      >
                                        <img
                                          src={Steve}
                                          class="avatar-img w-100"
                                        />
                                      </div>
                                      &nbsp;&nbsp;
                                      <p className="font_bold">
                                        Viktoriia Dontsova
                                        <p className="text-dark ">Investor</p>
                                        <div className="d-flex mb-3 align-items-center">
                                          <div className="d-flex w-25">
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                              }}
                                            >
                                              <img
                                                src={Mutual}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Mutualo}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Steve}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                            <div
                                              className="avatar avatar-md position-relative text-center rounded-circle"
                                              style={{
                                                height: "18px",
                                                width: "18px",
                                                border: "2px solid #fff",
                                                marginLeft: "-8%",
                                              }}
                                            >
                                              <img
                                                src={Kyra}
                                                class="avatar-img w-100"
                                              />
                                            </div>
                                          </div>

                                          <p className="text-dark m-0 text-decoration-none">
                                            <small>13 mutual connections</small>
                                          </p>
                                        </div>
                                        <Button className="bigbutton w-100 px-4 border-0 p-2 rounded-pill">
                                          Unblock
                                        </Button>
                                      </p>
                                    </div>
                                  </Card>
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="forget">
                              <Card.Header className="navyColor bg-transparent p-0 mb-3 pb-2 align-items-center font_bolder d-flex justify-content-between">
                                Change Password
                              </Card.Header>
                              <Row>
                                <Col xs={12} md={6}>
                                  <Form>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Control
                                        type="email"
                                        className="rounded-pill p-2"
                                        placeholder="Current Password"
                                      />
                                    </Form.Group>

                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicPassword"
                                    >
                                      <Form.Control
                                        type="password"
                                        className="rounded-pill p-2"
                                        placeholder="New Password"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicPassword"
                                    >
                                      <Form.Control
                                        type="password"
                                        className="rounded-pill p-2"
                                        placeholder="Confirm New Password"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicPassword"
                                    >
                                      <Button
                                        className="w-100 rounded-pill p-2 bigbutton"
                                        type="submit"
                                      >
                                        Update
                                      </Button>
                                    </Form.Group>
                                  </Form>
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="privacy">
                              <Card.Header className="navyColor bg-transparent p-0 mb-3 pb-2 align-items-center font_bolder d-flex justify-content-between">
                                Privacy Policy
                              </Card.Header>
                              <p className="navyColor">
                                <i>Effective August 11, 2020</i>
                              </p>
                              <div className="h5 font_bolder navyColor  mb-2">
                                Your Privacy Matters
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                Introduction
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                Data Controllers and Contracting Parties
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                Cookies and Similar Technologies
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                Sites and Services of Others
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                How We Use Your Data
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                Developing Services and Research
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="terms">
                              <Card.Header className="navyColor bg-transparent p-0 mb-3 pb-2 align-items-center font_bolder d-flex justify-content-between">
                                Terms & Conditions
                              </Card.Header>
                              <p className="navyColor">
                                <i>Effective August 11, 2020</i>
                              </p>
                              <div className="h5 font_bolder navyColor  mb-2">
                                Terms & Condition
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                Introduction
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                What are Terms and Conditions Agreements?
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                Is a Terms and Conditions Agreement Required?
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                What Information to Include in Terms and
                                Conditions
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                How We Use Your Data
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                              <div className="h5 font_bolder navyColor mb-3">
                                Developing Services and Research
                              </div>
                              <p className="gray">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </Tab.Pane>
                          </Tab.Content>
                        </Form>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
