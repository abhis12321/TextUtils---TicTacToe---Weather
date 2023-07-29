import React from "react";

export default function Alert(props) {
  return (
    <div  style={{ height: "0rem" , color : props.mode === "dark" ? "white" : "black"}}>
    {props.alert && (
      <div >
        <div
          class={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert" >
          <strong>Success</strong> : {props.alert.msg}
        </div>
      </div>
    )}
    </div>
  );
}
