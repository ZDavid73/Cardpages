import React from 'react';
import { TextHome, ButtonForm } from '../../theme/styledcomponents';
import './CardSection.css';

interface CardSectionProps {
  text: string;
  imgSrc: string;
  altText: string;
  reverse: boolean;
  variantText: 'purpleForm' | 'grayForm' | 'greenForm' | 'whiteForm' | 'grayhomeForm' | 'orangeForm';
  onExploreClick: () => void;
  imgAos?: string;
  textAos?: string;
}

const CardSection: React.FC<CardSectionProps> = ({
  text,
  imgSrc,
  altText,
  reverse,
  variantText,
  onExploreClick,
  imgAos,
  textAos,
}) => {
  return (
    <div className="HomepageContainer" role="region" aria-labelledby={`section-heading-${reverse ? 'right' : 'left'}`}>
      {reverse ? (
        <>
          <div
            className="HomepageTextContainer1"
            id={`section-heading-right`}
            style={{
              backgroundImage: `url(https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Background-Purple.svg)`,
            }}
          >
            <div className="HomepageText" data-aos={textAos}>
              <TextHome>{text}</TextHome>
              <ButtonForm variant={variantText} onClick={onExploreClick} aria-label="Explore more about this section">
                Explore more
              </ButtonForm>
            </div>
            <img src={imgSrc} alt={altText} data-aos={imgAos} aria-labelledby={`section-heading-right`} />
          </div>
        </>
      ) : (
        <>
          <div
            className="HomepageTextContainer"
            id={`section-heading-left`}
            style={{
              backgroundImage: `url(https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Background-Black.svg)`,
            }}
          >
            <img src={imgSrc} alt={altText} data-aos={imgAos} aria-labelledby={`section-heading-left`} />
            <div className="HomepageText" data-aos={textAos}>
              <TextHome>{text}</TextHome>
              <ButtonForm variant={variantText} onClick={onExploreClick} aria-label="Explore more about this section">
                Explore more
              </ButtonForm>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardSection;