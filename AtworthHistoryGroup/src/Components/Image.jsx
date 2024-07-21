import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

function Image (){
    const [activeIndex, setActiveIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
          setActiveIndex(selectedIndex)}

    return(
    <section id="image">
        <Carousel id="top-image-container" data-bs-theme="dark" indicators={false} interval={9000} activeIndex={activeIndex} onSelect={handleSelect} >
          <Carousel.Item>
          <div className="carousel-photo-container">
            <img
           
           className="carousel-photo"
              src="/images/Gallery_pics/Bath Road (10).jpg" alt="The New Inn on Bath Road" 
            />
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousel-photo-container">
            <img
           
           className="carousel-photo"
              src="/images/Gallery_pics/Bath Road (15).jpg" alt="image of Bath Road with Clock Tower in backgroun"
            />
             </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousel-photo-container">
            <img 
              className="carousel-photo"
              src="/images/Gallery_pics/Bath Road (14).jpg" alt="image of Bath Road with horse-drawn cart" 
            />
             </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousel-photo-container">
            <img 
              className="carousel-photo"
              src="/images/Gallery_pics/St Michaels (6).jpg" alt="image of St Michaels Church" 
            />
             </div>
          </Carousel.Item>
        </Carousel>
        <div className="carousel-captions">
<div className="carousel-caption-item">

{activeIndex === 0 && <p>The New Inn on Bath Road</p>}
{activeIndex === 1 && <p>Bath Road with Clock Tower in background</p>}
{activeIndex === 2 && <p>Bath Road with horse-drawn cart</p>}
{activeIndex === 3 && <p>St Michaels Church</p>}
</div>
</div>
   </section>

      )

    }


export default Image;


