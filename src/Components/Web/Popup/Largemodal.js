import React from "react";
import { Modal } from "react-bootstrap";
export default function (props) {
  return (
    <div>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.handleChange}
        className=""
      >
        {props.children}
      </Modal>
    </div>
  );
}
