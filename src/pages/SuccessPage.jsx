import "./SuccessPage.css";
import logo from "../assets/logo.png";

function SuccessPage() {
  return (
    <div className="success-page">

      {/* Navbar */}
      <nav className="success-navbar">

        <img
          src={logo}
          alt="ClothCore Logo"
          className="success-logo"
        />

        <ul className="success-nav-links">
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
      <div className="success-container">

        <p className="step-title">
          Step 4
        </p>

        <div className="success-icon">
          ✓
        </div>

        <h1 className="success-title">
          Password Reset Successfully
        </h1>

        <p className="success-description">
          Your password has been updated successfully.
          You can now log in using your new password.
        </p>

        <button className="login-page-btn">
          GO TO LOGIN
        </button>

      </div>

    </div>
  );
}

export default SuccessPage;