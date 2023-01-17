import { Component } from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";
class Services extends Component {
  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>I present a Website</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Modern Website

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                Website for Companys
                </p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Website full of animations

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Serious Website

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Perfect Website

                </p>
              </li>

            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Web Development
              </h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Great website

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Affordable price

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Promptness

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Courteous employee

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Quality

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>The result

                </p>
              </li>


            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Smart Projects
              </h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>CRM Projects

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Trade Sale

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Admin part of the project

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Social network

                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Portfolio

                </p>
              </li>

            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Services;
