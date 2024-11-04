import SearchSell from '../../components/SearchSell/SearchSell';
import CardForm from '../../components/CardInfoSell/CardInfoSell';
import { Card } from '../../types/cardTypes';

const SellPage = () => {
  return (
    <div className="sell-page">

      <SearchSell />

      <CardForm />

      <div className="other-content">
        <p>tutututututut</p>
      </div>
    </div>
  );
};

export default SellPage;

