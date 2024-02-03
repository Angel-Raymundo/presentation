import React from "react";

export default function Button(props) {
  return (
    <button type={props.type} className={props.style} onClick={props.click}>
      {props.children}
    </button>
  );
}
