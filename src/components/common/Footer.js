// Footer component for Texi
import React from "react";
import "../../index.css";

const Footer = () => (
  <footer style={{ background: "#111", color: "#fff", padding: "2.5rem 0 0.5rem 0", fontFamily: "'Jost', Arial, sans-serif" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between", padding: "0 1rem" }}>
      <div>
        <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Company</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
          <li><a href="#careers" style={{ color: "#fff", textDecoration: "none" }}>Careers</a></li>
          <li><a href="#press" style={{ color: "#fff", textDecoration: "none" }}>Press</a></li>
          <li><a href="#blog" style={{ color: "#fff", textDecoration: "none" }}>Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Support</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li><a href="#help" style={{ color: "#fff", textDecoration: "none" }}>Help Center</a></li>
          <li><a href="#safety" style={{ color: "#fff", textDecoration: "none" }}>Safety</a></li>
          <li><a href="#faq" style={{ color: "#fff", textDecoration: "none" }}>FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Services</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li><a href="#all-categories" style={{ color: "#fff", textDecoration: "none" }}>All Categories</a></li>
          <li><a href="#top-services" style={{ color: "#fff", textDecoration: "none" }}>Top Services</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Legal</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li><a href="#terms" style={{ color: "#fff", textDecoration: "none" }}>Terms</a></li>
          <li><a href="#privacy" style={{ color: "#fff", textDecoration: "none" }}>Privacy</a></li>
        </ul>
      </div>
    </div>
    <div style={{ borderTop: "1px solid #333", marginTop: 32, paddingTop: 16, textAlign: "center", fontSize: 15, color: "#bbb" }}>
      &copy; {new Date().getFullYear()} Texi. All rights reserved. &nbsp;
      <span style={{ marginLeft: 12 }}>
        <a href="#twitter" aria-label="Twitter" style={{ color: "#fff", margin: "0 8px" }}>🐦</a>
        <a href="#facebook" aria-label="Facebook" style={{ color: "#fff", margin: "0 8px" }}>📘</a>
        <a href="#instagram" aria-label="Instagram" style={{ color: "#fff", margin: "0 8px" }}>📸</a>
      </span>
    </div>
  </footer>
);

export default Footer;
