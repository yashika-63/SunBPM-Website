import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import ContactDetails from "./ContactDetails";
import "react-toastify/dist/ReactToastify.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactForm = () => {

  const now = new Date().toISOString().slice(0, 16);  // yyyy-MM-ddTHH:mm

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    organization: "",
    role: "",
    designation: "",
    productsServices: "",
    dateTime: "",
    description: "",
    purpose: "",
    location: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobileNumber))
      newErrors.mobileNumber = "Enter valid 10-digit mobile";

    if (!formData.organization) newErrors.organization = "Organization is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.designation) newErrors.designation = "Designation is required";
    if (!formData.productsServices) newErrors.productsServices = "Please select a product";
    if (!formData.dateTime) newErrors.dateTime = "Please select date & time";
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
      const response = await fetch("/api/book-demo", {
        // const response = await fetch("http://localhost:6002/api/book-demo", {
        // const response = await fetch("http://15.207.163.30:6002/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you! Your request has been submitted.", {
          autoClose: 5000,
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          mobileNumber: "",
          organization: "",
          role: "",
          designation: "",
          productsServices: "",
          dateTime: "",
          description: "",
          purpose: "",
          location: "",
        });
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (err) {
      toast.error("Network error. Try again.");
      console.error(err);
    }
  };

  return (
    <motion.section
      className="cu-start"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="cu-heading">Contact Us</h2>
      <div className="cu" id="contact-start">
        {/* Left side map */}
        <motion.div className="cu-start-left" variants={fadeUp}>
          <ContactDetails />
        </motion.div>

        {/* Right side form */}
        <motion.div className="cu-start-right" variants={fadeUp}>
          <form className="cu-card" onSubmit={handleSubmit}>
            <div className="cu-card-head">
              <h3>Request a Demo</h3>
            </div>

            {/* Full Name + Email */}
            <div className="cu-row-2">
              <div className="cu-field">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
              </div>

              <div className="cu-field">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="cu-field">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                />
                {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
              </div>
            </div>

            {/* Mobile + Organization */}
            <div className="cu-row-2">


              <div className="cu-field">
                <label>Your Organization *</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Enter your company / organization"
                />
                {errors.organization && <p className="error">{errors.organization}</p>}
              </div>
              {/* </div> */}

              {/* Location + Role */}
              {/* <div className="cu-row-2"> */}
              <div className="cu-field">
                <label>Your Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your current location"
                />
                {errors.location && <p className="error">{errors.location}</p>}
              </div>

              <div className="cu-field">
                <label>Role *</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Enter your role"
                />
                {errors.role && <p className="error">{errors.role}</p>}
              </div>
            </div>

            {/* Designation + DateTime  */}
            <div className="cu-row-2">
              <div className="cu-field">
                <label>Designation *</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Enter your designation"
                />
                {errors.designation && <p className="error">{errors.designation}</p>}
              </div>

              <div className="cu-field">
                <label>Select Date & Time for Demo *</label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={formData.dateTime}
                  min={now}
                  onChange={handleChange}
                />

                {errors.dateTime && <p className="error">{errors.dateTime}</p>}
              </div>


              {/* Products Interested */}
              <div className="cu-field">
                <label>Products Interested In *</label>
                <select
                  name="productsServices"
                  value={formData.productsServices}
                  onChange={handleChange}
                >
                  <option value="">Select one</option>
                  <option value="SunBPM Corporate Social Responsibility">SunBPM Corporate Social Responsibility</option>
                  <option value="SunBPM Environment, Health, and Safety">SunBPM Environment, Health, and Safety</option>
                  <option value="SunBPM Environmental, Social, and Governance">SunBPM Environmental, Social, and Governance</option>
                  <option value="SunBPM Project Management System">SunBPM Project Management System</option>
                  <option value="SunBPM Purchase Requisition and Purchase Order">SunBPM Purchase Requisition and Purchase Order</option>
                  <option value="SunBPM Procurement Decision Tool">SunBPM Procurement Decision Tool</option>
                </select>
                {errors.productsServices && <p className="error">{errors.productsServices}</p>}
              </div>
            </div>

            <div className="cu-description-2">
              {/* Description */}
              <div className="cu-field">
                <label>Describe Sub-module (Min 100 chars) *</label>
                <textarea
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the module or feature you want us to show"
                />
                {errors.description && <p className="error">{errors.description}</p>}
              </div>

              {/* Purpose */}
              <div className="cu-field">
                <label>Purpose of Demo (Min 100 chars) *</label>
                <textarea
                  name="purpose"
                  rows="4"
                  value={formData.purpose}
                  onChange={handleChange}
                  placeholder="Explain why you want the demo"
                />
                {errors.purpose && <p className="error">{errors.purpose}</p>}
              </div>
            </div>

            <button type="submit" className="cu-btn-dark">
              Request Demo
            </button>
          </form>

          <ToastContainer position="top-right" autoClose={5000} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
