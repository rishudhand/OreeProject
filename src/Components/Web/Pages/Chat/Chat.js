import React, { useState } from "react";
import "../../Layout/Header.scss";
import Profilebackground from "../../../../Assets/image/profilebackground.jfif";
import Profile from "../../../../Assets/image/avtar.png";
import { Dropdown, Col, Button, Row, Card, Form } from "react-bootstrap";
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
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Insert from "../../../../Assets/icon/insert.png";
import Mic from "../../../../Assets/icon/mic.png";
import Send from "../../../../Assets/icon/send.png";
import Contract from "../../../../Assets/image/contract.png";
export default function Chat() {
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
                <div className="profile_detail p-2 bg-white">
                  <Form
                    className="d-flex position-relative border p-1 mb-3 rounded-pill"
                    style={{ width: "100%" }}
                  >
                    <Form.Group>
                      <Form.Control
                        type="text"
                        className="border-0 ms-3"
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
                          right: "1%",
                          top: "5%",
                        }}
                      >
                        <img src={Search} alt="" />
                      </Button>
                    </Link>
                  </Form>
                  <p className="text-dark font_bolder h4 text-left">
                    Recent chats
                  </p>

                  <div className="recentchat">
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
                        <Dropdown>
                          <Dropdown.Toggle
                            className="bg-transparent border-0 "
                            id="dropdown-basic"
                          >
                            <img src={Dott} />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>Delete</Dropdown.Item>
                            <Dropdown.Item>Block User</Dropdown.Item>
                            <Dropdown.Item>Archive</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </Card.Body>
                  <hr className="m-0" />
                  <Card.Body className="px-3">
                    <Row>
                      <Col xs={10} md={6}>
                        <p
                          className="gray_light text-dark m-0 font_bold p-3"
                          style={{ borderRadius: "15px 15px 15px 0px" }}
                        >
                          This is a sample big message with a longer text
                          paragraph
                        </p>
                        <small>10:30 AM</small>
                      </Col>
                      <Col xs={4} md={6}></Col>
                    </Row>
                    <Row>
                      <Col xs={4} md={6}></Col>
                      <Col xs={10} md={6}>
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
                      <Col xs={10} md={6}>
                        <p
                          className="gray_light m-0 text-dark font_bold p-3"
                          style={{ borderRadius: "15px 15px 15px 0px" }}
                        >
                          This is a sample big message with a longer text
                          paragraph
                        </p>
                        <small>10:30 AM</small>
                      </Col>
                      <Col xs={4} md={6}></Col>
                    </Row>
                    <Row>
                      <Col xs={4} md={6}></Col>
                      <Col xs={10} md={6}>
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
                    <Row className="mb-3">
                      <Col xs={4} md={6}></Col>
                      <Col xs={10} md={6}>
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
                    <div className="d-flex justify-content-between">
                      <div
                        className="text_field gray_light p-2  sidebar_profile"
                        style={{ width: "75%" }}
                      >
                        <Form className="position-relative">
                          <Form.Group className="">
                            <Form.Control
                              type="email"
                              placeholder="Message..."
                              className="border-0 bg-transparent"
                            />
                          </Form.Group>
                          <img
                            src={Insert}
                            className="position-absolute "
                            style={{ top: "15%", right: "5%", width: "17px" }}
                          />
                        </Form>
                      </div>
                      <div className="btngroup buttongroup ">
                        <Button
                          className="bigbutton ms-3 border-0  p-3"
                          type="submit"
                          style={{ lineHeight: "10px" }}
                        >
                          <img src={Mic} alt="" />
                        </Button>
                        <Button
                          className="bigbutton ms-3 border-0 p-3"
                          type="submit"
                          style={{ lineHeight: "10px" }}
                        >
                          <img src={Send} alt="" />
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Leo quam dolor nisl donec varius erat nunc mauris. At
                        quis ipsum integer.
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
                        className="bigbutton px-5 p-2 ms-2 rounded-pill"
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
      <Footer />
    </div>
  );
}
