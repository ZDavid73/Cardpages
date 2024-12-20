import { useSelector } from 'react-redux';
import { SellingCard } from '../../types/cardTypes';
import { AppState } from '../../types/stateType';
import './CardThumb.css';
import useModal from '../../hooks/useModal';
import { FiMoreHorizontal, FiEdit2 } from "react-icons/fi";

type SellingCardThumbProps = {
    card: SellingCard;
}

const SellingCardThumb = ({ card }: SellingCardThumbProps) => {
    const userId = useSelector((state: AppState) => state.user.id);
    const { handleOpen } = useModal(); 

    return (
        <section 
            className='selling-card-thumbnail' 
            style={{ 
                backgroundImage: `url(${card.images.large})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <div className='card-button'>
                {
                    userId === card.sellerId ? 
                    <div 
                        className='card-button-icon'
                        onClick={() => handleOpen('buyCard', card)}
                    >   <FiEdit2 className='icon-buttonCard'/>
                    </div>
                    :
                    <div
                        className='card-button-icon'
                        onClick={() => handleOpen('buyCard', card)}>
                        <FiMoreHorizontal className='icon-buttonCard'/>
                    </div>
                }
            </div>
            <div className='card-thumb-info'>
                <p id='card-thum-info-title'> {card.name}</p>
                <p className='card-thum-info-text'>${card.price}</p>
                <p className='card-flavortext'>{card.flavorText}</p>
            </div>
        </section>
    );
}

export default SellingCardThumb;
