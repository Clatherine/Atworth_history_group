import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React from "react";

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <section id="gallery-section">
      <h2> Photo Gallery</h2>
      <p>
        Please enjoy browsing through this collection of old photos of Atworth.
        Plenty more can be found in the Atworth Museum.
      </p>
      <section id="gallery">
        <Carousel
          id="gallery-container"
          data-bs-theme="dark"
          indicators={false}
          interval={5000}
          activeIndex={activeIndex}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Andrews & Dury 1810 Map of Atworth.jpg"
                alt="Andrews & Dury 1810 Map of Atworth"
              />
              <p>Andrews & Dury 1810 Map of Atworth</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (15).jpg"
                alt="image of Bath Road with Clock Tower in backgroun"
              />
              <p>Bath Road with Clock Tower in background</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (14).jpg"
                alt="image of Bath Road with horse-drawn cart"
              />
              <p>Bath Road with horse-drawn cart</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/St Michaels (6).jpg"
                alt="image of St Michaels Church"
              />
              <p>St Michaels Church</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Atworth FC 1913-14.jpg"
                alt="Atworth FC 1913-14"
              />
              <p>Atworth FC 1913-14</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Atworth School C1939 (David Webb centre).jpg"
                alt="Atworth School C1939 (David Webb centre)"
              />
              <p>Atworth School C1939 (David Webb centre)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Atworth School C1948.jpg"
                alt="Atworth School C1948"
              />{" "}
              <p>Atworth School C1948</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (1).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (4).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (5).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (6).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (7).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (8).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (9).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (10).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (11).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (16) outside the New Inn.jpg"
                alt="Bath Road outside the New Inn"
              />
              <p>Bath Road outside the New Inn</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (13).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bath Road (14).jpg"
                alt="Bath Road"
              />
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bradford Road (Pump Row).jpg"
                alt="Bradford Road (Pump Row)"
              />
              <p>Bradford Road (Pump Row)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Bradford Road, Atworth - Winter 1962-63.jpg"
                alt="Bradford Road, Atworth - Winter 1962-63"
              />
              <p>Bradford Road, Atworth - Winter 1962-63</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Clock Tower (1).jpg"
                alt="Clock Tower"
              />
              <p>The Clock Tower</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/David Webb at opening of the pump in Purlpit.jpg"
                alt="David Webb at the opening of the pump in Purlpit"
              />
              <p>David Webb at the opening of the pump in Purlpit</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/David Webb with village bier.jpg"
                alt="David Webb with village bier"
              />
              <p>David Webb with village bier</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Market Place (1).jpg"
                alt="Market Place"
              />
              <p>Market Place</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Market Place (2).jpg"
                alt="Market Place"
              />
              <p>Market Place</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Market Place (3).jpg"
                alt="Market Place"
              />
              <p>Market Place</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Market Place (4).jpg"
                alt="Market Place"
              />
              <p>Market Place</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Mendip Motor & Engineering Works.jpg"
                alt="Mendip Motor & Engineering Works"
              />
              <p>Mendip Motor & Engineering Works</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/St Michaels (3).jpg"
                alt="St Michaels Church"
              />
              <p>St Michaels Church</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/St Michaels (6).jpg"
                alt="St Michaels"
              />
              <p>St Michaels Church</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/St Michaels (7).jpg"
                alt="St Michaels"
              />
              <p>St Michaels Church</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/St Michaels (8).jpg"
                alt="St Michaels"
              />
              <p>St Michaels Church choir (1960s)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Staff on Neston Park Estate - 1925.jpg"
                alt="Staff on Neston Park Estate - 1925"
              />
              <p>Staff on Neston Park Estate - 1925</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/The Forge, Atworth.jpg"
                alt="The Forge, Atworth"
              />
              <p>The Forge, Atworth</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/The Market Place & Manor Farm.jpg"
                alt="The Market Place & Manor Farm"
              />
              <p>The Market Place & Manor Farm</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <img
                className="carousel-photo"
                src="/images/Gallery_pics/Village pump on Bradford Road.jpg"
                alt="Village pump on Bradford Road"
              />
              <p>Village pump on Bradford Road</p>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="carousel-captions">
          {/* <div className="carousel-caption-item">

{activeIndex === 0 && <p>Andrews & Dury 1810 Map of Atworth</p>}
{activeIndex === 1 && <p>Bath Road with Clock Tower in background</p>}
{activeIndex === 2 && <p>Bath Road with horse-drawn cart</p>}
{activeIndex === 3 && <p>St Michaels Church</p>}
{activeIndex === 4 && <p>Atworth FC 1913-14</p>}
{activeIndex === 5 && <p>Atworth School C1939 (David Webb centre)</p>}
{activeIndex === 6 && <p>Atworth School C1948</p>}
{activeIndex === 7 && <p>Bath Road</p>}
{activeIndex === 8 && <p>Bath Road</p>}
{activeIndex === 9 && <p>Bath Road</p>}
{activeIndex === 10 && <p>Bath Road</p>}
{activeIndex === 11 && <p>Bath Road</p>}
{activeIndex === 12 && <p>Bath Road</p>}
{activeIndex === 13 && <p>Bath Road</p>}
{activeIndex === 14 && <p>Bath Road, outside the New Inn</p>}
{activeIndex === 15 && <p>A house on Bath Road</p>}
{activeIndex === 16 && <p>Bath Road</p>}
{activeIndex === 17 && <p>Bath Road</p>}
{activeIndex === 18 && <p>Bath Road with horse-drawn cart</p>}
{activeIndex === 19 && <p>Bradford Road (Pump Row)</p>}

{activeIndex === 20 && <p>Bradford Road, Atworth - Winter 1962-63</p>}
{activeIndex === 21 && <p>Clock Tower</p>}
{activeIndex === 22 && <p>David Webb at opening of the pump in Purlpit</p>}
{activeIndex === 23 && <p>David Webb with village bier</p>}
{activeIndex === 24 && <p>Market Place</p>}
{activeIndex === 25 && <p>Market Place</p>}
{activeIndex === 26 && <p>Market Place</p>}
{activeIndex === 27 && <p>Market Place</p>}
{activeIndex === 28 && <p>Mendip Motor & Engineering Works</p>}
{activeIndex === 29 && <p>St Michaels Church</p>}
{activeIndex === 30 && <p>St Michaels Church</p>}
{activeIndex === 31 && <p>St Michaels Church</p>}
{activeIndex === 32 && <p>St Michaels Church</p>}
{activeIndex === 33 && <p>Staff on Neston Park Estate - 1925</p>}
{activeIndex === 34 && <p>The Forge, Atworth</p>}
{activeIndex === 35 && <p>The Market Place & Manor Farm</p>}
{activeIndex === 36 && <p>Village pump on Bradford Road</p>}

</div> */}
        </div>
      </section>
    </section>
  );
}

export default Gallery;
