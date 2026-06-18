import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("LoggedIn");

    if (loggedInUser === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="navbar">
      <div className="logo-section">
        <img
          src="logo.png"
          alt="Solom Services"
          className="logo"
        />

        <Link to="/" className="brand-name">
          Solom Services
        </Link>
      </div>

      <div>
        {isLoggedIn ? (
          <button className="profile-btn">
            User Profile
          </button>
        ) : (
          <div className="nav-links">
            <Link to="/login" className="nav-link">
              Login
            </Link>

            <Link
              to="/register"
              className="register-btn"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}