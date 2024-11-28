import { Tittle } from '../../theme/styledcomponents';
import { FiPlus } from "react-icons/fi";
import './ItemHolder.css';

type ItemHolderProps = {
    text: string;
    action?: () => void;
}

const ItemHolder = ({text, action}: ItemHolderProps) => {
    return (
        <div className="item-holder">
            {action && <FiPlus onClick={action} className='item-holder-icon'/>}
            <Tittle variant='white'>{text}</Tittle>
        </div>
    )
}

export default ItemHolder