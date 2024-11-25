import { useSelector } from 'react-redux';
import { Tittle } from '../../theme/styledcomponents';
import './CartPage.css';
import { AppState } from '../../types/stateType';
import useCart from '../../hooks/useCart';
import CartListItem from '../../components/CartItem/CartItem';

const CartPage = () => {
    const cart = useSelector((state: AppState) => state.cart);
    const { organiceCart } = useCart();
    const organizedCart = organiceCart(cart);

    return (
        <section className="cart-page">
            <Tittle variant="white">Shopping Cart</Tittle>
            <section className='cart-list'>
                { organizedCart.length === 0 ?
                    <Tittle variant='purple'>Your cart is empty</Tittle> :
                organizedCart.map((item) =>
                <CartListItem key={item.id} item={item}/>)}
            </section>
        </section>
    );
}

export default CartPage;