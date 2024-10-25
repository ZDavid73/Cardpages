import SearchBar from './SearchBar'; 
import { Card } from '../../types/cardTypes'; 
import './SearchSell.css';

const SearchSell = () => {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const handleCardClick = (card: Card) => {
    if (!selectedCards.find((selectedCard) => selectedCard.id === card.id)) {
      setSelectedCards((prevCards) => [...prevCards, card]);
    }
  };

  return (
    <div className="search-sell-container">
      <h1>Sell Card</h1>

      <SearchBar />

      <div className="results" onClick={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.tagName === 'IMG' && target.alt) {
          const cardId = target.alt;
          const clickedCard = {
            id: cardId,  
            name: target.alt,
            images: { small: target.src }  
          } as Card;
          handleCardClick(clickedCard);
        }
      }} />

      <div className="card-grid">
        {selectedCards.map((card) => (
          <div key={card.id} className="card-item">
            <img
              src={card.images.small}
              alt={card.name}
              className="card-image"
            />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSell;
