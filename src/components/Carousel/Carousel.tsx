import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Importación de los módulos desde "swiper/modules"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
    >
      <SwiperSlide>
        <div className="carousel-item">
          <img src="https://tcg.pokemon.com/assets/img/home/featured-switcher/lapras-stellar-large-up-2x.jpg" alt="" />
          <div className="overlay">
            <p>Slide 1 Text</p>
            <button onClick={() => console.log("Button 1 clicked")}>
              Click me
            </button>
            <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/stellar-crown/es-es/SV07_ES_32-2x.png" alt="Small Image 1" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-item">
          <img src="https://tcg.pokemon.com/assets/img/home/featured-switcher/terapagos-stellar-large-up-2x.jpg" alt="" />
          <div className="overlay">
            <p>Slide 1 Text</p>
            <button onClick={() => console.log("Button 1 clicked")}>
              Click me
            </button>
            <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/stellar-crown/es-es/SV07_ES_128-2x.png" alt="Small Image 1" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-item">
          <img src="https://tcg.pokemon.com/assets/img/home/featured-switcher/cinderace-stellar-large-up-2x.jpg" alt="" />
          <div className="overlay">
            <p>Slide 1 Text</p>
            <button onClick={() => console.log("Button 1 clicked")}>
              Click me
            </button>
            <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/stellar-crown/es-es/SV07_ES_28-2x.png" alt="Small Image 1" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-item">
          <img src="https://tcg.pokemon.com/assets/img/home/featured-switcher/galvantula-stellar-large-up-2x.jpg" alt="" />
          <div className="overlay">
            <p>Slide 1 Text</p>
            <button onClick={() => console.log("Button 1 clicked")}>
              Click me
            </button>
            <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/stellar-crown/es-es/SV07_ES_51-2x.png" alt="Small Image 1" />
          </div>
        </div>
      </SwiperSlide>

      {/* Más slides */}
    </Swiper>
  );
};

export default Carousel;