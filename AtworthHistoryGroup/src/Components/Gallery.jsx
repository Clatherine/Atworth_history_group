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
                  srcSet="/images/Gallery_pics/Andrews_&_Dury_1810_Map_of_Atworth.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Andrews_&_Dury_1810_Map_of_Atworth.jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(15).webp"
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
              <picture className="carousel-photo-container ">
                <source
                  srcSet="/images/Gallery_pics/Bath_Road_(14).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(14).jpg"
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
                  srcSet="/images/Gallery_pics/St_Michaels_(6).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St_Michaels_(6).jpg"
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
                  srcSet="/images/Gallery_pics/Atworth_FC_1913-14.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Atworth_FC_1913-14.jpg"
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
                  srcSet="/images/Gallery_pics/Atworth_School_C1939_(David_Webb_centre).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Atworth_School_C1939_(David_Webb_centre).jpg"
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
                  srcSet="/images/Gallery_pics/Atworth_School_C1948.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Atworth_School_C1948.jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(1).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(1).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(4).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(4).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(5).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(5).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(6).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(6).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(7).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(7).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(8).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(8).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(9).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(9).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(10).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(10).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(11).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(11).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(16)_outside_the_New_Inn.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(16)_outside_the_New_Inn.jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(13).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(13).jpg"
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
                  srcSet="/images/Gallery_pics/Bath_Road_(14).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bath_Road_(14).jpg"
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
                  srcSet="/images/Gallery_pics/Bradford_Road_(Pump_Row).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bradford_Road_(Pump_Row).jpg"
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
                  srcSet="/images/Gallery_pics/Bradford_Road,_Atworth_-_Winter_1962-63.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Bradford_Road,_Atworth_-_Winter_1962-63.jpg"
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
                  srcSet="/images/Gallery_pics/Clock_Tower_(1).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Clock_Tower_(1).jpg"
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
                  srcSet="/images/Gallery_pics/David_Webb_at_opening_of_the_pump_in_Purlpit.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/David_Webb_at_opening_of_the_pump_in_Purlpit.jpg"
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
                  srcSet="/images/Gallery_pics/David_Webb_with_village_bier.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/David_Webb_with_village_bier.jpg"
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
                  srcSet="/images/Gallery_pics/Market_Place_(1).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Market_Place_(1).jpg"
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
                  srcSet="/images/Gallery_pics/Market_Place_(2).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Market_Place_(2).jpg"
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
                  srcSet="/images/Gallery_pics/Market_Place_(3).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Market_Place_(3).jpg"
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
                  srcSet="/images/Gallery_pics/Market_Place_(4).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Market_Place_(4).jpg"
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
                  srcSet="/images/Gallery_pics/Mendip_Motor_&_Engineering_Works.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Mendip_Motor_&_Engineering_Works.jpg"
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
                  srcSet="/images/Gallery_pics/St_Michaels_(3).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St_Michaels_(3).jpg"
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
                  srcSet="/images/Gallery_pics/St_Michaels_(6).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St_Michaels_(6).jpg"
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
                  srcSet="/images/Gallery_pics/St_Michaels_(7).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St_Michaels_(7).jpg"
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
                  srcSet="/images/Gallery_pics/St_Michaels_(8).webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/St_Michaels_(8).jpg"
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
                  srcSet="/images/Gallery_pics/Staff_on_Neston_Park_Estate_-_1925.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Staff_on_Neston_Park_Estate_-_1925.jpg"
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
                  srcSet="/images/Gallery_pics/The_Forge,_Atworth.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/The_Forge,_Atworth.jpg"
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
                  srcSet="/images/Gallery_pics/The_Market_Place_&_Manor_Farm.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/The_Market_Place_&_Manor_Farm.jpg"
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
                  srcSet="/images/Gallery_pics/Village_pump_on_Bradford_Road.webp"
                  type="image/webp"
                />
                <img
                  className="carousel-photo"
                  src="/images/Gallery_pics/Village_pump_on_Bradford_Road.jpg"
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
