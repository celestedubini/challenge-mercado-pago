import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';

export type Data = {
  id: string;
  type: 'card' | 'qr' | 'cash';
  title: string;
  description: string;
  amount: string;
};

type HookResultDetail = {
  data: Data | null;
  loading: boolean;
  error: Error | null;
};

export function useDetailInfo(): HookResultDetail {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data>(`/api/data/${id}`);
        const result = response.data;

        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error };
}
