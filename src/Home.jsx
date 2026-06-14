import "./Home.css";
import logoImg from "./assets/logo.png";
import factoryImg from "./assets/factory.jpg";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="logo" className="logo-image" />
        </div>

        <ul className="nav-links">
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

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-left">

          <img
            src={factoryImg}
            alt="factory"
            className="factory-image"
          />

          <h1>
            Manage Every
            <br />
            <span>Thread</span> of your
            <br />
            Garment Business
          </h1>

          <p>
            Clothcore streamlines production, inventory,
            and materials - from raw fabric to finished
            product.
          </p>

        </div>

        <div className="hero-right">

          <div className="dashboard-box">

            <h2>LIVE DASHBOARD</h2>

            <div className="dashboard-row">
              <span>Active Orders</span>
              <strong>284</strong>
            </div>

            <div className="dashboard-row">
              <span>Materials in Stock</span>
              <strong>100</strong>
            </div>

            <div className="dashboard-row">
              <span>Garments Tracked</span>
              <strong>500</strong>
            </div>

            <div className="dashboard-row">
              <span>Production Rate</span>
              <strong>97%</strong>
            </div>

          </div>

          <div className="bottom-cards">

            <div className="small-card">
              <h4>FABRIC STOCK</h4>
              <p>48 Rolls</p>
            </div>

            <div className="small-card">
              <h4>QC PASS RATE</h4>
              <p>97.4%</p>
            </div>

          </div>

        </div>

      </section>

      {/* Core Capabilities */}
      <section className="capabilities">

        <p className="section-tag">
          CORE CAPABILITIES
        </p>

        <h2>
          Everything Your Factory Needs
        </h2>

        <div className="capability-grid">

          <div className="capability-card">
            <h3>Inventory Control</h3>
            <p>
              Track raw materials, WIP, and finished goods
              across every production stage.
            </p>
          </div>

          <div className="capability-card">
            <h3>Production Scheduling</h3>
            <p>
              Plan cutting, stitching, and finishing
              workflows efficiently.
            </p>
          </div>

          <div className="capability-card">
            <h3>Materials Management</h3>
            <p>
              Manage fabric rolls, threads, accessories,
              and reorder levels.
            </p>
          </div>

          <div className="capability-card">
            <h3>Analytics & Reports</h3>
            <p>
              Visual dashboards and exportable reports
              for production output.
            </p>
          </div>

          <div className="capability-card">
            <h3>Quality Control</h3>
            <p>
              Define inspection checkpoints at every stage
              and track pass rates.
            </p>
          </div>

          <div className="capability-card">
            <h3>Supplier Network</h3>
            <p>
              Manage vendor contacts, purchase orders,
              deliveries and payments.
            </p>
          </div>

        </div>

      </section>
     {/* About Section */}

<section className="about-section">

  <h2>About ClothCore</h2>

  <p className="about-description">
    ClothCore is a modern garment order and production
    management system designed to simplify operations
    for garment manufacturers. From inventory control
    to production tracking and delivery management,
    ClothCore helps factories improve efficiency,
    transparency, and productivity.
  </p>

  <div className="mission-vision-container">

    <div className="info-card">
      <h3>Our Mission</h3>

      <p>
        To empower garment manufacturers with
        technology-driven solutions that streamline
        production, inventory, and order management.
      </p>
    </div>

    <div className="info-card">
      <h3>Our Vision</h3>

      <p>
        To become the leading digital platform for
        garment manufacturing operations and
        production excellence.
      </p>
    </div>

    <div className="info-card">
      <h3>Our Values</h3>

      <p>
        Innovation, transparency, efficiency,
        teamwork, and customer satisfaction
        drive everything we do.
      </p>
    </div>

  </div>

</section>


{/* Team Section */}

<section className="team-section">

  <h2>Meet Our Team</h2>

  <p className="team-subtitle">
    The people behind ClothCore
  </p>

  <div className="team-grid">

    <div className="team-card">
      <div className="member-image"></div>

      <h3>Janani</h3>

      <p>Project Manager</p>
    </div>

    <div className="team-card">
      <div className="member-image"></div>

      <h3>Mohamed</h3>

      <p>Software Engineer</p>
    </div>

    <div className="team-card">
      <div className="member-image"></div>

      <h3>Jeewendra</h3>

      <p>Frontend Developer</p>
    </div>

    <div className="team-card">
      <div className="member-image"></div>

      <h3>Vitharana</h3>

      <p>Backend Developer</p>
    </div>

    <div className="team-card">
      <div className="member-image"></div>

      <h3>Rashmi</h3>

      <p>UI / UX Designer</p>
    </div>

  </div>

</section>
  {/* Products Section */}

<section className="products-section">

  <h2>Products & Materials</h2>

  <p className="products-subtitle">
    Explore the garments and raw materials managed through ClothCore.
  </p>

  <div className="products-grid">

    <div className="product-card">
      <div className="product-image"></div>
      <h3>Fabric Materials</h3>
      <p>
        Cotton, polyester, denim and blended fabrics used in production.
      </p>
    </div>

    <div className="product-card">
      <div className="product-image"></div>
      <h3>Garment Products</h3>
      <p>
        Shirts, trousers, jackets, uniforms and customized clothing.
      </p>
    </div>

    <div className="product-card">
      <div className="product-image"></div>
      <h3>Accessories</h3>
      <p>
        Buttons, zippers, labels and other garment accessories.
      </p>
    </div>

  </div>

</section>


{/* Contact Section */}

<section className="contact-section">

  <h2>Contact Us</h2>

  <p className="contact-subtitle">
    We'd love to hear from you.
  </p>

  <div className="contact-container">

    <div className="contact-info">
      <h3>Get In Touch</h3>

      <p>Email: info@clothcore.com</p>

      <p>Phone: +94 71 234 5678</p>

      <p>Location: Colombo, Sri Lanka</p>
    </div>

    <div className="contact-form">

      <input
        type="text"
        placeholder="Your Name"
      />

      <input
        type="email"
        placeholder="Your Email"
      />

      <textarea
        placeholder="Your Message"
        rows="5"
      ></textarea>

      <button>
        Send Message
      </button>

    </div>

  </div>

</section>


{/* Footer */}

<footer className="footer">

  <h3>ClothCore</h3>

  <p>
    Garment Order & Production Management System
  </p>

  <p>
    © 2026 ClothCore. All Rights Reserved.
  </p>

</footer>
    </div>
  );
}

export default Home;