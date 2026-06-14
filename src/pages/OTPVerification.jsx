import "./OTPVerification.css";
import logo from "../assets/logo.png";

function OTPVerification() {
  return (
    <div className="otp-page">

      {/* Navbar */}
      <nav className="otp-navbar">

        <img
          src={logo}
          alt="ClothCore Logo"
          className="otp-logo"
        />

        <ul className="otp-nav-links">
          <li>HOME</li>
          <li>WHO WE ARE</li>
          <li>OUR PRODUCTS & MATERIALS</li>
          <li>CONTACT US</li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">
            Login
          </button>

          <button className="register-btn">
            Register
          </button>
        </div>

      </nav>

      {/* Main Content */}

      <div className="otp-container">

        <div className="otp-header">

          <p className="step-title">
            Step 2
          </p>

          <h1 className="otp-title">
            Enter OTP Code
          </h1>

          <p className="otp-description">
            Enter the 6-digit code we sent to your email address.
          </p>

        </div>

        <label className="verification-label">
          Verification Code
        </label>

        <div className="otp-boxes">
          <input className="otp-box" type="text" maxLength="1" />
          <input className="otp-box" type="text" maxLength="1" />
          <input className="otp-box" type="text" maxLength="1" />
          <input className="otp-box" type="text" maxLength="1" />
          <input className="otp-box" type="text" maxLength="1" />
          <input className="otp-box" type="text" maxLength="1" />
        </div>

        <div className="otp-footer">

          <span className="expire-text">
            Code expires in 02:00
          </span>

          <a href="#" className="resend-link">
            Resend Code
          </a>

        </div>

        <button className="verify-btn">
          VERIFY CODE
        </button>

        <a href="#" className="back-link">
          &lt; Back to Email
        </a>

      </div>

    </div>
  );
}

export default OTPVerification;