import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import { authenticate } from "./helpers/auth";

class Header extends Component {
  state = {
    renderLoginForm: false,
    authenticated: false,
    message: "",
  };

  onLogin = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };
  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    return (
      <>
        <nav>
          <h1 id="header">Rock - Paper - Scissor</h1>
        </nav>
        <button
          id="login"
          onClick={() => this.setState({ renderLoginForm: true })}
        >
          Login
        </button>
        {renderLoginForm && (
          <>
            <LoginForm submitFormHandler={this.onLogin} />
          </>
        )}
        {authenticated && (
          <p id="message">
            Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </p>
        )}
        <p id="errormessage">{message}</p>
      </>
    );
  }
}
export default Header;
