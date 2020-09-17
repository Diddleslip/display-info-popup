import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import "./FinalCarousel.css";

const items = ["https://i.imgur.com/VTpz8XB.jpg", "https://i.imgur.com/nff0PWy.jpg", "https://i.imgur.com/fY311wc.jpeg", "https://i.imgur.com/BaGeu7F.jpeg", "https://i.imgur.com/rc9nH0R.jpeg", "https://i.imgur.com/xnoLgTy.jpeg"];

function FinalCarousel() {
  let Carousel = useRef();
  
  const galleryItems = items.map((image, index) => (
    <img alt="img" className="mainImages" key={index} src={image} ></img>
  ))

  const responsive =   {
    0: {
        items: 1,
    },
    1024: {
        items: 1
    }
  }

  const thumbItem = (item, index) => (
    <img 
      alt="Img"
      key={item} 
      onClick={() => Carousel.slideTo(index)} 
      src={item}
      className={`smallImages`}
    />
  )
  
  const numberItem = (item, index) => (
    <span 
      key={item} 
      onClick={() => Carousel.slideTo(index)}
      className="individualDigit"
    >
      {index + 1}{' '}
    </span>

  )

  return (
    <div className="galleryCarousel">
      <div className="carouselMain">
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          responsive={responsive}
          ref={el => Carousel = el}
        />
      </div>

      <div className="carouselThumbs">
        <nav className="thumbImages">{items.map((item, index) => (
          thumbItem(item, index)
        ))}
        </nav>
        <div className="thumbNumbers">
          <button id="leftArrow" className="buttonClass" onClick={() => Carousel.slidePrev()}>{`<`}</button>
          <span className="thumbDigits">{items.map((item, index) => (
            numberItem(item, index)
          ))}
          </span>
          <button id="rightArrow" className="buttonClass arrowButtons" onClick={() => Carousel.slideNext()}>{`>`}</button>
        </div>
      </div>
    </div>
  )
}

export default FinalCarousel;
