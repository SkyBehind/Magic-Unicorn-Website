import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import UC1 from './pages/UC1';
import Services from './pages/Services';

// Track page views with Google Analytics
function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_path: location.pathname,
      });
    }
  }, [location]);
}

// Main App component
function App() {
  usePageViews();

  return (
    <ErrorBoundary>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/uc1" element={<UC1 />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
