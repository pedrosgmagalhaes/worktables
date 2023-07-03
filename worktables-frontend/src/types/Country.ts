// worktables-frontend/src/types/Country.ts

export interface CountryData {
    location: any;
    id: number;
    name: string;
}

export interface CountryListProps {
    countries: CountryData[];
    onSelect: (country: CountryData) => void;
    searchAttempted: boolean;
}

export interface MondayApiResponse {
    data: {
        boards: {
            items: CountryData[];
        }[];
    };
}

export interface CountryModalProps {
    country: CountryData;
    onClose: () => void;
    weather: any;
}
