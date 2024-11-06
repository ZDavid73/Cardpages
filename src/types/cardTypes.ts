export interface Card {
    id: string;
    name: string;
    images: {
        small: string;
        large: string;
    };
    flavorText: string;
}

export interface ApiResponseCard {
    id: string;
    name: string;
    images: {
        small: string;
        large: string;
    }
    flavorText: string;
}

export interface SellingCard {
    name: string;
    cardId: string;
    sellerId: string;
    isSold: boolean;
    buyerId?: string | null;
    price: number;
    flavorText: string;
    description: string;
  }