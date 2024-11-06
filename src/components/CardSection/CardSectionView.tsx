import React from 'react';
import { TextHome, ButtonForm } from '../../theme/styledcomponents';
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
    <div className="HomepageContainer" role="region" aria-labelledby={`section-heading-${reverse ? 'right' : 'left'}`}>
      {reverse ? (
        <>
          <div className="HomepageTextContainer1" id={`section-heading-right`}>
            <TextHome>{text}</TextHome>
            <ButtonForm variant="whiteForm" onClick={onExploreClick} aria-label="Explore more about this section">Explore more</ButtonForm>
          </div>
          <img src={imgSrc} alt={altText} aria-labelledby={`section-heading-right`} />
        </>
      ) : (
        <>
          <img src={imgSrc} alt={altText} aria-labelledby={`section-heading-left`} />
          <div className="HomepageTextContainer" id={`section-heading-left`}>
            <TextHome>{text}</TextHome>
            <ButtonForm variant="whiteForm" onClick={onExploreClick} aria-label="Explore more about this section">Explore more</ButtonForm>
          </div>
        </>
      )}
    </div>
  );
};

export default CardSection;