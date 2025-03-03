import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    console.log({ email, password });
  };

  return (
    <section className="about account mt-3 mb-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="acc-block">
              <h3 className="mb-4 text-center text-dark">Login</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="login_email"
                  className="form-control mb-4"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  name="login_password"
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
                  Login
                </button>
              </form>
              <div className="divider">
                <span className="divider-text">Sign up with</span>
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
                      width="17"
                      className="mb-1"
                    />
                  </a>
                </button>
                <button className="btn btn-apple">
                  <i className="fab fa-apple"></i>
                </button>
              </div>
              <p className="signin text-center pt-4">
                Don't Have an account? <a href="sign-in.html">sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
