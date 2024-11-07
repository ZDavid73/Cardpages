import { Button, Text } from '../../theme/styledcomponents';
import useModal from '../../hooks/useModal';
import './AddCard.css';

const SellCardButton = () => {
  const { handleOpen } = useModal();

  const openSellCardModal = () => {
    handleOpen('createCard'); 
  };

  return (
    <div className="sell-card-button">
      <Button variant="white" onClick={openSellCardModal}>
        +
      </Button>
    <Text variant="white">Sell Card</Text>
    </div>
  );
};

export default SellCardButton;
