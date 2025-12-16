import { useEffect, useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
}

interface useFetchParams {
  url: string;
  options?: RequestInit;
}

export default function useFetch<T>({
  url,
  options,
}: useFetchParams): UseFetchResult<T> {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  async function fetchData(): Promise<void> {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error("Error while data fetching", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading };
}
