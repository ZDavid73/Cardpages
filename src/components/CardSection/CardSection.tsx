import { useEffect, useState } from 'react';
import { TextHome, Button } from '../../theme/styledcomponents';
import './CardSection.css';
import { useNavigate } from 'react-router-dom';

interface CardSectionProps {
  text: string;
  imgSrc: string;
  altText: string;
  reverse?: boolean;
}

function CardSection({ text, imgSrc, altText, reverse = false }: CardSectionProps) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Cambia 768 por el tamaño que consideres móvil

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

  // Forzar reverse a false en móviles
  const shouldReverse = isMobile ? false : reverse;

  return (
    <div className="HomepageContainer">
      {shouldReverse ? (
        <>
          <div className="HomepageTextContainer1">
            <TextHome>{text}</TextHome>
            <Button variant="white" onClick={handleExploreClick}>Explore more</Button>
          </div>
          <img src={imgSrc} alt={altText} />
        </>
      ) : (
        <>
          <img src={imgSrc} alt={altText} />
          <div className="HomepageTextContainer">
            <TextHome>{text}</TextHome>
            <Button variant="white" onClick={handleExploreClick}>Explore more</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CardSection;