import { Suspense, lazy } from "react";

const Carousel = lazy(() => import("../../components/Carousel/Carousel"));
const CardSection = lazy(() => import("../../components/CardSection/CardSection"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Carousel />
      <CardSection
        text="Buy, sell, and trade cards and decks to build your ultimate collection."
        imgSrc="https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Cartas.webp"
        altText="Imagen de cartas"
      />
      <CardSection
        text="Discover card details and uncover the stories behind each one."
        imgSrc="https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Detalles.webp"
        altText="Imagen de detalles"
        reverse
      />
      <CardSection
        text="Join the action and test your skills in competitive deck tournaments!"
        imgSrc="https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Torneos.webp"
        altText="Imagen de torneos"
      />
      <Footer />
    </Suspense>
  );
}

export default HomePage;