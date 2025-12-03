import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Sunbpmhome from "./Pages/Home/Sunbpmhome";
import ServicesPage from "./Pages/services/ServicesPage";
import CSR from "./Pages/Products/CSR/CSR";
// import AboutUs from "./Pages/About/AboutUs";
import SuccessStoriesPage from "./Pages/success_stories/SuccessStoriesPage";
import EHS from "./Pages/Products/EHS/EHS";
import ESG from "./Pages/Products/ESG/ESG";
import Footer from "./Pages/components/Footer";
import Navbar from "./Pages/components/Navbar";
import ScrollToTop from "./Pages/components/ScrollToTop";
import PrivacyPolicy from "./Pages/components/PrivacyPolicy";
import TermsConditions from "./Pages/components/TermsConditions";
import StoryDetailPage from "./Pages/success_stories/StoryDetailPage";
import BookADemo from "./Pages/BookADemo/BookADemo";
import ContactUs from "./Pages/Contact us/ContactPage.jsx";
import AdminPage from "./Pages/Admin/AdminPage.jsx";
import QMS from "./Pages/Products/QMS/QMS.jsx";
import CapexOpex from "./Pages/Products/CapexOpex/CapexOpex.jsx";
import PRPO from "./Pages/Products/PRPO/PRPO.jsx";
import CookiePopup from "./Pages/components/CookiePopup.jsx";
import PopupNotification from "./Pages/components/PopupNotification.jsx";
import ClientsPage from "./Pages/Client/ClientsPage.jsx";
import CSRModuleDetail from "./Pages/Products/CSR/CSRModuleDetail.jsx";
import EHSModuleDetail from "./Pages/Products/EHS/EHSModuleDetail.jsx";
import ESGModuleDetail from "./Pages/Products/ESG/ESGModuleDetail.jsx";
import PRPOModuleDetail from "./Pages/Products/PRPO/PRPOModuleDetail.jsx";
import QMSModuleDetail from "./Pages/Products/QMS/QMSModuleDetail.jsx";
import CapexOpexModuleDetail from "./Pages/Products/CapexOpex/CapexOpexModuleDetail.jsx";
import ERPService from "./Pages/services/ERPService/ERPService.jsx";
import MobileappService from "./Pages/services/MobileappService/MobileappService.jsx";
import DAService from "./Pages/services/DAservice/DAservice.jsx";
import BPAService from "./Pages/services/BPAservice/BPAservice.jsx";
import SREService from "./Pages/services/SREservice/SREservice.jsx";
import LocationPage from "./Pages/Contact us/Location.jsx";



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
  const currentPath = location.pathname.toLowerCase();

  // routes where we don’t want navbar/footer
  const noFooter = ["/bookdemo", "/loginadminpagebookdemo"];
  const hideFooter = noFooter.includes(currentPath);

  const noNavbar = [];
  const hideNavbar = noNavbar.includes(currentPath);

  // define all valid routes in lowercase
  const validRoutes = [
    "/",
    "/contact",
    "/services",
    "/products/csr",
    "/products/ehs",
    "/products/esg",
    "/products/pms",
    "/products/prpo",
    "/products/procurementdecisiontool",
    "/successstories",
    "/privacypolicy",
    "/termsconditions",
    "/bookdemo",
    "/loginadminpagebookdemo",
    "/client",
    "/services/erp",
    "/services/mobileapp",
    "/services/dataanalytics",
    "/services/bpa",
    "/services/sitereliability",
    "/locations"
  ];

  // check if path is valid OR starts with /successstories/
  const isValidRoute =
    validRoutes.includes(currentPath) ||
    currentPath.startsWith("/successstories/")||
  currentPath.includes("modules/");
    

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
          <Route path="CSRmodules/:id" element={<CSRModuleDetail />} />
          <Route path="/Products/EHS" element={<EHS />} />
          <Route path="EHSmodules/:id" element={<EHSModuleDetail/>} />
          <Route path="/Products/ESG" element={<ESG />} />
          <Route path="ESGmodules/:id" element={<ESGModuleDetail/>} />
          <Route path="/Products/PRPO" element={<PRPO />} />
          <Route path="PRPOmodules/:id" element={<PRPOModuleDetail/>} />
          <Route path="/Products/PMS" element={<QMS />} />
          <Route path="PMSmodules/:id" element={<QMSModuleDetail/>} />
          <Route path="/Products/ProcurementDecisionTool" element={<CapexOpex />} />
          <Route path="CapexOpexmodules/:id" element={<CapexOpexModuleDetail/>} />
          {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
          <Route path="/SuccessStories" element={<SuccessStoriesPage />} />
          <Route path="/SuccessStories/:id" element={<StoryDetailPage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsConditions" element={<TermsConditions />} />
          <Route path="/BookDemo" element={<BookADemo />} />
          <Route path="/LoginAdminPageBookDemo" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Client" element={<ClientsPage />} />
          <Route path="/Services/ERP" element={<ERPService />} />
          <Route path="/Services/MobileApp" element={<MobileappService/>} />
          <Route path="/Services/DataAnalytics" element={<DAService/>} />
          <Route path="/Services/BPA" element={<BPAService/>} />
          <Route path="/Services/SiteReliability" element={<SREService/>} />
          <Route path="/Locations" element={<LocationPage/>} />
        </Routes>
      </main>

      {/* show footer only if valid route and not in no-layout */}
      {isValidRoute && !hideFooter && <Footer />}

      {/* Popup Notification every 5 mins */}
      <PopupNotification />

      {/* Cookie Consent Banner */}
      <CookiePopup />

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