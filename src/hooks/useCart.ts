import { useSelector } from "react-redux"
import { SellingCard } from "../types/cardTypes"
import { Deck } from "../types/deckTypes"
import { AppState } from "../types/stateType"
import { isCard } from "../utils/typeGuards"
import { addCardToCart, addDeckToCart } from "../services/databaseService"
import { CartState } from "../features/cartSlice"
import { CartItem } from "../types/cartTypes"

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

    const organiceCart = (cart: CartState) => {
        const organizedCart: CartItem[] = []

        cart.cards.forEach(c => {
            const card = {
                id: c.id,
                name: c.name,
                desc: c.description,
                price: c.price,
                image: c.images.small,
                sellerId: c.sellerId,
                type: 'card'
            }
            organizedCart.push(card)
        })

        cart.decks?.forEach(d => {
            const deck = {
                id: d.id,
                name: d.name,
                desc: d.desc,
                price: d.price,
                image: d.cover,
                sellerId: d.creator,
                type: 'deck'
            }
            organizedCart.push(deck)
        })

        return organizedCart
    }

    return { addToCart, organiceCart }
}

export default useCart