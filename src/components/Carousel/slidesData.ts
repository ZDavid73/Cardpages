interface Slide {
    imgSrc: string;
    text: string;
    buttonAction: () => void;
    smallImgSrc: string;
}
  
export const slidesData: Slide[] = [
    {
      imgSrc: 'https://tcg.pokemon.com/assets/img/home/featured-switcher/lapras-stellar-large-up-2x.jpg',
      text: 'Slide 1 Text',
      buttonAction: () => console.log('Button 1 clicked'),
      smallImgSrc: 'https://dz3we2x72f7ol.cloudfront.net/expansions/stellar-crown/es-es/SV07_ES_32-2x.png',
    },
    {
      imgSrc: 'https://tcg.pokemon.com/assets/img/home/featured-switcher/terapagos-stellar-large-up-2x.jpg',
      text: 'Slide 2 Text',
      buttonAction: () => console.log('Button 2 clicked'),
      smallImgSrc: 'https://dz3we2x72f7ol.cloudfront.net/expansions/stellar-crown/es-es/SV07_ES_128-2x.png',
    },
    {
      imgSrc: 'https://tcg.pokemon.com/assets/img/home/featured-switcher/cinderace-stellar-large-up-2x.jpg',
      text: 'Slide 3 Text',
      buttonAction: () => console.log('Button 3 clicked'),
      smallImgSrc: 'https://dz3we2x72f7ol.cloudfront.net/expansions/stellar-crown/es-es/SV07_ES_28-2x.png',
    },
    {
      imgSrc: 'https://tcg.pokemon.com/assets/img/home/featured-switcher/galvantula-stellar-large-up-2x.jpg',
      text: 'Slide 4 Text',
      buttonAction: () => console.log('Button 4 clicked'),
      smallImgSrc: 'https://dz3we2x72f7ol.cloudfront.net/expansions/stellar-crown/es-es/SV07_ES_51-2x.png',
    },
];  