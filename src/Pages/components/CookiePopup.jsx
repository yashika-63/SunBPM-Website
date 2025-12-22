import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import "../../CSS/ComponentsCSS/CookiePopup.css";

const CookiePopup = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const consentCookie = document.cookie
      .split("; ")
      .find(row => row.startsWith("sunbpmCookieConsent="));

    if (!consentCookie) {
      setTimeout(() => {
        setShowOverlay(true);
        document.body.style.overflow = "hidden";
      }, 3000);
    }
  }, []);

  const closePopup = () => {
    setShowOverlay(false);
    document.body.style.overflow = "auto";
  };

  if (!showOverlay) return null;

  return (
    <div className="cookie-overlay">
      <CookieConsent
        location="none"
        cookieName="sunbpmCookieConsent"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        expires={400}
        onAccept={closePopup}
        onDecline={closePopup}
        containerClasses="cookie-consent-container"
        buttonWrapperClasses="cookie-buttons-wrapper"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          background: "#2B373B",
          color: "#fff",
          display: "block",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center",
        }}
        buttonStyle={{
          color: "#fff",
          backgroundColor: "#f7941d",
          borderRadius: "9999px",
          padding: "8px 20px",
          margin: "0 10px",
          border: "none",
        }}
        declineButtonStyle={{
          color: "#f7941d",
          backgroundColor: "transparent",
          border: "2px solid #f7941d",
          borderRadius: "9999px",
          padding: "8px 20px",
          margin: "0 10px",
        }}
      >
        <h2>We value your privacy</h2>
        <p>
          We use cookies to enhance the user experience. By continuing to browse,
          you agree to our use of cookies.
        </p>
      </CookieConsent>
    </div>
  );
};

export default CookiePopup;