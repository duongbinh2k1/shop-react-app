import React from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./Footer.css";

const Footer = () => {

  const navData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ]

  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <div className="logo">
            <img src={Logo} alt="Norda" />
          </div>
          <div className="content">
            <h3>Our Location</h3>
            <h2>869 General Village Apt. 645, Moorebury, USA</h2>
            <h3>24/7 Hotline</h3>
            <h2>(+99) 052 128 2399</h2>
          </div>
        </div>
        <div className="footer-right">
          <div className="quick-links">
            <ul>
              {
                navData.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="icons">
            <div className="icon-item">
              <TwitterIcon />
            </div>
            <div className="icon-item">
              <FacebookIcon />
            </div>
            <div className="icon-item">
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
