import './CarouselView.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Asegúrate de importar Autoplay
import { Pagination, Autoplay } from 'swiper/modules'; // Incluye Autoplay
import { Slide } from '../../services/slidesData';
import { TextHome, Button, Container } from '../../theme/styledcomponents'; 

interface CarouselViewProps {
  slidesData: Slide[];
  onSlideClick: (path: string) => void;
}

const CarouselView: React.FC<CarouselViewProps> = ({ slidesData, onSlideClick }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
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
            className="carousel-item" /* Usamos la clase CSS */
            style={{
              backgroundImage: `url(${slide.imgSrc})`,
            }}
          >
            <Container variant="smallopacity" className="overlay">
              <TextHome>{slide.text}</TextHome>
              <Button variant="green" onClick={() => onSlideClick('/register')}>Register now</Button>
            </Container>
            <img className="carousel-image" src={slide.smallImgSrc} alt={`Small Image ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselView;