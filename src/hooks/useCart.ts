import { useSelector } from "react-redux"
import { SellingCard } from "../types/cardTypes"
import { Deck } from "../types/deckTypes"
import { AppState } from "../types/stateType"
import { isCard } from "../utils/typeGuards"
import { addCardToCart, addDeckToCart } from "../services/databaseService"

const useCart = () => {
    const userId = useSelector((state: AppState) => state.user.id)
    const cart = useSelector((state: AppState) => state.cart)

    const addToCart = ( product: Deck | SellingCard) => {
        if (isCard(product)) {
            addCardToCart(cart.cards, userId, product)
        } else {
            addDeckToCart(cart.decks, userId, product)
        }
    }

    return { addToCart }
}

export default useCart