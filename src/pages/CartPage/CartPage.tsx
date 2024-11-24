import { useSelector } from 'react-redux';
import { Tittle } from '../../theme/styledcomponents';
import './CartPage.css';
import { AppState } from '../../types/stateType';

const CartPage = () => {
    const cart = useSelector((state: AppState) => state.cart);

    return (
        <section className="cart-page">
            <Tittle variant="white">Shopping Cart</Tittle>
        </section>
    );
}

export default CartPage;