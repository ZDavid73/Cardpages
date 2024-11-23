import { useSelector } from "react-redux"
import { SellingCard } from "../types/cardTypes"
import { Deck } from "../types/deckTypes"
import { AppState } from "../types/stateType"
import { isCard } from "../utils/typeGuards"
import { addCardToCart, addDeckToCart } from "../services/databaseService"

const useCart = () => {
    const userId = useSelector((state: AppState) => state.user.id)

    const addToCart = ( product: Deck | SellingCard) => {
        if (isCard(product)) {
            addCardToCart(userId, product)
        } else {
            addDeckToCart(userId, product)
        }
    }

    return { addToCart }
}

export default useCart