import { Component } from "react";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a href="https://telegram.me/CoderGirl05" target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>
        <a href="https://github.com/Robiyaxon" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/robiya-tukhtayeva-5a1676242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B87gnX1pJTkO3akGKgvUY1w%3D%3D" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    );
  }
}
export default HeaderSocials;
