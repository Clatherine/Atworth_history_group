import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

function Image() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <section id="image">
      <Carousel
        id="top-image-container"
        data-bs-theme="dark"
        indicators={false}
        controls={false}
        interval={6000}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
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
                alt="The New Inn on Bath Road"
              />
             
            </picture>
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
                alt="image of Bath Road with Clock Tower in backgroun"
              />
            </picture>
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
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Image;
