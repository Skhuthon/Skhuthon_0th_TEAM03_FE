export interface ThemeProps {
    id?: number;
    title: string;
    difficulty: string;
    genre: string;
    store: StoreProps;
}

export interface StoreProps {
    id?: number;
    name: string;
    reservationSite: string;
}
