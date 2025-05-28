import { useState } from "react";
import "./Header.scss";
import { IoMdClose } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/rlogo.png"

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate(); 

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
          Prathmesh Cyber Force
          </div>

        {/* Menu Button for Mobile */}
        <button className="menu-button" onClick={() => setDrawerOpen(!drawerOpen)}>
          {drawerOpen ? <IoMdClose /> : <IoReorderThreeOutline />}
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/career">Career</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>

      {/* Drawer Navigation for Mobile */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <a href="/" onClick={() => setDrawerOpen(false)}>Home</a>
        <a href="/" onClick={() => setDrawerOpen(false)}>About Us</a>
        <a href="/services" onClick={() => setDrawerOpen(false)}>Services</a>
        <a href="/career" onClick={() => setDrawerOpen(false)}>Career</a>
        <a href="/contact" onClick={() => setDrawerOpen(false)}>Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
