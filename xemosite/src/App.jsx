import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
      <ScrollReveal style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
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
            colors={["#F97316", "#7C3AED", "#06B6D4"]}
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
        <p>Last updated July 05, 2026</p>
      </div>
      <div className="page-body">
        <p>This Privacy Notice for Xemo ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:</p>

        <ul>
          <li>Download and use our mobile application (Xemo), or any other application of ours that links to this Privacy Notice</li>
          <li>Use Xemo. A app developed to help people debate, argue and speak better by making them spar with an AI debater, and evaluate them, rate them and get give them feedback to improve.</li>
          <li>Engage with us in other related ways, including any marketing or events</li>
        </ul>

        <p>Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at vanshjainx@gmail.com.</p>

        <h2>SUMMARY OF KEY POINTS</h2>
        <p>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>

        <ul>
          <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</li>
          <li><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</li>
          <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
          <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</li>
          <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</li>
          <li><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</li>
          <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</li>
          <li><strong>Want to learn more about what we do with any information we collect?</strong> Review the Privacy Notice in full.</li>
        </ul>

        <h2>TABLE OF CONTENTS</h2>
        <ol>
          <li>WHAT INFORMATION DO WE COLLECT?</li>
          <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
          <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
          <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
          <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
          <li>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
          <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
          <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
          <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
          <li>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
          <li>DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</li>
          <li>USER CONTENT AND LIABILITY DISCLAIMER</li>
          <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
          <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
        </ol>

        <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3>Personal information you disclose to us</h3>
        <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
        <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

        <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
        <ul>
          <li>names</li>
          <li>email addresses</li>
          <li>mailing addresses</li>
          <li>billing addresses</li>
        </ul>

        <p><strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
        <ul>
          <li>biometric data</li>
        </ul>

        <p><strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by RevenueCat. You may find their privacy notice link(s) here: http://revenuecat.com/privacy.</p>

        <p><strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?' below.</p>

        <p><strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
        <ul>
          <li><strong>Mobile Device Access.</strong> We may request access or permission to certain features from your mobile device, including your mobile device's reminders, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</li>
          <li><strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
        </ul>
        <p>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
        <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

        <h3>Information automatically collected</h3>
        <p><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
        <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
        <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
        <p>The information we collect includes:</p>
        <ul>
          <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</li>
        </ul>

        <p><strong>Google API</strong><br />Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>

        <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.</p>
        <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
        <ul>
          <li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
          <li><strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
          <li><strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
          <li><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
        </ul>

        <h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
        <p><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</p>

        <p><strong>If you are located in the EU or UK, this section applies to you.</strong><br />The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
        <ul>
          <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
          <li><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
            <ul>
              <li>Analyse how our Services are used so we can improve them to engage and retain users</li>
              <li>Understand how our users use our products and services so we can improve user experience</li>
            </ul>
          </li>
          <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
          <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
        </ul>

        <p><strong>If you are located in Canada, this section applies to you.</strong><br />We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can withdraw your consent at any time.</p>
        <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
        <ul>
          <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
          <li>For investigations and fraud detection and prevention</li>
          <li>For business transactions provided certain conditions are met</li>
          <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
          <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
          <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
          <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
          <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
          <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
          <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
          <li>If the information is publicly available and is specified by the regulations</li>
        </ul>
        <p>We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</p>

        <h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
        <p>We may need to share your personal information in the following situations:</p>
        <ul>
          <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g. Google Maps API, Places API). We use certain Google Maps Platform APIs to retrieve certain information when you make location-specific requests. Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location. GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always perfectly precise. We obtain and store on your device ('cache') your location for an extended period. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document. The Google Maps Platform APIs that we use store and access cookies and other information on your devices. If you are a user currently in the European Economic Area (EU countries, Iceland, Liechtenstein, and Norway) or the United Kingdom, please take a look at our Cookie Notice.</li>
          <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
          <li><strong>Offer Wall.</strong> Our application(s) may display a third-party hosted 'offer wall'. Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.</li>
        </ul>

        <h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
        <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
        <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
        <p>To the extent these online tracking technologies are deemed to be a 'sale'/'sharing' (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section 'DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?'</p>
        <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

        <h2>6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
        <p><strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
        <p>As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, 'AI Products'). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</p>

        <h3>Use of AI Technologies</h3>
        <p>We provide the AI Products through third-party service providers ('AI Service Providers'), including Groq and Deepgram. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in 'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?' You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</p>

        <h3>Our AI Products</h3>
        <p>Our AI Products are designed for the following functions:</p>
        <ul>
          <li>AI applications</li>
        </ul>

        <h3>How We Process Your Data Using AI</h3>
        <p>All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</p>

        <h2>7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p><strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>
        <p>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</p>
        <p>We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>

        <h2>8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p><strong>In Short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
        <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
        <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

        <h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p><strong>In Short:</strong> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
        <p>In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.</p>
        <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>
        <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.</p>
        <p>If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</p>

        <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below.</p>
        <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

        <p><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by or by contacting us using the details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>

        <h3>Account Information</h3>
        <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
        <ul>
          <li>Log in to your account settings and update your user account.</li>
        </ul>
        <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

        <p><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</p>
        <p>If you have questions or comments about your privacy rights, you may email us at vanshjainx@gmail.com.</p>

        <h2>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
        <p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognising or honouring DNT signals, we do not respond to them at this time.</p>

        <h2>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p><strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>

        <h3>Categories of Personal Information We Collect</h3>
        <p>The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section 'WHAT INFORMATION DO WE COLLECT?'</p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Examples</th>
              <th>Collected</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A. Identifiers</td><td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td><td>NO</td></tr>
            <tr><td>B. Personal information as defined in the California Customer Records statute</td><td>Name, contact information, education, employment, employment history, and financial information</td><td>NO</td></tr>
            <tr><td>C. Protected classification characteristics under state or federal law</td><td>Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td><td>NO</td></tr>
            <tr><td>D. Commercial information</td><td>Transaction information, purchase history, financial details, and payment information</td><td>NO</td></tr>
            <tr><td>E. Biometric information</td><td>Fingerprints and voiceprints</td><td>NO</td></tr>
            <tr><td>F. Internet or other similar network activity</td><td>Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements</td><td>NO</td></tr>
            <tr><td>G. Geolocation data</td><td>Device location</td><td>NO</td></tr>
            <tr><td>H. Audio, electronic, sensory, or similar information</td><td>Images and audio, video or call recordings created in connection with our business activities</td><td>YES</td></tr>
            <tr><td>I. Professional or employment-related information</td><td>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td><td>NO</td></tr>
            <tr><td>J. Education Information</td><td>Student records and directory information</td><td>NO</td></tr>
            <tr><td>K. Inferences drawn from collected personal information</td><td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td><td>NO</td></tr>
            <tr><td>L. Sensitive personal Information</td><td></td><td>NO</td></tr>
          </tbody>
        </table>

        <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
        <ul>
          <li>Receiving help through our customer support channels;</li>
          <li>Participation in customer surveys or contests; and</li>
          <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
        </ul>

        <p>We will use and retain the collected personal information as needed to provide the Services or for:</p>
        <ul>
          <li>Category H - As long as the user has an account with us</li>
        </ul>

        <h3>Sources of Personal Information</h3>
        <p>Learn more about the sources of personal information we collect in 'WHAT INFORMATION DO WE COLLECT?'</p>

        <h3>How We Use and Share Personal Information</h3>
        <p>Learn more about how we use your personal information in the section, 'HOW DO WE PROCESS YOUR INFORMATION?'</p>

        <h3>Will your information be shared with anyone else?</h3>
        <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?'</p>
        <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information.</p>
        <p>We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</p>

        <h3>Your Rights</h3>
        <p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
        <ul>
          <li>Right to know whether or not we are processing your personal data</li>
          <li>Right to access your personal data</li>
          <li>Right to correct inaccuracies in your personal data</li>
          <li>Right to request the deletion of your personal data</li>
          <li>Right to obtain a copy of the personal data you previously shared with us</li>
          <li>Right to non-discrimination for exercising your rights</li>
          <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ('profiling')</li>
        </ul>

        <p>Depending upon the state where you live, you may also have the following rights:</p>
        <ul>
          <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
          <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
          <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
          <li>Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)</li>
          <li>Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)</li>
          <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
          <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
        </ul>

        <h3>How to Exercise Your Rights</h3>
        <p>To exercise these rights, you can contact us by submitting a data subject access request, by emailing us at vanshjainx@gmail.com, or by referring to the contact details at the bottom of this document.</p>
        <p>Under certain US state data protection laws, you can designate an authorised agent to make a request on your behalf. We may deny a request from an authorised agent that does not submit proof that they have been validly authorised to act on your behalf in accordance with applicable laws.</p>

        <h3>Request Verification</h3>
        <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>
        <p>If you submit the request through an authorised agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>

        <h3>Appeals</h3>
        <p>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at vanshjainx@gmail.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>

        <h3>California 'Shine The Light' Law</h3>
        <p>California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'</p>

        <h2>12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p><strong>In Short:</strong> You may have additional rights based on the country you reside in.</p>

        <h3>Australia and New Zealand</h3>
        <p>We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).</p>
        <p>This Privacy Notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.</p>
        <p>If you do not wish to provide the personal information necessary to fulfil their applicable purpose, it may affect our ability to provide our services, in particular:</p>
        <ul>
          <li>offer you the products or services that you want</li>
          <li>respond to or help with your requests</li>
          <li>manage your account with us</li>
          <li>confirm your identity and protect your account</li>
        </ul>
        <p>At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section 'HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?'</p>
        <p>If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commissioner and a breach of New Zealand's Privacy Principles to the Office of New Zealand Privacy Commissioner.</p>

        <h2>13. USER CONTENT AND LIABILITY DISCLAIMER</h2>
        <p>Users are solely and exclusively responsible for all content, statements, and actions performed through their account on this platform. By using this service, you acknowledge that the Company acts only as an intermediary. You agree to indemnify and hold the Company harmless from any and all claims, damages, or legal liabilities arising from content you generate, speak, or share. You explicitly agree not to use the platform to produce defamatory, unlawful, or infringing content. Any illegal activity or violation of these terms will result in immediate account termination and, where required by law, referral to relevant authorities.</p>

        <h2>14. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
        <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

        <h2>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>If you have questions or comments about this notice, you may email us at vanshjainx@gmail.com or contact us by post at:</p>
        <p>Xemo<br />[Company Address]</p>

        <h2>16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
      </div>
    </div>
  );

  const renderTerms = () => (
    <div className="page-container container animate-fade-in">
      <div className="page-header">
        <h1>Terms of Use</h1>
        <p>Last updated: July 05, 2026</p>
      </div>
      <div className="page-body">
        <p>Welcome to XEMO ("the App," "we," "us," or "our"). By downloading, installing, accessing, or using the XEMO application, you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you must not use the App.</p>

        <p><strong>PLEASE READ THESE TERMS CAREFULLY. THEY CONTAIN IMPORTANT LEGAL OBLIGATIONS AND LIMITATIONS ON YOUR RIGHTS.</strong></p>

        <h2>1. ACCEPTANCE OF TERMS</h2>
        <p>By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and all applicable laws and regulations. If you do not agree to these Terms, you must immediately cease using the App and uninstall it from your device.</p>
        <p>We reserve the right to modify these Terms at any time, with or without notice. Your continued use of the App after any modifications constitutes your acceptance of the revised Terms.</p>

        <h2>2. LICENSE GRANT AND RESTRICTIONS</h2>
        <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes only. This license does not include any right to:</p>
        <ul>
          <li>Copy, modify, adapt, reverse-engineer, decompile, disassemble, or create derivative works of the App</li>
          <li>Remove any proprietary notices, labels, or marks from the App</li>
          <li>Use the App for any commercial purpose or on behalf of any third party</li>
          <li>Attempt to extract the source code, algorithms, or underlying technology of the App</li>
          <li>Use the App in any manner that could damage, disable, overburden, or impair our servers or systems</li>
          <li>Access the App through automated means (bots, scrapers, etc.) without express written permission</li>
        </ul>

        <h2>3. USER CONTENT AND LIABILITY</h2>
        <p><strong>YOU ARE SOLELY AND EXCLUSIVELY RESPONSIBLE FOR ALL CONTENT, STATEMENTS, AND ACTIONS PERFORMED THROUGH YOUR ACCOUNT ON THIS PLATFORM.</strong></p>
        <p>By using the App, you acknowledge and agree that:</p>
        <ul>
          <li>You retain ownership of any content you input into the App, including speech, text, and audio recordings</li>
          <li>However, you grant us a worldwide, royalty-free, non-exclusive license to process, analyze, store, and use your inputs solely to provide the services you request</li>
          <li>You are solely responsible for the legality, accuracy, and appropriateness of all content you submit</li>
          <li>You agree not to submit content that is defamatory, illegal, harmful, threatening, abusive, harassing, or violates any third-party rights</li>
          <li>You indemnify and hold harmless XEMO, its developers, officers, directors, employees, and affiliates from any and all claims, damages, liabilities, costs, and expenses (including legal fees) arising from your use of the App or any content you submit</li>
          <li>We have no obligation to monitor user content but reserve the right to remove any content at our sole discretion</li>
        </ul>

        <h2>4. DISCLAIMER OF WARRANTIES</h2>
        <p><strong>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong></p>
        <p>To the maximum extent permitted by law, we expressly disclaim all warranties, including but not limited to:</p>
        <ul>
          <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
          <li>Warranties regarding the accuracy, reliability, or completeness of any AI-generated content, feedback, or analysis</li>
          <li>Warranties that the App will be error-free, secure, or uninterrupted</li>
          <li>Warranties regarding the results obtained from using the App</li>
          <li>Warranties that any defects or errors will be corrected</li>
        </ul>
        <p>AI-generated feedback, ratings, and analysis are provided for informational and educational purposes only and should not be considered professional advice. You rely on such content at your own risk.</p>

        <h2>5. LIMITATION OF LIABILITY</h2>
        <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, XEMO AND ITS DEVELOPERS, OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM:</strong></p>
        <ul>
          <li>Your use or inability to use the App</li>
          <li>Any errors, mistakes, or inaccuracies in the App or AI-generated content</li>
          <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
          <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the App</li>
          <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the App</li>
          <li>Any content or conduct of any third party</li>
        </ul>
        <p><strong>IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS, DAMAGES, AND CAUSES OF ACTION EXCEED THE AMOUNT YOU PAID, IF ANY, TO ACCESS THE APP IN THE PAST TWELVE (12) MONTHS.</strong></p>
        <p>Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability, so the above exclusions may not apply to you.</p>

        <h2>6. INDEMNIFICATION</h2>
        <p>You agree to indemnify, defend, and hold harmless XEMO, its developer (Vansh Jain), officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:</p>
        <ul>
          <li>Your use of and access to the App</li>
          <li>Your violation of any term of these Terms</li>
          <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
          <li>Any claim that your use of the App caused damage to a third party</li>
          <li>Any content you submit or make available through the App</li>
        </ul>
        <p>We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will assist us in cooperating with any available defense and asserting any available defenses.</p>

        <h2>7. INTELLECTUAL PROPERTY</h2>
        <p>The App, including but not limited to its design, code, algorithms, AI models, text, graphics, logos, and overall appearance, is owned by XEMO and its developer and is protected by copyright, trademark, and other intellectual property laws. You may not use any of our intellectual property without our prior written consent.</p>
        <p>All trademarks, service marks, and trade names displayed in the App are the property of their respective owners.</p>

        <h2>8. THIRD-PARTY SERVICES</h2>
        <p>The App may integrate with or utilize third-party services, including but not limited to AI service providers (Groq, Deepgram), payment processors (RevenueCat), and social media platforms. Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the actions, policies, or practices of these third parties.</p>
        <p>We make no representations or warranties regarding any third-party services and shall not be liable for any damages arising from your use of or inability to use such services.</p>

        <h2>9. TERMINATION</h2>
        <p>We reserve the right, at our sole discretion, to suspend or terminate your access to the App at any time, with or without cause, with or without notice. Upon termination, your right to use the App will immediately cease.</p>
        <p>We may also terminate or suspend your account if we reasonably believe you have violated these Terms or engaged in fraudulent or illegal activity.</p>
        <p>Upon termination, all licenses granted to you under these Terms will immediately terminate, and you must cease all use of the App and delete it from your devices.</p>

        <h2>10. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms or the App shall be resolved exclusively in the courts located in Delhi, India.</p>
        <p>You agree to waive any right to a jury trial and to resolve any disputes through binding arbitration, unless prohibited by applicable law.</p>

        <h2>11. USER CONDUCT</h2>
        <p>You agree not to use the App to:</p>
        <ul>
          <li>Violate any applicable local, state, national, or international law</li>
          <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
          <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability</li>
          <li>Submit false or misleading information</li>
          <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
          <li>Interfere with or disrupt the App or servers connected to the App</li>
          <li>Introduce any viruses, trojan horses, worms, logic bombs, or other harmful material into the App</li>
          <li>Attempt to gain unauthorized access to any portion of the App, other accounts, computer systems, or networks connected to the App</li>
          <li>Use the App for any purpose that is unlawful or prohibited by these Terms</li>
        </ul>

        <h2>12. NO PROFESSIONAL ADVICE</h2>
        <p>The content provided through the App, including AI-generated feedback, analysis, and ratings, is for informational and educational purposes only and does not constitute professional advice of any kind. You should not rely on this content as a substitute for professional advice from qualified professionals in relevant fields.</p>
        <p>We are not responsible for any decisions you make based on the content provided through the App.</p>

        <h2>13. AGE RESTRICTIONS</h2>
        <p>The App is intended for users who are at least 13 years of age. By using the App, you represent and warrant that you are at least 13 years old. If you are under 18, you represent that you have obtained parental consent to use the App.</p>
        <p>We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>

        <h2>14. MODIFICATIONS TO THE APP</h2>
        <p>We reserve the right to modify, suspend, or discontinue the App at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the App.</p>
        <p>We may also impose limits on certain features or restrict your access to parts or all of the App without notice or liability.</p>

        <h2>15. ELECTRONIC COMMUNICATIONS</h2>
        <p>By using the App, you consent to receive electronic communications from us, including emails, notifications, and other messages. You agree that any notices, disclosures, agreements, or other communications we send to you electronically satisfy any legal requirement that such communications be in writing.</p>

        <h2>16. ENTIRE AGREEMENT</h2>
        <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and XEMO regarding the App and supersede all other prior or contemporaneous agreements, representations, warranties, and understandings.</p>
        <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will remain in full force and effect.</p>
        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>

        <h2>17. CONTACT INFORMATION</h2>
        <p>If you have any questions about these Terms, please contact us at vanshjainx@gmail.com.</p>

        <p><strong>BY USING THE XEMO APPLICATION, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND BY THESE TERMS OF USE.</strong></p>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={renderHome()} />
          <Route path="/privacy-policy" element={renderPrivacy()} />
          <Route path="/terms-of-service" element={renderTerms()} />
        </Routes>
      </main>

      {/* Left-aligned footer with direct email redirection and shifted logo */}
      <footer className="footer-section">
        <div className="container footer-top" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <div className="footer-info">
            <Link to="/" className="logo-link logo-footer-shift" style={{ justifyContent: 'flex-start', marginBottom: '1.2rem' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={xemoLogo} alt="XEMO Logo" className="logo-img" style={{ height: '54px' }} />
            </Link>
            <p style={{ marginLeft: '0', marginRight: '0' }}>Elevating personal articulation and speaking confidence through cutting-edge, real-time vocal analysis.</p>
          </div>
        </div>
        <div className="container footer-bottom" style={{ alignItems: 'flex-start', textAlign: 'left', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>Terms of Service</Link>
            <a href="mailto:vanshjain847@gmail.com" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a>
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