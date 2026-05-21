import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import logo from "/images/logo2.png";

import { HiMail, HiPhone } from "react-icons/hi";
const Footer = () => {
  return (
    <footer className="footer premium-dark-bg">
      {/* ───────── BACKGROUND IMAGE ───────── */}

      {/* ───────── CONTENT ───────── */}

      <div className="footer__container">
        {/* ───────── BRAND ───────── */}

        <div className="footer__brand">
          <img src={logo} />

          <p className="footer__description">
            Responsible manufacturing isn't just a promise — it's every decision
            we make, from raw materials to final product.
          </p>

          {/* ───────── SOCIALS ───────── */}

          <div className="footer__socials">
            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaTwitter />
            </a>

            <a href="/">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* ───────── LINKS ───────── */}

        <div className="footer__links">
          <h3>Links</h3>

          <ul>
            <li>About</li>

            <li>Why Us</li>

            <li>Contact Us</li>

            <li>Careers</li>
          </ul>
        </div>

        {/* ───────── SERVICES ───────── */}

        <div className="footer__services">
          <h3>Our Service</h3>

          <ul>
            <li>Oil Refinery</li>

            <li>Plywood</li>

            <li>Soap Manufacturing</li>
          </ul>
        </div>

        {/* ───────── CONTACT ───────── */}

        <div className="footer__contact">
          <h3>Contact Us</h3>

          <div className="footer__contact-item">
            <FaMapMarkerAlt />

            <span>No 20 Awka Road, Anambra</span>
          </div>

          <div className="footer__contact-item">
            <HiMail />

            <span>ohiacidozie006@gmail.com</span>
          </div>

          <div className="footer__contact-item">
            <HiPhone />

            <span>+234 9137 587 836</span>
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
