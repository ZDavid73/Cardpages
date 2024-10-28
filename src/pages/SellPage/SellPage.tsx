import SearchSell from '../../components/SearchSell/SearchSell'; 

const SellPage = () => {
  return (
    <div className="sell-page">
      <h1>Sell Card</h1>
      <p>Usa el buscador para seleccionar las cartas que deseas vender.</p>

      <SearchSell />

      <div className="other-content">
        <p>tutututututut</p>
      </div>
    </div>
  );
};

export default SellPage;
