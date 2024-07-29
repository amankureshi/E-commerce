import React from "react";

const Registration = () => {
  return (
    <div>
      <section class="py-5">
        <div class="d-flex align-items-center ">
          <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6 custom-width">
                <div class="form-card">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-md"
                          placeholder="Enter Your Name"
                        />
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-md"
                          placeholder="Enter Your Email"
                        />
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input
                          placeholder="Enter Your Passowrd"
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-md"
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
                          placeholder="Repeat your password"
                        />
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-success btn-lg regi-btn"
                        >
                          Register
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

export default Registration;
