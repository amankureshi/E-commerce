import React, { useState } from "react";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log({ username, email, password });
  };

  return (
    <section className="d-flex justify-content-center mt-5 mb-5">
      <div className="col-md-4">
        <div className="acc-block">
          <h3 className="mb-4 text-center text-dark">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="register_username"
              className="form-control mb-4"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              name="register_email"
              className="form-control mb-4"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="register_password"
              className="form-control mb-4"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#1D1D1D", border: "none" }}
            >
              Register
            </button>
          </form>
          <div className="divider">
            <span className="divider-text">Or</span>
          </div>
          <div className="social-login-buttons flex gap-2 text-center">
            <button className="btn btn-facebook">
              <a href="https://www.facebook.com/login.php/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </button>
            <button className="btn btn-google">
              <a href="https://shorturl.at/efdR1">
                <img
                  src="https://img.icons8.com/?size=96&id=17949&format=png"
                  alt="google-icon"
                  width="18"
                  className="mb-1"
                />
              </a>
            </button>
            <button className="btn btn-apple">
              <i className="fab fa-apple"></i>
            </button>
          </div>
          <p className="signin text-center pt-4">
            Already Have an account? <a href="myaccount.html">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
