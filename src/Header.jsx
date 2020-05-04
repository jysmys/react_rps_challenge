import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { authenticate} from "./helpers/auth";
import { registration } from "./helpers/registration";
import ShowScore from "./components/ShowScore";
// import { Menu } from "semantic-ui-react";
import "./css/Header.css";

class Header extends Component {
  state = {
    renderLoginForm: false,
    renderSignUpForm: false,
    authenticated: false,
    message: "",
    name: "",
  };
  onSignup = async (e) => {
    e.preventDefault();
    const response = await registration(
      e.target.name.value,
      e.target.email.value,
      e.target.password.value,
      e.target.passwordConfirm.value
    );
    if (response.authenticated) {
      this.setState({ name: response.data.data.name }, () =>
        this.props.onAuthenticate()
      );
      this.props.name = this.state.name;
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };
  onLogin = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ name: response.data.data.name }, () =>
        this.props.onAuthenticate()
      );
      this.props.name = this.state.name;
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };
  render() {
    const {
      renderSignUpForm,
      renderLoginForm,
      authenticated,
      message,
    } = this.state;
    return (
      <div id="header">
        {!renderLoginForm && !authenticated && (
          <button
            id="login"
            onClick={() => this.setState({ renderLoginForm: true })}
          >
            Login
          </button>
        )}
        {renderLoginForm && !authenticated && (
          <>
            <LoginForm submitFormHandler={this.onLogin} />
            <p id="errormessage">{message}</p>
          </>
        )}
        {!renderSignUpForm && !authenticated && (
          <button
            id="signup"
            onClick={() => this.setState({ renderSignUpForm: true })}
          >
            Signup
          </button>
        )}
        {renderSignUpForm && !authenticated && (
          <>
            <SignUpForm submitFormHandler={this.onSignup} />
            <p id="errormessage">{message}</p>
          </>
        )}
        {authenticated && (
          <div>
            <p id="message">Hi {this.state.name}</p>
            <ShowScore />
            {/* <HighScore /> */}
          </div>
        )}
        <nav>
          <h1 id="header">Rock - Paper - Scissor</h1>
        </nav>
      </div>
    );
  }
}

export default Header;
