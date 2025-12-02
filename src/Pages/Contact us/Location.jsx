
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { useState } from "react";
import "../../CSS/Contact us/Location.css";
import { motion } from "framer-motion";

const countries = ["India", "Japan", "UAE", "Germany", "USA"];

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const locations = [
    {
        city: "Mumbai, Maharashtra, IN",
        address:
            "5th Floor, Omega House, 501 A & B, Hiranandani Gardens, Sainath Nagar, Powai, Mumbai, Maharashtra 400076.",
        email: "sales@sunbpm.com",
        phone: "+91-8850941503",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Mumbai.jpg",
        map: "https://maps.app.goo.gl/GZARF4M4UMCdXMv76",
    },
    {
        city: "Bengaluru, Karnataka, IN",
        address:
            "BHIVE Premium Whitefield Campus, Jbr Tech Park, Plot No. 77, Whitefield, Bengaluru, Karnataka 560066.",
        email: "sales@sunbpm.com",
        phone: "+91-8850941503",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Bengaluru.jpg",
        map: "https://maps.app.goo.gl/y6Qee8Lg9i7V4k6f8",
    },
    {
        city: "Pune, Maharashtra, IN",
        address:
            "Regus Pentagon P-2, 6th Floor, Magarpatta, Hadapsar, Pune, Maharashtra 411013.",
        email: "sales@sunbpm.com",
        phone: "+91-8850941503",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Pune.jpg",
        map: "https://maps.app.goo.gl/1pbzwARExudZ2pEV8",
    },
    {
        city: "Jalgaon, Maharashtra, IN",
        address:
            "Aurangabad-Ajanta-Jalgaon Road Gat No- 139/1&2, Umale, Maharashtra 425003.",
        email: "sales@sunbpm.com",
        phone: "+91-8591061753",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Jalgaon.jpg",
        map: "https://maps.app.goo.gl/uSapCGY5CiM6r4wB7",
    },
    {
        city: "Nashik, Maharashtra, IN",
        address:
            "H-161/162, MIDC Ambad, Nashik, Maharashtra 422010.",
        email: "sales@sunbpm.com",
        phone: "+91-8850941503",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Nashik.jpg",
        map: "https://maps.app.goo.gl/82bGpqKLEgGJYPuMA",
    },
    {
        city: "Noida, Uttar Pradesh, IN",
        address:
            "Regus - World Trade Tower, Plot No, 1, Delhi Noida Direct Flyway, Central Auto Market, Block C, Block B, Sector 16, Noida, Uttar Pradesh 201301.",
        email: "sales@sunbpm.com",
        phone: "+91-8850941503",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Noida.jpg",
        map: "https://maps.app.goo.gl/EiHfF11pViDWPu6e6",
    },
    {
        city: "Gurugram, Haryana, IN",
        address:
            "Regus - Gurugram, Unitech Cyber Park, Tower-B, UNITECH CYBER PARK, Road, Durga Colony, Sector 39, Gurugram, Haryana 122003.",
        email: "sales@sunbpm.com",
        phone: "+91-8850941503",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Gurugram.jpg",
        map: "https://maps.app.goo.gl/xxEWYgm8zN18nFvG9",
    },
    {
        city: "Hyderabad, Telangana, IN",
        address:
            "Regus - iLabs Center 18, Building 3, Software Units Layout Hi-Tech City, Inorbit Mall Rd, Madhapur, Telangana 500081.",
        email: "sales@sunbpm.com",
        phone: "+91-8850941503",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Hyderabad.jpg",
        map: "https://maps.app.goo.gl/KiDkJkEYA1pccChm6",
    },
    {
        city: "Kolkata, West Bengal, IN",
        address:
            "Regus - Kolkata, Camac Street, 9th Floor, Ps Arcadia Central, 4a, Camac St, Kankaria Estates, Park Street area, Kolkata, West Bengal 700071.",
        email: "sales@sunbpm.com",
        phone: "+91-8850941503",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Kolkata.jpg",
        map: "https://maps.app.goo.gl/LeHatb5CDYHR2kg5A",
    },
    {
        city: "San Ramon, US",
        address:
            "Regus - San Ramon - Crow Canyon Plaza, Suite, 2010 Crow Canyon Place, 100 Crow Canyon Ct Plaza, San Ramon, CA 94583, United States.",
        email: "sales@sunbpm.com",
        phone: "+91-8591061753",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/USA.jpg",
        map: "https://maps.app.goo.gl/NeniVaQvVB36fD7H9",
    },
    {
        city: "Tokyo, JP",
        address:
            "Regus - Tokyo Pacific Century Place, 8F, 1 Chome-11-1 Marunouchi, Chiyoda City, Tokyo 100-6028, Japan.",
        email: "sales@sunbpm.com",
        phone: "+91-8591061753",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Japan.jpg",
        map: "https://maps.app.goo.gl/5ecFvv3aVvKJDtH49",
    },
    {
        city: "Dubai, UAE",
        address:
            "Regus - Dubai CommerCity, 11 17th St - Umm Ramool - Dubai.",
        email: "sales@sunbpm.com",
        phone: "+91-8591061753",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/UAE.jpg",
        map: "https://maps.app.goo.gl/TcdF2DSsCUQF6VKX8",
    },
    {
        city: "Stuttgart, DE",
        address:
            "Regus - Stuttgart, Friedrichstrasse 15, 70174 Stuttgart, Germany.",
        email: "sales@sunbpm.com",
        phone: "+91-8591061753",
        img: "https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/Germany.jpg",
        map: "https://maps.app.goo.gl/zwdkvqPtMPqpgCES8",
    },
];


