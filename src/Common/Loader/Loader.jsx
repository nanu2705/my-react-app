import React, { useState, useEffect } from 'react';
import "./Loader.scss";
import img from "../../Assets/logo.png";

const Loader = () => {
  const [loadingin, setLoadingin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingin(false), 3000);
    return () => clearTimeout(timer);
  }, []);

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
