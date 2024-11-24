import { SellingCard } from "./cardTypes";
import { Deck } from "./deckTypes";

export interface User {
    id: string;
    username: string;
    picture: string;
    level: number;
    cart: {
        cards: SellingCard[];
        decks: Deck[];
    };
    header: string;
}
