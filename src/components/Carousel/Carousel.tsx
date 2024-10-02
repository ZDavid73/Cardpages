import React from 'react';
import CarouselView from './CarouselView';
import { slidesData } from '../../services/slidesData';
import { useNavigate } from 'react-router-dom';

const Carousel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <CarouselView 
      slidesData={slidesData} 
      onSlideClick={(path) => navigate(path)} 
    />
  );
};

export default Carousel;