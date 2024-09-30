import { Card } from "./cardTypes";

export interface Deck {
    id: string;
    name: string;
    creator: string;
    desc: string;
    cards: Card[];
}