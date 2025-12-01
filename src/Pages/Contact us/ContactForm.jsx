import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
// import MyMap from "./MyMap";
import ContactDetails from "./ContactDetails";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CountdownToast = ({ message, duration }) => {
    const [timeLeft, setTimeLeft] = useState(duration / 1000);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 1 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        organization: "",
        mobile: "",
        interest: "",
        description: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.fullname) newErrors.fullname = "Full name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.organization) newErrors.organization = "Organization is required";
        if (!formData.mobile) newErrors.mobile = "Mobile number is required";
        return newErrors;
    };

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        toast.success(
            <CountdownToast
                message="Thank you! Your request has been submitted."
                duration={5000}
            />,
            { autoClose: 5000 }
        );

        setFormData({
            fullname: "",
            email: "",
            organization: "",
            mobile: "",
            interest: "",
            description: "",
        });
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
            <div className="cu-container cu-start-grid">
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
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                />
                                {errors.fullname && <p className="error">{errors.fullname}</p>}
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
                        </div>

                        {/* Mobile + Organization */}
                        <div className="cu-row-2">
                            <div className="cu-field">
                                <label>Mobile Number *</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Enter 10-digit mobile number"
                                />
                                {errors.mobile && <p className="error">{errors.mobile}</p>}
                            </div>

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
                        </div>

                        {/* Location + Role */}
                        <div className="cu-row-2">
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

                        {/* Designation */}
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

                            {/* Date & Time */}
                            <div className="cu-field">
                                <label>Select Date & Time for Demo  *</label>
                                <input
                                    type="datetime-local"
                                    name="demoDateTime"
                                    value={formData.demoDateTime}
                                    onChange={handleChange}
                                    className="cu-date"
                                />
                                {errors.demoDateTime && <p className="error">{errors.demoDateTime}</p>}
                            </div>
                        </div>

                        {/* Products Interested */}
                        <div className="cu-field">
                            <label>Products Interested In *</label>
                            <select
                                name="interest"
                                value={formData.interest}
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
                            {errors.interest && <p className="error">{errors.interest}</p>}
                        </div>

                        {/* Sub-module Description */}
                        <div className="cu-field">
                            <label>Describe Sub-module (Min 100 chars) *</label>
                            <textarea
                                name="submodule"
                                rows="4"
                                value={formData.submodule}
                                onChange={handleChange}
                                placeholder="Describe the module or feature you want us to show"

                            />
                            {errors.submodule && <p className="error">{errors.submodule}</p>}
                        </div>

                        {/* Purpose of Demo */}
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

                        {/* Submit Button */}
                        <button type="submit" className="cu-btn-dark">
                            Request Demo
                        </button>
                    </form>


                    {/* Toast Container */}
                    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ContactForm;