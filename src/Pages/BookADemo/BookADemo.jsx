import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../CSS/BookADemo/BookADemo.css";

const BookADemo = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    organization: "",
    mobile: "",
    interest: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.organization) newErrors.organization = "Organization name is required";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit number";
    }
    if (!formData.interest) newErrors.interest = "Please specify your interest";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(false);
      setSubmitted(false);

      try {
        // Use relative URL instead of absolute URL
        // const response = await fetch("/api/book-demo", {
        // const response = await fetch("http://localhost:6002/api/book-demo", {
        const response = await fetch("http://15.207.163.30:6002/api/book-demo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullname,
            email: formData.email,
            organization: formData.organization,
            mobileNumber: formData.mobile,
            productsServices: formData.interest,
            description: formData.description,
          }),
        });

        if (response.ok) {
          toast.success("Thank you! Your request has been submitted.");
          setFormData({
            fullname: "",
            email: "",
            organization: "",
            mobile: "",
            interest: "",
            description: "",
          });
        }
        else {
          const errorData = await response.json();
          console.log("Server Error Response:", errorData);
          alert("Something went wrong! Please try again.");
        }
      } catch (err) {
        console.log("Network/Server Error Response:", err);
        alert("Something went wrong! Please try again.");
      }
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
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Enter Full Name"
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Organization */}
          <div className="form-group">
            <label>Your Organization *</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Enter Organization Name"
            />
            {errors.organization && <p className="error">{errors.organization}</p>}
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>

          {/* Interest - Dropdown */}
          <div className="form-group">
            <label>Products Interested In *</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <option value="">Select one</option>
              <option value="SunBPM CSR">SunBPM CSR</option>
              <option value="SunBPM BRSR">SunBPM BRSR</option>
              <option value="SunBPM EHS">SunBPM EHS</option>
              <option value="SunBPM ESG">SunBPM ESG</option>
            </select>
            {errors.interest && <p className="error">{errors.interest}</p>}
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Describe what you are looking for (Optional)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your message or requirements here..."
              className="custom-textarea"
            />
          </div>

          {/* Submit */}
          <div className="form-btn">
            <button type="submit">Submit Request</button>
          </div>
        </form>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );

};

export default BookADemo;