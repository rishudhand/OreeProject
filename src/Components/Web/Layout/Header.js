import React, { useState } from "react";
import "./Header.scss";
import { Modal, Navbar, Container, Nav, Form, Button } from "react-bootstrap";
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
export default function Header() {
  const [recentshow, recentsetShow] = useState(false);

  const recenthandleShow = () => recentsetShow(true);
  const recenthandleClose = () => recentsetShow(false);
  return (
    <div className="header bg-white">
      <Navbar expand="lg" className="p-2 px-5 desktop_navbar">
        <Container fluid className="brand align-items-center p-0">
          <Navbar.Brand href="#" className="" style={{ width: "10%" }}>
            <img src={Logo} alt="" className="logo " style={{ width: "60%" }} />
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
              className=" my-2 my-lg-0 menu_mobile justify-content-evenly align-items-end"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link className="text-center ms-2">
                <Link to="/" className="text-decoration-none">
                  <img src={Home} alt="" />
                  <p className="text-dark h6">Home</p>
                </Link>
              </Nav.Link>

              <Nav.Link className="text-center ms-2">
                <Link to="/network" className="text-decoration-none">
                  <img src={Multiuser} alt="" />
                  <p className="text-dark h6">My Network</p>
                </Link>
              </Nav.Link>
              <Nav.Link className="text-center ms-2">
                <Link to="/deal" className="text-decoration-none">
                  <img src={Deal} alt="" />
                  <p className="text-dark h6">Deals</p>
                </Link>
              </Nav.Link>
              <Nav.Link className="text-center ms-2">
                <Link to="/mynotification" className="text-decoration-none">
                  <img src={Notification} alt="" />
                  <p className="text-dark h6">My Notification</p>
                </Link>
              </Nav.Link>
              <Nav.Link className="text-center ms-2">
                <img src={Chat} alt="" />
                <p className="text-dark h6">Chat</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div
            className="d-flex  justify-content-center"
            style={{ width: "20%" }}
          >
            <div
              className="avatar avatar-md position-relative text-center justify-content-center rounded-circle"
              style={{ height: "55px", width: "55px" }}
            >
              <img src={Avtar} class="avatar-img w-100" />
            </div>
            &nbsp;&nbsp;
            <p className="h4">
              John Doe
              <p className="text-secondary text_bold h6">Investor</p>
            </p>
            &nbsp;&nbsp;
            <BsChevronDown />
          </div>
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
    </div>
  );
}
