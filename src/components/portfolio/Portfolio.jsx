import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/prt0.png";
import IMG2 from "../../assets/prt1.png";
import IMG3 from "../../assets/prt6.png";
import IMG4 from "../../assets/prt9.jpeg";
import IMG5 from "../../assets/ptr2.png";
import IMG6 from "../../assets/ptr3.png";
import IMG8 from "../../assets/ptr7.png";

const data = [
  {
    id: 1,
    image: IMG3,
    title: "Cyber game",
    github: "https://github.com/inextdeve",
    demo: "https://cyber-sport.netlify.app/"
  },
  {
    id: 2,
    image: IMG1,
    title: "Andijan Sport",
    github: "https://github.com/inextdeve",
    demo: "https://andijan-football.netlify.app/"
  },
  {
    id: 3,
    image: IMG8,
    title: "Hospital",
    github: "https://github.com/inextdeve",
    demo: "https://diplomishi.netlify.app/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Ekabu",
    github: "https://github.com/inextdeve",
    demo: "https://robiyaxon.github.io/EkabuMebel/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Raven    ",
    github: "https://github.com/inextdeve",
    demo: "https://robiyaxon.github.io/Robiya-coder-Markaz/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Tic-tac-toe",
    github: "https://github.com/inextdeve",
    demo: "https://robiyaxon.github.io/game/"
  },
  {
    id: 8,
    image: IMG2,
    title: "AliExpress    ",
    github: "https://github.com/inextdeve",
    demo: "https://robiyaxon.github.io/programmer-girls-React/"
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                 
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
