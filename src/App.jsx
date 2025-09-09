import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Sunbpmhome from "./Pages/Home/Sunbpmhome";
import ServicesPage from "./Pages/services/ServicesPage";
import CSR from "./Pages/Products/CSR/CSR";
import AboutUs from "./Pages/About/AboutUs";
import SuccessStoriesPage from "./Pages/success_stories/SuccessStoriesPage";
import EHS from "./Pages/Products/EHS/EHS";
import ESG from "./Pages/Products/ESG/ESG";
import BRSR from "./Pages/Products/BRSR/BRSR";
import Footer from "./Pages/components/Footer";
import Navbar from "./Pages/components/Navbar";
import ScrollToTop from "./Pages/components/ScrollToTop";
import PrivacyPolicy from "./Pages/components/PrivacyPolicy";
import TermsConditions from "./Pages/components/TermsConditions";
import StoryDetailPage from "./Pages/success_stories/StoryDetailPage";
import BookADemo from "./Pages/BookADemo/BookADemo";
import ContactUs from "./Pages/Contact us/ContactPage.jsx";
import AdminPage from "./Pages/Admin/AdminPage.jsx";

// 404 page WITHOUT navbar & footer
function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404 - Page Not Found</h1> 
      <p>The page you are looking for doesn’t exist.</p>
    </div>
  );
}


function AppContent() {
  const location = useLocation();

  // routes where we don’t want navbar/footer
  const noFooter = ["/bookdemo", "/loginadminpagebookdemo"];
  const hideFooter = noFooter.includes(location.pathname.toLowerCase());

  const noNavbar = [""];
  const hideNavbar = noNavbar.includes(location.pathname.toLowerCase());

  // detect if current path is invalid
  const validRoutes = [
    "/",
    "/contact",
    "/services",
    "/products/csr",
    "/products/ehs",
    "/products/esg",
    "/products/brsr",
    "/aboutus",
    "/successstories",
    "/privacypolicy",
    "/termsconditions",
    "/bookdemo",
    "/loginadminpagebookdemo",
  ];
  const isValidRoute =
    validRoutes.includes(location.pathname.toLowerCase()) ||
    location.pathname.startsWith("/successstories/");

  return (
    <div>
      <ScrollToTop />

      {/* show navbar only if valid route and not in no-layout */}
      {isValidRoute && !hideNavbar && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Sunbpmhome />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Products/CSR" element={<CSR />} />
          <Route path="/Products/EHS" element={<EHS />} />
          <Route path="/Products/ESG" element={<ESG />} />
          <Route path="/Products/BRSR" element={<BRSR />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/SuccessStories" element={<SuccessStoriesPage />} />
          <Route path="/SuccessStories/:id" element={<StoryDetailPage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsConditions" element={<TermsConditions />} />
          <Route path="/BookDemo" element={<BookADemo />} />
          <Route path="/LoginAdminPageBookDemo" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* show footer only if valid route and not in no-layout */}
      {isValidRoute && !hideFooter && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}