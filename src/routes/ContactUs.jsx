import React, { useState } from "react";

const ContactUs = () => {
  const [formValue, setFormValue] = useState({
    fullname: "",
    companyEmail: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });
  const [disable, setDisable] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue, "clicked");
    setDisable(true);
    setFormValue({
      fullname: "",
      companyEmail: "",
      phoneNumber: "",
      companyName: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mt-1">Have A Project Or Partnership In Mind?</h1>
          <h5 className="mt-2">
            We’d love to hear from you. Please share more information and we
            will get back to you within one working day.
          </h5>
          <p className="text-success"> </p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    placeholder="Jhon walker"
                    required
                    value={formValue.fullname}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Work Email</label>
                  <input
                    type="email"
                    name="companyEmail"
                    className="form-control"
                    placeholder="jwalker@company.com"
                    required
                    value={formValue.companyEmail}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="phonenumber"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="1234567890"
                    required
                    value={formValue.phoneNumber}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    className="form-control"
                    placeholder="Your Corporation"
                    required
                    value={formValue.companyName}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">How can we help you?</label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Write your message"
                    rows={5}
                    cols={30}
                    value={formValue.message}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I agree to the privacy policy{" "}
                </label>
              </div>

              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label"></label>
                  <button
                    className="btn btn-success btn-lg"
                    disabled={
                      !formValue.fullname ||
                      !formValue.companyEmail ||
                      !formValue.phoneNumber ||
                      !formValue.companyName ||
                      !formValue.message ||
                      disable
                    }
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
