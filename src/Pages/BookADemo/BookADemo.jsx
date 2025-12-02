import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../CSS/BookADemo/BookADemo.css";

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
    location: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid 10-digit mobile";

    if (!formData.organization) newErrors.organization = "Organization is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.designation) newErrors.designation = "Designation is required";
    if (!formData.interest) newErrors.interest = "Please select a product";
    if (!formData.datetime) newErrors.datetime = "Please select date & time";

    if (!formData.location) newErrors.location = "Location is required";

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
      const response = await fetch("/api/book-demo",
      // const response = await fetch("http://localhost:6002/api/book-demo",
        // const response = await fetch("http://15.207.163.30:6002/api/book-demo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

      if (response.ok) {
        toast.success("Thank you! Your request has been submitted.", {
          autoClose: 5000,
        });

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
          location: "",
        });
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (err) {
      toast.error("Network error. Try again.");
      console.log(err);
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
              placeholder="Enter your full name"
              value={formData.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter 10-digit mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>

          {/* Organization */}
          <div className="form-group">
            <label>Your Organization *</label>
            <input
              type="text"
              name="organization"
              placeholder="Enter your company / organization"
              value={formData.organization}
              onChange={handleChange}
            />
            {errors.organization && <p className="error">{errors.organization}</p>}
          </div>

          {/* Location */}
          <div className="form-group">
            <label>Your Location *</label>
            <input
              type="text"
              name="location"
              placeholder="Enter your current Location"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && <p className="error">{errors.location}</p>}
          </div>

          {/* Role */}
          <div className="form-group">
            <label>Role *</label>
            <input
              type="text"
              name="role"
              placeholder="Enter your role"
              value={formData.role}
              onChange={handleChange}
            />
            {errors.role && <p className="error">{errors.role}</p>}
          </div>

          {/* Designation */}
          <div className="form-group">
            <label>Designation *</label>
            <input
              type="text"
              name="designation"
              placeholder="Enter your designation"
              value={formData.designation}
              onChange={handleChange}
            />
            {errors.designation && <p className="error">{errors.designation}</p>}
          </div>

          {/* Date & Time – FULL WIDTH */}
          <div className="form-group">
            <label>Select Date & Time for Demo (Mon–Fri, 10 AM – 5 PM) *</label>
            <input
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
            />
            {errors.datetime && <p className="error">{errors.datetime}</p>}
          </div>

          {/* Interest – FULL WIDTH */}
          <div className="form-group full-width">
            <label>Products Interested In *</label>
            <select name="interest" value={formData.interest} onChange={handleChange}>
              <option value="">Select one</option>
              <option value="SunBPM Corporate Social Responsibility">SunBPM Corporate Social Responsibility</option>
              <option value="SunBPM Environment, Health, and Safety">SunBPM Environment, Health, and Safety</option>
              <option value="SunBPM Environmental, Social, and Governance">SunBPM Environmental, Social, and Governance</option>
              <option value="SunBPM Project Management System">SunBPM Project Management System</option>
              <option value="SunBPM Purchase Requisition and Purchase Order">SunBPM Purchase Requisition and Purchase Order</option>
              <option value="SunBPM Procurement Decision Tool">SunBPM Procurement Decision Tool</option>
            </select>
            {errors.interest && <p className="error">{errors.interest}</p>}
          </div>

          {/* Description – FULL WIDTH */}
          <div className="form-group full-width">
            <label>Describe Sub-module (Min 100 chars) *</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Describe the module/feature you want us to show"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </div>

          {/* Purpose – FULL WIDTH */}
          <div className="form-group full-width">
            <label>Purpose of Demo (Min 100 chars) *</label>
            <textarea
              name="purpose"
              rows="4"
              placeholder="Explain why you want the demo"
              value={formData.purpose}
              onChange={handleChange}
            />
            {errors.purpose && <p className="error">{errors.purpose}</p>}
          </div>

          <div className="form-btn full-width">
            <button type="submit">Submit Request</button>
          </div>
        </form>


        <ToastContainer position="top-right" />
      </div>
    </div>
  );
};

export default BookADemo;