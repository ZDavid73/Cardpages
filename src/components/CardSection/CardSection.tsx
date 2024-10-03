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

  const handleExploreClick = () => {
    navigate('/register');
  };

  return (
    <div className="HomepageContainer">
      {reverse ? (
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