import React from "react";
import Profilebackground from "../../../../Assets/image/profilebackground.jfif";
import Profile from "../../../../Assets/image/avtar.png";
import { Col, Button, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Userone from "../../../../Assets/image/userone.png";
import Nextuser from "../../../../Assets/image/nextuser.png";
import Steve from "../../../../Assets/image/steve.png";
import Kyra from "../../../../Assets/image/kyra.png";
import Julia from "../../../../Assets/image/julia.png";
import Bg_card from "../../../../Assets/image/bg_card.png";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

export default function MyNotification() {
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
                  <hr className="m-0" />
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
                    <hr className="m-0" />
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
                          <p className="d-flex m-0 justify-content-between">
                            <p className="font_bolder m-0">
                              Julia commented on your deal offer
                            </p>
                            <p className="m-0">1 min ago</p>
                          </p>
                          <p className="text-secondary font_bold m-0 ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
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
                          <p className="d-flex m-0 justify-content-between">
                            <p className="font_bolder m-0">
                              Julia commented on your deal offer
                            </p>
                            <p className="m-0">1 min ago</p>
                          </p>
                          <p className="text-secondary font_bold m-0 ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
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
                          <img src={Kyra} class="avatar-img w-100" />
                        </div>
                        &nbsp;&nbsp;
                        <div
                          className="right_notification"
                          style={{ width: "90%" }}
                        >
                          <p className="d-flex m-0 justify-content-between">
                            <p className="font_bolder m-0">
                              Julia commented on your deal offer
                            </p>
                            <p className="m-0">1 min ago</p>
                          </p>
                          <p className="text-secondary font_bold m-0 ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
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
                          <img src={Nextuser} class="avatar-img w-100" />
                        </div>
                        &nbsp;&nbsp;
                        <div
                          className="right_notification"
                          style={{ width: "90%" }}
                        >
                          <p className="d-flex m-0 justify-content-between">
                            <p className="font_bolder m-0">
                              Julia commented on your deal offer
                            </p>
                            <p className="m-0">1 min ago</p>
                          </p>
                          <p className="text-secondary font_bold m-0 ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
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
                          <img src={Userone} class="avatar-img w-100" />
                        </div>
                        &nbsp;&nbsp;
                        <div
                          className="right_notification"
                          style={{ width: "90%" }}
                        >
                          <p className="d-flex m-0 justify-content-between">
                            <p className="font_bolder m-0">
                              Julia commented on your deal offer
                            </p>
                            <p className="m-0">1 min ago</p>
                          </p>
                          <p className="text-secondary font_bold m-0 ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                  <Card.Body className="text-center">
                    <Link
                      to="/"
                      className="text-secondary text-decoration-none font_bold"
                    >
                      See More
                    </Link>
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

          {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
