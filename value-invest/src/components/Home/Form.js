import React from "react";


export const Form = props => (
  // <form id="search-form">
  //   Enter Ticker:
  //   <input id="ticker" type="text" {...props}/>
  // </form>
  // Hover Here to Search method="post"
  <form className="contact" action="/">
    <input type="text" name="Joe Schmo" className="name-input" id="name" placeholder="Type to search" {...props}/>
    <label htmlFor="name">Name</label>
    <input type="email" name="Joe Schmo" className="email-input" id="email"/>
    <label htmlFor="email">Email</label>
    <textarea name="message" rows="24" cols="80" className="comment-area" id="comment"></textarea>
    <label htmlFor="comment">Comment</label>
    <button type="button" name="button" className="btn waves-effect waves-light blue darken-2 submit-btn">Submit</button>
  </form>

);
