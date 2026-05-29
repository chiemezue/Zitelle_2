import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";

import { HiMail, HiPhone } from "react-icons/hi";

import logo from "/images/logo2.png";

const Footer = () => {
  return (
    <footer className="footer premium-dark-bg">
      <div className="footer__container">
        {/* ───────── BRAND ───────── */}

        <div className="footer__brand">
          <img src={logo} alt="Zitelle Group" />

          <p className="footer__description">
            Responsible manufacturing isn't just a promise — it's every decision
            we make, from raw materials to final product.
          </p>

          {/* ───────── SOCIALS ───────── */}

          <div className="footer__socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* ───────── LINKS ───────── */}

        <div className="footer__links">
          <h3>Links</h3>

          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/why_us">Why us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        {/* ───────── SERVICES ───────── */}

        <div className="footer__services">
          <h3>Our Services</h3>

          <ul>
            <li>Oil Refinery</li>

            <li>Plywood</li>

            <li>Packaging</li>

            <li>Soap Manufacturing</li>
          </ul>
        </div>

        {/* ───────── CONTACT ───────── */}

        <div className="footer__contact">
          <h3>Contact Us</h3>

          <div className="footer__contact-item">
            <FaMapMarkerAlt />

            <span>Amansea, By Ebenebe Road, Awka North, Anambra State.</span>
          </div>

          <div className="footer__contact-item">
            <HiMail />

            <span>
              info@zitellegroup.com
              <br />
              joe4k2010@gmail.com
            </span>
          </div>

          <div className="footer__contact-item">
            <HiPhone />

            <span>+234 814 783 9951</span>
          </div>
        </div>
      </div>

      {/* ───────── BOTTOM ───────── */}

      <div className="footer__bottom">
        © 2026 Zitelle Group, Nigeria. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
