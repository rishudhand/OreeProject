import React, { useState } from "react";
import "../../Layout/Header.scss";
import Profilebackground from "../../../../Assets/image/profilebackground.jfif";
import Profile from "../../../../Assets/image/avtar.png";
import { Col, Button, Row, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import User from "../../../../Assets/image/user.png";
import Done from "../../../../Assets/icon/done.png";
import Like from "../../../../Assets/icon/like.png";
import Comment from "../../../../Assets/icon/comment.png";
import Share from "../../../../Assets/icon/share.png";
import Sticker from "../../../../Assets/icon/sticker.png";
import Gallery from "../../../../Assets/icon/gallery.png";
import Userone from "../../../../Assets/image/userone.png";
import Nextuser from "../../../../Assets/image/nextuser.png";
import James from "../../../../Assets/image/james.png";
import Steve from "../../../../Assets/image/steve.png";
import Kyra from "../../../../Assets/image/kyra.png";
import Julia from "../../../../Assets/image/julia.png";
import Bg_card from "../../../../Assets/image/bg_card.png";
import Modallayout from "../../Popup/Modallayout.js";
import Requestinfo from "../../Popup/Requestinfo.js";
import Rightcheck from "../../../../Assets/icon/rightcheck.png";
import RequestMoreinfo from "../../Popup/RequestMoreinfo.js";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
export default function Fullpost() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [moreinfoshow, moreinfosetShow] = useState(false);

  const moreinfohandleShow = () => moreinfosetShow(true);
  const moreinfohandleClose = () => moreinfosetShow(false);
  return (
    <div>
      <Header />
      <div className="bg_light p-5">
        <div className="container">
          <Row>
            <Col md={3}>
              <div className="sidebar_profile">
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
                  <p className="text-secondary h5 font_bold">Angle Investor</p>
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
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
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
                          <img src={User} class="avatar-img w-100" />
                        </div>
                        &nbsp;&nbsp;
                        <p className="font_bolder">
                          Aayushi Gajjar
                          <p className="text-secondary m-0 ">Startup</p>
                          <p className="h6">5 minutes ago</p>
                        </p>
                      </div>

                      <div className="moreinfo d-flex">
                        <Button
                          onClick={moreinfohandleShow}
                          className="bigbutton  p-2 rounded-pill"
                        >
                          View document
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                  <Card.Body className="px-3">
                    <p className="text-dark font_bold">Description</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries,
                    </p>
                    <Row>
                      <Col xs={6} className="mb-3">
                        <div className="gray_light p-3 sidebar_profile">
                          <p className="font_bold m-0">Name</p>
                          <p className="font_bolder">Luke Pvt Ltd</p>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className="gray_light p-3 sidebar_profile">
                          <p className="font_bold m-0">Business Type</p>
                          <p className="font_bolder">New</p>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className="gray_light p-3 sidebar_profile">
                          <p className="font_bold m-0">Business Category</p>
                          <p className="font_bolder">IT Companies</p>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className="gray_light p-3 sidebar_profile">
                          <p className="font_bold m-0">Funding Goal</p>
                          <p className="font_bolder">10k</p>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className="gray_light p-3 sidebar_profile">
                          <p className="font_bold m-0">Estimate Revenue</p>
                          <p className="font_bolder">30k</p>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className="gray_light p-3 sidebar_profile">
                          <p className="font_bold m-0">Estimate profit</p>
                          <p className="font_bolder">20k</p>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className="gray_light p-3 sidebar_profile">
                          <p className="font_bold m-0">Funding Amount</p>
                          <p className="font_bolder">100k</p>
                        </div>
                      </Col>
                      <Col xs={6} className="mb-3">
                        <div className="gray_light p-3 sidebar_profile">
                          <p className="font_bold m-0">Funding Type</p>
                          <p className="font_bolder">Crowd Funded </p>
                        </div>
                      </Col>
                    </Row>

                    <div className="d-flex mb-3">
                      <Button
                        className="bg_gray p-2 border-0 sidebar_profile"
                        type="submit"
                      >
                        Total Bids : 20+
                      </Button>
                      <Button
                        className="bigbutton border-0 ms-2 p-2 sidebar_profile"
                        type="submit"
                        onClick={handleShow}
                      >
                        Request More info
                      </Button>
                    </div>
                    <Row className="py-3">
                      <Col xs={9}>
                        <div className="d-flex align-items-center">
                          <img src={Done} alt="" />
                          <p className="text-secondary m-0 ms-2 font_bold">
                            You & 500k+ others
                          </p>
                        </div>
                      </Col>
                      <Col xs={3}>
                        <p className="font_bold">22 comments</p>
                      </Col>
                    </Row>
                  </Card.Body>
                  <hr />
                  <Card.Body>
                    <div className="d-flex justify-content-between text-center">
                      <p className="p-2 px-5 sidebar_profile">
                        <img src={Like} alt="" /> Like
                      </p>
                      <p className="p-2 px-5 gray_light sidebar_profile">
                        <img src={Comment} alt="" /> Comments
                      </p>
                      <p className="p-2 px-5 sidebar_profile">
                        <img src={Share} alt="" /> Share
                      </p>
                    </div>
                    <Row className="mb-3">
                      <Col xs={2}>
                        <div
                          className="avatar avatar-md position-relative text-center rounded-circle"
                          style={{ height: "80px", width: "80px" }}
                        >
                          <img src={Profile} class="avatar-img w-100" />
                        </div>
                      </Col>
                      <Col xs={10}>
                        <Form>
                          <Form.Group
                            className="mb-3 d-flex border sidebar_profile align-items-center"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Control as="textarea" className="border-0" />
                            <img
                              src={Sticker}
                              alt=""
                              style={{
                                width: "7%",
                                height: "20px",
                                marginRight: "20px",
                              }}
                            />
                            <img
                              src={Gallery}
                              alt=""
                              style={{
                                width: "7%",
                                height: "20px",
                                marginRight: "20px",
                              }}
                            />
                          </Form.Group>
                          <Button
                            className="bigbutton px-5 p-2 rounded-pill"
                            type="submit"
                          >
                            Post
                          </Button>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={2}>
                        <div
                          className="avatar avatar-md position-relative text-center rounded-circle"
                          style={{ height: "80px", width: "80px" }}
                        >
                          <img src={Userone} class="avatar-img w-100" />
                        </div>
                      </Col>
                      <Col xs={10}>
                        <div className="main_box">
                          <div className="gray_light sidebar_profile p-2">
                            <p className="mb-0 font_bolder">John Bride</p>
                            <p className="mb-0 font_bold text-secondary">
                              Investor
                            </p>
                            <p className="mb-0 font_bold text-secondary">
                              In publishing and graphic design, Lorem ipsum is a
                              placeholder.
                            </p>
                          </div>
                          <p>
                            <Link
                              to="/"
                              className="text-decoration-none text-secondary"
                            >
                              Like
                            </Link>
                            &nbsp; |&nbsp;
                            <Link
                              to="/"
                              className="text-decoration-none text-secondary"
                            >
                              Reply
                            </Link>
                          </p>
                        </div>
                        <Row>
                          <Col xs={2}>
                            <div
                              className="avatar avatar-md position-relative text-center rounded-circle"
                              style={{ height: "60px", width: "60px" }}
                            >
                              <img src={Userone} class="avatar-img w-100" />
                            </div>
                          </Col>
                          <Col xs={10}>
                            <div className="main_box">
                              <div className="gray_light sidebar_profile p-2">
                                <p className="mb-0 font_bolder">John Bride</p>
                                <p className="mb-0 font_bold text-secondary">
                                  Investor
                                </p>
                                <p className="mb-0 font_bold text-secondary">
                                  In publishing and graphic design, Lorem ipsum
                                  is a placeholder.
                                </p>
                              </div>
                              <p>
                                <Link
                                  to="/"
                                  className="text-decoration-none text-secondary"
                                >
                                  Like
                                </Link>
                                &nbsp; |&nbsp;
                                <Link
                                  to="/"
                                  className="text-decoration-none text-secondary"
                                >
                                  Reply
                                </Link>
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
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
              <Card
                className="border-0 mb-3 sidebar_profile"
                style={{
                  backgroundColor: "#ffffff",
                  backgroundImage: `url(${Bg_card})`,
                  backgroundPosition: "right",
                  backgroundSize: "62% 101%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Card.Body className="p-2">
                  <Row>
                    <Col xs={9}>
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
        <Modallayout show={show} handleChange={handleClose}>
          <Requestinfo />
        </Modallayout>
        <Modallayout show={moreinfoshow} handleChange={moreinfohandleClose}>
          <RequestMoreinfo />
        </Modallayout>
      </div>
      <Footer />
    </div>
  );
}
