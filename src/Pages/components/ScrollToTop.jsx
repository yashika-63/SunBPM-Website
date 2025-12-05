import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to the top even if clicking same route again
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // or "smooth" if you want
    });
  });

  return null;
};

export default ScrollToTop;