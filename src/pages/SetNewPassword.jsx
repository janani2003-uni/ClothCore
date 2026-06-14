import "./SetNewPassword.css";
import logo from "../assets/logo.png";

function SetNewPassword() {
  return (
    <div className="reset-page">

      <nav className="reset-navbar">

        <img
          src={logo}
          alt="ClothCore Logo"
          className="reset-logo"
        />

        <ul className="reset-nav-links">
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

      <div className="reset-container">

        <div className="reset-header">
          <p className="step-title">Step 3</p>

          <h1 className="reset-title">
            Set New Password
          </h1>

          <p className="reset-description">
            Create a strong password for your ClothCore account.
          </p>
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input type="password" />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" />
        </div>

        <p className="password-rule">
          Password must contain at least 8 characters.
        </p>

        <button className="reset-btn">
          RESET PASSWORD
        </button>

        <a href="#" className="back-link">
          &lt; Back to Verification
        </a>

      </div>

    </div>
  );
}

export default SetNewPassword;