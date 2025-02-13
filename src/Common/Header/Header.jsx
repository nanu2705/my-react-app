import { useState } from "react";
import "./Header.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate(); 
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>Prathmesh Cyber Force</div>

        {/* Menu Button for Mobile */}
        <button className="menu-button" onClick={() => setDrawerOpen(!drawerOpen)}>
          {drawerOpen ? <IoMdClose /> : <IoReorderThreeOutline />}
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <div
            className="nav-item"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <a href="/">Services <span><IoIosArrowDown /></span></a>
            {servicesMenuOpen && (
              <div className="dropdown-menu">
                <a href="/">Network Infrastructure</a>
                <a href="/">Security Architecture</a>
                <a href="/">Cloud Solutions</a>
              </div>
            )}
          </div>
          <a href="/">Contact Us</a>
        </nav>
      </div>

      {/* Drawer Navigation for Mobile */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <a href="/" onClick={() => setDrawerOpen(false)}>Home</a>
        <a href="/" onClick={() => setDrawerOpen(false)}>About Us</a>
        <div className="drawer-item">
          <button onClick={() => setServicesMenuOpen(!servicesMenuOpen)}>
            Services <IoIosArrowDown />
          </button>
          {servicesMenuOpen && (
            <div className="dropdown-menu flex-column">
              <a href="/" onClick={() => setDrawerOpen(false)}>Network Infrastructure</a>
              <a href="/" onClick={() => setDrawerOpen(false)}>Security Architecture</a>
              <a href="/" onClick={() => setDrawerOpen(false)}>Cloud Solutions</a>
            </div>
          )}
        </div>
        <a href="/" onClick={() => setDrawerOpen(false)}>Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
