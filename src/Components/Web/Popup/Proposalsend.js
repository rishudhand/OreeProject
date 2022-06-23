import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import Proposel_send from "../../../Assets/image/proposel_send.png";
export default function Proposalsend() {
  return (
    <div>
      <Modal.Header closeButton className="border-0 request"></Modal.Header>
      <Modal.Body>
        <div className="container px-3">
          <img src={Proposel_send} alt="" className="w-100 mb-3" />
          <p className="text-center font_bolder">
            Send the Funding amount you want to <br />
            send in the proposal.
          </p>
          <Form>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className=" bg_light rounded-pill"
                placeholder="Enter Funding Amount $"
              />
              <Form.Control
                type="email"
                className=" bg_light rounded-pill ms-2"
                placeholder="Enter Equity%"
              />
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-center">
            <Button
              className="bigbutton px-5 border-0 ms-2 p-2 rounded-pill"
              type="submit"
            >
              Cancel
            </Button>
            <Button
              className="bg-white text-dark font_bold px-4 border border-dark ms-2 p-2 rounded-pill"
              type="submit"
            >
              Submit proposal
            </Button>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
}
