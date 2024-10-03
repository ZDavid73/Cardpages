import React from 'react';
import { TextHome, Button } from '../../theme/styledcomponents';
import './CardSection.css';

interface CardSectionProps {
  text: string;
  imgSrc: string;
  altText: string;
  reverse: boolean;
  onExploreClick: () => void;
}

const CardSection: React.FC<CardSectionProps> = ({
  text,
  imgSrc,
  altText,
  reverse,
  onExploreClick,
}) => {
  return (
    <div className="HomepageContainer">
      {reverse ? (
        <>
          <div className="HomepageTextContainer1">
            <TextHome>{text}</TextHome>
            <Button variant="white" onClick={onExploreClick}>Explore more</Button>
          </div>
          <img src={imgSrc} alt={altText} />
        </>
      ) : (
        <>
          <img src={imgSrc} alt={altText} />
          <div className="HomepageTextContainer">
            <TextHome>{text}</TextHome>
            <Button variant="white" onClick={onExploreClick}>Explore more</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardSection;