import React from "react";
import "./Network.scss";

import Search from "../../../../Assets/icon/search.png";
import {
  Dropdown,
  Tab,
  Nav,
  Col,
  Button,
  Row,
  Card,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Userone from "../../../../Assets/image/userone.png";
import Nextuser from "../../../../Assets/image/nextuser.png";
import James from "../../../../Assets/image/james.png";
import Steve from "../../../../Assets/image/steve.png";
import Kyra from "../../../../Assets/image/kyra.png";
import Julia from "../../../../Assets/image/julia.png";

import Mutual from "../../../../Assets/image/mutual.png";
import Mutualo from "../../../../Assets/image/mutualo.png";
import Jordan from "../../../../Assets/image/jordan.png";
import Jullia from "../../../../Assets/image/jullia.png";
import Victoria from "../../../../Assets/image/victoria.png";
import Dott from "../../../../Assets/icon/dott.png";
import Delete from "../../../../Assets/icon/delete.png";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
export default function Network() {
  return (
    <div>
      <Header />
      <div className="bg_light p-5">
        <div className="container">
          <Tab.Container id="left-tabs-example">
            <Row>
              <Col md={3} className="">
                <div className="sidebar_profile p-2 bg-white">
                  <div className="d-flex font_bold justify-content-between">
                    <p className="text-secondary m-0">My network</p>
                    <p className="text-dark m-0">5k+</p>
                  </div>
                  <hr />
                  <Nav variant="pills" className="flex-column mynetwork">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="first"
                        className="text-secondary ps-0 font_bold"
                      >
                        Investor Connection
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="second"
                        className="text-secondary ps-0 font_bold"
                      >
                        Startup Connection
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {/* <p className="text-secondary font_bold">Investor Connection</p>
                <p className="text-secondary font_bold">Startup Connection</p> */}
                </div>
              </Col>
              <Col md={9}>
                <div className="maindesign">
                  <Card
                    className="border-0 mb-3"
                    style={{ background: "#ffffff" }}
                  >
                    <Card.Header className="border-0 bg-white align-items-center d-flex justify-content-between">
                      <p className="text-center text-dark font_bolder m-0 p-2">
                        Invitations
                      </p>
                      <Link
                        to="/"
                        className="text-decoration-none font_bold text-secondary"
                      >
                        See all 20
                      </Link>
                    </Card.Header>
                    <hr className="m-0 p-0" />
                    <Card.Body className="p-4 py-2">
                      <div className="d-flex justify-content-between align-items-center ">
                        <div className="profile_head d-flex">
                          <div
                            className="avatar avatar-md position-relative text-center rounded-circle"
                            style={{ height: "80px", width: "80px" }}
                          >
                            <img src={Steve} class="avatar-img w-100" />
                          </div>
                          &nbsp;&nbsp;
                          <p className="font_bolder">
                            Jullia William
                            <p className="text-secondary m-0 ">Angel Startup</p>
                            <div className="d-flex">
                              <div className="d-flex">
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                  }}
                                >
                                  <img src={Mutual} class="avatar-img w-100" />
                                </div>
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                    marginLeft: "-8%",
                                  }}
                                >
                                  <img src={Mutualo} class="avatar-img w-100" />
                                </div>
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                    marginLeft: "-8%",
                                  }}
                                >
                                  <img src={Steve} class="avatar-img w-100" />
                                </div>
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                    marginLeft: "-8%",
                                  }}
                                >
                                  <img src={Kyra} class="avatar-img w-100" />
                                </div>
                              </div>

                              <Link
                                to="/"
                                className="text-secondary text-decoration-none font_bold"
                              >
                                Sakshi Bhuraita and 9 others
                              </Link>
                            </div>
                          </p>
                        </div>

                        <div className="moreinfo d-flex">
                          <Button className="bg-transparent text-secondary border-0 ms-2 px-3 p-2 rounded-pill">
                            Ignore
                          </Button>
                          <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                            Accept
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                    <hr className="m-0" />
                    <Card.Body className="p-4 py-2">
                      <div className="d-flex justify-content-between align-items-center ">
                        <div className="profile_head d-flex">
                          <div
                            className="avatar avatar-md position-relative text-center rounded-circle"
                            style={{ height: "80px", width: "80px" }}
                          >
                            <img src={Jordan} class="avatar-img w-100" />
                          </div>
                          &nbsp;&nbsp;
                          <p className="font_bolder">
                            Jordan William
                            <p className="text-secondary m-0 ">Angel Startup</p>
                            <div className="d-flex">
                              <div className="d-flex">
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                  }}
                                >
                                  <img src={Mutual} class="avatar-img w-100" />
                                </div>
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                    marginLeft: "-8%",
                                  }}
                                >
                                  <img src={Mutualo} class="avatar-img w-100" />
                                </div>
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                    marginLeft: "-8%",
                                  }}
                                >
                                  <img src={Steve} class="avatar-img w-100" />
                                </div>
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                    marginLeft: "-8%",
                                  }}
                                >
                                  <img src={Kyra} class="avatar-img w-100" />
                                </div>
                              </div>

                              <Link
                                to="/"
                                className="text-secondary text-decoration-none font_bold"
                              >
                                Sakshi Bhuraita and 9 others
                              </Link>
                            </div>
                          </p>
                        </div>

                        <div className="moreinfo d-flex">
                          <Button className="bg-transparent text-secondary border-0 ms-2 px-3 p-2 rounded-pill">
                            Ignore
                          </Button>
                          <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                            Accept
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                    <hr />
                    <Card.Body className="p-4 py-2">
                      <div className="d-flex justify-content-between align-items-center ">
                        <div className="profile_head d-flex">
                          <div
                            className="avatar avatar-md position-relative text-center rounded-circle"
                            style={{ height: "80px", width: "80px" }}
                          >
                            <img src={Jullia} class="avatar-img w-100" />
                          </div>
                          &nbsp;&nbsp;
                          <p className="font_bolder">
                            Jullia William
                            <p className="text-secondary m-0 ">Angel Startup</p>
                            <div className="d-flex">
                              <div className="d-flex">
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                  }}
                                >
                                  <img src={Mutual} class="avatar-img w-100" />
                                </div>
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                    marginLeft: "-8%",
                                  }}
                                >
                                  <img src={Mutualo} class="avatar-img w-100" />
                                </div>
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                    marginLeft: "-8%",
                                  }}
                                >
                                  <img src={Steve} class="avatar-img w-100" />
                                </div>
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{
                                    height: "25px",
                                    width: "25px",
                                    border: "2px solid #fff",
                                    marginLeft: "-8%",
                                  }}
                                >
                                  <img src={Kyra} class="avatar-img w-100" />
                                </div>
                              </div>

                              <Link
                                to="/"
                                className="text-secondary text-decoration-none font_bold"
                              >
                                Sakshi Bhuraita and 9 others
                              </Link>
                            </div>
                          </p>
                        </div>

                        <div className="moreinfo d-flex">
                          <Button className="bg-transparent text-secondary border-0 ms-2 px-3 p-2 rounded-pill">
                            Ignore
                          </Button>
                          <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                            Accept
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                    <hr />
                    <p className="text-center">
                      <Link
                        to="/"
                        className="text-decoration-none text-secondary font_bold"
                      >
                        See More
                      </Link>
                    </p>
                  </Card>
                  <Card
                    className="border-0 mb-3"
                    style={{ background: "#ffffff" }}
                  >
                    <Card.Header className="border-0 bg-white align-items-center d-flex justify-content-between">
                      <p className="text-center text-dark font_bolder m-0 p-2">
                        People you may know
                      </p>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={3} className="mb-3">
                          <Card className="gray_light p-2 border-0">
                            <div className="profile_head text-center">
                              <div
                                className="avatar avatar-md mb-2 position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Victoria} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Jullia} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Jordan} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Mutual} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Julia} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Kyra} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={James} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Nextuser} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Userone} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
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
                                  Connect
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
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
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
                                  Connect
                                </Button>
                              </p>
                            </div>
                          </Card>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Card
                        className="border-0 mb-3"
                        style={{ background: "#ffffff" }}
                      >
                        <Card.Header className=" bg-white align-items-center d-flex justify-content-between">
                          <p className="text-center text-dark font_bolder m-0 p-2">
                            1,503 Connections
                          </p>
                          <Form
                            className="d-flex position-relative border p-1 rounded-pill"
                            style={{ width: "28%" }}
                          >
                            <Form.Group>
                              <Form.Control
                                type="text"
                                className="border-0 ms-3"
                                placeholder="Search here..."
                                style={{ lineHeight: "35px" }}
                              />
                            </Form.Group>
                            <Button
                              className="bigbutton position-absolute rounded-circle"
                              type="submit"
                              style={{
                                width: "49px",
                                height: "49px",
                                lineHeight: "15px",
                                right: "2%",
                              }}
                            >
                              <img src={Search} alt="" />
                            </Button>
                          </Form>
                        </Card.Header>

                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <Link
                              to="/networkprofile"
                              className="text-decoration-none"
                            >
                              <div className="profile_head align-items-center d-flex">
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{ height: "80px", width: "80px" }}
                                >
                                  <img
                                    src={Victoria}
                                    class="avatar-img w-100"
                                  />
                                </div>
                                &nbsp;&nbsp;
                                <p className="font_bolder text-dark">
                                  Jullia William
                                  <p className="text-secondary m-0 ">
                                    Angel Startup
                                  </p>
                                </p>
                              </div>
                            </Link>
                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>

                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Jullia} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Jordan} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Mutualo} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Mutual} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Card
                        className="border-0 mb-3"
                        style={{ background: "#ffffff" }}
                      >
                        <Card.Header className=" bg-white align-items-center d-flex justify-content-between">
                          <p className="text-center text-dark font_bolder m-0 p-2">
                            1,503 Connections
                          </p>
                          <Form
                            className="d-flex position-relative border p-1 rounded-pill"
                            style={{ width: "28%" }}
                          >
                            <Form.Group>
                              <Form.Control
                                type="text"
                                className="border-0 ms-3"
                                placeholder="Search here..."
                                style={{ lineHeight: "35px" }}
                              />
                            </Form.Group>
                            <Button
                              className="bigbutton position-absolute rounded-circle"
                              type="submit"
                              style={{
                                width: "49px",
                                height: "49px",
                                lineHeight: "15px",
                                right: "2%",
                              }}
                            >
                              <img src={Search} alt="" />
                            </Button>
                          </Form>
                        </Card.Header>

                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <Link
                              to="/networkprofile"
                              className="text-decoration-none"
                            >
                              <div className="profile_head align-items-center d-flex">
                                <div
                                  className="avatar avatar-md position-relative text-center rounded-circle"
                                  style={{ height: "80px", width: "80px" }}
                                >
                                  <img
                                    src={Victoria}
                                    class="avatar-img w-100"
                                  />
                                </div>
                                &nbsp;&nbsp;
                                <p className="font_bolder text-dark">
                                  Jullia William
                                  <p className="text-secondary m-0 ">
                                    Angel Startup
                                  </p>
                                </p>
                              </div>
                            </Link>
                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>

                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Jullia} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Jordan} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Mutualo} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Mutual} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body className="p-4 py-3">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="profile_head align-items-center d-flex">
                              <div
                                className="avatar avatar-md position-relative text-center rounded-circle"
                                style={{ height: "80px", width: "80px" }}
                              >
                                <img src={Steve} class="avatar-img w-100" />
                              </div>
                              &nbsp;&nbsp;
                              <p className="font_bolder">
                                Jullia William
                                <p className="text-secondary m-0 ">
                                  Angel Startup
                                </p>
                              </p>
                            </div>

                            <div className="moreinfo d-flex">
                              <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                                Message
                              </Button>
                              <Dropdown className="connection_drop">
                                <Dropdown.Toggle
                                  variant="transparent"
                                  id="dropdown-basic"
                                >
                                  <img src={Dott} alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div className="d-flex">
                                      <img src={Delete} alt="" />
                                      &nbsp; Remove Connection
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}
