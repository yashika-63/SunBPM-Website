import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
// import { fadeUp } from "./animations";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
    {
      question: "What are the benefits of the SunBPM Responsible Business Suite?",
      answer:
        "SunBPM enhances operational efficiency, ensures transparency, and supports continuous improvement with data-driven insights. It provides comprehensive functionality, quick implementation, and reliable support all in one trusted solution.",
    },
    {
      question: "What solutions are built on SunBPM Responsible Business Suite?",
      answer:
        "SunBPM supports Sales, Marketing, Finance, Compliance, Operations, and HR covering everything from CRM and Support to Payroll, Audit, and Project Management.",
    },
    {
      question: "Are applications built on SunBPM Responsible Business Suite scalable?",
      answer:
        "Yes, applications built on SunBPM Responsible Business Suite are designed to be highly scalable, ensuring long-term adaptability as your business grows.",
    },
    {
      question: "How do I get started with SunBPM Responsible Business Suite?",
      answer:
        "You may reach out to us at +91 8850941503 or email us on sales@sunbpm.com for more details about our solutions.",
    },
    {
      question: "Is SunBPM RBS customizable for different organizational needs?",
      answer:
        "Yes, SunBPM RBS is highly customizable. Workflows, dashboards, and reports can be tailored to your processes, making it suitable for any industry or organization size.",
    },
    {
      question: "Do you offer 24/7 customer support?",
      answer:
        "SunBPM RBS provides support during dedicated business hours, with email options available beyond those hours to ensure timely assistance and extended coverage.",
    },
    {
      question: "What is SunBPM Responsible Business Suite?",
      answer:
        "SunBPM is an enterprise-class, comprehensive application platform that is flexible yet robust. It enables organizations to develop applications quickly without requiring deep programming expertise.",
    },
  ];

  return (
    <motion.section
      className="cu-faq"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="cu-container">
        <h3 className="cu-faq-title">Frequently asked questions</h3>

        <div className="cu-faq-list">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              className={`cu-faq-item ${openIndex === i ? "is-open" : ""}`}
              variants={fadeUp}
            >
              <button
                className="cu-faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{f.question}</span>
                <ChevronDown className="cu-faq-chevron" size={18} />
              </button>

              <div
                className="cu-faq-a"
                style={{ maxHeight: openIndex === i ? "200px" : "0px" }}
              >
                <p>{f.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactFAQ;