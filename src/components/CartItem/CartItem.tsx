import { Text, Tittle } from '../../theme/styledcomponents'
import { CartItem } from '../../types/cartTypes'
import { FaTrash } from 'react-icons/fa'
import './CartItem.css'

type CartItemProps = {
    item: CartItem
}

const CartListItem = ({item}: CartItemProps) => {
    return (
        <div className="cart-item">
            <FaTrash/>
            <img src={item.image} alt={`image of the ${item.name} ${item.type}`} />
            <div className='cart-item-info'>
                <Tittle variant='white'>{item.name}</Tittle>
                <Tittle variant='purple'>$ {item.price} USD</Tittle>
                <Text variant='white'>seller: @user</Text>
            </div>
        </div>
    )
}

export default CartListItem