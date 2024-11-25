const images = [
    {
      image: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Fondo%201.webp'
    },
    {
      image: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Fondo%202.webp'
    },
    {
      image: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Fondo%203.webp'
    },
    {
      image: 'https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Carousel%20Images/Fondo%204.webp'
    }
  ];
  

export const getRandomImg = () => {
    return images[Math.floor(Math.random() * images.length)];
}