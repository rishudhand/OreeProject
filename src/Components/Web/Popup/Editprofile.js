import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
export default function Editprofile() {
  return (
    <div>
      <Modal.Header
        closeButton
        className=" text-center font_bolder request"
        style={{ textAlign: "center" }}
      >
        <p className="text-center m-0 h4 w-100">Edit Info</p>
      </Modal.Header>
      <Modal.Body>
        <div className="container px-3">
          <div className="investmentprofile">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <div className="field border rounded-pill p-2 px-4">
                  <Form.Control
                    type="email"
                    placeholder="First Name"
                    className="border-0"
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <div className="field border rounded-pill p-2 px-4">
                  <Form.Control
                    type="email"
                    placeholder="Last Name"
                    className="border-0"
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-4 field " controlId="formBasicPassword">
                <div className="d-flex border sidebar_profile p-2 px-4">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="border-0"
                    placeholder="Description"
                  />
                </div>
              </Form.Group>

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
