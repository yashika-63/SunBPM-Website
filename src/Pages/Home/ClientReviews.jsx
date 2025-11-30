import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import "../../CSS/Home/ClientReviews.css";

const reviews = [
    {
        name: "Mr. Mukul",
        designation: "Manager",
        industry: "Manufacturing Industry",
        review:
            "Their ESG platform has made compliance reporting effortless. Real-time metrics and reports are a huge plus for our sustainability goals.",
        rating: 5,
        product: "ESG",
        verified: true,
    },
    {
        name: "Mr. Shreekrishna",
        designation: "HSE Manager",
        industry: "Chemical Industry",
        review:
            "The integrated EHS platform provides excellent visibility across all our safety processes. The mobile access feature has been particularly valuable.",
        rating: 5,
        product: "EHS",
        verified: true,
    },
    {
        name: "Mr. Saho",
        designation: "CEO",
        industry: "Manufacturing Industry",
        review:
            "SunBPM revolutionized our sustainability reporting with real-time tracking and automated compliance. It’s a game-changer for our operations.",
        rating: 5,
        product: "ESG",
        verified: true,
    },
    {
        name: "Mr. Karan",
        designation: "Director",
        industry: "Manufacturing Industry",
        review:
            "SunBPM’s PTW system allowed us to streamline our departmental processes and reduce human error significantly. Highly efficient platform.",
        rating: 5,
        product: "PTW",
        verified: true,
    },
    {
        name: "Mr. Milind",
        designation: "Manager",
        industry: "Chemical Industry",
        review:
            "Outstanding solution for managing environmental data. The automated compliance monitoring ensures zero regulatory misses. Excellent product!",
        rating: 5,
        product: "EHS",
        verified: true,
    },
];

const ClientReviews = () => {
    return (
        <section className="review-section">
            <div className="review-container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="review-title"
                >
                    What Our Clients Say About Us
                </motion.h2>
                <p className="review-subtitle">
                    Real feedback from our trusted partners across industries.
                </p>

                <div className="review-grid">
                    {reviews.map((r, index) => (
                        <motion.div
                            key={index}
                            className="review-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            {/* <div className="quote-icon">
                                <Quote size={26} />
                            </div> */}

                            <div className="review-footer">
                                <div className="user-info">
                                    <div className="user-avatar">
                                        {r.name.split(" ")[1]?.charAt(0) || r.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="user-name">{r.name}</h4>
                                        <p className="user-role">
                                            {r.designation} – {r.industry}
                                        </p>
                                    </div>
                                </div>
                                {/* {r.verified && (
                                    <div className="verified-badge">
                                        <CheckCircle size={16} /> Verified
                                    </div>
                                )} */}
                            </div>
                            <div className="rating">
                                {[...Array(r.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#ffb400" color="#ffb400" />
                                ))}
                            </div>

                            <p className="review-text">"{r.review}"</p>


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
