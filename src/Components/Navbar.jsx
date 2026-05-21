import { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";

import logo from "/images/zitelle-logo.png";

/* ───────── SERVICES ───────── */

const services = [
  { num: "01", label: "Oil Making", href: "#oil" },

  { num: "02", label: "Soap Making", href: "#soap" },

  { num: "03", label: "Plywood", href: "#wood" },
];

/* ───────── NAV LINKS ───────── */

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },

  { label: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [hidden, setHidden] = useState(false);

  /* ───────── HIDE ON SCROLL ───────── */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ───────────────── DESKTOP NAVBAR ───────────────── */}

      <nav className={`navbar ${hidden ? "navbar--hidden" : ""}`}>
        {/* ───────── LOGO ───────── */}

        <Link to="/">
          <img src={logo} alt="Zitelle Group" className="navbar__logo" />
        </Link>

        {/* ───────── NAV LINKS ───────── */}

        <ul className="navbar__links">
          {/* ABOUT */}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          {/* SERVICES DROPDOWN */}

          <li className="navbar__dropdown">
            <button className="navbar__dropdown-btn">
              Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 5l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <ul className="navbar__dropdown-menu">
              {services.map((service) => (
                <li key={service.num}>
                  <a href={service.href}>
                    <span className="navbar__dropdown-num">{service.num}</span>

                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* CAREERS */}

          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
        </ul>

        {/* ───────── CTA ───────── */}

        <a href="#contact" className="navbar__cta">
          Contact Us
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* ───────── HAMBURGER ───────── */}

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
              d="M4 7h18M4 13h18M4 19h18"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* ───────────────── MOBILE MENU ───────────────── */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* ───────── TOP ───────── */}

        <div className="mobile-menu__head">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Zitelle Group" className="navbar__logo" />
          </Link>

          <button
            className="mobile-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* ───────── SERVICES ───────── */}

        <p className="mobile-menu__services-label">Services</p>

        <ul className="mobile-menu__services">
          {services.map((service) => (
            <li key={service.num}>
              <a href={service.href} onClick={() => setMenuOpen(false)}>
                {service.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ───────── LINKS ───────── */}

        <ul className="mobile-menu__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink to={link.path} onClick={() => setMenuOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ───────── CTA ───────── */}

        <a
          href="#contact"
          className="mobile-menu__cta"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us →
        </a>
      </div>
    </>
  );
};

export default Navbar;
