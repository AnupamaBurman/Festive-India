import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  Home,
  CalendarDays,
  Flame,
  Bookmark,
  Clock,
  Filter,
  Mail,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuIconRef = useRef(null); // ✅ Ref for the menu icon

  const toggleMenu = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="navbar">
        <Link to="/" className="icon-wrapper">
          <Home className="icon" />
        </Link>

        <h1 className="navbar-title">FESTIVE INDIA</h1>

        {/* Assign the ref here ✅ */}
        <div className="icon-wrapper" onClick={toggleMenu} ref={menuIconRef}>
          <Menu className="icon" />
        </div>
      </div>

      {isOpen && (
        <div className="menu-dropdown-right" ref={dropdownRef}>
          <ul className="menu-items-right">
            <li>
              <Link to="/calendar" className="menu-link">
                <CalendarDays className="menu-icon" /> Calendar View
              </Link>
            </li>
            <li>
              <Link to="/trending" className="menu-link">
                <Flame className="menu-icon" /> Trending
              </Link>
            </li>
            <li>
              <Link to="/saved" className="menu-link">
                <Bookmark className="menu-icon" /> Saved Festivals
              </Link>
            </li>
            <li>
              <Link to="/my-calendar" className="menu-link">
                <Clock className="menu-icon" /> My Calendar
              </Link>
            </li>
            <li>
              <Link to="/filter" className="menu-link">
                <Filter className="menu-icon" /> Filter
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="menu-link">
                <Mail className="menu-icon" /> Contact Us
              </Link>
            </li>
            <li>
              <Link to="/About-us" className="menu-link">
                <Info className="menu-icon" /> About Us
              </Link>
            </li>
          </ul>
          <div className="menu-buttons">
            <Link to="/signup">
              <button className="round-btn">Sign Up</button>
            </Link>
            <Link to="/signin">
              <button className="round-btn">Sign In</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
