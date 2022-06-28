import React from "react";
import { Form, Row, Col, Modal, Button } from "react-bootstrap";
import Profile from "../../../Assets/image/avtar.png";
import Createdealimg from "../../../Assets/image/createdeal.png";
import File from "../../../Assets/icon/file.png";
export default function Createdeal() {
  return (
    <div>
      <Modal.Header
        closeButton
        className="border-0 text-white text-center bigbutton request"
      >
        <p className="w-100 m-0 h4">Create a Deal</p>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="d-flex align-items-center">
            <div
              className="profile_img rounded-circle"
              style={{ width: "60px", height: "60px", margin: "0" }}
            >
              <img
                src={Profile}
                alt=""
                className="w-100 h-100 rounded-circle"
              />
            </div>
            <p className="text-dark font_bolder ms-3 h5 mb-0">Shawn Paul</p>
          </div>
          <Form>
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Deal name</Form.Label>
                  <Form.Control placeholder="Enter your Deal name here" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Estimate Profit</Form.Label>
                  <Form.Control placeholder="Enter your estimated profit " />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Pick Category</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Business Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Funding Amount</Form.Label>
                  <Form.Control placeholder="Enter the funding amount" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Business Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Type of Business</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Funding Goal</Form.Label>
                  <Form.Control placeholder="Enter your funding goal" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Funding Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Select the type of funding</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Brief Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter the details deal here.."
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <div
                    className="signature text-center p-5"
                    style={{ border: "2px dashed black" }}
                  >
                    <img src={File} alt="" />
                    <p className="font_bolder m-0">Choose files here...</p>
                    <p className="font_bolder m-0 text-secondary">
                      (Max file size: 10mb)
                    </p>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3 text-center">
                  <Button
                    className="bg-transparent navyColor font_bold p-2 sidebar_profile"
                    style={{ border: "1px solid #082C50" }}
                  >
                    Cancel
                  </Button>
                  <Button className="bigbutton ms-2 p-2 font_bold sidebar_profile">
                    Post
                  </Button>
                </Form.Group>
              </Col>
              <Col xs={6}>
                <img src={Createdealimg} alt="" />
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </div>
  );
}
