import React from "react";
import "../../Layout/Header.scss";
import Profilebackground from "../../../../Assets/image/profilebackground.jfif";
import Profile from "../../../../Assets/image/avtar.png";
import { Dropdown,  Col, Button, Row, Card,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nextuser from "../../../../Assets/image/nextuser.png";
import Steve from "../../../../Assets/image/steve.png";
import Kyra from "../../../../Assets/image/kyra.png";
import Julia from "../../../../Assets/image/julia.png";
import Bg_card from "../../../../Assets/image/bg_card.png";
import Mutual from "../../../../Assets/image/mutual.png";
import Mutualo from "../../../../Assets/image/mutualo.png";
import Locker from "../../../../Assets/icon/locker.png";
import Dotted from "../../../../Assets/icon/dotted.png";
import Share_profile from "../../../../Assets/icon/share_profile.png";
import Block from "../../../../Assets/icon/block.png";
export default function Networkprofile() {
  return (
    <div className="bg_light p-5">
      <div className="container">
        <Row>
          <Col md={9}>
            <div className="sidebar_profile">
              <div
                className="profile_bg"
                style={{
                  backgroundImage: `url(${Profilebackground})`,
                  height: "180px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>

              <div className="profile_detail p-2 px-5 mb-3 bg-white">
                <div
                  className="profile_img rounded-circle mb-3"
                  style={{
                    verticalAlign: "baseline",
                    marginTop: "-7%",
                  }}
                >
                  <img
                    src={Profile}
                    alt=""
                    className="w-100 h-100 rounded-circle"
                  />
                </div>
                <p className="text-dark font_bolder h2 mb-0">John Doe</p>
                <p className="text-secondary font_bold">Angle Investor</p>
                <div className="d-flex mb-4">
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
                    className="text-dark text-decoration-none font_bold"
                  >
                    13 mutual connections
                  </Link>
                </div>
                <div className="d-flex">
                  <Link to="/">
                    <Button
                      className="bigbutton mb-3 rounded-pill border-0 "
                      type="submit"
                    >
                      Connect
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      className="bg-transparent text-dark border-dark mb-3 ms-2 rounded-pill "
                      type="submit"
                    >
                      <img src={Locker} alt="" />
                      &nbsp; Message
                    </Button>
                  </Link>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="bg-transparent text-center p-0 mb-3 ms-2 rounded-circle border-dark"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img src={Dotted} alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="/">
                        <img src={Share_profile} alt="" />
                        &nbsp; Share profile via message
                      </Dropdown.Item>
                      <Dropdown.Item to="/">
                        <img src={Block} alt="" />
                        &nbsp; Block User
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <Card className="mb-3">
                <Card.Body>
                  <div
                    className="about_user text-left"
                    style={{ textAlign: "left" }}
                  >
                    <p className="text-dark h4 font_bold text-left">About</p>
                    <p className="text-dark ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <p className="h4 mb-3">Interests In Investment</p>
                  <Row>
                    <Col xs={4} className="mb-3">
                      <div className="gray_light p-3 sidebar_profile">
                        <p className="font_bolder m-0">IT Company</p>
                        <p className="font_bolder">Single Investment</p>
                      </div>
                    </Col>
                    <Col xs={4} className="mb-3">
                      <div className="gray_light p-3 sidebar_profile">
                        <p className="font_bolder m-0">IT Company</p>
                        <p className="font_bolder">Single Investment</p>
                      </div>
                    </Col>
                    <Col xs={4} className="mb-3">
                      <div className="gray_light p-3 sidebar_profile">
                        <p className="font_bolder m-0">IT Company</p>
                        <p className="font_bolder">Single Investment</p>
                      </div>
                    </Col>
                    <Col xs={4} className="mb-3">
                      <div className="gray_light p-3 sidebar_profile">
                        <p className="font_bolder m-0">IT Company</p>
                        <p className="font_bolder">Single Investment</p>
                      </div>
                    </Col>
                    <Col xs={4} className="mb-3">
                      <div className="gray_light p-3 sidebar_profile">
                        <p className="font_bolder m-0">IT Company</p>
                        <p className="font_bolder">Single Investment</p>
                      </div>
                    </Col>
                    <Col xs={4} className="mb-3">
                      <div className="gray_light p-3 sidebar_profile">
                        <p className="font_bolder m-0">IT Company</p>
                        <p className="font_bolder">Single Investment</p>
                      </div>
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
                    <p className="text-secondary text_bold h6">Angel Startup</p>
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
                    <p className="text-secondary text_bold h6">Angel Startup</p>
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
                    <p className="text-secondary text_bold h6">Angel Startup</p>
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
                    <p className="text-secondary text_bold h6">Angel Startup</p>
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
                      Lorem Ipsum is simply dummy text printing and typesetting
                      industry.Ipsum has been the industry's.
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
  );
}
