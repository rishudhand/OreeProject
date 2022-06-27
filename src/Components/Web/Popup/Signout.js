import React from "react";
import { Modal, Button } from "react-bootstrap";
import Vector from "../../../Assets/image/vector.png";
import Logout from "../../../Assets/image/logout.png";
export default function Signout() {
  return (
    <div>
      <Modal.Header closeButton className="border-0 request"></Modal.Header>
      <Modal.Body>
        <div className="container px-5">
          <img src={Logout} alt="" className="w-100 mb-3" />
          <p className="text-center font_bolder">
            Are you sure you want to logout your account?
          </p>
          <div className="d-flex justify-content-center">
            <Button className="bg-white text-dark font_bold px-4 border border-dark ms-2 p-2 rounded-pill">
              No
            </Button>
            <Button
              className="bigbutton px-5 border-0 ms-2 p-2 rounded-pill"
              type="submit"
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
}
