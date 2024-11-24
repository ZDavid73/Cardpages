import { Button, Container, StyledHr, Text, Tittle } from '../../theme/styledcomponents'
import { CartItem } from '../../types/cartTypes'
import { FaTrash } from 'react-icons/fa'
import './CartItem.css'

type CartItemProps = {
    item: CartItem
}

const CartListItem = ({item}: CartItemProps) => {
    return (
        <Container variant='small' className="cart-item">
            <FaTrash color='#2D2D2D' size={30} className='cart-item-trash'/>
            <img src={item.image} alt={`image of the ${item.name} ${item.type}`} />
            <div className='cart-item-info'>
                <Tittle variant='white'>{item.name}</Tittle>
                <Tittle variant='white'>$ {item.price} USD</Tittle>
                <Text variant='purple'>seller: @user</Text>
                <StyledHr/>
                <Text variant='white'>{item.desc}</Text>
            </div>
            <Button variant='purple'>Buy</Button>
        </Container>
    )
}

export default CartListItem