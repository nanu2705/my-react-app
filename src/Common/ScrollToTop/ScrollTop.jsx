// ScrollToTop.jsx
import React, { useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('scrollToTopBtn');
      scrollButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      id="scrollToTopBtn"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '85px',
        right: '30px',
        display: 'none',
        padding: '9px 10px',
        fontSize: '20px',
        borderRadius: '50%',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        animation: 'bounce 1.5s infinite',
      }}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
