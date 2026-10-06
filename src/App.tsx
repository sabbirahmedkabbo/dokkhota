import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoModeBanner from './components/DemoModeBanner';
import AIChatDrawer from './components/AIChatDrawer';
import Home from './pages/Home';
import Discover from './pages/Discover';
import CourseExplorer from './pages/CourseExplorer';
import CourseDetail from './pages/CourseDetail';
import MyJourney from './pages/MyJourney';
import JobExplorer from './pages/JobExplorer';
import Assessment from './pages/Assessment';
import Register from './pages/Register';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen relative font-sans">
          <DemoModeBanner />
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/courses" element={<CourseExplorer />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/journey" element={<MyJourney />} />
              <Route path="/jobs" element={<JobExplorer />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          <Footer />
          <AIChatDrawer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
