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
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Andrews & Dury 1810 Map of Atworth.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Andrews & Dury 1810 Map of Atworth.jpg"
                  alt="Andrews & Dury 1810 Map of Atworth"
                />
              </picture>
              <p>Andrews & Dury 1810 Map of Atworth</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (15).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (15).jpg"
                  alt="image of bus on Bath Road with clock Tower in background"
                />
              </picture>
              <p>Bath Road with Clock Tower in background</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (14).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (14).jpg"
                  alt="image of Bath Road with horse-drawn cart"
                />
              </picture>
              <p>Bath Road with horse-drawn cart</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/St Michaels (6).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St Michaels (6).jpg"
                  alt="image of St Michaels Church"
                />
              </picture>
              <p>St Michaels Church</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Atworth FC 1913-14.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Atworth FC 1913-14.jpg"
                  alt="Atworth FC 1913-14"
                />
              </picture>
              <p>Atworth FC 1913-14</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Atworth School C1939 (David Webb centre).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Atworth School C1939 (David Webb centre).jpg"
                  alt="Atworth School C1939 (David Webb centre)"
                />
              </picture>
              <p>Atworth School C1939 (David Webb centre)</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Atworth School C1948.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Atworth School C1948.jpg"
                  alt="Atworth School C1948"
                />
              </picture>
              <p>Atworth School C1948</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (1).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (1).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (4).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (4).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (5).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (5).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (6).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (6).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (7).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (7).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (8).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (8).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (9).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (9).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (10).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (10).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (11).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (11).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (16) outside the New Inn.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (16) outside the New Inn.jpg"
                  alt="Bath Road outside the New Inn"
                />
              </picture>
              <p>Bath Road outside the New Inn</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (13).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (13).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bath Road (14).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath Road (14).jpg"
                  alt="Bath Road"
                />
              </picture>
              <p>Bath Road</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bradford Road (Pump Row).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bradford Road (Pump Row).jpg"
                  alt="Bradford Road (Pump Row)"
                />
              </picture>
              <p>Bradford Road (Pump Row)</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Bradford Road, Atworth - Winter 1962-63.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bradford Road, Atworth - Winter 1962-63.jpg"
                  alt="Bradford Road, Atworth - Winter 1962-63"
                />
              </picture>
              <p>Bradford Road, Atworth - Winter 1962-63</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Clock Tower (1).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Clock Tower (1).jpg"
                  alt="Clock Tower"
                />
              </picture>
              <p>The Clock Tower</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/David Webb at opening of the pump in Purlpit.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/David Webb at opening of the pump in Purlpit.jpg"
                  alt="David Webb at the opening of the pump in Purlpit"
                />
              </picture>
              <p>David Webb at the opening of the pump in Purlpit</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/David Webb with village bier.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/David Webb with village bier.jpg"
                  alt="David Webb with village bier"
                />
              </picture>
              <p>David Webb with village bier</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container"> 
                <source
                  srcSet="/images/Gallery_pics/Market Place (1).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Market Place (1).jpg"
                  alt="Market Place"
                />
              </picture>
              <p>Market Place</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Market Place (2).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Market Place (2).jpg"
                  alt="Market Place"
                />
              </picture>
              <p>Market Place</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Market Place (3).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Market Place (3).jpg"
                  alt="Market Place"
                />
              </picture>
              <p>Market Place</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Market Place (4).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Market Place (4).jpg"
                  alt="Market Place"
                />
              </picture>
              <p>Market Place</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Mendip Motor & Engineering Works.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Mendip Motor & Engineering Works.jpg"
                  alt="Mendip Motor & Engineering Works"
                />
              </picture>
              <p>Mendip Motor & Engineering Works</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/St Michaels (3).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St Michaels (3).jpg"
                  alt="St Michaels Church"
                />
              </picture>
              <p>St Michaels Church</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/St Michaels (6).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St Michaels (6).jpg"
                  alt="St Michaels"
                />
              </picture>
              <p>St Michaels Church</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/St Michaels (7).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St Michaels (7).jpg"
                  alt="St Michaels"
                />
              </picture>
              <p>St Michaels Church</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/St Michaels (8).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St Michaels (8).jpg"
                  alt="St Michaels"
                />
              </picture>
              <p>St Michaels Church choir (1960s)</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Staff on Neston Park Estate - 1925.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Staff on Neston Park Estate - 1925.jpg"
                  alt="Staff on Neston Park Estate - 1925"
                />
              </picture>
              <p>Staff on Neston Park Estate - 1925</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/The Forge, Atworth.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/The Forge, Atworth.jpg"
                  alt="The Forge, Atworth"
                />
              </picture>
              <p>The Forge, Atworth</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/The Market Place & Manor Farm.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/The Market Place & Manor Farm.jpg"
                  alt="The Market Place & Manor Farm"
                />
              </picture>
              <p>The Market Place & Manor Farm</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-photo-container">
              <picture className="carousel-photo-container">
                <source
                  srcSet="/images/Gallery_pics/Village pump on Bradford Road.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Village pump on Bradford Road.jpg"
                  alt="Village pump on Bradford Road"
                />
              </picture>
              <p>Village pump on Bradford Road</p>
            </div>
          </Carousel.Item>
        </Carousel>
      
      </section>
    </section>
  );
}

export default Gallery;
