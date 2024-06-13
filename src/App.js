import { Component } from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header"
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
class App extends Component {


  
  render() {
    return (
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    );
  }
}
export default App;
