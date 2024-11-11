import './HomePage.css'
import { useEffect, Suspense, lazy } from "react";
import AOS from "aos"; // Importa AOS
import "aos/dist/aos.css";

const Carousel = lazy(() => import("../../components/Carousel/Carousel"));
const CardSection = lazy(() => import("../../components/CardSection/CardSection"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Carousel />
      <CardSection
        text="Buy, sell, and trade cards and decks to build your ultimate collection."
        imgSrc="https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Card%201.svg"
        altText="Imagen de cartas"
        variantText="purpleForm"
        imgAos="fade-up"
        textAos="fade-up"
      />
      <CardSection
        text="Discover card details and uncover the stories behind each one."
        imgSrc="https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Card%202.svg"
        altText="Imagen de detalles"
        variantText="whiteForm"
        reverse
        imgAos="fade-up"
        textAos="fade-up"
      />
      <CardSection
        text="Join the action and test your skills in competitive deck tournaments!"
        imgSrc="https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Card%203.svg"
        altText="Imagen de torneos"
        variantText="greenForm"
        imgAos="fade-up"
        textAos="fade-up"
      />
      <Footer />
    </Suspense>
  );
}

export default HomePage;