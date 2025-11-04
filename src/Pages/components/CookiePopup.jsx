import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import "../../CSS/ComponentsCSS/CookiePopup.css";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sunbpmCookieConsent");

    // Show popup only if user hasn't accepted
    if (consent !== "true") {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000); // Show popup after 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showPopup) return null;

  return (
    <>
      <div className="cookie-consent-container" style={{ display: "block" }}>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          cookieName="sunbpmCookieConsent"
          containerClasses="cookie-consent-container"
          style={{
            background: "#2B373B",
            color: "#fff",
            textAlign: "center",
            padding: "16px",
            fontSize: "16px",
            display: "block",
          }}
          buttonStyle={{
            color: "#fff",
            backgroundColor: "#f7941d",
            fontSize: "16px",
            borderRadius: "6px",
            padding: "8px 20px",
            margin: "0 10px",
            border: "none",
            cursor: "pointer",
          }}

          declineButtonStyle={{
            color: "#f7941d",
            backgroundColor: "transparent",
            border: "2px solid #f7941d",
            fontSize: "16px",
            borderRadius: "6px",
            padding: "8px 20px",
            margin: "0 10px",
            cursor: "pointer",
          }}
          buttonWrapperClasses="cookie-buttons-wrapper"
          expires={400}
          onAccept={() => {
            localStorage.setItem("sunbpmCookieConsent", "true");
          }}
          onDecline={() => {
            localStorage.removeItem("sunbpmCookieConsent");
          }}
        >
          <div style={{ marginBottom: "10px", textAlign: "center" }}>
            <h2>We value your privacy</h2>
            We use cookies to enhance the user experience. By continuing to
            browse, you agree to our use of cookies.
          </div>
        </CookieConsent>

      </div>
    </>
  );
};

export default CookiePopup;