import React from "react";

export const SignupModal = props => (

  <div id="myModal2" className="modal">
    <div className="modal-content" id="signup">
      <span className="close2">&times;</span>
      <form className="loginmodal" method="post" action="/signup">
        <label>
          <input type="text" id="email-signup" name="email" required />
          <div className="label-text">Email</div>
        </label>
        <label>
          <input type="text" id="userName-signup" name="userName"  required />
          <div className="label-text">Username</div>
        </label>
        <label>
            <input type="text" id="password-signup" name="password" required />
            <div className="label-text">Password</div>
        </label>
        <button id="signupSubmit">Submit</button>
      </form>
      <form action="dashboard.html"></form>
    </div>
  </div>

);
