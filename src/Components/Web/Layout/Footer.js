import React from "react";
import { Container, Col, Button, Row, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg_light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="footer_nav d-flex justify-content-around">
              <p>Oree© 2022</p>
              <Link
                to="/"
                className="text-decoration-none text-secondary font_bold"
              >
                About
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-secondary font_bold"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-secondary font_bold"
              >
                Terms & Condition{" "}
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-secondary font_bold"
              >
                Cookie Policy
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-secondary font_bold"
              >
                Copyright Policy
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-secondary font_bold"
              >
                Brand Policy
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
