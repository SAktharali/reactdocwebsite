import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "https://www.facebook.com",
    icon: <i className="fa-brands fa-facebook"></i>,
  },
  {
    path: "https://www.instagram.com",
    icon: <i className="fa-brands fa-instagram"></i>,
  },
  {
    path: "https://www.youtube.com",
    icon: <i className="fa-brands fa-youtube"></i>,
  },
  {
    path: "https://www.linkedin.com",
    icon: <i className="fa-brands fa-linkedin"></i>,
  },
  {
    path: "https://www.twitter.com",
    icon: <i className="fa-brands fa-twitter"></i>,
  },
];

const quickLinks = [
  {
    title: "Quick Links",
    links: [
      { path: "/home", display: "Home" },
      { path: "/about", display: "About us" },
      { path: "/services", display: "Services" },
    ],
  },
  {
    title: "I want to:",
    links: [
      { path: "/doctors", display: "Find a doctor" },
      { path: "/appointments", display: "Request an Appointment" },
      { path: "/location", display: "Find a Location" },
    ],
  },
  {
    title: "Support:",
    links: [{ path: "/contact", display: "Contact us" }],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-5 mt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <p>All Rights are reserved &copy; {year}</p>
            <div className="d-flex">
              {socialLinks.map((social, index) => (
                <Link to={social.path} key={index} className="border p-2">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {quickLinks.map((section, index) => (
            <div key={index} className="col-lg-2 col-md-4">
              <h5>{section.title}</h5>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="text-dark p-1">
                      {link.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
