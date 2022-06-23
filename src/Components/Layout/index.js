import React from "react";
import Header from "./Header";
export default function index(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
