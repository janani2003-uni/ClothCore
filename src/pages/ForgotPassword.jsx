import "./ForgotPassword.css";
import logo from "../assets/logo.png";

function ForgotPassword() {
  return (
    <div className="forgot-page">

      {/* Navbar */}
      <nav className="forgot-navbar">

        <img
          src={logo}
          alt="ClothCore Logo"
          className="forgot-logo"
        />

        <ul className="forgot-nav-links">
          <li>HOME</li>
          <li>WHO WE ARE</li>
          <li>OUR PRODUCTS & MATERIALS</li>
          <li>CONTACT US</li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>

      </nav>

      {/* Main Content */}
      <div className="forgot-container">

        <p className="step-title">
          FORGOT PASSWORD
        </p>

        <h1 className="forgot-title">
          Find Your Account
        </h1>

        <p className="description">
          Enter your registered email and we'll send you a
          verification code to reset your password.
        </p>

        <div className="form-group">

          <label>
            Registered Email Address
          </label>

          <input
            type="email"
            placeholder=""
          />

        </div>

        <p className="email-help">
          This should be the email you used when creating your
          ClothCore account.
        </p>

        <button className="send-button">
          SEND RESET CODE
        </button>

        <div className="back-wrapper">
          <a href="#" className="back-link">
            &lt; Back to Sign In
          </a>
        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;