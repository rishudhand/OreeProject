import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Steve from "../../../Assets/image/steve.png";
import Verified from "../../../Assets/icon/verified.png";
import Boardglobe from "../../../Assets/icon/boardglobe.png";
export default function Pending_startup() {
  return (
    <div>
      <Modal.Header
        closeButton
        className="border-0 bigbutton request"
      ></Modal.Header>
      <Modal.Body>
        <Row className="">
          <Col xs={2}>
            <div
              className="avatar avatar-md position-relative text-center rounded-circle"
              style={{ height: "80px", width: "80px" }}
            >
              <img src={Steve} class="avatar-img w-100" />
            </div>
          </Col>
          <Col xs={10}>
            <p className="font_bolder m-0 mb-2">
              Julia William&nbsp;
              <img src={Verified} alt="" />
            </p>
            <p
              className="border border-dark w-25 text-center p-2 rounded-pill"
              style={{ lineHeight: "10px" }}
            >
              <img src={Boardglobe} alt="" />
              &nbsp; Board
            </p>
            <div className="d-flex justify-content-between shadow p-3 mb-2 bg-white rounded">
              <p className="m-0">Deal Name</p>
              <p className="m-0">Luke</p>
            </div>
            <div className="d-flex justify-content-between shadow p-3 mb-2 bg-white rounded">
              <p className="m-0">Business Type</p>
              <p className="m-0">Single Investment</p>
            </div>
            <div className="d-flex justify-content-between shadow p-3 mb-2 bg-white rounded">
              <p className="m-0">Funding Amount</p>
              <p className="m-0">$10000</p>
            </div>
            <div className="d-flex justify-content-between shadow p-3 mb-2 bg-white rounded">
              <p className="m-0">Equity</p>
              <p className="m-0">20%</p>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className="bg-transparent border border-dark navyColor px-3 p-2 sidebar_profile"
                type="submit"
              >
                Decline
              </Button>
              <Button
                className="bigbutton px-3 p-2 ms-2 sidebar_profile"
                type="submit"
              >
                Accept
              </Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </div>
  );
}
