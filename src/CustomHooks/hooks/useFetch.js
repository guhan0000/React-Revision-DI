import { useEffect, useState } from "react";

export default function useFetch(api) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        let response = await fetch(api);
        if (response.ok) {
          setLoading(false);
          let data = await response.json();
          setData(data);
        } else {
          throw new Error("Request Failed..");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [api]);
  return { loading, data, error };
}
