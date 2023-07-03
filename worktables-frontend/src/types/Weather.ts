// worktables-frontend/src/types/Weather.ts

export type WeatherDetailProps = {
    country: {
        location: {
            name: string;
            region: string;
            country: string;
            localtime: string;
        };
        current: {
            temp_c: number;
            condition: {
                text: string;
                icon: string;
            };
            wind_kph: number;
            humidity: number;
        };
    };
};