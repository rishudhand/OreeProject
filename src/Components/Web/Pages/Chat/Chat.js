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
import Search from "../../../../Assets/icon/search.png";
import Doublechek from "../../../../Assets/icon/doublechek.png";
import Online from "../../../../Assets/icon/online.png";
import Dott from "../../../../Assets/icon/dott.png";
export default function Chat() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [moreinfoshow, moreinfosetShow] = useState(false);

  const moreinfohandleShow = () => moreinfosetShow(true);
  const moreinfohandleClose = () => moreinfosetShow(false);
  return (
    <div className="bg_light p-5">
      <div className="container">
        <Row>
          <Col md={3}>
            <div className="sidebar_profile">
              <div className="profile_detail p-2 bg-white">
                <Form
                  className="d-flex position-relative border p-1 mb-3 rounded-pill"
                  style={{ width: "100%" }}
                >
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="border-0"
                      placeholder="Search here..."
                      style={{ lineHeight: "35px" }}
                    />
                  </Form.Group>
                  <Link to="/onsearch">
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
                  </Link>
                </Form>
                <p className="text-dark font_bolder h4 text-left">
                  Recent chats
                </p>
                <div className="chat_person mb-3 sidebar_profile border p-2">
                  <div className="profile_head d-flex">
                    <div
                      className="avatar avatar-md position-relative text-center rounded-circle"
                      style={{ height: "60px", width: "60px" }}
                    >
                      <img src={User} class="avatar-img w-100" />
                    </div>
                    &nbsp;&nbsp;
                    <div className="w-75">
                      <div className="d-flex justify-content-between">
                        <p className="font_bolder m-0 navyColor">Kaityln</p>
                        <p className="text-secondary m-0">02:10 pm</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className=" m-0 navyColor">
                          <img src={Doublechek} alt="" />
                          Have a good one!
                        </p>
                        <p
                          className="text-center m-0 text-white bigbutton rounded-circle"
                          style={{ width: "25px", height: "25px" }}
                        >
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_person mb-3 sidebar_profile border p-2">
                  <div className="profile_head d-flex">
                    <div
                      className="avatar avatar-md position-relative text-center rounded-circle"
                      style={{ height: "60px", width: "60px" }}
                    >
                      <img src={User} class="avatar-img w-100" />
                    </div>
                    &nbsp;&nbsp;
                    <div className="w-75">
                      <div className="d-flex justify-content-between">
                        <p className="font_bolder m-0 navyColor">Kaityln</p>
                        <p className="text-secondary m-0">02:10 pm</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className=" m-0 navyColor">
                          <img src={Doublechek} alt="" />
                          Have a good one!
                        </p>
                        <p
                          className="text-center m-0 text-white bigbutton rounded-circle"
                          style={{ width: "25px", height: "25px" }}
                        >
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_person mb-3 sidebar_profile border p-2">
                  <div className="profile_head d-flex">
                    <div
                      className="avatar avatar-md position-relative text-center rounded-circle"
                      style={{ height: "60px", width: "60px" }}
                    >
                      <img src={User} class="avatar-img w-100" />
                    </div>
                    &nbsp;&nbsp;
                    <div className="w-75">
                      <div className="d-flex justify-content-between">
                        <p className="font_bolder m-0 navyColor">Kaityln</p>
                        <p className="text-secondary m-0">02:10 pm</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className=" m-0 navyColor">
                          <img src={Doublechek} alt="" />
                          Have a good one!
                        </p>
                        <p
                          className="text-center m-0 text-white bigbutton rounded-circle"
                          style={{ width: "25px", height: "25px" }}
                        >
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_person mb-3 sidebar_profile border p-2">
                  <div className="profile_head d-flex">
                    <div
                      className="avatar avatar-md position-relative text-center rounded-circle"
                      style={{ height: "60px", width: "60px" }}
                    >
                      <img src={User} class="avatar-img w-100" />
                    </div>
                    &nbsp;&nbsp;
                    <div className="w-75">
                      <div className="d-flex justify-content-between">
                        <p className="font_bolder m-0 navyColor">Kaityln</p>
                        <p className="text-secondary m-0">02:10 pm</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className=" m-0 navyColor">
                          <img src={Doublechek} alt="" />
                          Have a good one!
                        </p>
                        <p
                          className="text-center m-0 text-white bigbutton rounded-circle"
                          style={{ width: "25px", height: "25px" }}
                        >
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_person mb-3 sidebar_profile border p-2">
                  <div className="profile_head d-flex">
                    <div
                      className="avatar avatar-md position-relative text-center rounded-circle"
                      style={{ height: "60px", width: "60px" }}
                    >
                      <img src={User} class="avatar-img w-100" />
                    </div>
                    &nbsp;&nbsp;
                    <div className="w-75">
                      <div className="d-flex justify-content-between">
                        <p className="font_bolder m-0 navyColor">Kaityln</p>
                        <p className="text-secondary m-0">02:10 pm</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className=" m-0 navyColor">
                          <img src={Doublechek} alt="" />
                          Have a good one!
                        </p>
                        <p
                          className="text-center m-0 text-white bigbutton rounded-circle"
                          style={{ width: "25px", height: "25px" }}
                        >
                          3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="maindesign">
              <Card className="border-0 mb-3" style={{ background: "#ffffff" }}>
                <Card.Body className="p-4 py-2">
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="profile_head d-flex">
                      <div
                        className="avatar avatar-md position-relative text-center rounded-circle"
                        style={{ height: "49px", width: "49px" }}
                      >
                        <img src={User} class="avatar-img w-100" />
                      </div>
                      &nbsp;&nbsp;
                      <p className="font_bolder m-0">
                        Aayushi Gajjar
                        <p className="text-secondary font_bold m-0 ">
                          <img src={Online} />
                          &nbsp; Active now
                        </p>
                      </p>
                    </div>

                    <div className="moreinfo">
                      <Button className="bg-transparent border-0 ">
                        <img src={Dott} />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
                <hr className="m-0" />
                <Card.Body className="px-3">
                  <Row>
                    <Col xs={6}>
                      <p
                        className="gray_light text-dark m-0 font_bold p-3"
                        style={{ borderRadius: "15px 15px 15px 0px" }}
                      >
                        This is a sample big message with a longer text
                        paragraph
                      </p>
                      <small>10:30 AM</small>
                    </Col>
                    <Col xs={6}></Col>
                  </Row>
                  <Row>
                    <Col xs={6}></Col>
                    <Col xs={6}>
                      <p
                        className="bigbutton m-0 text-white font_bold p-3 text-end"
                        style={{ borderRadius: "15px 15px 0px 15px" }}
                      >
                        This is a sample big message with a longer text
                        paragraph
                      </p>
                      <small className="float-end">10:30 AM</small>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <p
                        className="gray_light m-0 text-dark font_bold p-3"
                        style={{ borderRadius: "15px 15px 15px 0px" }}
                      >
                        This is a sample big message with a longer text
                        paragraph
                      </p>
                      <small>10:30 AM</small>
                    </Col>
                    <Col xs={6}></Col>
                  </Row>
                  <Row>
                    <Col xs={6}></Col>
                    <Col xs={6}>
                      <p
                        className="bigbutton m-0 text-white font_bold p-3 text-end"
                        style={{ borderRadius: "15px 15px 0px 15px" }}
                      >
                        This is a sample big message with a longer text
                        paragraph
                      </p>
                      <small className="float-end">10:30 AM</small>
                    </Col>
                  </Row>
                  <p className="w-25 m-auto mb-2 gray_light text-center rounded-pill">
                    Today
                  </p>
                  <Row>
                    <Col xs={6}></Col>
                    <Col xs={6}>
                      <p
                        className="bigbutton m-0 text-white font_bold p-3 text-end"
                        style={{ borderRadius: "15px 15px 0px 15px" }}
                      >
                        This is a sample big message with a longer text
                        paragraph
                      </p>
                      <small className="float-end">10:30 AM</small>
                    </Col>
                  </Row>
                  <div className="d-flex">
                    <div className="text_field">
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Control type="email" placeholder="Message..." />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
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
      <Modallayout show={show} handleChange={handleClose}>
        <Requestinfo />
      </Modallayout>
      <Modallayout show={moreinfoshow} handleChange={moreinfohandleClose}>
        <RequestMoreinfo />
      </Modallayout>
    </div>
  );
}
