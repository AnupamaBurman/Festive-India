import React, { useState } from 'react';
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
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="navbar">
        <div className="icon-wrapper">
          <Home className="icon" />
        </div>
        <h1 className="navbar-title">FESTIVE INDIA</h1>
        <div className="icon-wrapper" onClick={toggleMenu}>
          <Menu className="icon" />
        </div>
      </div>

      {isOpen && (
        <div className="menu-dropdown-right">
          <ul className="menu-items-right">
            <li><CalendarDays className="menu-icon" /> Calendar View</li>
            <li><Flame className="menu-icon" /> Trending</li>
            <li><Bookmark className="menu-icon" /> Saved Festivals</li>
            <li><Clock className="menu-icon" /> My Calendar</li>
            <li><Filter className="menu-icon" /> Filter</li>
            <li><Mail className="menu-icon" /> Contact Us</li>
            <li><Info className="menu-icon" /> About Us</li>
          </ul>
          <div className="menu-buttons">
            <button className="round-btn">Sign Up</button>
            <button className="round-btn">Sign In</button>
           
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;