import "./Login.css";
import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="login-page">

      {/* Navbar */}
      <nav className="login-navbar">

        <img src={logo} alt="logo" className="login-logo" />

        <ul className="login-nav-links">
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

      {/* Login Form */}
      <div className="login-container">

        <h1>Sign In</h1>

        <p className="signup-text">
          Don't have an account? <span>Create one here</span>
        </p>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>

        <div className="login-options">

          <label className="remember-me">
            <input type="checkbox" />
            Remember Me
          </label>

          <a href="#">Forgot password?</a>

        </div>

        <h3 className="signin-role-title">
          Sign in as
        </h3>

        <div className="role-container">

          <div className="role-card">
            <h4>Admin</h4>
          </div>

          <div className="role-card active">
            <h4>Shop Owner</h4>
          </div>

          <div className="role-card">
            <h4>Supervisor</h4>
          </div>

        </div>

        <button className="signin-button">
          SIGN IN TO CLOTHCORE
        </button>

      </div>

    </div>
  );
}

export default Login;