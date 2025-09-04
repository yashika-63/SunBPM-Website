import { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/Contact us/contactus';
import Sunbpmhome from './Pages/Home/Sunbpmhome';
import ServicesPage from './Pages/services/ServicesPage';
import CSR from './Pages/Products/CSR/CSR';
import AboutUs from './Pages/About/AboutUs';
import SuccessStoriesPage from './Pages/success_stories/SuccessStoriesPage';
import EHS from './Pages/Products/EHS/EHS';
import ESG from './Pages/Products/ESG/ESG';
import BRSR from './Pages/Products/BRSR/BRSR';
import Footer from './Pages/components/Footer';
import Navbar from './Pages/components/Navbar';
import ScrollToTop from './Pages/components/ScrollToTop';
import PrivacyPolicy from './Pages/components/PrivacyPolicy';
import TermsConditions from './Pages/components/TermsConditions';
import StoryDetailPage from './Pages/success_stories/StoryDetailPage';
import BookADemo from './Pages/BookADemo/BookADemo';

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();

  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Sunbpmhome/>}/>
          <Route path='/Contact' element={<ContactUs/>}/>
          <Route path='/Services' element={<ServicesPage/>}/>
          <Route path='/Products/CSR' element={<CSR/>}/>
          <Route path='/Products/EHS' element={<EHS/>}/>
          <Route path='/Products/ESG' element={<ESG/>}/>
          <Route path='/Products/BRSR' element={<BRSR/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/SuccessStories' element={<SuccessStoriesPage/>}/>
          <Route path="/SuccessStories/:id" element={<StoryDetailPage/>} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
          <Route path='/TermsConditions' element={<TermsConditions/>}/>
          <Route path='/BookDemo' element={<BookADemo/>}/>
        </Routes>
      </main>

      {/* Hide footer only on BookDemo page */}
      {location.pathname !== "/BookDemo" && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
