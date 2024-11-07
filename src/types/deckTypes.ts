import { ItemType } from "../hooks/useDragDrop";

export interface Deck {
    id: string;
    name: string;
    creator: string;
    desc: string;
    cards: ItemType[];
    price: number;
    cover: string;
}