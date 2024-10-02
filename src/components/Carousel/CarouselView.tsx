import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Slide } from '../../services/slidesData';

interface CarouselViewProps {
  slidesData: Slide[];
  onSlideClick: (path: string) => void;
}

const CarouselView: React.FC<CarouselViewProps> = ({ slidesData, onSlideClick }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ 
        delay: 3000, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: true 
      }}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${slide.imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
            }}
          >
            <div className="overlay">
              <p>{slide.text}</p>
              <button onClick={() => onSlideClick('/register')}>Click me</button>
              <img src={slide.smallImgSrc} alt={`Small Image ${index + 1}`} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselView;