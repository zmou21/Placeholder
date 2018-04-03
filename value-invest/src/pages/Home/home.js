import React, { Component } from "react";
import { Form, LoginModal, SignupModal } from "../../components/Home";
import "./style.css";
import "./login.css";

class Home extends Component {
  constructor() {
    super();

  this.toggle = this.toggle.bind(this);

    this.state = {
      username: "",
      password: "",
      image: "",
      name: "",
      email: "",
      comment: "",
      toggle: false
    }
  }

  toggle() {
    console.log("modal is being clicked");
    // this.setState({
    //   toggle: this.state.toggle
    // })
    this.setState(prevState => ({
        toggle: !prevState.toggle
    }));
  }

  render() {
    return (
      <div>
        <div className="bgimg-1">
          <div className="caption">
              <h3 id="header-title">The Best Value Investing Platform on the Web!</h3>
              <a href="/search"><button type="button" name="button">Get Started!</button></a>
          </div>
          <div className="login">
            <div className="logo">
                <img src="#" alt="logo" width="200px" height="75px"/>
            </div>
              <span id="loginbtn"><a onClick={this.toggle} className="linkstyle">login</a>
                <LoginModal
                  toggle={this.state.toggle}
                  toggleClick={this.toggle}
                />
              </span>
              <span id="loginbtn"><a onClick={this.toggle} className="linkstyle">login</a>
                <LoginModal
                  toggle={this.state.toggle}
                  toggleClick={this.toggle}
                />
              </span>
          </div>

        </div>

        <div>
          <h3>Product Features</h3>
          <div className="grid-container">
            <div id="item1">
              <i className="far fa-money-bill-alt" id="fa1"></i>
              <h3>Feature 1</h3>
            </div>
            <div id="item2">
              <i className="far fa-money-bill-alt" id="fa2"></i>
              <h3>Feature 2</h3>
            </div>
            <div id="item3">
              <i className="far fa-money-bill-alt" id="fa3"></i>
              <h3>Feature 3</h3>
            </div>
          </div>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">TBD - Product Image placeholder</span>
          </div>
        </div>

        <div id="about">
          <h3>About</h3>
          <p>Textalign Center; Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">Image of company/money</span>
          </div>
        </div>

        <div id="contact">
          <div id="contact-div">
            <h3>Contact Me</h3>
            <Form />
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border">SCROLL UP</span>
          </div>
        </div>

        <div id="footer">
          <div id="footer-div">
            <footer>
              &copy 2018 MOUMEN
            </footer>
          </div>
        </div>
      </div>
    );
  };
};

export default Home;
