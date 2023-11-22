import { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';
import { Data } from './useDetailInfo';

type HookResultList = {
  data: Array<Data>;
  loading: boolean;
  error: Error | null;
};

export function useListInfo(): HookResultList {
  const [data, setData] = useState<Array<Data>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Array<Data>>('/api/data/');
        const result = response.data;

        const updatedResult = result.map((item) => {
          const updatedItem = { ...item };

          if (updatedItem.amount) {
            updatedItem.amount = updatedItem.amount.replace(',', '.');
          }

          return updatedItem;
        });

        setData(updatedResult);

        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
