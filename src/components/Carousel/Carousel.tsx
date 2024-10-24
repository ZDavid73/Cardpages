import React, { useMemo } from 'react';
import CarouselView from './CarouselView';
import { slidesData } from '../../services/slidesData';
import { useNavigate } from 'react-router-dom';

const Carousel: React.FC = () => {
  const navigate = useNavigate();
  
  const memoizedSlidesData = useMemo(() => slidesData, []);

  return (
    <CarouselView 
      slidesData={memoizedSlidesData} 
      onSlideClick={(path) => navigate(path)} 
    />
  );
};

export default Carousel;