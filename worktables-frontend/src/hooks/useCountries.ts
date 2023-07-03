// worktables-frontend/src/hooks/useCountries.ts
import { useState, useEffect } from 'react';
import mondaySdk from 'monday-sdk-js';

const monday = mondaySdk();

interface Country {
  id: number;
  name: string;
  population?: number;
  area?: number;
  capital?: string;
}

interface MondayApiResponse {
  data: {
    boards: {
      items: Country[]
    }[]
  }
}

export default function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `query { boards(ids:[4505502032]) { items { name column_values { id text } } } }`
      const response = (await monday.api(query)) as MondayApiResponse
      const items = response.data.boards[0].items
      setCountries(items);
    }

    fetchData();
  }, []);

  return countries;
}
