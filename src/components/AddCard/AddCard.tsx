import { Text } from '../../theme/styledcomponents';
import useModal from '../../hooks/useModal';
import './AddCard.css';

const SellCardButton = () => {
  const { handleOpen } = useModal();

  const openSellCardModal = () => {
    handleOpen('createCard'); 
  };

  return (
    <div className="sell-card-button">
      <button onClick={openSellCardModal}>
        +
      </button>
    <Text variant="white">Sell Card</Text>
    </div>
  );
};

export default SellCardButton;
