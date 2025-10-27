import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Show popup after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div style={{ display: "block" }}>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="sunbpmCookieConsent"
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
      >
        <div style={{ marginBottom: "10px" }}>
          <h2>We value your privacy</h2>
          We use cookies to enhance the user experience. By continuing to browse, you agree to our use of cookies.
        </div>
      </CookieConsent>
    </div>
  );
};

export default CookiePopup;