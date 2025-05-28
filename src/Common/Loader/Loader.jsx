import React, { useState, useEffect } from 'react';
import "./Loader.scss";
import img from "../../Assets/logo.png";

const Loader = () => {
  const [loadingin, setLoadingin] = useState(true);

 

   useEffect(() => {
    // Disable scrolling
    if (loadingin) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const timer = setTimeout(() => {
      setLoadingin(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Ensure scroll is restored
    };
  }, [loadingin]);

  return (
    <>
      {loadingin && (
        <div className="container-boxx">
          <div className="box">
            <div className="spinner"></div>
            <img src={img} alt="logo" />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
