export interface Slide {
  imgSrc: string;
  text: string;
  smallImgSrc: string;
  variant: 'purpleForm' | 'grayForm' | 'greenForm' | 'whiteForm' | 'grayhomeForm' | 'orangeForm';
}

export const slidesData: Slide[] = [
  {
    imgSrc: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Fondo%201.webp',
    text: 'Buy, sell, and build the card collection of your dreams.',
    smallImgSrc: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Tarjeta%201.webp',
    variant: 'greenForm'
  },
  {
    imgSrc: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Fondo%202.webp',
    text: 'Explore every detail and fully maximize your deck strategy.',
    smallImgSrc: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Tarjeta%202.webp',
    variant: 'purpleForm'
  },
  {
    imgSrc: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Fondo%203.webp',
    text: 'Explore the details of every card and deck to master your strategy.',
    smallImgSrc: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Tarjeta%203.webp',
    variant: 'orangeForm'
  },
  {
    imgSrc: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Fondo%204.webp',
    text: 'Compete in thrilling deck tournaments and prove your mastery!',
    smallImgSrc: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Tarjeta%204.webp',
    variant: 'whiteForm'
  },
];