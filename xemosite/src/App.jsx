import React, { useState } from 'react';
import Header from './Header.jsx';
import SideRays from './SideRays';
import Strands from './Strands'; // React Bits Strands integration

// Assets
import img1 from './assets/WhatsApp Image 2026-07-03 at 5.12.10 PM.jpeg';
import img2 from './assets/WhatsApp Image 2026-07-03 at 5.12.11 PM.jpeg';
import img4 from './assets/WhatsApp Image 2026-07-03 at 5.12.12 PM (3).jpeg'; // Dashboard Screen
import phoneMockup from './assets/vecteezy_smartphone-and-mobile-phone_11047526.png';
import xemoLogo from './assets/XEMO LOG.png';
import playStoreIcon from './assets/playstore-icon.png'; // Official Play Store Icon

// Scroll Reveal Component using IntersectionObserver for popup animations
function ScrollReveal({ children, className = '', style }) {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    const element = ref.current;
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={`${className} ${isVisible ? 'animate-pop-up' : 'reveal-hidden'}`}
    >
      {children}
    </div>
  );
}

function App() {
  const [currentView, setView] = useState('home');

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="hero-section container">
        {/* Dynamic Light Rays Background with Sharp Corner Point */}
        <div className="hero-rays-container">
          <SideRays
            speed={2.5}
            rayColor1="#EAB308"
            rayColor2="#96c8ff"
            intensity={2.8}
            spread={2}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={2.8}
            opacity={1.0}
          />
        </div>

        <div className="hero-content animate-fade-in-up">
          {/* Logo badge */}
          <img src={xemoLogo} alt="XEMO" className="hero-logo" />
          
          <h1 className="hero-title">
            <span>Get XEMO:</span>
            <span className="gradient-text">Speak better</span>
          </h1>
          
          <p className="hero-subtitle">
            A high stakes debate engine designed to debate with you, rate you, and help you get better at communicating ideas. Made for people with bold ideas, so they can never get overlooked due to lack of communication.
          </p>
          
          <div className="cta-group">
            <a 
              href="#download" 
              className="btn btn-android" 
              onClick={() => alert('Redirecting to Google Play Store... (Demo)')}
            >
              <img src={playStoreIcon} alt="Google Play Store" style={{ width: '20px', height: '20px', marginRight: '10px', verticalAlign: 'middle' }} />
              <span>Download for Android</span>
            </a>
          </div>
        </div>

        {/* 3-Device Mockups Screenshot Fan Stack Showcase */}
        <ScrollReveal className="showcase-wrapper">
          <div className="mockup-container">
            {/* Left phone mockup tilted behind */}
            <div className="phone-mockup-wrapper mockup-left-stacked">
              <img src={phoneMockup} alt="Phone Outline" className="phone-outline" />
              <div className="screenshot-container">
                <img src={img1} alt="XEMO Dashboard Preview Left" className="screenshot-img" />
              </div>
            </div>

            {/* Center phone mockup */}
            <div className="phone-mockup-wrapper mockup-center-stacked">
              <img src={phoneMockup} alt="Phone Outline" className="phone-outline" />
              <div className="screenshot-container">
                <img 
                  src={img4} 
                  alt="XEMO App Dashboard speaking and ratings" 
                  className="screenshot-img" 
                />
              </div>
            </div>

            {/* Right phone mockup tilted behind */}
            <div className="phone-mockup-wrapper mockup-right-stacked">
              <img src={phoneMockup} alt="Phone Outline" className="phone-outline" />
              <div className="screenshot-container">
                <img src={img2} alt="XEMO Dashboard Preview Right" className="screenshot-img" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Minimalist Workflow (Avoiding verbosity) */}
      <section className="features-section container" id="features">
        <div className="section-title-area">
          <span className="section-subtitle">How it works</span>
          <h2 className="section-main-title">Crafted for perfect articulation</h2>
        </div>
        
        <div className="workflow-container">
          <ScrollReveal className="workflow-step">
            <div className="workflow-icon">
              {/* Select a Topic Icon */}
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </div>
            <h3>Select a Topic</h3>
          </ScrollReveal>

          <div className="workflow-arrow">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          <ScrollReveal className="workflow-step">
            <div className="workflow-icon">
              {/* Speak Icon */}
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </div>
            <h3>Speak</h3>
          </ScrollReveal>

          <div className="workflow-arrow">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          <ScrollReveal className="workflow-step">
            <div className="workflow-icon">
              {/* Get Rated Icon */}
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Get Rated</h3>
          </ScrollReveal>

          <div className="workflow-arrow">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          <ScrollReveal className="workflow-step">
            <div className="workflow-icon">
              {/* Compete Icon */}
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                <path d="M12 2a5 5 0 0 0-5 5v3c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4V7a5 5 0 0 0-5-5z" />
              </svg>
            </div>
            <h3>Compete on Leaderboard</h3>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial Quote */}
      <ScrollReveal style={{ padding: '5rem 0', textAlign: 'center' }}>
         <p style={{ fontStyle: 'italic', fontSize: 'clamp(1.8rem, 5vw, 2.3rem)', color: '#fff', maxWidth: '800px', margin: '0 auto', lineHeight: '1.5', fontFamily: 'var(--font-heading)' }}>
          "XEMO completely changed my perspective on public speaking. Within two weeks, I was delivering keynotes with zero hesitation." </p>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          — Sarah Chen, Lead Product Designer
        </p>
      </ScrollReveal>

      {/* CTA Banner with React Bits Strands (Full screen width, no container class to restrict it) */}
      <section className="cta-banner-section" id="download">
        <ScrollReveal className="container" style={{ textAlign: 'center' }}>
          <h2 className="cta-heading">
            For people with bold ideas
          </h2>
        </ScrollReveal>
        
        {/* Strands component spans the absolute full screen width, visible to the user, not inside any container */}
        <div className="strands-breakout">
          <Strands
            colors={["#F97316","#7C3AED","#06B6D4"]}
            count={3}
            speed={0.5}
            amplitude={1.1}
            waviness={1.0}
            thickness={1.1}
            glow={2.8}
            taper={3.0}
            spread={1.0}
            intensity={0.5}
            saturation={1.5}
            opacity={1.0}
            scale={1.3}
            glass={false}
            refraction={1}
            dispersion={1}
            glassSize={1}
          />
        </div>

        <div className="container" style={{ textAlign: 'center' }}>
          <div className="cta-group">
            <a 
              href="#download" 
              className="btn btn-android" 
              onClick={() => alert('Redirecting to Google Play Store... (Demo)')}
            >
              <img src={playStoreIcon} alt="Google Play Store" style={{ width: '20px', height: '20px', marginRight: '10px', verticalAlign: 'middle' }} />
              <span>Get Started for Free</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );

  const renderPrivacy = () => (
    <div className="page-container container animate-fade-in">
      <div className="page-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: July 2026</p>
      </div>
      <div className="page-body">
        <p>At XEMO, we take your privacy seriously. This policy describes how we collect, use, and protect your personal speech data when using the XEMO application.</p>
        
        <h2>1. Speech Data Processing</h2>
        <p>To provide real-time speech analytics and voice training, the XEMO app accesses your microphone. Speech audio is processed locally on your device where possible. In cases where AI analysis is executed in the cloud, all voice transmission is fully encrypted and never stored permanently without your explicit consent.</p>

        <h2>2. Data Collection and Usage</h2>
        <p>We collect basic account information (such as name and email address) and performance statistics (such as pronunciation scores and confidence history) to provide user profiles and track user progression. We do not sell or lease your personal information to third parties.</p>

        <h2>3. Data Deletion Rights</h2>
        <p>You have full ownership of your data. You may request the deletion of your account and all associated metrics at any time directly through the app settings page or by emailing our support team.</p>
      </div>
    </div>
  );

  const renderTerms = () => (
    <div className="page-container container animate-fade-in">
      <div className="page-header">
        <h1>Terms of Use</h1>
        <p>Last updated: July 2026</p>
      </div>
      <div className="page-body">
        <p>Welcome to XEMO. By installing or using our application, you agree to comply with and be bound by the following terms and conditions of use.</p>

        <h2>1. License Grant</h2>
        <p>XEMO grants you a personal, non-transferable, non-exclusive license to use the app on mobile devices owned or controlled by you in accordance with these Terms.</p>

        <h2>2. User Content</h2>
        <p>You retain all ownership rights to any speech inputs, audio files, or textual translations you input. However, by submitting content, you grant XEMO a non-exclusive license to process your inputs strictly to generate the speech analyses and results requested by you.</p>

        <h2>3. Acceptable Use</h2>
        <p>You agree not to modify, reverse-engineer, decompile, or otherwise attempt to extract the source code or proprietary AI models used in Xemo. Any misuse or exploitation of our servers is strictly prohibited and will result in instant account termination.</p>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header currentView={currentView} setView={setView} />
      
      <main style={{ flexGrow: 1 }}>
        {currentView === 'home' && renderHome()}
        {currentView === 'privacy' && renderPrivacy()}
        {currentView === 'terms' && renderTerms()}
      </main>

      {/* Left-aligned footer with direct email redirection and shifted logo */}
      <footer className="footer-section">
        <div className="container footer-top" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <div className="footer-info">
            <a className="logo-link logo-footer-shift" style={{ justifyContent: 'flex-start', marginBottom: '1.2rem' }} onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src={xemoLogo} alt="XEMO Logo" className="logo-img" style={{ height: '54px' }} />
            </a>
            <p style={{ marginLeft: '0', marginRight: '0' }}>Elevating personal articulation and speaking confidence through cutting-edge, real-time vocal analysis.</p>
          </div>
        </div>
        <div className="container footer-bottom" style={{ alignItems: 'flex-start', textAlign: 'left', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <a onClick={() => { setView('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>Privacy Policy</a>
            <a onClick={() => { setView('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>Terms of Service</a>
            {/* Direct Email Redirection in place of contact view */}
            <a href="mailto:vanshjain847@gmail.com" style={{ cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a>
          </div>
          <p style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
            <span>&copy; {new Date().getFullYear()} XEMO</span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Made by <a href="https://x.com/vanshjainx" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>Vansh Jain</a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;