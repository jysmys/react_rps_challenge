import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import { authenticate } from "./helpers/auth";

class Header extends Component {
  state = {
    renderLoginForm: false,
    authenticated: false,
    message: "",
    name: "",
    wins: 0,
    lost: 0,
    played: 0,
  };

  onLogin = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true, player: response.data.data.name });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };
  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    return (
      <div>
        <nav>
          <h1 id="header">Rock - Paper - Scissor</h1>
        </nav>
        <button
          id="login"
          onClick={() => this.setState({ renderLoginForm: true })}
        >
          Login
        </button>
        {renderLoginForm && !authenticated && (
          <>
            <LoginForm submitFormHandler={this.onLogin} />
            <p id="errormessage">{message}</p>
          </>
        )}
        {authenticated && (
          <p id="message">
            Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </p>
        )}
      </div>
    );
  }
}
export default Header;
