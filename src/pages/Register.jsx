import "./Register.css";
import logo from "../assets/logo.png";

function Register() {
  return (
    <div className="register-page">

      {/* Navbar */}
      <nav className="register-navbar">
        <img src={logo} alt="Logo" className="register-logo" />

        <ul className="register-links">
          <li>HOME</li>
          <li>WHO WE ARE</li>
          <li>OUR PRODUCTS & MATERIALS</li>
          <li>CONTACT US</li>
        </ul>

        <div className="register-nav-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </nav>

      {/* Form */}
      <div className="register-container">

        <p className="small-title">GET STARTED</p>

        <h1>Create Account</h1>

        <p className="signin-text">
          Already registered? <span>Sign in here</span>
        </p>

        <form className="register-form">

          <div className="row">
            <div className="input-group">
              <label>FIRST NAME</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>LAST NAME</label>
              <input type="text" />
            </div>
          </div>

          <div className="input-group">
            <label>EMAIL</label>
            <input type="email" />
          </div>

          <div className="input-group">
            <label>FACTORY NAME</label>
            <input type="text" />
          </div>

          <div className="input-group">
            <label>PASSWORD</label>
            <input type="password" />
          </div>

          <div className="input-group">
            <label>CONFIRM PASSWORD</label>
            <input type="password" />
          </div>

          <div className="terms">
            <input type="checkbox" />
            <span>
              I agree to ClothCore's Terms of Service and Privacy Policy.
            </span>
          </div>

          <button type="submit" className="create-btn">
            CREATE MY ACCOUNT
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;