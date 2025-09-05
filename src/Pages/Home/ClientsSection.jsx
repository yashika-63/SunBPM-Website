// ClientsSection.jsx
import React, { useRef, useEffect } from "react";
import "../../CSS/Home/ClientsSection.css";

const ClientsSection = () => {
  const clientsRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (clientsRef.current) {
        clientsRef.current.scrollLeft += 1;
        if (
          clientsRef.current.scrollLeft >=
          clientsRef.current.scrollWidth / 2
        ) {
          clientsRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const logos = [
    { src: "/images/Home/ClientLogos/13.png", alt: "Alric", className: "ss-clientLogo1" },
    { src: "/images/Home/ClientLogos/spectrum logo.png", alt: "Spectrum", className: "ss-clientLogo2" },
    { src: "/images/Home/ClientLogos/Time Medical.png", alt: "Time Medical", className: "ss-clientLogo" },
    { src: "/images/Home/ClientLogos/Aquapharm.png", alt: "Aqua Pharm", className: "ss-clientLogo6" },
    { src: "/images/Home/ClientLogos/Prince Pipe logo.png", alt: "Prince Pipes", className: "ss-clientLogo" },
    { src: "/images/Home/ClientLogos/6.png", alt: "Saraswat Bank", className: "ss-clientLogo4" },
    { src: "/images/Home/ClientLogos/8.png", alt: "Zydus", className: "ss-clientLogo5" },
    { src: "/images/Home/ClientLogos/9.png", alt: "Praj", className: "ss-clientLogo7" },
    { src: "/images/Home/ClientLogos/10.png", alt: "Prodata", className: "ss-clientLogo" },
    { src: "/images/Home/ClientLogos/11.png", alt: "Gunnebo", className: "ss-clientLogo" },
    { src: "/images/Home/ClientLogos/12.png", alt: "Hettich", className: "ss-clientLogo7" },
    { src: "/images/Home/ClientLogos/Crisil.png", alt: "Crisil", className: "ss-clientLogo" },
    { src: "/images/Home/ClientLogos/HDFC.png", alt: "HDFC", className: "ss-clientLogo" },
    { src: "/images/Home/ClientLogos/Star plus.png", alt: "Star Plus", className: "ss-clientLogo3" },
    { src: "/images/Home/ClientLogos/Unichem.png", alt: "Unichem", className: "ss-clientLogo" },
    { src: "/images/Home/ClientLogos/Alkyl.png", alt: "Alkyl", className: "ss-clientLogo" },
    { src: "/images/Home/ClientLogos/Waaree.png", alt: "Waaree", className: "ss-clientLogo" },
    { src: "/images/Home/ClientLogos/Vinati.png", alt: "Vinati", className: "ss-clientLogo" },
  ];

  return (
    <section className="ss-clientsSection">
      <h2 className="ss-clientsTitle">Our Clients</h2>
      <p className="ss-clientsDescription">Our diverse range of clients.</p>

      <div className="ss-clientsLogosContainer" ref={clientsRef}>
        <div className="ss-clientLogos">
          {Array(5)
            .fill(logos)
            .flat()
            .map((logo, index) => (
              <img
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                className={logo.className}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;