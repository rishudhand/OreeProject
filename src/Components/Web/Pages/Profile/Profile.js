import React, { useState } from "react";
import "../../Layout/Header.scss";
import Profilebackground from "../../../../Assets/image/profilebackground.jfif";
import Profileimg from "../../../../Assets/image/avtar.png";
import { Dropdown, Col, Button, Row, Card } from "react-bootstrap";
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
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Edit from "../../../../Assets/icon/edit.png";
import plus from "../../../../Assets/icon/plus.png";
import Cake from "../../../../Assets/icon/cake.png";
import Modallayout from "../../Popup/Modallayout.js";
import Editprofile from "../../Popup/Editprofile.js";
import Addinterest from "../../Popup/Addinterest";
import Board from "../../../../Assets/icon/board.png";
import Globe from "../../../../Assets/icon/globe.png";
export default function Profile() {
  const [Editshow, EditsetShow] = useState(false);

  const EdithandleShow = () => EditsetShow(true);
  const EdithandleClose = () => EditsetShow(false);

  const [addinterestshow, addinterestsetShow] = useState(false);

  const addinteresthandleShow = () => addinterestsetShow(true);
  const addinteresthandleClose = () => addinterestsetShow(false);
  return (
    <div>
      <Header />

      <div className="bg_light p-5">
        <div className="container">
          <Row>
            <Col md={9}>
              <div className="sidebar_profile">
                <div
                  className="profile_bg position-relative"
                  style={{
                    backgroundImage: `url(${Profilebackground})`,
                    height: "180px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div
                    className="edit position-absolute text-center bg-white rounded-circle"
                    style={{
                      width: "30px",
                      height: "30px",
                      right: "10px",
                      top: "10px",
                    }}
                  >
                    <img src={Edit} alt="" />
                  </div>
                </div>

                <div className="profile_detail position-relative p-2 px-5 mb-3 bg-white">
                  <div
                    className="edit position-absolute text-center gray_light rounded-circle"
                    onClick={EdithandleShow}
                    style={{
                      width: "30px",
                      height: "30px",
                      right: "10px",
                      top: "10px",
                    }}
                  >
                    <img src={Edit} alt="" />
                  </div>
                  <div
                    className="profile_img position-relative rounded-circle mb-3"
                    style={{
                      verticalAlign: "baseline",
                      marginTop: "-7%",
                    }}
                  >
                    <div
                      className="edit position-absolute text-center bigbutton border border-white rounded-circle"
                      style={{
                        width: "30px",
                        height: "30px",
                        right: "-15px",
                        lineHeight: "23px",
                        bottom: "10px",
                      }}
                    >
                      <img src={plus} alt="" />
                    </div>
                    <img
                      src={Profileimg}
                      alt=""
                      className="w-100 h-100 rounded-circle"
                    />
                  </div>
                  <p className="text-dark font_bolder h2 mb-0">John Doe</p>
                  <p className="text-secondary font_bold">Angle Investor</p>
                  <p className="text-secondary font_bold">
                    <img src={Board} alt="" />
                    &nbsp; Board Member
                  </p>
                  <div className="d-flex mb-4 justify-content-between">
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
                        className="text-dark text-decoration-none font_bold"
                      >
                        13 mutual connections
                      </Link>
                    </div>
                    <div className="d-flex">
                      <p className="m-0">
                        <img src={Globe} alt="" /> &nbsp;Sahibzada Ajit Singh
                        Nagar, Punjab
                      </p>
                      <p className="m-0 ms-2">
                        <img src={Cake} alt="" />
                        &nbsp;24 January,2022
                      </p>
                    </div>
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Body>
                    <div className="d-flex mb-2 justify-content-between">
                      <p className="h4 mb-3">Interests In Investment</p>
                      <Button
                        className="bigbutton rounded-pill mb-2"
                        type="submit"
                        onClick={addinteresthandleShow}
                      >
                        Add Interest
                      </Button>
                    </div>

                    <Row>
                      <Col xs={3} className="mb-3">
                        <div className="gray_light p-3 rounded-pill text-center">
                          <p className="font_bolder m-0">IT Company</p>
                        </div>
                      </Col>
                      <Col xs={3} className="mb-3">
                        <div className="gray_light p-3 rounded-pill text-center">
                          <p className="font_bolder m-0">Real Estate</p>
                        </div>
                      </Col>
                      <Col xs={3} className="mb-3">
                        <div className="gray_light p-3 rounded-pill text-center">
                          <p className="font_bolder m-0">IT Company</p>
                        </div>
                      </Col>
                      <Col xs={3} className="mb-3">
                        <div className="gray_light p-3 rounded-pill text-center">
                          <p className="font_bolder m-0">IT Company</p>
                        </div>
                      </Col>
                      <Col xs={3} className="mb-3">
                        <div className="gray_light p-3 rounded-pill text-center">
                          <p className="font_bolder m-0">Real Estate</p>
                        </div>
                      </Col>
                      <Col xs={3} className="mb-3">
                        <div className="gray_light p-3 rounded-pill text-center">
                          <p className="font_bolder m-0">IT Company</p>
                        </div>
                      </Col>
                      <Col xs={3} className="mb-3">
                        <div className="gray_light p-3 rounded-pill text-center">
                          <p className="font_bolder m-0">IT Company</p>
                        </div>
                      </Col>
                      <Col xs={3} className="mb-3">
                        <div className="gray_light p-3 rounded-pill text-center">
                          <p className="font_bolder m-0">IT Company</p>
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
      </div>
      <Footer />
      <Modallayout show={Editshow} handleChange={EdithandleClose}>
        <Editprofile />
      </Modallayout>
      <Modallayout show={addinterestshow} handleChange={addinteresthandleClose}>
        <Addinterest />
      </Modallayout>
    </div>
  );
}
