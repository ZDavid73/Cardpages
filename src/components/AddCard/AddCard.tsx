import { Button } from '../../theme/styledcomponents';
import useModal from '../../hooks/useModal';
import './SellCardButton.css';

const SellCardButton = () => {
  const { handleOpen } = useModal();

  const openSellCardModal = () => {
    handleOpen('createCard'); 
  };

  return (
    <div className="sell-card-button">
      <Button variant="purple" onClick={openSellCardModal}>
        Sell a Card
      </Button>
    </div>
  );
};

export default SellCardButton;
