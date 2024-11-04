import SearchSell from '../../components/SearchSell/SearchSell';
import CardForm from '../../components/CardInfoSell/CardInfoSell';
import { Card } from '../../types/cardTypes';

const SellPage = () => {
  
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <div className="sell-page">
      <h1>Sell Card</h1>
      <p>Usa el buscador para seleccionar la carta que deseas vender.</p>
      <SearchSell selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      <CardForm selectedCard={selectedCard} />
    </div>
  );
};

export default SellPage;

