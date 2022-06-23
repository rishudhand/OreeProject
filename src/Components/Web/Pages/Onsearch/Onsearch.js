import React from "react";
import Profilebackground from "../../../../Assets/image/profilebackground.jfif";
import Profile from "../../../../Assets/image/avtar.png";
import { Col, Button, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nextuser from "../../../../Assets/image/nextuser.png";
import Steve from "../../../../Assets/image/steve.png";
import Kyra from "../../../../Assets/image/kyra.png";
import Julia from "../../../../Assets/image/julia.png";
import Bg_card from "../../../../Assets/image/bg_card.png";
import Verified from "../../../../Assets/icon/verified.png";
import Mutual from "../../../../Assets/image/mutual.png";
import Mutualo from "../../../../Assets/image/mutualo.png";
import Jordan from "../../../../Assets/image/jordan.png";
export default function Onsearch() {
  return (
    <div>
      <div className="bg_light p-5">
        <div className="container">
          <div className="d-flex">
            <p className="bigbutton rounded-pill p-2 px-4 text-white">
              Investor
            </p>
            <p className="border-dark border text-dark ms-2 rounded-pill p-2 px-4">
              Investor
            </p>
            <p className="border-dark border text-dark ms-2 rounded-pill p-2 px-4">
              Deal
            </p>
          </div>
          <Row>
            <Col md={6}>
              <div className="maindesign">
                <Card
                  className="border-0 mb-3"
                  style={{ background: "#ffffff" }}
                >
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Message
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
                          <img src={Nextuser} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
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
                          <img src={Julia} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                  <p className="text-dark px-4 p-2 m-0 font_bold">Startups</p>
                  <Card.Body className="p-4 py-2">
                    <div className="d-flex justify-content-between align-items-center ">
                      <div className="profile_head d-flex">
                        <div
                          className="avatar avatar-md position-relative text-center rounded-circle"
                          style={{ height: "80px", width: "80px" }}
                        >
                          <img src={Kyra} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
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
                          <img src={Mutual} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                  <p className="text-dark px-4 p-2 m-0 font_bold">Investor</p>
                  <Card.Body className="p-4 py-2">
                    <div className="d-flex justify-content-between align-items-center ">
                      <div className="profile_head d-flex">
                        <div
                          className="avatar avatar-md position-relative text-center rounded-circle"
                          style={{ height: "80px", width: "80px" }}
                        >
                          <img src={Mutualo} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                  <p className="text-dark px-4 p-2 m-0 font_bold">Investor</p>
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
                                Investor
                              </p>
                            </p>
                          </div>
                          <Row className="">
                            <Col md={6}>
                              <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                <p className="font_bold m-0">Deal Name</p>
                                <p className="font_bolder m-0">Luke Pvt Ltd</p>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                <p className="font_bold m-0">Deal Name</p>
                                <p className="font_bolder m-0">Luke Pvt Ltd</p>
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
                                Investor
                              </p>
                            </p>
                          </div>
                          <Row className="">
                            <Col md={6}>
                              <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                <p className="font_bold m-0">Deal Name</p>
                                <p className="font_bolder m-0">Luke Pvt Ltd</p>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="d-flex p-2 align-items-center justify-content-between sidebar_profile gray_light text-dark  m-0 ">
                                <p className="font_bold m-0">Deal Name</p>
                                <p className="font_bolder m-0">Luke Pvt Ltd</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                </Card>
                <Card
                  className="border-0 mb-3"
                  style={{ background: "#ffffff" }}
                >
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Message
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
                          <img src={Nextuser} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
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
                          <img src={Julia} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
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
                          <img src={Kyra} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
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
                          <img src={Mutual} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
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
                          <img src={Mutualo} class="avatar-img w-100" />
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
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
                        <Button className="bigbutton px-4 border-0 p-2 rounded-pill">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <Card
                className="border-0 mb-3 sidebar_profile"
                style={{
                  backgroundColor: "#ffffff",
                  backgroundImage: `url(${Bg_card})`,
                  backgroundPosition: "right",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Card.Body className="p-2">
                  <Row>
                    <Col xs={10}>
                      <p className="navyColor h4 font_bolder">
                        Become a Board Member
                      </p>
                      <p className="text-secondary font_bold">
                        Lorem Ipsum is simply dummy text printing and
                        typesetting industry.Ipsum has been the industry's.
                      </p>
                      <Button
                        className="bigbutton px-5 p-2 rounded-pill"
                        type="submit"
                      >
                        Join Now
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}