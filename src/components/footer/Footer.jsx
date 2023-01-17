/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { BsTelegram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import {
} from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#" className="footer__logo">
        Robiya
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://telegram.me/CoderGirl05" target="_blank" rel="noreferrer">
            <BsTelegram />
          </a>
          <a href="https://www.linkedin.com/in/robiya-tukhtayeva-5a1676242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B87gnX1pJTkO3akGKgvUY1w%3D%3D" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
         
          <a href="mailto:tuhtaevarobiahon@gmail.com" target="_blank" rel="noreferrer">
            <MdEmail />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy;  Robiya All rights reserved</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
