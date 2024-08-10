import React from "react";
const LoginForm = () => {
  return (
    <div className="container-sm">
      <section class="py-5">
        <div class="d-flex align-items-center ">
          <div class="container-sm">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-12 col-md-6 col-lg-6 col-xl-6 custom-width">
                <div class="form-card">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Login Form</h2>

                    <form>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-md"
                          placeholder="Email address"
                        />
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-md"
                          Repeat
                          your
                          password
                          placeholder="Password"
                        />
                      </div>

                      <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="form2Example31"
                            />
                            <label
                              class="form-check-label remember-txt"
                              for="form2Example31"
                            >
                              {" "}
                              Remember me{" "}
                            </label>
                          </div>
                        </div>

                        <div class="col">
                          <a href="#!">Forgot password?</a>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-success btn-lg regi-btn"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
