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