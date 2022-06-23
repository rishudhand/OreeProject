import React from "react";
import { Modal } from "react-bootstrap";
export default function (props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleChange} className="add_more">
        {props.children}
      </Modal>
    </div>
  );
}
