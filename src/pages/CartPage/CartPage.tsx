import { useSelector } from 'react-redux';
import { Tittle } from '../../theme/styledcomponents';
import './CartPage.css';
import { AppState } from '../../types/stateType';
import useCart from '../../hooks/useCart';
import CartListItem from '../../components/CartItem/CartItem';

const CartPage = () => {
    const cart = useSelector((state: AppState) => state.cart);
    console.log(cart);
    const { organiceCart } = useCart();
    const organizedCart = organiceCart(cart);
    console.log(organizedCart);

    return (
        <section className="cart-page">
            <Tittle variant="white">Shopping Cart</Tittle>
            <section>
                { organizedCart.map((item) =>
                <CartListItem key={item.id} item={item}/>)}
            </section>
        </section>
    );
}

export default CartPage;