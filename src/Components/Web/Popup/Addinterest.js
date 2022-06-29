import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import Cancel from "../../../Assets/icon/cancel.png";
import { Link } from "react-router-dom";
export default function Addinterest() {
  return (
    <div>
      <Modal.Header
        closeButton
        className=" text-center font_bolder request"
        style={{ textAlign: "center" }}
      >
        <p className="text-center m-0 h4 w-100">Add Interest</p>
      </Modal.Header>
      <Modal.Body>
        <div className="container px-3">
          <div className="investmentprofile">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <div className="field border rounded-pill p-2 px-4">
                  <Form.Control
                    type="email"
                    placeholder="Enter your Interest"
                    className="border-0"
                  />
                </div>
              </Form.Group>
              <div className="d-flex flex-wrap">
                <p className="bigbutton rounded-pill p-2 text-white mb-3">
                  UX Design&nbsp;
                  <img src={Cancel} alt="" />
                </p>
              </div>
              <p className="h5">Your interest</p>
              <div className="d-flex flex-wrap justify-content-between">
                <p className="bigbutton rounded-pill p-2  text-white mb-3">
                  UX Research &nbsp;
                  <img src={Cancel} alt="" />
                </p>
                <p className="bigbutton rounded-pill p-2  text-white mb-3">
                  UX Research &nbsp;
                  <img src={Cancel} alt="" />
                </p>
                <p className="bigbutton rounded-pill p-2  text-white mb-3">
                  UX Research &nbsp;
                  <img src={Cancel} alt="" />
                </p>
                <p className="bigbutton rounded-pill p-2  text-white mb-3">
                  UX Design &nbsp;
                  <img src={Cancel} alt="" />
                </p>
                <p className="bigbutton rounded-pill p-2 text-white mb-3">
                  UX Research &nbsp;
                  <img src={Cancel} alt="" />
                </p>
              </div>
              <Form.Group className="mb-3">
                <Link to="/">
                  <Button
                    className="bigbutton rounded-pill mb-2 border-0 w-100 p-3"
                    type="submit"
                  >
                    Save
                  </Button>
                </Link>
              </Form.Group>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
}
