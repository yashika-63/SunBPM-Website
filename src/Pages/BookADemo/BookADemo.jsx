import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../CSS/BookADemo/BookADemo.css";

const CountdownToast = ({ message }) => {
  return <div>{message}</div>;
};

const BookADemo = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    organization: "",
    role: "",
    designation: "",
    interest: "",
    datetime: "",
    description: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});

  // OTP Validation States
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [generatedEmailOtp, setGeneratedEmailOtp] = useState("");
  const [generatedMobileOtp, setGeneratedMobileOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate random OTP
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  // Send OTP (Email)
  const sendEmailOtp = () => {
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Enter a valid email before sending OTP");
      return;
    }
    const otp = generateOtp();
    setGeneratedEmailOtp(otp);
    setEmailVerified(false);

    toast.info(`OTP sent to email (Demo: ${otp})`);
  };

  // Verify Email OTP
  const verifyEmailOtp = () => {
    if (emailOtp === generatedEmailOtp) {
      setEmailVerified(true);
      toast.success("Email Verified Successfully");
    } else {
      toast.error("Invalid Email OTP");
    }
  };

  // Send OTP (Mobile)
  const sendMobileOtp = () => {
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      toast.error("Enter valid 10-digit mobile before sending OTP");
      return;
    }
    const otp = generateOtp();
    setGeneratedMobileOtp(otp);
    setMobileVerified(false);

    toast.info(`OTP sent to mobile (Demo: ${otp})`);
  };

  // Verify Mobile OTP
  const verifyMobileOtp = () => {
    if (mobileOtp === generatedMobileOtp) {
      setMobileVerified(true);
      toast.success("Mobile Verified Successfully");
    } else {
      toast.error("Invalid Mobile OTP");
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullname) newErrors.fullname = "Full name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailVerified) newErrors.email = "Email not verified";

    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!mobileVerified) newErrors.mobile = "Mobile not verified";

    if (!formData.organization) newErrors.organization = "Organization is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.designation) newErrors.designation = "Designation is required";
    if (!formData.interest) newErrors.interest = "Please select a product";
    if (!formData.datetime) newErrors.datetime = "Please select date and time";

    if (!formData.description || formData.description.length < 100)
      newErrors.description = "Minimum 100 characters required";

    if (!formData.purpose || formData.purpose.length < 100)
      newErrors.purpose = "Minimum 100 characters required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      const response = await fetch("http://localhost:6002/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          <CountdownToast message="Thank you! Your request has been submitted." />,
          { autoClose: 5000 }
        );

        setFormData({
          fullname: "",
          email: "",
          mobile: "",
          organization: "",
          role: "",
          designation: "",
          interest: "",
          datetime: "",
          description: "",
          purpose: "",
        });

        setEmailVerified(false);
        setMobileVerified(false);
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Network error. Try again.");
    }
  };

  return (
    <div className="demo-container">
      <div className="form-box">
        <h2 className="form-title">Book a Demo</h2>

        <form onSubmit={handleSubmit} className="demo-form">
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>

          {/* Email */}
          <div className="form-group otp-row">
            <div>
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <button type="button" onClick={sendEmailOtp}>
              Send OTP
            </button>
          </div>

          {!emailVerified && generatedEmailOtp && (
            <div className="form-group otp-verify">
              <input
                type="text"
                placeholder="Enter Email OTP"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
              />
              <button type="button" onClick={verifyEmailOtp}>Verify</button>
            </div>
          )}
          {errors.email && <p className="error">{errors.email}</p>}

          {/* Mobile */}
          <div className="form-group otp-row">
            <div>
              <label>Mobile Number *</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>
            <button type="button" onClick={sendMobileOtp}>
              Send OTP
            </button>
          </div>

          {!mobileVerified && generatedMobileOtp && (
            <div className="form-group otp-verify">
              <input
                type="text"
                placeholder="Enter Mobile OTP"
                value={mobileOtp}
                onChange={(e) => setMobileOtp(e.target.value)}
              />
              <button type="button" onClick={verifyMobileOtp}>Verify</button>
            </div>
          )}
          {errors.mobile && <p className="error">{errors.mobile}</p>}

          {/* Organization */}
          <div className="form-group">
            <label>Your Organization *</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
            {errors.organization && <p className="error">{errors.organization}</p>}
          </div>

          {/* Role */}
          <div className="form-group">
            <label>Role *</label>
            <input type="text" name="role" value={formData.role} onChange={handleChange} />
            {errors.role && <p className="error">{errors.role}</p>}
          </div>

          {/* Designation */}
          <div className="form-group">
            <label>Designation *</label>
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
            {errors.designation && <p className="error">{errors.designation}</p>}
          </div>

          {/* Interest */}
          <div className="form-group">
            <label>Products Interested In *</label>
            <select name="interest" value={formData.interest} onChange={handleChange}>
              <option value="">Select one</option>
              <option value="SunBPM CSR">SunBPM CSR</option>
              <option value="SunBPM EHS">SunBPM EHS</option>
              <option value="SunBPM ESG">SunBPM ESG</option>
              <option value="SunBPM QMS">SunBPM QMS</option>
              <option value="SunBPM PO/PR">SunBPM PO/PR</option>
              <option value="SunBPM Capex/Opex">SunBPM Capex/Opex</option>
            </select>
            {errors.interest && <p className="error">{errors.interest}</p>}
          </div>

          {/* Date & Time */}
          <div className="form-group">
            <label>Select Date & Time (Mon–Fri, 10 AM – 5 PM) *</label>
            <input
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
            />
            {errors.datetime && <p className="error">{errors.datetime}</p>}
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Describe Sub-module (Minimum 100 chars) *</label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter your message..."
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </div>

          {/* Purpose */}
          <div className="form-group">
            <label>Purpose of Demo (Minimum 100 chars) *</label>
            <textarea
              name="purpose"
              rows="4"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Enter purpose..."
            />
            {errors.purpose && <p className="error">{errors.purpose}</p>}
          </div>

          <div className="form-btn">
            <button type="submit" disabled={!emailVerified || !mobileVerified}>
              Submit Request
            </button>
          </div>
        </form>

        <ToastContainer position="top-right" />
      </div>
    </div>
  );
};

export default BookADemo;