export default function LocationPage() {
    const stats = [
        { number: "13+", label: "Offices" },
        { number: "5", label: "Global Presence" },
        { number: "10", label: "Locations PAN India" },
        { number: "100%", label: "Geography Coverage" },
    ];

    const [selectedCountry, setSelectedCountry] = useState("India");

    const filteredLocations = locations.filter(
        (loc) => loc.country === selectedCountry
    );

    return (
        <div className="location-wrapper">
            {/* Hero Section */}
            <motion.section
                className="location-hero"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="location-hero-overlay">
                    <h1>
                        Are you looking for a trusted supplier for IT <br />services?
                    </h1>
                    <div className="hero-button">
                        <button
                            className="btn-learn"
                            onClick={() => {
                                navigate("/Contact");
                            }}
                        >
                            Let us Talk
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* Intro Section */}
            <motion.section
                className="location-redef containers"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="location-redef-left" variants={fadeInLeft}>
                    <h1>
                        Our Geographical Presence
                    </h1>
                    <p>
                        Headquartered in Mumbai, India, and operating internationally, our team
                        drives digital transformation for businesses worldwide. Together with our
                        alliance ecosystem we have presence in every major country and city
                        globally. We operate in onsite, near-site, off-site framework to serve
                        all your IT needs effectively.
                    </p>
                </motion.div>
                <motion.div className="location-redef-right" variants={fadeInRight}>
                    <img
                        src="https://javajar1234.s3.ap-south-1.amazonaws.com/SunBPM+website/ContactUs/locations/location+Intro+Image.png"
                        alt="location  Intro Image"
                        className="location-redef-img"
                    />
                </motion.div>
            </motion.section>


            {/* Numarical values Section */}
            <div className="location-stats-wrapper">
                {stats.map((item, index) => (
                    <div key={index} className="location-stats-card">
                        <h2 className="location-stats-number">{item.number}</h2>
                        <p className="location-stats-label">{item.label}</p>
                    </div>
                ))}
            </div>


            {/* Location Details Section */}
            <div className="location-title-wrapper">
                <h2 className="location-details-title">Location Details</h2>
            </div>
            <div className="location-section">
                {locations.map((loc, index) => (
                    <div key={index} className="location-card">
                        <div
                            className="location-image"
                            style={{ backgroundImage: `url(${loc.img})` }}
                        ></div>

                        <div className="location-content">
                            <h3>{loc.city}</h3>

                            {/* Address → Click to open Google Map */}
                            <div
                                className="info-row clickable"
                                onClick={() => window.open(loc.map, "_blank")}
                            >
                                <div className="icon-box"><FiMapPin /></div>
                                <p>{loc.address}</p>
                            </div>

                            {/* Phone + Email Row */}
                            <div className="contact-row">

                                {/* Phone → Click to dial */}
                                <div
                                    className="phone clickable"
                                    onClick={() => window.location.href = `tel:${loc.phone}`}
                                >
                                    <div className="icon-box"><FiPhone /></div>
                                    <p>{loc.phone}</p>
                                </div>

                                {/* Email → Click to open email */}
                                <div
                                    className="email clickable"
                                    onClick={() => window.location.href = `mailto:${loc.email}`}
                                >
                                    <div className="icon-box"><FiMail /></div>
                                    <p>{loc.email}</p>
                                </div>

                            </div>

                            <a href={loc.map} target="_blank" rel="noreferrer">
                                Get Directions →
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
