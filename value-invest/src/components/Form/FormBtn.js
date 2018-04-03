import React from "react";

export const FormBtn = props => (
  // <button {...props} style={{ marginBottom: 10 }} className="stock">
  //   {props.children} onClick="searchToggle(this, event);"
  // </button>

<i {...props} className="search-icon fas fa-search">
    {props.children}<span></span>
</i>

);
