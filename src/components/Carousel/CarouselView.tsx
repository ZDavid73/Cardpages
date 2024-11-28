import './CarouselView.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { Slide } from '../../services/slidesData';
import { TextHome, ButtonForm, Container } from '../../theme/styledcomponents';

interface CarouselViewProps {
  slidesData: Slide[];
  onSlideClick: (path: string) => void;
}

const CarouselView: React.FC<CarouselViewProps> = ({ slidesData, onSlideClick }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]} // Agregar EffectFade aquí
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      effect="fade" // Configuración del efecto fade
      fadeEffect={{ crossFade: true }} // Ajuste para que los slides se desvanezcan
      aria-roledescription="carousel"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide 
          key={index} 
          role="group" 
          aria-roledescription="slide" 
          aria-label={`Slide ${index + 1} of ${slidesData.length}`}
        >
          <div
            className="carousel-item"
            style={{
              backgroundImage: `url(${slide.imgSrc})`,
            }}
            role="region" 
            aria-labelledby={`slide-${index + 1}`}
          >
            <Container variant="smallopacity" className="overlay" aria-hidden="true">
              <TextHome>{slide.text}</TextHome>
              <ButtonForm 
                variant={slide.variant} // Usar el variant correspondiente
                onClick={() => onSlideClick('/register')} 
                aria-label="Register now"
              >
                Register now
              </ButtonForm>
            </Container>
            <img
              className="carousel-image"
              src={slide.smallImgSrc}
              alt={`Small preview of slide ${index + 1}`}
              aria-hidden="true"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselView;