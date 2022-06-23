import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Vector from "../../../Assets/image/vector.png";
import Modallayout from "./Modallayout";
import Proposalsend from "./Proposalsend.js";

export default function Requestinfo() {
  // proposal send
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <Modal.Header closeButton className="border-0 request"></Modal.Header>
      <Modal.Body>
        <div className="container px-5">
          <img src={Vector} alt="" className="w-100 mb-3" />
          <p className="text-center font_bolder">
            Do you want chat first or send proposal?
          </p>
          <div className="d-flex justify-content-center">
            <Button
              className="bigbutton px-5 border-0 ms-2 p-2 rounded-pill"
              type="submit"
            >
              Chat
            </Button>
            <Button
              className="bg-white text-dark font_bold px-4 border border-dark ms-2 p-2 rounded-pill"
              onClick={handleShow}
            >
              Propose Deal
            </Button>
          </div>
        </div>
      </Modal.Body>

      <Modallayout show={show} handleChange={handleClose}>
        <Proposalsend />
      </Modallayout>
    </div>
  );
}
