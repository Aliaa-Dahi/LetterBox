import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    setSuccess(true);
    reset();
  };

  const password = watch("password");

  return (
    <div className="contact-page d-flex align-items-center justify-content-center ">
      <div className="contact-card text-center">
        {/* <div className="container mt-5"> */}
        <h2 className="text-center">Contact Us</h2>

        {success && (
          <div
            className="alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x"
            role="alert"
            style={{ zIndex: 9999, width: "300px", textAlign: "center" }}
          >
            Your message has been sent successfully!
            <button
              type="button"
              className="btn-close"
              onClick={() => setSuccess(false)}
            ></button>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="needs-validation "
          noValidate
        >
          <div className="row">
            <div className="mb-1 col-md-6">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.fullName ? "is-invalid" : ""
                }`}
                {...register("fullName", { required: true, minLength: 3 })}
              />
              {errors.fullName && errors.fullName.type === "required" && (
                <div className="invalid-feedback">Full Name is required</div>
              )}
              {errors.fullName && errors.fullName.type === "minLength" && (
                <div className="invalid-feedback">
                  Full Name must be at least 3 characters
                </div>
              )}
            </div>

            <div className="mb-1 col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <div className="invalid-feedback">Email is required</div>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <div className="invalid-feedback">Enter a valid email</div>
              )}
            </div>
          </div>

          {/* Password & Confirm */}
          <div className="row">
            <div className="mb-1 col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password && errors.password.type === "required" && (
                <div className="invalid-feedback">Password is required</div>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <div className="invalid-feedback">
                  Password must be at least 8 characters
                </div>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password,
                })}
              />
              {errors.confirmPassword &&
                errors.confirmPassword.type === "required" && (
                  <div className="invalid-feedback">
                    Confirm Password is required
                  </div>
                )}
              {errors.confirmPassword &&
                errors.confirmPassword.type === "validate" && (
                  <div className="invalid-feedback">Passwords do not match</div>
                )}
            </div>
          </div>

          {/* Subject & Phone */}
          <div className="row">
            <div className="mb-1 col-md-6">
              <label className="form-label">Subject</label>
              <select
                className={`form-select ${errors.subject ? "is-invalid" : ""}`}
                {...register("subject", { required: true })}
              >
                <option value="">Select Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
              </select>
              {errors.subject && (
                <div className="invalid-feedback">Subject is required</div>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Phone Number (optional)</label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                {...register("phone", {
                  pattern: /^\d{11}$/,
                })}
              />
              {errors.phone && (
                <div className="invalid-feedback">Phone must be 11 digits</div>
              )}
            </div>
          </div>

          {/* Message (full width) */}
          <div className="mb-1">
            <label className="form-label">Message</label>
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              rows="3"
              {...register("message", { required: true, minLength: 10 })}
            ></textarea>
            {errors.message && errors.message.type === "required" && (
              <div className="invalid-feedback">Message is required</div>
            )}
            {errors.message && errors.message.type === "minLength" && (
              <div className="invalid-feedback">
                Message must be at least 10 characters
              </div>
            )}
          </div>

          {/* Submit */}
          <button type="submit" className="submit w-50 rounded-2 mt-4">
            Submit
          </button>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Contact;
