import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

try {
  const response = await fetch(url);
  if (!response.ok) {
    setIsError(true);
    setIsLoading(false);
    return;
  }
  const result = await response.json();
  setData(result);
} catch (error) {
  setIsError(true);
} finally {
  setIsLoading(false);
}
