import React from "react";


export const Input = props => (
  // <form id="search-form">
  //   Enter Ticker:
  //   <input id="ticker" type="text" {...props}/>
  // </form>
  // Hover Here to Search
  <form id="search-wrapper" className="active">
    <div className="input-holder">
        <input type="text" className="search-input" placeholder="Type to search" {...props}/>
      </div>
    <span className="close" {...props}></span>
  </form>

);
