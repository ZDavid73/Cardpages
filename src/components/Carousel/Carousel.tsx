import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { slidesData } from './slidesData';
import { useNavigate } from 'react-router-dom';

const Carousel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="carousel-item">
            <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
            <div className="overlay">
              <p>{slide.text}</p>
              <button onClick={() => navigate('/register')}>Click me</button>
              <img src={slide.smallImgSrc} alt={`Small Image ${index + 1}`} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;