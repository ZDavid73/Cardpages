import  { useState } from 'react';
import { searchCards } from '../../services/ApiService';

interface Card {
  id: string;
  name: string;
  imageUrl: string; 
}

const SearchBar = () => {
  const [game, setGame] = useState('pokemon'); 
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Card[]>([]); 
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const cards = await searchCards(game, query);
      setResults(cards);
      setError(null);
    } catch (error) {
      console.error('Error fetching cards:', error);
      setError('No cards found');
    }
  };

  return (
    <div>
      <h2>Search Cards</h2>
      <select value={game} onChange={(e) => setGame(e.target.value)}>
        <option value="pokemon">Pokémon</option>
        <option value="one-piece">One Piece</option>
        <option value="dragon-ball-fusion">Dragon Ball Fusion</option>
        <option value="digimon">Digimon</option>
        <option value="magic-the-gathering">Magic The Gathering</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter card name"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {results.map((card) => (
          <li key={card.id} style={{ marginBottom: '20px' }}>
            <img src={card.imageUrl} alt={card.name} style={{ width: '100px', height: 'auto' }} />
            <p>{card.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
