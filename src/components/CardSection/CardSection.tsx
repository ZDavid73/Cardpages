import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardSection from './CardSectionView';  // Importa el componente visual

interface CardSectionProps {
  text: string;
  imgSrc: string;
  altText: string;
  reverse?: boolean;
}

function CardSectionContainer({ text, imgSrc, altText, reverse = false }: CardSectionProps) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleExploreClick = () => {
    navigate('/register');
  };

  const shouldReverse = isMobile ? false : reverse;

  return (
    <CardSection
      text={text}
      imgSrc={imgSrc}
      altText={altText}
      reverse={shouldReverse}
      onExploreClick={handleExploreClick}
    />
  );
}

export default CardSectionContainer;