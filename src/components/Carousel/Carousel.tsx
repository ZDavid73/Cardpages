import React from 'react';
import CarouselView from './CarouselView';
import { slidesData } from '../../services/slidesData';
import { useNavigate } from 'react-router-dom';

const Carousel: React.FC = () => {
  const navigate = useNavigate();

  const handleSlideClick = (path: string) => {
    navigate(path);
  };

  return (
    <CarouselView slidesData={slidesData} onSlideClick={handleSlideClick} />
  );
};

export default Carousel;