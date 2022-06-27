import React, { useState } from "react";
import "./Header.scss";
import {
  Modal,
  Navbar,
  Dropdown,
  Container,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import Logo from "../../../Assets/logo/logo.png";
import Search from "../../../Assets/icon/search.png";
import Home from "../../../Assets/icon/home.png";
import Multiuser from "../../../Assets/icon/multiuser.png";
import Deal from "../../../Assets/icon/deal.png";
import Notification from "../../../Assets/icon/notification.png";
import Chat from "../../../Assets/icon/chat.png";
import Avtar from "../../../Assets/image/avtar.png";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Profile from "../../../Assets/image/avtar.png";
import History from "../../../Assets/icon/history.png";
import Modallayout from "../Popup/Modallayout";
import Signout from "../Popup/Signout";
export default function Header() {
  const [recentshow, recentsetShow] = useState(false);

  const recenthandleShow = () => recentsetShow(true);
  const recenthandleClose = () => recentsetShow(false);

  const [logutshow, logutsetShow] = useState(false);

  const loguthandleShow = () => logutsetShow(true);
  const loguthandleClose = () => logutsetShow(false);
  return (
    <div className="container p-2 header bg-white">
      <Navbar expand="lg" className=" desktop_navbar">
        <Container fluid className="brand align-items-center p-0">
          <Navbar.Brand href="#" className="" style={{ width: "10%" }}>
            <img src={Logo} alt="" className="logo " style={{ width: "75%" }} />
          </Navbar.Brand>
          <Form
            className="d-flex position-relative border p-1 rounded-pill"
            style={{ width: "20%" }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                className="border-0 ms-3"
                placeholder="Search here..."
                onClick={recenthandleShow}
              />
            </Form.Group>
            <Link to="/onsearch">
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
          <Navbar.Toggle aria-controls="navbarScroll" className="" />
          <Navbar.Collapse
            id="navbarScroll"
            className="navbar_block"
            style={{
              display: "block!important",
            }}
          >
            <Nav
              className=" my-2 my-lg-0 menu_mobile justify-content-center align-items-end"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link className="text-center ms-4">
                <Link to="/home" className="text-decoration-none">
                  <img src={Home} alt="" />
                  <p className="text-dark h6">Home</p>
                </Link>
              </Nav.Link>

              <Nav.Link className="text-center ms-4">
                <Link to="/network" className="text-decoration-none">
                  <img src={Multiuser} alt="" />
                  <p className="text-dark h6">My Network</p>
                </Link>
              </Nav.Link>
              <Nav.Link className="text-center ms-4">
                <Link to="/deal" className="text-decoration-none">
                  <img src={Deal} alt="" />
                  <p className="text-dark h6">Deals</p>
                </Link>
              </Nav.Link>
              <Nav.Link className="text-center ms-4 position-relative">
                <Link to="/mynotification" className="text-decoration-none">
                  <img src={Notification} alt="" />
                  <p className="text-dark h6">My Notification</p>
                </Link>
                <p
                  className="bg-danger h6 text-white m-0 position-absolute rounded-circle"
                  style={{
                    width: "18px",
                    height: "18px",
                    top: "10%",
                    right: "38%",
                  }}
                >
                  5
                </p>
              </Nav.Link>
              <Nav.Link className="text-center ms-4 position-relative">
                <Link to="/chat" className="text-decoration-none">
                  <img src={Chat} alt="" />
                  <p className="text-dark h6">Chat</p>
                </Link>
                <p
                  className="bg-danger h6 text-white m-0 position-absolute rounded-circle"
                  style={{
                    width: "18px",
                    height: "18px",
                    top: "5px",
                    right: "0",
                  }}
                >
                  5
                </p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Dropdown>
            <Dropdown.Toggle
              className="bg-transparent border-0"
              id="dropdown-basic"
            >
              <div className="d-flex ">
                <div
                  className="avatar avatar-md position-relative text-center justify-content-center rounded-circle"
                  style={{ height: "55px", width: "55px" }}
                >
                  <img src={Avtar} class="avatar-img w-100" />
                </div>
                &nbsp;&nbsp;
                <p className="h4 navyColor text-start">
                  John Doe
                  <p className="text-secondary text_bold h6">Investor</p>
                </p>
                &nbsp;&nbsp;
                <BsChevronDown className="mt-2 text-dark" />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/profile" className="text-decoration-none">
                  <div className="d-flex ">
                    <div
                      className="avatar avatar-md position-relative text-center justify-content-center rounded-circle"
                      style={{ height: "55px", width: "55px" }}
                    >
                      <img src={Avtar} class="avatar-img w-100" />
                    </div>
                    &nbsp;&nbsp;
                    <p className="h4 navyColor text-start">
                      John Doe
                      <p className="text-secondary text_bold h6">Investor</p>
                    </p>
                    &nbsp;&nbsp;
                  </div>
                </Link>
              </Dropdown.Item>
              <hr className="m-0" />
              <Dropdown.Item className="text-dark font_bolder">
                Account
              </Dropdown.Item>
              <Dropdown.Item className="text-dark">
                <Link to="/setting" className="text-dark text-decoration-none">
                  Setting
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="text-dark">Help </Dropdown.Item>
              <hr className="m-0" />
              <Dropdown.Item
                className="text-secondary font_bolder"
                onClick={loguthandleShow}
              >
                Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
      <Modal
        show={recentshow}
        onHide={recenthandleClose}
        className="recentsearch"
      >
        <Modal.Body>
          <p className="text-dark font_bold">Recent Search</p>
          <div className="d-flex">
            <div className="profile_detail text-center p-2 bg-white">
              <div
                className="profile_img border-0 rounded-circle mb-3"
                style={{ width: "70px", height: "70px", marginTop: "0" }}
              >
                <img src={Profile} alt="" className="w-100 rounded-circle" />
              </div>
              <p className="text-dark font_bolder mb-0">Rupin Sahota</p>
            </div>
            <div className="profile_detail text-center p-2 bg-white">
              <div
                className="profile_img border-0 rounded-circle mb-3"
                style={{ width: "70px", height: "70px", marginTop: "0" }}
              >
                <img src={Profile} alt="" className="w-100 rounded-circle" />
              </div>
              <p className="text-dark font_bolder mb-0">Rupin Sahota</p>
            </div>
            <div className="profile_detail text-center p-2 bg-white">
              <div
                className="profile_img border-0 rounded-circle mb-3"
                style={{ width: "70px", height: "70px", marginTop: "0" }}
              >
                <img src={Profile} alt="" className="w-100 rounded-circle" />
              </div>
              <p className="text-dark font_bolder mb-0">Rupin Sahota</p>
            </div>
            <div className="profile_detail text-center p-2 bg-white">
              <div
                className="profile_img border-0 rounded-circle mb-3"
                style={{ width: "70px", height: "70px", marginTop: "0" }}
              >
                <img src={Profile} alt="" className="w-100 rounded-circle" />
              </div>
              <p className="text-dark font_bolder mb-0">Rupin Sahota</p>
            </div>
            <div className="profile_detail text-center p-2 bg-white">
              <div
                className="profile_img border-0 rounded-circle mb-3"
                style={{ width: "70px", height: "70px", marginTop: "0" }}
              >
                <img src={Profile} alt="" className="w-100 rounded-circle" />
              </div>
              <p className="text-dark font_bolder mb-0">Rupin Sahota</p>
            </div>
          </div>
        </Modal.Body>
        <hr className="m-0" />
        <Modal.Body>
          <p className="d-flex font_bold text-secondary">
            <img src={History} alt="" />
            &nbsp;Crowd Funded Investment
          </p>
          <p className="d-flex font_bold text-secondary">
            <img src={History} alt="" />
            &nbsp;Crowd Funded Investment
          </p>
          <p className="d-flex font_bold text-secondary">
            <img src={History} alt="" />
            &nbsp;Crowd Funded Investment
          </p>
          <p className="d-flex font_bold text-secondary">
            <img src={History} alt="" />
            &nbsp;Crowd Funded Investment
          </p>
        </Modal.Body>
      </Modal>
      <Modallayout show={logutshow} handleChange={loguthandleClose}>
        <Signout />
      </Modallayout>
    </div>
  );
}
