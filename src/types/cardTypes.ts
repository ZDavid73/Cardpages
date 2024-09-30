export interface Card {
    id: string;
    name: string;
    images: {
        small: string;
        large: string;
    };
}

export interface ApiResponseCard {
    id: string;
    name: string;
    images: {
        small: string;
        large: string;
    }
}

export interface SellingCard {
    cardId: string;
    sellerId: string;
    isSold: boolean;
    buyerId?: string | null;
    price: number;
  }