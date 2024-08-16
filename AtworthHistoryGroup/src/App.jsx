import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import AtworthHistory from "./Components/AtworthHistory";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Events from "./Components/Events";
import Publications from "./Components/Publications";
import Museum from "./Components/Museum";
import Image from "./Components/Image";

const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iPad|iPhone|iPod/i.test(userAgent);
};

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="whole_page">
      <Header />
      <section id="mainBody">
        {windowWidth > 800 && (
          <div id="events">
            <Events />
          </div>
        )}
        <div id="bulk">
          <div id="about">
            <About />
          </div>
          {windowWidth <= 800 && (
            <div id="events">
              <Events />
            </div>
          )}
          <div id="museum">
            <Museum />
          </div>
          <div id="history">
            <AtworthHistory />
          </div>
          <div id="gallery-component">
            <Gallery />
          </div>
          <div id="publications">
            <Publications />
          </div>
        </div>
      </section>
      <Footer id="footer-component" />
    </div>
  );
}

export default App;
