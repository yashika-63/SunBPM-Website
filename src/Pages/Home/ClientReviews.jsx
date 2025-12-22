import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "../../CSS/Home/ClientReviews.css";
import reviews from "../../data/ClientReview";

const ClientReviews = () => {
    return (
        <section className="review-section">
            <div className="review-container">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="review-title"
                >
                    What Our Clients Say
                </motion.h2>

                <p className="review-subtitle">
                    Trusted by professionals across multiple industries
                </p>

                <div className="review-grid">
                    {reviews.map((r, index) => (
                        <motion.div
                            key={index}
                            className="review-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.08,
                                ease: "easeOut",
                            }}
                        >
                            <div className="review-footer">
                                <div className="user-info">
                                    <div className="user-avatar">
                                        {r.name.split(" ")[1]?.charAt(0) || r.name.charAt(0)}
                                    </div>

                                    <div className="user-meta">
                                        <h4 className="user-name">{r.name}</h4>
                                        <p className="user-role">
                                            {r.designation} • {r.industry}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="rating">
                                {[...Array(r.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill="#ffb400"
                                        color="#ffb400"
                                    />
                                ))}
                            </div>

                            <p className="review-text">“{r.review}”</p>


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;