import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>🎉 Festive India 🎊</h3>
        <p>Celebrating culture, unity, and the vibrant traditions of India.</p>
        <div className="footer-separator">✦ ✦ ✦</div>
      </div>

      <div className="footer-info">
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#festivals">Festivals</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#calendar">Calendar</a></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">X (Twitter)</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: support@festiveindia.in</p>
    
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Festive India. Made with ❤️ for every celebration.</p>
      </div>
    </footer>
  );
}

export default Footer;
