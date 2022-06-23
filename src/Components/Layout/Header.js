import React from "react";
import "./Header.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../Assets/logo/logo.png";
import Login_user from "../../Assets/icon/login.png";
export default function Header() {
  return (
    <div className="header">
      <Navbar expand="lg" className="p-2">
        <Container className="px-4 brand">
          <Navbar.Brand href="#" className="">
            <img src={Logo} alt="" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className=" my-2 my-lg-0 menu_mobile"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link className="border-end border-dark">
                <img src={Login_user} alt="" />
                &nbsp; <span className="text-dark h5">Login</span>
              </Nav.Link>

              <Nav.Link>
                &nbsp; <span className="text-dark h5">Signup</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
