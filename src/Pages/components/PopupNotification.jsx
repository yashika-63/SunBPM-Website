import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../CSS/ComponentsCSS/PopupNotification.css";
import { FaBell } from "react-icons/fa";

const products = [
    { name: "SunBPM CSR", path: "/Products/CSR" },
    { name: "SunBPM ESG", path: "/Products/ESG" },
    { name: "SunBPM EHS", path: "/Products/EHS" },
    { name: "SunBPM QMS", path: "/Products/QMS" },
    { name: "SunBPM PO/PR", path: "/Products/PRPO" },
    { name: "SunBPM Capex/Opex", path: "/Products/CapexOpex" },
];

const PopupNotification = () => {
    const navigate = useNavigate();
    const productIndexRef = useRef(0);

    useEffect(() => {
        const initialTimeout = setTimeout(() => {
            showProductToast();
        }, 10 * 1000);

        const interval = setInterval(() => {
            showProductToast();
        }, 5 * 60 * 1000); //5 minutes 

        return () => {
            clearInterval(interval);
            clearTimeout(initialTimeout);
        };
    }, []);

    const showProductToast = () => {
        const currentIndex = productIndexRef.current;
        const product = products[currentIndex];
        productIndexRef.current = (currentIndex + 1) % products.length;

        const ToastContent = ({ closeToast }) => (
            <div className="popup-container">
                <h4 className="popup-title">Take a look at {product.name}!</h4>
                <p className="popup-message">
                    Would you like to explore this product?
                </p>

                <div className="popup-buttons">
                    <button
                        className="popup-btn view-btn"
                        onClick={() => {
                            closeToast();
                            navigate(product.path);
                        }}
                    >
                        View Product
                    </button>
                    <button className="popup-btn no-btn" onClick={closeToast}>
                        No Thanks
                    </button>
                </div>
            </div>
        );

        toast.info(<ToastContent />, {
            position: "top-right",
            autoClose: 10000, // 10 seconds
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
            icon: <FaBell style={{ color: "#ff6b00", fontSize: "20px" }} />,
        });
    };

    return <ToastContainer />;
};

export default PopupNotification;