import React from "react";

function Alert(props) {
  return (
    props.alert && <div>
       <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>Success</strong> : {props.alert.msg}
        {/* <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"

        ></button> */}
      </div>
    </div>
  );
}

export default Alert;