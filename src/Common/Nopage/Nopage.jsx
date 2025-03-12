import React from 'react';
import './Nopage.scss';
// import img from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

const Nopage = () => {
  return (
    <div className="nopage-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Oops! Page Not Found</h2>
        <p className="error-message">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/" className="back-button">Return to Home</Link>
      </div>
      
    </div>
  );
};

export default Nopage;
