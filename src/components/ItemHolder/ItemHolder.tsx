import { Tittle } from '../../theme/styledcomponents';
import { FaPlusCircle } from 'react-icons/fa';
import './ItemHolder.css';

type ItemHolderProps = {
    text: string;
    action?: () => void;
}

const ItemHolder = ({text, action}: ItemHolderProps) => {
    return (
        <div className="item-holder">
            {action && <FaPlusCircle onClick={action} color='gray' size={'35%'}/>}
            <Tittle variant='white'>{text}</Tittle>
        </div>
    )
}

export default ItemHolder