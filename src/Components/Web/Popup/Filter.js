import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
export default function Filter() {
  return (
    <div>
      <Modal.Header
        closeButton
        className=" text-center font_bolder request"
        style={{ textAlign: "center" }}
      >
        <p className="text-center m-0 h4 w-100">Filter</p>
      </Modal.Header>
      <Modal.Body>
        <div className="container px-3">
          <div className="investmentprofile">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <div className="field border rounded-pill p-2 px-4">
                  <Form.Select
                    aria-label="Default select example "
                    className="border-0"
                  >
                    <option>Business Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <div className="field border rounded-pill p-2 px-4">
                  <Form.Select
                    aria-label="Default select example "
                    className="border-0"
                  >
                    <option>Business Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </Form.Group>

              <Form.Group className="mb-4 field " controlId="formBasicPassword">
                <div className="d-flex border rounded-pill p-2 px-4">
                  <Form.Select
                    aria-label="Default select example "
                    className="border-0"
                  >
                    <option>Funding Type</option>
                    <option value="Crowd Funded Investment">
                      Crowd Funded Investment
                    </option>
                    <option value="Single Investment">Single Investment</option>
                  </Form.Select>
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <div className="field border rounded-pill p-2 px-4">
                  <Form.Control
                    type="email"
                    placeholder="Funding Amount"
                    className="border-0"
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-4 field" controlId="formBasicPassword">
                <div className="border rounded-pill p-2 px-4">
                  <Form.Select
                    aria-label="Default select example "
                    className="border-0"
                  >
                    <option>Preferred Valuation Range</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Link to="/">
                  <Button
                    className="bigbutton rounded-pill mb-2 border-0 w-100 p-3"
                    type="submit"
                  >
                    Apply Filter
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    className="bg-transparent rounded-pill border-0 text-secondary w-100 p-3"
                    type="submit"
                  >
                    Clear Filter
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
