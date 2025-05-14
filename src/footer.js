import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>🎉 Festive India 🎊</h3>
            <p>Celebrating culture, unity, and the vibrant traditions of India.</p>
          </div>
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to receive updates about upcoming festivals and events</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-separator">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="footer-info">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#festivals">Festivals</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#calendar">Festival Calendar</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Explore Festivals</h4>
            <ul>
              <li><a href="#diwali">Diwali</a></li>
              <li><a href="#holi">Holi</a></li>
              <li><a href="#durga-puja">Durga Puja</a></li>
              <li><a href="#navratri">Navratri</a></li>
              <li><a href="#all-festivals">View All</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Connect With Us</h4>
            <ul className="social-links">
              <li><a href="#"><i className="social-icon instagram"></i>Instagram</a></li>
              <li><a href="#"><i className="social-icon facebook"></i>Facebook</a></li>
              <li><a href="#"><i className="social-icon twitter"></i>X (Twitter)</a></li>
              <li><a href="#"><i className="social-icon youtube"></i>YouTube</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Us</h4>
            <address>
              <p><i className="contact-icon email"></i>Email: support@festiveindia.in</p>
              <p><i className="contact-icon phone"></i>Phone: +91 98765 43210</p>
              <p><i className="contact-icon location"></i>Address: Cultural Center, New Delhi</p>
            </address>
            <div className="footer-app-links">
              <p>Get our app:</p>
              <div className="app-buttons">
                <a href="#" className="app-button">Google Play</a>
                <a href="#" className="app-button">App Store</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span className="footer-dot">•</span>
            <a href="#">Terms of Service</a>
            <span className="footer-dot">•</span>
            <a href="#">Cookie Policy</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Festive India. Made with <span className="heart">❤️</span> in India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;