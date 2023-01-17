import { Component } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
// import emailjs from "@emailjs/browser";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
class Contact extends Component {
  // constructor() {
  //   super();
  //   this.form = createRef();
  // }
  // sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       this.form.current,
  //       "YOUR_USER_ID"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // }
  render() {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>tuhtaevarobiahon@gmail.com</h5>
              <a href="mailto:tuhtaevarobiahon@gmail.com">Send a message</a>
            </div>
            <div className="contact__option">
              <BsTelegram className="contact__option-icon" />
              <h4>Telegram</h4>
              <h5>_rob1y@</h5>
              <a href="https://telegram.me/CoderGirl05">Send a message</a>
            </div>
            <div className="contact__option">
              <BsLinkedin className="contact__option-icon" />
              <h4>Linkedin</h4>
              <h5>Robiya </h5>
              <a href="https://www.linkedin.com/in/robiya-tukhtayeva-5a1676242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B87gnX1pJTkO3akGKgvUY1w%3D%3D">
                Send a message
              </a>
            </div>
          </div>
          <form ref={this.form} onSubmit={this.sendEmail} action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
