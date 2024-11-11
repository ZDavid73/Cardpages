import { useEffect, useState, useRef } from 'react';
import AOS from 'aos'; // Importa AOS
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; // Asegúrate de que los estilos de AOS están importados
import CardSection from './CardSectionView';

interface CardSectionProps {
  text: string;
  imgSrc: string;
  altText: string;
  variantText: 'purpleForm' | 'grayForm' | 'greenForm' | 'whiteForm' | 'grayhomeForm' | 'orangeForm';
  reverse?: boolean;
  imgAos: string;
  textAos: string;
}

function CardSectionContainer({
  text,
  imgSrc,
  altText,
  variantText,
  imgAos,
  textAos,
  reverse = false,
}: CardSectionProps) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          AOS.refresh();
        }
      },
      { threshold: 0.1 }
    );

    const sectionNode = sectionRef.current;
    if (sectionNode) {
      observer.observe(sectionNode);
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, []);

  const handleExploreClick = () => {
    navigate('/register');
  };

  const shouldReverse = isMobile ? false : reverse;

  return (
    <div ref={sectionRef}>
      <CardSection
        text={text}
        imgSrc={imgSrc}
        altText={altText}
        reverse={shouldReverse}
        variantText={variantText}
        onExploreClick={handleExploreClick}
        imgAos={imgAos}
        textAos={textAos}
      />
    </div>
  );
}

export default CardSectionContainer;