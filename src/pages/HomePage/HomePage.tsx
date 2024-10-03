import { Carousel, Footer } from "../../components/imports";
import {CardSection} from "../../components/imports";

function HomePage() {
  return (
    <>
      <Carousel />
      <CardSection
        text="Buy, sell, and trade cards and decks to build your ultimate collection."
        imgSrc="https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Cartas.webp"
        altText="img-cards"
      />
      <CardSection
        text="Discover card details and uncover the stories behind each one."
        imgSrc="https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Detalles.webp"
        altText="img-details"
        reverse
      />

      <CardSection
        text="Join the action and test your skills in competitive deck tournaments!"
        imgSrc="https://zyemimihfcilkfzgwsxv.supabase.co/storage/v1/object/public/Homepage%20Images/Torneos.webp"
        altText="img-tournament"
      />
      <Footer/>
    </>
  );
}

export default HomePage;